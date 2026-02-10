import React from 'react'
 import homeStyle from './home.module.css'
 import img2 from '../../assets/images/images02.jpg';
 import img3 from '../../assets/images/images03.jpg';
 import img4 from '../../assets/images/images04.jpg';
 import img5 from '../../assets/images/images05.jpg';
 import img6 from '../../assets/images/images06.jpg';
 import img7 from '../../assets/images/images07.jpg';
 import img8 from '../../assets/images/images08.jpg';
 import img9 from '../../assets/images/images09.jpg';
 import img10 from '../../assets/images/images10.jpg';
 import img12 from '../../assets/images/images12.jpg';
 import img13 from '../../assets/images/images13.jpg';
 import img14 from '../../assets/images/images14.jpg';
 import img15 from '../../assets/images/images15.jpg';
 import img16 from '../../assets/images/images16.jpg';




export default function Home() {
  return (
   <>
        <section className={homeStyle.section}>
         <div className="container">
           <div className="row">
          
             <div className="col-md-12 mt-5">
               <div className={homeStyle.inner}>
                    <h6 className={homeStyle.inner}>مرحباً بك في عدسة</h6>
                 <h1 className='m-3'>اكتشف <span >فن</span>  <br />التصوير الفوتوغرافي</h1>
                 <p className='m-4'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في<br />التصوير</p>
                 <button className={homeStyle.btnone}>استكشف المقالات<i class="fa-solid fa-arrow-left"></i></button>
                 <button className={homeStyle.btntow }> <i class="fa-solid fa-circle-info"></i>  اعرف المزيد</button>
               </div>
             </div>
           </div>
           <div className="row  mt-4 d-flex justify-content-center">
            
            <div className="col-md-2  text-center">
              <div className={homeStyle.hamada}>
             <i class="fa-solid fa-newspaper"></i> <br />
               <span id={homeStyle.color}>50+</span> <br />
               <span id={homeStyle.color2} >مقاله</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={homeStyle.hamada}>
            <i class="fa-solid fa-users"></i><br />
               <span id={homeStyle.color}>10+الف</span> <br />
               <span id={homeStyle.color2}>قاري</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={homeStyle.hamada}>
           <i class="fa-solid fa-folder-open"></i> <br />
               <span id={homeStyle.color}>4</span> <br />
               <span id={homeStyle.color2}>تصنيفات</span>
             </div>
            </div>
            
            <div className="col-md-2 text-center ">
              <div className={homeStyle.hamada}>
               <i class="fa-solid fa-pen-nib"></i> <br />
               <span id={homeStyle.color} >6</span> <br />
               <span id={homeStyle.color2}>كاتب</span>
             </div>
            </div>
            
           </div>
         </div>
         </section> 

   <section className={homeStyle.stylesection}>
    <div className="container">
    
   

  <div className="row align-items-center">
        <div className="col-md-6">

          <div className={homeStyle.stylespancaption}>
            <span>مميز</span>
          </div>
          
        <div className={homeStyle.styleh2}>
          <h2>مقالات مختارة</h2>
          <p>محتوى منتقى لبدء رحلة تعلمك</p>
        </div>

        </div>
        <div className="col-md-6">
          <button className={homeStyle.stylebtn}>عرض الكل</button>
        </div>
      </div>

      <div className="row" id={homeStyle.hovercard}>
        <div className="col-md-6">

          <div className={homeStyle.styleimg}>
            <img src={img2} alt="" />
            <span className={homeStyle.simg}><i class="fa-solid fa-star"></i>مميز</span>
          </div>

        </div>
        <div className="col-md-6" id={homeStyle.bodycard}>
         <div className=' d-flex ai'>

          <div>
            <span className={homeStyle.stylespan}>إضاءة</span>
          </div>

        <div className='d-flex m-2'>
  
          <div className={homeStyle.stylep}>
            <i class="fa-regular fa-clock  m-1"></i> 
          </div>

          <div>
          <p className={homeStyle.stylep}>8 دقائق للقراءة</p>
          </div>
          </div>

         </div>

       <div className='mt-4'>
          <h2 className='text-white mb-3'>إتقان تصوير الساعة الذهبية: دليل شامل</h2>
         <p className={homeStyle.stylep}>"تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول  <br />الإضاءة والتكوين."</p>

       </div>


        <div className='d-flex align-items-center' id={homeStyle.gg}>


    <div className={homeStyle.imgafter}>
      <img width={50} className='rounded-circle'  src={img3} alt="" />
    </div>

<div>
   <span className='text-white m-0'>سالم أحمد</span><br />
    <p className={homeStyle.stylep}>مصور محترف</p>
</div>

<div className={homeStyle.stylestow}>
  <span className={homeStyle.styles}>أقرا المقال</span>
</div>
        </div>




        </div>
      </div>

      <div className="row mt-4" id={homeStyle.hovercard}>
        <div className="col-md-6">

          <div className={homeStyle.styleimg}>
            <img src={img4} alt="" />
            <span className={homeStyle.simg}><i class="fa-solid fa-star"></i>مميز</span>
          </div>

        </div>
        <div className="col-md-6" id={homeStyle.bodycard}>
         <div className=' d-flex  align-items-center'>

          <div>
            <span className={homeStyle.stylespan}>بورتريه</span>
          </div>

        <div className='d-flex m-2'>
  
          <div className={homeStyle.stylep}>
            <i class="fa-regular fa-clock  m-1"></i> 
          </div>

          <div>
          <p className={homeStyle.stylep}>6 دقائق للقراءة</p>
          </div>
          </div>

         </div>

       <div className='mt-4'>
          <h2 className='text-white mb-3'>أسرار تصوير البورتريه: كيف تلتقط روح  <br />الشخصية</h2>
         <p className={homeStyle.stylep}>"اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع <br />الحقيقية."</p>

       </div>


        <div className='d-flex align-items-center' id={homeStyle.gg}>


    <div className={homeStyle.imgafter}>
      <img width={50} className='rounded-circle'  src={img5} alt="" />
    </div>

<div>
   <span className='text-white m-0'>محمد علي</span><br />
    <p className={homeStyle.stylep}>مصور بورتريه</p>
</div>

<div className={homeStyle.stylestow}>
  <span className={homeStyle.styles}>أقرا المقال</span>
</div>
        </div>




        </div>
      </div>

      <div className="row mt-4" id={homeStyle.hovercard}>
        <div className="col-md-6">

          <div className={homeStyle.styleimg}>
            <img src={img6} alt="" />
            <span className={homeStyle.simg}><i class="fa-solid fa-star"></i>مميز</span>
          </div>

        </div>
        <div className="col-md-6" id={homeStyle.bodycard}>
         <div className=' d-flex  align-items-center'>

          <div>
            <span className={homeStyle.stylespan}>مناظر طبيعية</span>
          </div>

        <div className='d-flex m-2'>
  
          <div className={homeStyle.stylep}>
            <i class="fa-regular fa-clock  m-1"></i> 
          </div>

          <div>
          <p className={homeStyle.stylep}>10 دقائق للقراءة</p>
          </div>
          </div>

         </div>

       <div className='mt-4'>
          <h2 className='text-white mb-3'>دليل تصوير المناظر الطبيعية: من <br />المبتدئ إلى المحترف</h2>
         <p className={homeStyle.stylep}>"استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال <br />الطبيعة بعدستك."</p>

       </div>


        <div className='d-flex align-items-center' id={homeStyle.gg}>


    <div className={homeStyle.imgafter}>
      <img width={50} className='rounded-circle'  src={img7} alt="" />
    </div>

<div>
   <span className='text-white m-0'>إبراهيم حسن</span><br />
    <p className={homeStyle.stylep}>مصور طبيعة</p>
</div>

<div className={homeStyle.stylestow}>
  <span className={homeStyle.styles}>أقرا المقال</span>
</div>
        </div>




        </div>
      </div>



      {/* <div className="row">

        <div className="bg-danger w-auto  d-flex align-items-center">

        <div><img src={img4} width={70} alt="" /></div>

        <div>
          <h3 className='m-0'>سالم أحمد</h3>
          <p className='m-0'>مصور محترف</p>
        </div>

        </div>

        <div className="d-flex align-items-center">
          <span>اقرأ المقال</span>
        </div>

      </div> */}






    </div>
   </section>

   <section className={homeStyle.sectionCategories}>
    <div className="container">
      <div className="caption p-5 text-center">

        <div className={homeStyle.stylespancaption} id={homeStyle.ma}>
          <span>التصنيفات</span>
        </div>

        <h3 className='text-white fs-1'>استكشف حسب الموضوع</h3>
        <p className={homeStyle.stylep}>اعثر على محتوى مصمم حسب اهتماماتك</p>
      </div>
      <div className="row g-3">
        <div className="col-md-3">
<div className={homeStyle.innerCategories}>
  <div className={homeStyle.styleCategories}>
    <i class="fa-solid fa-gear"></i>
  </div>
  <span className='text-white m-0 fs-5'>إضاءة</span>
  <br />
  <span className={homeStyle.stylep}>3 مقالة</span>
</div>
        </div>

        <div className="col-md-3">
<div className={homeStyle.innerCategories}>
  <div className={homeStyle.styleCategories}>
   <i class="fa-solid fa-user"></i>
  </div>
  <span className='text-white m-0 fs-5'>بورتريه</span>
  <br />
  <span className={homeStyle.stylep}>3 مقالة</span>
</div>
        </div>
        
        <div className="col-md-3">
<div className={homeStyle.innerCategories}>
  <div className={homeStyle.styleCategories}>
    <i class="fa-solid fa-gear"></i>
  </div>
  <span className='text-white m-0 fs-5'>إضاءة</span>
  <br />
  <span className={homeStyle.stylep}>3 مقالة</span>
</div>
        </div>

        <div className="col-md-3">
<div className={homeStyle.innerCategories}>
  <div className={homeStyle.styleCategories}>
    <i class="fa-solid fa-gear"></i>
  </div>
  <span className='text-white m-0 fs-5'>إضاءة</span>
  <br />
  <span className={homeStyle.stylep}>3 مقالة</span>
</div>
        </div>

        <div className="col-md-3">
<div className={homeStyle.innerCategories}>
  <div className={homeStyle.styleCategories}>
    <i class="fa-solid fa-gear"></i>
  </div>
  <span className='text-white m-0 fs-5'>إضاءة</span>
  <br />
  <span className={homeStyle.stylep}>3 مقالة</span>
</div>
        </div>
      </div>
    </div>
   </section>

   <section className={homeStyle.stylesection}>
    <div className="container">
      <div className="row">
         <div className="">

          <div className={homeStyle.stylespancaption}>
            <span>
الأحدث</span>
          </div>
          
        <div className={homeStyle.styleh2}>
          <h2 className='m-3 fs-1'>أحدث المقالات </h2>
          <p className={homeStyle.stylep}>  محتوى جديد طازج من المطبعة  </p>
        </div>

        </div>
        <div className="col-md-4">
 <div className="container my-5">
  <div className="card bg-dark text-white border-0 rounded-4 overflow-hidden position-relative" style={{maxWidth: 420}} id={homeStyle.mycard}>
  
    <div className="position-relative overflow-hidden">
      <img id={homeStyle.imgcard} src={img8} className="w-100" style={{height: 240, objectFit: 'cover'}} />
  
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.85))'}}>
      </div>
   
      <span className="badge bg-black bg-opacity-75 position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
        تقنيات
      </span>
    </div>

    <div className="card-body p-4">
    
      <div className="d-flex align-items-center text-body-secondary small mb-2">
        <i className="fa-regular fa-clock ms-1" />
        <span className={homeStyle.stylep}>7 دقائق للقراءة</span>
        <span className={homeStyle.stylep}>•</span>
        <span className={homeStyle.stylep}>8 يناير 2023</span>
      </div>
    
      <h4 className="fw-bold mb-2">
        أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
      </h4>
    
      <p className={homeStyle.stylep}>
        أفهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO
        للتحكم الكامل في صورك.
      </p>
    
<div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3">

  <div className="d-flex align-items-center gap-2">
    <img src={img9} className="rounded-circle" width={40} height={40} />
    <div className="text-end">
      <div className="fw-semibold m-0">داود خالد</div>
      <div className="text-white small m-0">مدرب تصوير</div>
    </div>
  </div>

  <div id={homeStyle.myicon}  className="d-flex align-items-center justify-content-center rounded-circle" style={{width: 42, height: 42, background: '#3a1f0f'}}>
    <i className="fa-solid fa-angle-left text-warning" />
  </div>
</div>


    </div>
  </div>
</div>


        </div>

        <div className="col-md-4">
 <div className="container my-5">
  <div className="card bg-dark text-white border-0 rounded-4 overflow-hidden position-relative" style={{maxWidth: 420}} id={homeStyle.mycard}>
  
    <div className="position-relative overflow-hidden">
      <img id={homeStyle.imgcard}  src={img10} className="w-100" style={{height: 240, objectFit: 'cover'}} />
  
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.85))'}}>
      </div>
   
      <span className="badge bg-black bg-opacity-75 position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
        تقنيات
      </span>
    </div>

    <div className="card-body p-4">
    
      <div className="d-flex align-items-center text-body-secondary small mb-2">
        <i className="fa-regular fa-clock ms-1" />
        <span className={homeStyle.stylep}>9 دقائق للقراءة</span>
        <span className={homeStyle.stylep}>•</span>
        <span className={homeStyle.stylep}>5 يناير 2026</span>
      </div>
    
      <h4 className="fw-bold mb-2">
    قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية

      </h4>
    
      <p className={homeStyle.stylep}>
       "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً."
      </p>
    
<div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3">

  <div className="d-flex align-items-center gap-2">
    <img src={img15}  className="rounded-circle" width={40} height={40} />
    <div className="text-end">
      <div className="fw-semibold m-0"> ليث محمود</div>
      <div className="text-white small m-0">فنان بصري </div>
    </div>
  </div>

  <div id={homeStyle.myicon}  className="d-flex align-items-center justify-content-center rounded-circle" style={{width: 42, height: 42, background: '#3a1f0f'}}>
    <i className="fa-solid fa-angle-left text-warning" />
  </div>
</div>


    </div>
  </div>
</div>


        </div>

        <div className="col-md-4">
 <div className="container my-5">
  <div className="card bg-dark text-white border-0 rounded-4 overflow-hidden position-relative" style={{maxWidth: 420}} id={homeStyle.mycard}>
  
    <div className="position-relative overflow-hidden">
      <img id={homeStyle.imgcard}  src={img12} className="w-100" style={{height: 240, objectFit: 'cover'}} />
  
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.85))'}}>
      </div>
   
      <span className="badge bg-black bg-opacity-75 position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill">
        معدات
      </span>
    </div>

    <div className="card-body p-4">
    
      <div className="d-flex align-items-center text-body-secondary small mb-2">
        <i className="fa-regular fa-clock ms-1" />
        <span className={homeStyle.stylep}>8 دقائق للقراءة</span>
        <span className={homeStyle.stylep}>•</span>
        <span className={homeStyle.stylep}>3 يناير 2026</span>
      </div>
    
      <h4 className="fw-bold mb-2">
      تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك
      </h4>
    
      <p className={homeStyle.stylep}>
      "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات."
      </p>
    
<div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3">

  <div className="d-flex align-items-center gap-2">
    <img src={img13} className="rounded-circle" width={40} height={40} />
    <div className="text-end">
      <div className="fw-semibold m-0">جمال عبدالله </div>
      <div className="text-white small m-0">مصور ومراجع تقني </div>
    </div>
  </div>

  <div id={homeStyle.myicon} className="d-flex align-items-center justify-content-center rounded-circle" style={{width: 42, height: 42, background: '#3a1f0f'}}>
    <i className="fa-solid fa-angle-left text-warning" />
  </div>
</div>


    </div>
  </div>
</div>


        </div>
      </div>
    </div>
   </section>

    <section className={homeStyle.stylesection} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="inner">
              



            <div className='text-center p-5 ' id={homeStyle.card}>
              
              <div className={homeStyle.Emailstyle}>
                <i class="fa-solid fa-envelope fs-4"></i>
              </div>
          <div className='p-1'>
                
              <h2 className='text-white p-2 pt-3'> اشترك في <span className={homeStyle.color}>نشرتنا الإخبارية</span>  </h2>
              <p className={homeStyle.stylep}>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
          </div>

         <div className='d-flex align-items-center justify-content-center'>
              <div className='p-2 pt-2 pb-3'>
               <input className='form-control bg-black p-3 ' placeholder='ادخل بريدك الالكتروني' id={homeStyle.myinput} type="text" />
             </div>
             <div>
               <button className={homeStyle.stylebtntow}>اشترك الآن</button>
             </div>
         </div>


<div
  className={`d-flex align-items-center justify-content-center flex-wrap gap-3 ${homeStyle.info}`}
>

   <div className={`d-flex ${homeStyle.avatars}`}>
    <img src={img3} alt="" />
    <img src={img5} alt="" />
    <img src={img7} alt="" />
  </div>
  <span className={homeStyle.text}>
    إلغاء الاشتراك في أي وقت
  </span>

  <span className={homeStyle.dot}></span>

  <span className={homeStyle.text}>
    بدون إزعاج
  </span>

  <span className={homeStyle.dot}></span>

  <span className={homeStyle.text}>
    انضم إلى <b>10,000+</b> مصور
  </span>



</div>



              </div>  



            </div>
          </div>
        </div>
      </div>
    </section>





   </>
  )
}
