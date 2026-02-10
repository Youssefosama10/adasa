import React from 'react'
import Aboutstyle from './About.module.css'
import Navber from './../navbar/Navber';
import img3 from '../../assets/images/images03.jpg';
import img5 from '../../assets/images/images05.jpg';
import img7 from '../../assets/images/images07.jpg';
import img9 from '../../assets/images/images09.jpg';
import img13 from '../../assets/images/images13.jpg';
import img1 from '../../assets/images/images01.jpg';
import img02 from '../../assets/images/images02 (1).jpg';
import img03 from '../../assets/images/images03 (1).jpg';
import img04 from '../../assets/images/images04 (1).jpg';
import img05 from '../../assets/images/images05 (1).jpg';
import img06 from '../../assets/images/images06 (1).jpg';
import img07 from '../../assets/images/images07 (1).jpg';
import img08 from '../../assets/images/images08 (1).jpg';
import img09 from '../../assets/images/images09 (1).jpg';
import img10 from '../../assets/images/images10 (1).jpg';
import img12 from '../../assets/images/images12 (1).jpg';
import img14 from '../../assets/images/images14 (1).jpg';
import img18 from '../../assets/images/images18.jpg';
import img19 from '../../assets/images/images19.jpg';
import img20 from '../../assets/images/images20.jpg';
import img21 from '../../assets/images/images21.jpg';


export default function About() {
  return (
    <>

        <section className={Aboutstyle.section}>
         <div className="container">
           <div className="row">
          
             <div className="col-md-12 mt-5">
               <div className={Aboutstyle.inner}>
                  <h6 className={Aboutstyle.color2}>من نحن</h6>
                 <h1 className='m-3'>مهمتنا هي <span>الإعلام والإلهام</span></h1>
                 <p className={Aboutstyle.color}>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية <br /> لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من  <br />خلال محتوى عالي الجودة.</p>
                 <button className={Aboutstyle.btnone}>استكشف المقالات<i class="fa-solid fa-arrow-left"></i></button>
                 <button className={Aboutstyle.btntow }> <i class="fa-solid fa-circle-info"></i>  اعرف المزيد</button>
               </div>
             </div>
           </div>
           <div className="row  mt-4 d-flex justify-content-center">
            
            <div className="col-md-2  text-center">
              <div className={Aboutstyle.hamada}>
             <i class="fa-solid fa-newspaper"></i> <br />
               <span id={Aboutstyle.color3} className='fs-2'>+2مليون</span> <br />
               <span className={Aboutstyle.color}>قارئ شهرياً</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={Aboutstyle.hamada}>
            <i class="fa-solid fa-users"></i><br />
               <span id={Aboutstyle.color3} className='fs-2'>+500 </span> <br />
               <span className={Aboutstyle.color}>مقالة منشورة</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={Aboutstyle.hamada}>
           <i class="fa-solid fa-folder-open"></i> <br />
               <span id={Aboutstyle.color3} className='fs-2'>+50</span> <br />
               <span className={Aboutstyle.color}>كاتب خبير</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={Aboutstyle.hamada}>
               <i class="fa-solid fa-pen-nib"></i> <br />
               <span id={Aboutstyle.color3} className='fs-2'>+15</span> <br />
               <span className={Aboutstyle.color}>تصنيف</span>
             </div>
            </div>
            
           </div>
         </div>
         </section> 

         <section className={Aboutstyle.sectiontow}>
          <div className="container">
              <div className='m-auto ' id={Aboutstyle.caption}>
                <h2 className=' '>قيمنا</h2>
                <p className={Aboutstyle.color}>المبادئ التي توجه كل ما نقوم بإنشائه</p>
              </div>
            <div className="row g-4">


              <div id={Aboutstyle.styledes} className="col-md-3">
              <div className="inner">
                  <i class="fa-solid fa-bullseye"></i>
                <h4>الجودة أولاً</h4>
                <p className={Aboutstyle.color}>محتوى مدروس ومكتوب بخبرة</p>
              </div>
              </div>
              <div id={Aboutstyle.styledes} className="col-md-3">
             <div className="inner">
                 <i class="fa-solid fa-bolt"></i>
                <h4>تركيز عملي </h4>
                <p className={Aboutstyle.color}>أمثلة واقعية يمكنك تطبيقها اليوم   </p>
             </div>
              </div>
              <div id={Aboutstyle.styledes} className="col-md-3">
             <div className="inner">
               <i class="fa-solid fa-handshake"></i>
                <h4> المجتمع</h4>
                <p className={Aboutstyle.color}>تعلم مع آلاف المصورين   </p>
             </div>
              </div>
              <div id={Aboutstyle.styledes} className="col-md-3">
             <div className="inner">
              <i class="fa-solid fa-arrows-rotate"></i>
                <h4> دائماً محدث</h4>
                <p className={Aboutstyle.color}>أحدث الاتجاهات وأفضل الممارسات</p>
             </div>
              </div>
            </div>
          </div>
         </section>

         <section className={Aboutstyle.sectionthree}>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img3} alt="" />
                <br />
                <span>سالم أحمد</span>
                <p className={Aboutstyle.color2}>مصور محترف</p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img5} alt="" />
                <br />
                <span> محمد علي</span>
                <p className={Aboutstyle.color2}>مصور بورتريه </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img7} alt="" />
                <br />
                <span> إبراهيم حسن</span>
                <p className={Aboutstyle.color2}>مصور طبيعة </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img9} alt="" />
                <br />
                <span> داود خالد</span>
                <p className={Aboutstyle.color2}>مدرب تصوير </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img12} alt="" />
                <br />
                <span> ليث محمود</span>
                <p className={Aboutstyle.color2}>فنان بصري </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img13} alt="" />
                <br />
                <span> جمال عبدالله</span>
                <p className={Aboutstyle.color2}>مصور ومراجع تقني </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img1} alt="" />
                <br />
                <span> خالد الفيصل</span>
                <p className={Aboutstyle.color2}>مصور فلكي </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img02} alt="" />
                <br />
                <span> نادر سعيد</span>
                <p className={Aboutstyle.color2}>مصور شوارع </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img03} alt="" />
                <br />
                <span> هاني الشمري</span>
                <p className={Aboutstyle.color2}>مصور طعام </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img04} alt="" />
                <br />
                <span> عمر الراشد</span>
                <p className={Aboutstyle.color2}> مصور حياة برية</p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img05} alt="" />
                <br />
                <span> فارس العلي</span>
                <p className={Aboutstyle.color2}>فنان فوتوغرافي </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img06} alt="" />
                <br />
                <span> سامي الحربي</span>
                <p className={Aboutstyle.color2}>خبير تعديل صور </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img07} alt="" />
                <br />
                <span> رامي الخطيب</span>
                <p className={Aboutstyle.color2}> مصور ماكرو</p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img08} alt="" />
                <br />
                <span> باسم المصري</span>
                <p className={Aboutstyle.color2}>مصور فني </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img09} alt="" />
                <br />
                <span> مصور زفاف</span>
                <p className={Aboutstyle.color2}>منصور الزهراني </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img10} alt="" />
                <br />
                <span> فيصل الدوسري</span>
                <p className={Aboutstyle.color2}>مصور جوي </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img12} alt="" />
                <br />
                <span> لؤي الصالح</span>
                <p className={Aboutstyle.color2}>مصور جوي </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img14} alt="" />
                <br />
                <span> باسم المصري</span>
                <p className={Aboutstyle.color2}>باسم المصري </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img21} alt="" />
                <br />
                <span> كريم الفهد</span>
                <p className={Aboutstyle.color2}>خبير تقني </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img20} alt="" />
                <br />
                <span> سلطان الراجحي</span>
                <p className={Aboutstyle.color2}>فنان تصوير </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img19} alt="" />
                <br />
                <span>كريم الفهد </span>
                <p className={Aboutstyle.color2}>خبير تقني </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">

                    <div className={Aboutstyle.card}>

              <img className='rounded-circle mb-2' src={img18} alt="" />
                <br />
                <span> عبدالله الغامدي</span>
                <p className={Aboutstyle.color2}>مصور عقارات </p>

                    
              <div className='d-flex justify-content-center align-items-center'>
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-x-twitter"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fab fa-github"></i></a>
                                </div>
                    
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                                
                                <div className={Aboutstyle.link}>
                                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3D%25D8%25AA%25D9%2588%25D9%258A%25D8%25AA%25D8%25B1%26lang%3Dar"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                    </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
         </section>

        <section className={Aboutstyle.sectionfour}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner  text-center">
                  <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
                  <p>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء <br />التحية، لا تتردد في التواصل.</p>
                  <button className={Aboutstyle.btnone}><i class="fa-solid fa-envelope"></i> تواصل معنا</button>
                  <button className={Aboutstyle.btntow}><i class="fa-solid fa-envelope"></i> تصفح المقالات</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}
