import React from 'react'
import Navber from './../navbar/Navber';
import Footer from './../footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}
