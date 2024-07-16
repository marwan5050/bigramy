import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import  { Autoplay  , Pagination } from 'swiper/modules';
import photo from '../Assets/Images/bigramy.jpg';
import style from '../Home/Home.module.css';
export default function Home() {
  return (
   <>
    <Swiper 
        modules={[Autoplay , Pagination ]}
        slidesPerView={1}
        speed={2000}
        
        autoplay={{delay : 3000}}
        loop={true}
        pagination={{ clickable: true }}
    >
     
            <SwiperSlide  >
           

                <div  className='position-relative'>
                   <div >

                    <img className='w-100' src={photo} alt='poster' />
                   </div>

                      <div className={` d-flex align-items-center  position-absolute top-0 start-0 end-0 bottom-0 z-1 ${style.layer}`}>
                          <div className='container mb-4 '>
                              <h5 className={` text-center text-white fst-italic text-uppercase fs-1`}>training Courses , books</h5>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase fw-bold`}>make your healthy body</h2>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase`}>strong is our responspilty</h2>
                              <div className='d-flex justify-content-center align-items-center my-3'>
                              <button className='btn btn-success  text-cappitalize fs-4'>About us</button>
                              </div>
                          </div>
                       </div>
                    </div>
                
            
            </SwiperSlide>

            <SwiperSlide  >
           

                
            <div  className='position-relative'>
                   <div >

                    <img className='w-100' src={photo} alt='postrt' />
                   </div>

                      <div className={` d-flex align-items-center  position-absolute top-0 start-0 end-0 bottom-0 z-1 ${style.layer}`}>
                          <div className='container mb-4 '>
                              <h5 className={` text-center text-white fst-italic text-uppercase fs-1`}>training Courses , books</h5>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase fw-bold`}>make your healthy body</h2>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase`}>strong is our responspilty</h2>
                              <div className='d-flex justify-content-center align-items-center my-3'>
                              <button className='btn btn-success  text-cappitalize fs-4'>About us</button>
                              </div>
                          </div>
                       </div>
                    </div>
                
            
            </SwiperSlide>

            <SwiperSlide  >
            

                
            <div  className='position-relative'>
                   <div >

                    <img className='w-100' src={photo} alt='poster' />
                   </div>

                      <div className={` d-flex align-items-center  position-absolute top-0 start-0 end-0 bottom-0 z-1 ${style.layer}`}>
                          <div className='container mb-4 '>
                              <h5 className={` text-center text-white fst-italic text-uppercase fs-1`}>training Courses , books</h5>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase fw-bold`}>make your healthy body</h2>
                              <h2 className={`${style.header} text-center text-white fst-italic text-uppercase`}>strong is our responspilty</h2>
                              <div className='d-flex justify-content-center align-items-center my-3'>
                              <button className='btn btn-success  text-cappitalize fs-4'>About us</button>
                              </div>
                          </div>
                       </div>
                    </div>
                
            
            </SwiperSlide>
      </Swiper>
   </>
  )
}
