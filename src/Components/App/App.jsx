import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'; 
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Ebook from '../Ebook/Ebook';
createHash
export default function App() {

    const routes = createHashRouter([
        {path:'/', element: <Layout/> , children:[
            {index: true , element : <Home/>},
            {path: '/ebook' , element : <Ebook/>},
            

        
        ]}
    
    ])

  return (
   <>
    <RouterProvider router={routes}>
    <Layout/>
   </RouterProvider>
   </>
  )
}
