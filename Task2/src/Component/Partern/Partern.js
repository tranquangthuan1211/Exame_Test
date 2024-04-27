import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "./styles.css"

export default function Partern() {
    const partenr = [
        {
            school:'HPT Đông Anh - Hà Nội',
            name:'Phạm Ngọc Huệ',
            description:'Sử dụng SHub Classroom cho phép GV kiểm tra đánh giá học sinh rất thuận lợi. Công cụ giúp các Thầy cô linh hoạt trong đánh giá thường xuyên và cả khi cần kiểm tra định kì mà kết hợp dạy học trực tuyến với tất cả các hình thức kiểm tra trắc nghiệm, tự luận và thu bài tập về nhà, vở ghi bài.... Công cụ tạo cảm hứng cho giáo viên sáng tạo trong việc sử dụng các phương pháp dạy học . Rất cảm ơn SHub Classroom.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F6.jpg&w=128&q=75'
        },
        {
            school:'HPT Đông Anh - Hà Nội',
            name:'Phạm Ngọc Huệ',
            description:'Sử dụng SHub Classroom cho phép GV kiểm tra đánh giá học sinh rất thuận lợi. Công cụ giúp các Thầy cô linh hoạt trong đánh giá thường xuyên và cả khi cần kiểm tra định kì mà kết hợp dạy học trực tuyến với tất cả các hình thức kiểm tra trắc nghiệm, tự luận và thu bài tập về nhà, vở ghi bài.... Công cụ tạo cảm hứng cho giáo viên sáng tạo trong việc sử dụng các phương pháp dạy học . Rất cảm ơn SHub Classroom.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F6.jpg&w=128&q=75'
        },
        {
            school:'HPT Đông Anh - Hà Nội',
            name:'Phạm Ngọc Huệ',
            description:'Sử dụng SHub Classroom cho phép GV kiểm tra đánh giá học sinh rất thuận lợi. Công cụ giúp các Thầy cô linh hoạt trong đánh giá thường xuyên và cả khi cần kiểm tra định kì mà kết hợp dạy học trực tuyến với tất cả các hình thức kiểm tra trắc nghiệm, tự luận và thu bài tập về nhà, vở ghi bài.... Công cụ tạo cảm hứng cho giáo viên sáng tạo trong việc sử dụng các phương pháp dạy học . Rất cảm ơn SHub Classroom.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F6.jpg&w=128&q=75'
        },
        {
            school:'HPT Đông Anh - Hà Nội',
            name:'Phạm Ngọc Huệ',
            description:'Sử dụng SHub Classroom cho phép GV kiểm tra đánh giá học sinh rất thuận lợi. Công cụ giúp các Thầy cô linh hoạt trong đánh giá thường xuyên và cả khi cần kiểm tra định kì mà kết hợp dạy học trực tuyến với tất cả các hình thức kiểm tra trắc nghiệm, tự luận và thu bài tập về nhà, vở ghi bài.... Công cụ tạo cảm hứng cho giáo viên sáng tạo trong việc sử dụng các phương pháp dạy học . Rất cảm ơn SHub Classroom.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F6.jpg&w=128&q=75'
        },
        {
            school:'THPT Lục Ngạn số 1 - Bắc Giang',
            name:"Thầy Vũ Ngọc Dũng",
            description:'SHub Classroom chính là sự lựa chọn tuyệt vời khi chúng ta đang tìm kiếm các giải pháp công nghệ để ứng dụng chuyển đổi số trong giáo dục hiện nay. Ứng dụng SHub Classroom có giao diện trực quan, dễ dùng và có đầy đủ các tính năng phục vụ cho dạy và học thời đại 4.0. Ngoài ra ứng dụng luôn được cập nhật và đổi mới từng ngày theo nhu cầu của các thầy cô giáo và học sinh.',
            image:"https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F7.jpg&w=128&q=75"
        },
        {
            school:'Ms Lan English',
            name:"Nguyễn Thị Xuân Lan",
            description:'Sử dụng nhiều công cụ trong việc dạy học, nhưng Shub Classroom là công cụ mình yêu thích nhất. Việc thiết kế bài tập và quản lí, đánh giá kết quả của học sinh chưa bao giờ đơn giản và hiệu quả đến vậy. Đội ngũ luôn lắng nghe góp ý để đem lại trải nghiệm tốt nhất cho người dùng. Chúc SHub ngày càng phát triển và nhiều giáo viên sẽ biết đến SHub Classroom hơn.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FSecond%2F8.jpg&w=128&q=75'
        },
        {
            school:'THPT Bùi Thị Xuân, Quận 1, TP.HCM',
            name:'Thầy Nguyễn Hồ Thế Vinh',
            description:'Với SHub, giáo viên và học sinh đều có được sự chủ động trong việc dạy và học. Các em đã biết tự lên kế hoạch học bài - làm bài, có thể xem được lời giải và video hướng dẫn. Giáo viên có thể theo dõi tiến độ làm bài tập của các em, dựa vào thống kê để rút ra các kiến thức mà nhiều em còn chưa vững để điều chỉnh bài tập cho phù hợp. Nhờ vậy, kết quả học tập của các em được cải thiện rõ rệt.',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FFirst%2F4.jpg&w=128&q=75'
        },
        {
            school:'Lạng Sơn',
            name:'Thầy Hoàng Văn Quảng',
            description:'SHub đã giúp cho việc dạy học của giáo viên được thuận lợi và hiệu quả hơn. Mình hài lòng về các tính năng hiện có trên SHub',
            image:'https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FFirst%2F1.jpg&w=128&q=75'
        }
    ]
    const [current, setCurrent] = useState(partenr.length - 3)
    const handleNextSlide = () => {
        if(current < partenr.length - 1) {
            setCurrent(current + 1)
        }
    }
    const handlePrevious = () => {
        if(current > 0 ){
            setCurrent(current - 1);
        }
    }
  return (
    <div style={{margin:'100px 0'}}>
        <div style={{margin:"30px"}}>
            <h1 style={{fontSize:'2rem', fontWeight:'700'}}>Đồng hành và tin cậy</h1>
        </div>
        <div style={{width:"960px",margin:'0 auto', overflow:'hidden'}}>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <FaArrowLeft onClick={handlePrevious}/>
                    <FaArrowRight onClick= {handleNextSlide}/>
                </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {partenr.map((item,index) => (
                    <div key={index} style={{
                                width:'160px', 
                                height:"80px", 
                                border:'1px solid #ccc',
                                padding:"16px",
                                marginLeft:'8px',
                                marginRight:"8px",
                                borderRadius:'10px',
                                transform: `translateX(-${current * 80}px)`,
                                transition: 'transform 0.5s ease'
                                }}
                        className={current === index ? "current" : ""}
                    >
                        <div >
                            <div className='line-vertical'></div>
                            <div style={{width:'100%', height:'40px'}}>
                                <img style={{width:"30px", height:'30px', float:'right',borderRadius:"100%"}} src={item.image} alt='anh'/>
                            </div>
                            <div className='line-vertical1'></div>
                            <div className='line-vertical2'></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-around', position:'relative'}}>
            <img src='https://shub.edu.vn/images/landing/ver3/monument-section/left-decoration.svg' alt='anh'/>
            <div style=
                    {{backgroundColor:"#fff",
                      width:"600px",
                      height:'240px',
                      border:"1px solid #ccc",
                      padding:"30px 30px",
                      borderRadius:"10px",
                      position:'absolute',
                      top:"80px"
                      
                    
                    }}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <p>{partenr[current].school}</p>
                        <h1>{partenr[current].name}</h1>
                    </div>
                    <img style={{borderRadius:"100%"}} src={partenr[current].image} alt='anhe'/>
                </div>
                <p>{partenr[current].description}</p>
            </div>
            <img src='https://shub.edu.vn/images/landing/ver3/monument-section/right-decoration.svg' alt='anh'/>
        </div>
    </div>
  )
}
