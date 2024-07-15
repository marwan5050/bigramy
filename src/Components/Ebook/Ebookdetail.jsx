import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import {useParams} from 'react-router-dom';
import Sidenav from './Sidenav';
import Ebookpagi from './Ebookpagi';



export default function Ebookdetail() {

  const id = useParams();

  const [selectedPage, setSelectedPage] = useState('Page 1-2');


  async function getProductDetials(id){

    try {
        
        return await axios.get(`http://3.65.32.166/api/v2/storefront/products/:${id}`)
   
    } catch (error) {
       
        console.error(`faild to get product details data`);
    }

  }

  const {data} = useQuery(`product details request` , ()=> getProductDetials(id));


  return (
    <>
    <div className='container'>
    <h2 className='text-white fst-italic mb-5'>{data?.data.data.attributes.name}</h2>

    <div className='row content mb-5'>
        <div className='sideNave col-md-4'>
            <Sidenav  SelectPage={(page) => setSelectedPage(page)}/>
        </div>

        <div className='col-md-8'>
           <div className='d-flex justify-content-between align-items-center'> 
            <h2 className='text-white'>{selectedPage}</h2>
            <button className={`btn`} style={{borderColor:'#55e748' , color:'#55e748'}}>bookmark</button>
           </div>

            <div className='content-image'>
                <img className='w-100' src={data?.data.data.attributes.book.image_url} alt='poster' />
            </div>

            <div className='d-flex justify-content-between'>

                <div className='zoom d-flex align-items-center border border-success ' style={{borderColor:'#55e748'}}>
                    <i className="fa-solid fa-magnifying-glass-plus fs-3 me-4 " style={{color:'#55e748'}}></i>
                    <i className="fa-solid fa-magnifying-glass-minus fs-3" style={{color:'#55e748'}}></i>
                </div>
                <div className='pagi'>
                    <Ebookpagi />
                </div>
                

            </div>

        </div>
    </div>
    </div>
    </>
  )
}
