import React from 'react'
import logo from '../../log.svg'
import { IoIosCloudUpload,IoIosLink } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";
import { GoFileDirectory } from "react-icons/go"
import { AiFillWindows } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";
import { SiMacos } from "react-icons/si";
import image  from '../../untitled.jpg'
import { FaSortDown } from "react-icons/fa";
import "./style.css"
import SliderCompnent from '../../Component/Slider/sliderComponent';
import Partern from '../../Component/Partern/Partern';
export default function Home() {
  const listViddeo = [
    {
      title:"Tạo và quản lý bài tập, kiểm tra bằng AI",
      description:"Không cần soạn thảo các công thức phức tạp, mọi thứ được nhận diện hoàn toàn tự động với SHub Classroom. Bên cạnh đó, bạn còn được cung cấp đa dạng các tùy chỉnh chuyên sâu theo từng nhu cầu sử dụng.",
      url:"https://www.youtube.com/embed/w3iWc_6qSuw?fbclid=IwZXh0bgNhZW0CMTAAAR2IZMeyUHz5Sz9kB-_BLAkj2IOE9HnopqTmcp83_qkRL6sh8qevV7mLinY_aem_AcWiEYguZc9UAepBQ2FPnrhAxTo_ldGkqwbhflgNDSG4eO1HZbaUxsP5oVyPfzWfVPWYNdaCBOyIID627MYZNRiE"
  
    },
    {
      title:"Lớp học với độ tùy biến cao",
      description:'Lớp học trên SHub Classroom có thể dùng cho nhiều mục đích khác nhau như: Lớp học chính khóa, lớp học thêm, lớp ngoại ngữ, kỹ năng chuyên môn, nghiệp vụ, lớp học trực tuyến, livestream …',
      url:"https://www.youtube.com/embed/hDycyHnkOAc"
    },
    {
      title:'Dễ dàng cung cấp tài nguyên cho lớp học',
      description:'Không còn gửi link tài liệu, không còn gửi mail hay gửi file vào nhóm chat, SHub Classroom giúp bạn cung cấp đầy đủ tài liệu và bài giảng cho học sinh của mình. Bên cạnh đó, lượt xem và sự tương tác của học sinh cũng được thống kê chi tiết trên từng tài nguyên cụ thể.',
      url:'https://www.youtube.com/embed/4sXMsteYA5k'
    },
    {
      title:'Lưu trữ học liệu không giới hạn',
      description:"Tài nguyên của bạn được lưu trữ và sắp xếp một cách tiện lợi, bạn có thể chia sẻ cho học sinh và sử dụng lại các tài nguyên này cho những lớp học kế tiếp.",
      url:'https://www.youtube.com/embed/f3bPbqlCR-w'
    }
  ]
  
  const teachingVideo = [
    {
      title:'Bảng điểm chi tiết quá trình học tập',
      description:'SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình.',
      url:"https://www.youtube.com/embed/S27Au2klSog"
    },
    {
      title:'Quản lý lịch dạy thông minh',
      description:'Các hoạt động dạy học trực tiếp và trực tuyến đều có thể thực hiện dễ dàng trên SHub Classroom. Bạn có thể nhanh chóng tạo và truy cập lịch dạy của mình.',
      url:"https://www.youtube.com/embed/NaxLk7n04Us"
    },
    {
      title:'Tổ chức lớp học thành từng nhóm nhỏ',
      description:'SHub Classroom cho phép chia danh sách học sinh thành nhiều nhóm và chỉ định tài nguyên cho từng nhóm cụ thể. Bạn có thể tùy chỉnh thành viên trong nhóm, chỉnh sửa thông tin, thêm bài tập và tài liệu cho từng nhóm.',
      url:"https://www.youtube.com/embed/S27Au2klSog"
    },
    {
      title:"Tổ chức lớp học thành từng nhóm nhỏ",
      description:"SHub Classroom cho phép chia danh sách học sinh thành nhiều nhóm và chỉ định tài nguyên cho từng nhóm cụ thể. Bạn có thể tùy chỉnh thành viên trong nhóm, chỉnh sửa thông tin, thêm bài tập và tài liệu cho từng nhóm.",
      url:'https://www.youtube.com/embed/PUGCS5pT80Q'
    },
    {
      title:'Tổ chức lớp học thành từng nhóm nhỏ',
      description:'Kết nối lớp học thông qua bảng tin',
      url:'https://www.youtube.com/embed/dwaFdzSZwzs'
    },
    {
      title:'Liệt kê nhiệm vụ học tập của học sinh',
      description:'SHub Classroom liệt kê chi tiết và hỗ trợ thực hiện các nhiệm vụ học tập hằng ngày cũng như thông báo từ giáo viên, giúp người học không bỏ lỡ kiến thức cũng như duy trì sự gắn kết với lớp học của mình.',
      url:"https://www.youtube.com/embed/aLXPRu8dMH0"
    },
    {
      title:'Phân quyền vai trò quản lý lớp',
      description:'SHub Classroom hỗ trợ nhiều vai trò trong một lớp học. Người dùng có thể thêm trợ giảng hay giáo viên đồng hành để thực hiện các thao tác trong lớp học của mình.',
      url:'https://www.youtube.com/embed/xrfFhn28bBQ'
    }
  ]
  return (
    <div style={{position:'relative'}}>
        {/* sizeBar */}
        <div className='header_home' >
            <div>
                <a className='focus' style={{margin: "0 6px"}} href='#intro'>Giới thiệu</a>
                <a style={{margin: "0 6px"}} href='#fu'>Tính năng</a>
                <a style={{margin: "0 6px"}} href='#partner'>Đối Tác</a>
                <a style={{margin: "0 6px"}} href='#contact'>Liên hệ</a>
            </div>
            <img src={logo} alt='anh'/>
            <div style={{display:'flex'}} className='content_button'>
                <button 
                  className='button'
                >
                  Đăng nhập
                </button>
                <button style={{backgroundColor:'#1E88E5', color:"#fff"}} className='button'>Đăng Kí</button>
            </div>
        </div>
        {/* Intro */}
        <div id='intro' style={{marginTop:"80px", width: "100%", backgroundColor:"rgb(255,255,255)", display:"flex", justifyContent:'space-around'}}>
          <div style={{width:"40%", float:'left'}}> 
            <div style={{boxSizing:'border-box', margin:"0", padding:"0"}}>
                <div style={{display:'flex', marginTop:'40px', alignItems:'center'}}>
                  <img src='https://shub.edu.vn/images/landing/ver3/hero-section/logo-shub-circle.svg' alt='anh'/>
                  <p style={{fontWeight:'600', color:"#1e88e5", marginLeft:'12px'}}>SHub Classroom</p>
                </div>
                <div style={{minWidth:"400px", margin:"8px 0"}}>
                  <h1 style={{fontSize:'38px', lineHeight:"56px", fontWeight:'700', letterSpacing:'1px'}}>Một cách hiệu quả để</h1>
                  <h1> quản lý lớp học</h1>
                </div>
                <button className='button_join'>Tham gia ngay</button>
            </div>
            <div style={{width:"100%"}}>
                <div>
                  <button 
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center',fontWeight:"600"}}
                  ><IoIosCloudUpload
                    style={{color:"#1E88E5", margin:'0 4px'}}
                  />Cung cấp tài nguyên cho học sinh</button>
                </div>
                <div style={{display:'flex'}}>
                  <button
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center', fontWeight:"600"}}
                  ><HiDesktopComputer
                      style={{color:"#e71313", margin:'0 4px'}}
                  /> Khai thác học liệu</button>
                  <button
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center', fontWeight:"600"}}
                  ><IoIosLink
                      style={{color:"#007aff", margin:'0 4px'}}
                  /> Giao bài tập</button>
                  <button
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center', fontWeight:"600"}}
                  ><GoFileDirectory
                      style={{color:"orange", margin:'0 4px'}}
                  /> Thi trực tuyến</button>
                </div>
                <div style={{display:'flex'}}>
                  <button
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center', fontWeight:"600"}}
                  >Tổ chức lớp học trực tuyến</button>
                  <button
                    style={{padding:'12px 16px', 
                            borderRadius:"100px", 
                            background: "rgba(239, 239, 245, 0.9)", 
                            width: "fit-content",
                            margin:"8px 8px 0 0",
                            display:'flex', alignItems:'center', fontWeight:"600"}}
                  >Tạo nhiệm vụ học tập</button>
                </div>
                <div style={{
                          display:'flex', 
                          alignItems:'center',
                          fontWeight:"600",
                          marginTop:"14px",
                          height:'48px',
                          width:'fit-content',
                          padding:"12px 24px ",
                          borderRadius:"30px",
                          background:"rgb(43, 44, 52)",
                          color:"#fff"
                          }}>
                    Khả dụng trên mọi nền tảng
                    <div style={{display:'flex', alignItems:"center"}}>
                      <SiMacos style={{margin:"0 3px"}}/>
                      <AiFillWindows style={{margin:"0 3px"}}/>
                      <IoLogoAndroid style={{margin:"0 3px"}}/>
                    </div>
                </div>
            </div>
          </div>
          <div style={{width:"50%", position:'relative'}}>
              <img style={{width:'100%'}} src= {image} alt='anh'/>
              <img style={{width:"100%", position:'absolute', top:"10px", left:'9px'}} src='https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fhero-section%2Fhero-image-teacher.png&w=2048&q=75' alt='anh'/>
          </div>
        </div>

        {/* featur */}
        <section id="fu">
          <div>
              {/*  */}
            <div style={{width:"100%", maxHeight:"80px", textAlign:'center'}}>
              <FaSortDown className='moveIcon' style={{width:'30px', height:'30px'}}/>
            </div>
              {/*  */}
            <div style={{width:"100%", textAlign:'center'}}>
              <p style={{fontSize:'1.3rem'}}>SHub Classroom mang đến cho bạn</p>
              <h1 style={{fontSize:'2rem'}}>Tất cả công cụ dạy học hiện đại</h1>
            </div>
              {/*  */}
            <div style={{backgroundColor:"#F5F5F9", margin:'100px 0'}}> 
              {listViddeo.map((item,index) => (
                index % 2 === 0 ? (
                  <div key={index} style={{margin:"30px 0",display:'flex', justifyContent:'space-around'}}>
                    <iframe style={{width:"500px", height:"260px", borderRadius:"10px"}} src={item.url} title='your video'></iframe>
                    <div style={{width:"40%"}}>
                      <h2>{item.title}</h2>
                      <p style={{width:'580px', overflow:'hidden', fontSize:'1.2rem',lineHeight:"32px" }}>{item.description}</p>
                    </div>
                  </div>   
                ) : (
              <div key={index} style={{margin:"30px 0",display:'flex', justifyContent:'space-around'}}>
                <div style={{width:"40%"}}>
                  <h2>{item.title}</h2>
                  <p style={{width:'400px', overflow:'hidden', fontSize:'1.2rem',lineHeight:"32px" }}>{item.description}</p>
                </div>
                <iframe style={{width:"580px", height:"260px", borderRadius:"10px"}} src={item.url} title='your video'></iframe>
              </div>  
              )
              ))}

              <div style={{textAlign:'center'}}>
                <h1>Bảng điểm, tạo lịch dạy, nhóm học tập, kết nối</h1>
                <p >Đa dạng các công cụ quản lý - hỗ trợ dạy học offline, online</p>
                <div style={{display:'flex', justifyContent:'space-around', width:"100%",flexWrap:'wrap'}}>
                  {teachingVideo.map((item,index) => (
                    <div>
                      <iframe style={{width:"600px", height:'300px', borderRadius:"30px"}} src={item.url} title='videl' ></iframe>
                      <h1>{item.title}</h1>
                      <div className='connect'>
                        <p style={{width:'400px', overflow:'hidden'}}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
            <img style={{width:'100%', height:'100px'}} src={'/image.png'} alt='anh'/>
            </div>
                {/*  */}
            <div style={{display:'flex',justifyContent:'center'}}>
              <div style={{width:'40%'}}>
                  <div style={{textAlign:'center'}}>
                    <h1>SHub đồng hành cùng giáo dục cả nước</h1>
                    <p style={{fontSize:'1.2rem', lineHeight:'30px'}}>Có mặt trên 63 tỉnh thành, với hơn 3.000.000 người dùng mỗi ngày cho việc dạy và học, SHub trở thành cộng đồng giáo dục trực tuyến, môi trường học tập, giảng dạy và chia sẻ rộng lớn.</p>
                  </div>
                  <div style={{display:'flex'}}>
                    <div style={{border:'0.2px solid #ccc', width:"170px", margin:"10px 4px", textAlign:'center',borderRadius:'14px'}}>
                      <img style={{width:"100%",borderRadius:'14px'}} src='https://shub.edu.vn/images/landing/ver3/number-section/number-section-item1.png' alt='anh'/>
                      <h1 style={{fontSize:"1.6rem", fontWeight:"800", color:"#1e88e5"}}>2.000</h1>
                      <p>Trường học</p>
                    </div>
                    <div style={{border:'0.2px solid #ccc', width:"170px", margin:"10px 4px", textAlign:'center',borderRadius:'14px'}}>
                      <img style={{width:"100%",borderRadius:'14px'}} src='https://shub.edu.vn/images/landing/ver3/number-section/number-section-item2.png' alt='anh'/>
                      <h1 style={{fontSize:"1.6rem", fontWeight:"800", color:"#1e88e5"}}>500.000</h1>
                      <p>Lớp học</p>
                    </div>
                    <div style={{border:'0.2px solid #ccc', width:"170px", margin:"10px 4px", textAlign:'center',borderRadius:'14px'}}>
                      <img style={{width:"100%",borderRadius:'14px'}} src='https://shub.edu.vn/images/landing/ver3/number-section/number-section-item3.png' alt='anh'/>
                      <h1 style={{fontSize:"1.6rem", fontWeight:"800", color:"#1e88e5"}}>3 triệu</h1>
                      <p>Học sinh</p>
                    </div>
                    <div style={{
                            border:'0.2px solid #ccc', 
                            width:"170px", 
                            margin:"10px 4px", 
                            textAlign:'center',
                            borderRadius:'14px'
                            }}>
                      <img style={{width:"100%",borderRadius:'14px'}} src='https://shub.edu.vn/images/landing/ver3/number-section/number-section-item4.png' alt='anh'/>
                      <h1 style={{fontSize:"1.6rem", fontWeight:"800", color:"#1e88e5"}}>100.000</h1>
                      <p>Giáo viên</p>
                    </div>
                  </div>
              </div>
              <div>
                  <img style={{width:'500px'}} src={'/map.png'} alt='anh'/>
              </div>
            </div>
                {/*  */}
            <section style={{textAlign:'center'}}>
              <img style={{width:'30px', height:'30px'}} src={'/networking.gif'} alt='anh'/>
              <div style={{textAlign:'center'}}>
                <h1 style={{fontWeight:"700px", fontSize:"2rem"}}>Hoạt động tiêu biểu từ cộng đồng giáo dục</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <p style={{fontSize:"1.3rem", lineHeight:"30px", width:"600px", overflow:'hidden'}}>Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.</p>
                </div>
              </div>
              <SliderCompnent/>
              <Partern/>
            </section>
          </div>
        </section>
        {/* partner */}
        {/* contact */}
    </div>
  )
}
