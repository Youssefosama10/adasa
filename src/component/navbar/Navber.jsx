import React from 'react'
import img1 from '../../assets/images/images1.png';
import NavberStyle from './Navber.module.css'
import { NavLink } from 'react-router-dom';


export default function Navber() {
  return (
    <div>
<nav className="navbar navbar-expand-lg text-white fixed">
  <div className="container">
  <div className='d-flex align-items-center'>

   <div>
     <img width={50} src={img1} alt="" />
   </div>

   <div>
      <a className="navbar-brand text-white m-0" href="#">عدسة</a> <br />
    <span className={NavberStyle.spantitle}>عالم التصوير الفوتوغرافي</span>
   </div>

  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id={NavberStyle.stylelink} className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  " aria-current="page" to="/Home">الرئيسية</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link " to="/Gallrey">المدونه</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/About">من نحن </NavLink>
        </li>
       
      </ul>
     <div className ={NavberStyle.seacrhicon}>
       <i class="fa-solid fa-magnifying-glass"></i>
     </div>
      <button className={NavberStyle.btn}>ابدأ القراءة</button>
    </div>
  </div>
</nav>

    </div>
  )
}
