import React from 'react';
import style from '../Header/Header.module.css';

export default function Footer() {
  return (
    <>
    <div style={{backgroundColor:'#131313'}}>

      <div className='container p-5'>
        <div className={`row align-items-center ${style.border}`} >
          <div className='col-md-3 mb-4'>
          <div> <span className='text-white fs-1'>B</span> <span className='fs-1' style={{color:'#55e748'}}>R</span> </div> 
          <div><span className='text-white'>Big</span> <span style={{color:'#55e748'}}>Ramy</span></div> 
             
             </div>
          <div className='col-md-3'>
             <div style={{color:'#6d6d6d'}}>join our</div>
             <div className='text-white'>newsletter</div>
             </div>
          <div className='col-md-6'> 
            <div className='d-flex'>
            <input type='text' className='form-control' placeholder='what you are lokking for?' />
            <button className='btn btn-success'>subscribe</button>  
            </div>  
          </div>
        </div>
      </div>
    </div>

    <div className='text-white' style={{backgroundColor:'#131313'}}>

      <div className='container '>
        <div className={`row align-items-center ${style.border}`} >
          <div className='col-md-3 mb-4'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ea aut, nisi asperiores accusamus harum?</p>
          <h6>follow us on</h6>
          <ul className='list-unstyled d-flex ' >
            <li><i class="fa-brands fa-twitter mx-2 p-1 rounded bg-success"></i></li>
            <li><i class="fa-brands fa-facebook mx-2 p-1 rounded bg-success"></i></li>
            <li><i class="fa-brands fa-instagram mx-2 p-1 rounded bg-success"></i></li>
          </ul>
             
            </div>
          <div className='col-md-3'>
             <ul className='list-unstyled'>
              <li className='text-capitalize  my-2'>news</li>
              <li className='text-capitalize  my-2'>tornaments</li>
              <li className='text-capitalize  my-2'>courses</li>
              <li className='text-capitalize'>E-books</li>
             </ul>
             </div>
          <div className='col-md-6'> 
          <ul className='list-unstyled'>
              <li className='text-capitalize  my-2'>privacy policies</li>
              <li className='text-capitalize  my-2'>teams & conditions</li>
              <li className='text-capitalize  my-2'>contact-us</li>
              
             </ul> 
          </div>
        </div>
      </div>
    </div>

    <div className='text-capitaize text-center text-white'>2024 logo.ALL rights reserved</div>
    </>
  )
}
