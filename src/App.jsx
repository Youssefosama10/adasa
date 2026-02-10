import React from 'react'
import Home from './component/Home/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './component/About/About'
import Gallery from './component/Gallery/Gallery'
import Error from './component/error/Error';
import Layout from './component/layout/Layout'


 const router =  createBrowserRouter([
  {path : '' , element : <Layout/> , children : [
  {path : "*" , element : <Error/>} ,
   {path : "" , element : <Home/>} ,
   {path : "home" , element : <Home/>} ,
   {path : "About" , element : <About/>} ,
  {path : "Gallrey" , element : <Gallery/>}
  ]}
])

export default function App() {
  return (
    <>
      
    <RouterProvider router={router}/>
    </>
  )
}
