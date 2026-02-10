import React from 'react'
 import footerstyle from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">

          <div className="inner">
            

            <div className=' d-flex align-items-center'>
              <div className={footerstyle.caption}>ع</div>
              <div className='m-1 text-white fs-4'>عدسة</div>
            </div>
            <p className={footerstyle.color}>مدونة متخصصة في فن التصوير الفوتوغرافي، <br />نشارك معكم أسرار المحترفين ونصائح عملية<br /> لتطوير مهاراتكم.</p>

        <div className='d-flex align-items-center'>
            <div className={footerstyle.link}>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
            </div>

            <div className={footerstyle.link}>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
            </div>

            <div className={footerstyle.link}>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            
            <div className={footerstyle.link}>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>

          </div>


          </div>
          <div className="col-md-3">

<div className="footerstylebox" id={footerstyle.bg}>
  <h5 className="footerstyletitle fs-5">استكشف</h5>

  <ul className="footerstylelist">
    <li className="footerstyleitem p-2 text-white ">الرئيسية</li>
    <li className="footerstyleitem p-2 text-white">المدونة</li>
    <li className="footerstyleitem p-2 text-white">من نحن</li>
  </ul>
</div>

          </div>

          <div className="col-md-3 ">
           <div className="footerstylebox ">
  <h5 className="footerstyletitle fs-5">التصنيفات</h5>

  <ul className="footerstylelist">
    <li className="footerstyleitem p-2 text-white ">إضاءة</li>
    <li className="footerstyleitem p-2 text-white">بورتريه</li>
    <li className="footerstyleitem p-2 text-white">مناظر طبيعية </li>
    <li className="footerstyleitem p-2 text-white">تقنيات </li>
  </ul>
</div>

          </div>

          <div className="col-md-3">
           <div className="footerstylebox ">
  <h5 className="footerstyletitle fs-5">ابقى على اطلاع</h5>
<p className={footerstyle.color}>
  اشترك للحصول على أحدث المقالات والتحديثات.
</p>
<input type="text" className={footerstyle.myinput} placeholder='ادخل بريدك الالكتروني' />
<button className={footerstyle.btn}>اشترك</button>
</div>

          </div>
        </div> 
        
      </div>
           <div id={footerstyle.myborder} className="d-flex border-top  p-1 mt-4 align-items-center justify-content-between   w-100">

            <div>
              <span> 2026 عدسة. صنع بكل  جميع الحقوق محفوظة.</span>
            </div>

            <div>
              <span className='ps-3'>سياسة الخصوصية</span>
              <span>شروط الخدمة</span>
            </div>

          </div>
    </footer>
    </>
  )
}
