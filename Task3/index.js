const fetch = require('node-fetch');
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch file');
        }
        const data = await response.json();
        return {
            token: data.token,
            lisnumber: data.data,
            cases: data.query
        };
       
    } catch (error) {
        console.error("Error fetching or processing file:", error.message);
        return null;
    }
}

async function result() {
    const { token, lisnumber, cases } = await fetchData("https://share.shub.edu.vn/api/intern-test/input");
    if (!cases || !Array.isArray(cases)) {
        console.error("Invalid cases data");
        return;
    }

    let sumArray1 = [0,lisnumber[1]];
    let sumArray2 = [lisnumber[0],lisnumber[0]];
    for (let i = 2; i < lisnumber.length; i++) {
        if(i % 2 === 0) {
            sumArray2[i] = sumArray2[i - 1] + lisnumber[i];
            sumArray1[i] = sumArray1[i - 1];
        }else {
            sumArray1[i] = sumArray1[i - 1] + lisnumber[i];
            sumArray2[i] = sumArray2[i - 1];
        }
    }
    // console.log(sumArray2)
    // console.log(sumArray1)
    let result = [];
    cases.forEach((item, index) => {
        if (item && item.range) {
            const [start, end] = item.range;
            if (item.type === '2') {
                result.push(sumArray2[end] - (start > 2 ? sumArray2[start - 1] : 0));
            } else if (item.type === '1') {
                const sum1 = sumArray2[end] - (start > 0 ? sumArray2[start - 1] : 0)
                const sum2 = sumArray1[end] - (start > 2 ? sumArray1[start - 1] : 0)
                result.push(sum1 + sum2);
            }
        }
    });
    return {token: token,arrayresult:result};
}
async function postData(url, data, token) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch file');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching or processing file:", error.message);
        return null;
    }
}

async function main (){
    const {token,arrayresult} = await result();
    console.log(arrayresult)
    const url = "https://share.shub.edu.vn/api/intern-test/output"
    const response = await postData(url, arrayresult,token)
    console.log(response);
    
}
main()