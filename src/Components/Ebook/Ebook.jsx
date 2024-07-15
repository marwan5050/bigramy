import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
export default function Ebook() {

    async function getProduct(){

        try {
            return await axios.get(`http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book
`)
        } catch (error) {
            console.error(`faild to get product id`);
        }
    }

    const {data} = useQuery(`produt request` , ()=> getProduct());

    console.log(data);

  return (
    <>
    <div className='container'>
        <h1 className='text-white'>E-book</h1>

        <ul className='list-unstyled d-flex text-white '>
            <li className='mx-2'>All</li>
            <li className='mx-2'>flexabilty training</li>
            <li className='mx-2'>wight training</li>
            <li className='mx-2'>cardio training</li>
            <li className='mx-2'>courses</li>
            <li className='mx-2'>fitnes mindset</li>
            <li className='mx-2'>online learning</li>
        </ul>
    </div>
    </>
  )
}
