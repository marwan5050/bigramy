import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';

import {Link} from 'react-router-dom'
import Ebookpagi from './Ebookpagi';
import { Swiper, SwiperSlide  } from 'swiper/react';
import  { Autoplay  , Pagination } from 'swiper/modules';

export default function Ebook() {

    const navigationItems = ['All', 'flexabilty training', 'wight training', 'cardio training', 'courses', 'fitnes mindset', 'online learning'];

    async function getProduct(){

        try {
            return await axios.get(`http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book
`)
        } catch (error) {
            console.error(`faild to get product id`);
        }
    }

    const {data} = useQuery(`produt request` , ()=> getProduct());


  return (
    <>
    <div className='container'>
        <h1 className='text-white mb-5'>E-book</h1>

       

<Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={4}
          speed={2000}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {navigationItems.map((item, index) => (
            <SwiperSlide key={index}>
              <ul className='list-unstyled d-flex text-white'>
                <li className='mx-2 fs-4 text-capitalize'>{item}</li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='cards text-white my-5'>
             {data?.data.data.map((product , index)=> <div key={index}>
             <div className="card" style={{width: '18rem' , backgroundColor:'#272727'}}>
             <p className="card-title my-4 text-white">product card</p>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    
                    <h5 className="card-title text-white mb-4">{product.attributes.name}</h5>
                    <div className='mb-4 d-flex '>
                        <div className='starts me-2'>
                            <i className="fa-regular fa-star" style={{color:'#55e748'}}></i>
                            <i className="fa-regular fa-star" style={{color:'#55e748'}}></i>
                            <i className="fa-regular fa-star" style={{color:'#55e748'}}></i>
                            <i className="fa-regular fa-star" style={{color:'#55e748'}}></i>
                            <i className="fa-regular fa-star" style={{color:'#55e748'}}></i>
                        </div>
                       <div className='text-white'> {product.attributes.num_of_reviews} </div>
                    </div>
                    <div className='text-white text-bold fs-5 mb-4'>{product.attributes.currency} {product.attributes.price} </div>   
                        <div className='d-flex align-items-center'>
                        <Link to={`/ebookdetail/${product.id}`} className="btn  text-uppercase  fw-bold me-2" style={{backgroundColor:'#55e748'}}>show details</Link>
                    <Link to={`/ebookdetail/${product.id}`}>
                        <button className='p-1' style={{borderColor:'#55e748' , backgroundColor:'#272727'}}> <i className="fa-solid fa-circle-info fs-3 text-warning" ></i></button>
                    </Link>
                        </div>
                </div>
                </div>

             </div>)}
        </div>
    </div>

    <Ebookpagi />
    </>
  )
}
