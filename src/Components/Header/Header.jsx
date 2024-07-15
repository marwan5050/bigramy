import React from 'react'
import style from '../Header/Header.module.css';
export default function Header() {
  return (
   <>
    <div className={`text-white mb-3 p-2 ${style.border} ${style.text}`} >العربية</div>

    <div className='container'>
       
           <div className='d-flex justify-content-between align-items-center'>
           <div >
            
             <h2> <span className='text-white'>B</span> <span style={{color:'#55e748'}}>R</span> </h2> 
             <p><span className='text-white'>Big</span> <span style={{color:'#55e748'}}>Ramy</span></p>
           
           </div>
           <div className='text-white'> Login </div>
           </div>
        
    </div>
   </>
  )
}
