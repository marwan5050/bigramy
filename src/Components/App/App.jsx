import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { RouterProvider , createBrowserRouter} from 'react-router-dom'; 
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Ebook from '../Ebook/Ebook';
import Ebookdetail from '../Ebook/Ebookdetail';
export default function App() {


    const routes = createBrowserRouter([
        {path:'/', element: <Layout/> , children:[
            {index: true , element : <Home/>},
            {path: '/ebook' , element : <Ebook/>},
            {path: '/ebookdetail/:id' , element : <Ebookdetail/>},
            

        
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
