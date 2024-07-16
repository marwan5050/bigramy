import React from 'react';

import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-sm mb-5" style={{backgroundColor:'#1e1e1e'}}>
  <div className="container">
    
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
       
        <li className="nav-item ">
          <Link className="nav-link " style={{color:'#55e748'}} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/ebook">E-books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">Contact Us</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav me-end mt-2 mt-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">
          <i className="fa-solid fa-cart-shopping mx-2"></i>
          Cart</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

{/* <Slider  />     */}
    </>
  )
}
