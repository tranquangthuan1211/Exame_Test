import requests
import pandas as pd

url = "https://go.microsoft.com/fwlink/?LinkID=521962"

res = requests.get(url)

if res.status_code / 100 == 2:
    df = pd.read_excel(res.content)
    filtered_df = df[df[" Sales"] > 50000]
    filtered_df.to_excel("fileUpdate.xlsx", index=False)
    print("filtered_sales.xlsx được tạo thành công.")
else:
    print("error request")
