import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';



export default function Layout() {
  return (
    <>
    <Header />
        <Navbar/>
        <Outlet />
        <Footer />
    </>
  )
}
