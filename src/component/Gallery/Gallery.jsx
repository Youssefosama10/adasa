import React from 'react'
import Gallerystyle from './Gallery.module.css'
 import img1 from '../../assets/images/images01.jpg';
 import img2 from '../../assets/images/images02.jpg';
 import img3 from '../../assets/images/images03.jpg';
 import img03 from '../../assets/images/images03 (1).jpg';
 import img06 from '../../assets/images/images06 (1).jpg';
 import img4 from '../../assets/images/images04.jpg';
 import img5 from '../../assets/images/images05.jpg';
 import img6 from '../../assets/images/images06.jpg';
 import img7 from '../../assets/images/images07.jpg';
 import img8 from '../../assets/images/images08.jpg';
 import img9 from '../../assets/images/images09.jpg';
 import img10 from '../../assets/images/images10.jpg';
 import img11 from '../../assets/images/images11.jpg';
 import img12 from '../../assets/images/images12.jpg';
 import img13 from '../../assets/images/images13.jpg';
 import img18 from '../../assets/images/images18.jpg';
 import img19 from '../../assets/images/images19.jpg';
 import img14 from '../../assets/images/images13 (1).jpg';
 import img15 from '../../assets/images/images14 (1).jpg';
 import img101 from '../../assets/images/images11 (1).jpg';
 import img102 from '../../assets/images/images07 (1).jpg';
 import img21 from '../../assets/images/images21.jpg';
 import img30 from '../../assets/images/images30.jpg';
 import img31 from '../../assets/images/images31.jpg';
 import img32 from '../../assets/images/images32.jpg';
 import img33 from '../../assets/images/images33.jpg';
 import img35 from '../../assets/images/images35.jpg';
 import img36 from '../../assets/images/images36.jpg';
 import img37 from '../../assets/images/images37.jpg';
 import img38 from '../../assets/images/images38.jpg';
 import img39 from '../../assets/images/images39.jpg';
 import img40 from '../../assets/images/images40.jpg';
 import img41 from '../../assets/images/images41.jpg';
 import { useState } from "react";

// const buttons = [
//   "جميع المقالات",
//   "إضاءة",
//   "بورتريه",
//   "مناظر طبيعية",
//   "تقنيات",
//   "معدات",
// ];


const myCard = [
  {
    image : img2 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : " إتقان تصوير الساعة الذهبية: دليل شامل" , 
    desc : " تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين." ,
    image2 : img3 ,
    caption : " سالم أحمد" ,
    captionimg : "مصور محترف" ,
    category : "الكل"
  } , 
  {
    image : img4 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية" , 
    desc : "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية." ,
    image2 : img5 ,
    caption : "محمد علي" ,
    captionimg : "مصور بورتريه" ,
    category : "الكل"
  } , 
  {
    image : img6 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف" , 
    desc : "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية." ,
    image2 : img7 ,
    caption : "إبراهيم حسن" ,
    captionimg : " مصور طبيعة" ,
    category : "الكل"
  } , 
  {
    image : img8 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي" , 
    desc : "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك." ,
    image2 : img9 ,
    caption : "داود خالد" ,
    captionimg : "مدرب تصوير" ,
    category : "الكل"
  } , 
  {
    image : img10 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية" , 
    desc : "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً" ,
    image2 : img11 ,
    caption : "ليث محمود" ,
    captionimg : "فنان بصري" ,
    category : "الكل"
  } , 
  {
    image : img12 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "5 يناير 2026 ",
    title : "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك" , 
    desc : "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات." ,
    image2 : img13 ,
    caption : "جمال عبدالله" ,
    captionimg : "مصور ومراجع تقني" ,
    category : "الكل"
  } , 
  {
    image : img2 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "6 يناير 2026 ",
    title : "إتقان تصوير الساعة الذهبية: دليل شامل" , 
    desc : "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين." ,
    image2 : img3 ,
    caption : " سالم أحمد" ,
    captionimg : "مصور محترف " ,
     category : "بورتريه"
  } , 
  {
    image : img30 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "6 يناير 2026 ",
    title : "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل" , 
    desc : "تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة." ,
    image2 : img1 ,
    caption : "خالد الفيصل" ,
    captionimg : "مصور محترف " ,
     category : "بورتريه"
  } , 
  {
    image : img31 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "6 يناير 2026 ",
    title : "  التعريض الطويل: كيف تصور الحركة والزمن   " , 
    desc : "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.",
    image2 : img14 ,
    caption : " باسم المصري" ,
    captionimg : "مصور فني" ,
     category : "بورتريه"
  } , 
  {
    image : img32 , 
    // span1 : "8 دقائق للقراءة" ,
    // span2 : "6 يناير 2026 ",
    title : " أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة  " , 
    desc : "افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.",
    image2 : img15 ,
    caption : "ماجد القحطاني" ,
    captionimg : "مصور استوديو" ,
     category : "بورتريه"
  } , 
  {
    image : img2 , 
    // span1 : "إضاءة" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "إتقان تصوير الساعة الذهبية: دليل شامل" , 
    desc : "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين." ,
    image2 : img3 ,
    caption : "سالم أحمد" ,
    captionimg : "مصور محترف" ,
    category : "إضاءة"
  } , 
  {
    image : img6 , 
    // span1 : "إضاءة" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "تصوير الليل والنجوم: دليلك لالتقاط سماء الليل" , 
    desc : "تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة." ,
    image2 : img1 ,
    caption : "خالد الفيصل" ,
    captionimg : "مصور فلكي" ,
    category : "إضاءة"
  } , 
  {
    image : img31 , 
    // span1 : "إضاءة" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "التعريض الطويل: كيف تصور الحركة والزمن" , 
    desc : "تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة." ,
    image2 : img7 ,
    caption : "باسم المصري" ,
    captionimg : "مصور فني" ,
    category : "إضاءة"
  } ,  
  {
    image : img6 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف" , 
    desc : "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك." ,
    image2 : img11 ,
    caption : " إبراهيم حسن " ,
    captionimg : "مصور طبيعة" ,
    category : "مناظر طبيعيه"
  } , 
  {
    image : img33 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة" , 
    desc : "دليل شامل لتصوير الحيوانات في بيئتها الطبيعية مع نصائح للمعدات والتقنيات." ,
    image2 : img15 ,
    caption : " عمر الراشد" ,
    captionimg : "مصور حياة برية" ,
    category : "مناظر طبيعيه"
  } , 
  {
    image : img35 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى" , 
    desc :"نصائح عملية لتصوير السفر تساعدك على التقاط جوهر كل مكان تزوره." ,
    image2 : img18 ,
    caption : "ياسر العتيبي" ,
    captionimg : "مصور رحالة" ,
    category : "مناظر طبيعيه"
  } , 
  {
    image : img36 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "تصوير الطعام: كيف تجعل أطباقك تبدو شهية" , 
    desc :  "تعلم تقنيات تصوير الطعام الاحترافية لإنشاء صور تثير الشهية وتجذب العيون." ,
    image2 : img03 ,
    caption : "هاني الشمري" ,
    captionimg : "مصور طعام" ,
     category : "تقنيات"
  } , 
  {
    image : img38 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "تصوير المنتجات: أساسيات التصوير التجاري" , 
    desc : "تعلم كيفية تصوير المنتجات بشكل احترافي لمتجرك الإلكتروني أو عملائك التجاريين." ,
    image2 : img101 ,
    caption : "لؤي الصالح" ,
    captionimg : "مصور تجاري",
     category : "تقنيات"
  } , 
  {
    image : img37 , 
    // span1 : "تقنيات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "عالم التصوير الماكرو: اكتشف التفاصيل الخفية" , 
    desc : "انغمس في عالم التصوير المقرب واكتشف جمال التفاصيل الصغيرة التي تفوتنا بالعين المجردة." ,
    image2 : img102 ,
    caption : "رامي الخطيب" ,
    captionimg : "مصور ماكرو",
     category : "تقنيات"
  } , 
  {
    image : img39 , 
    // span1 : "معدات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "أساسيات تعديل الصور في Lightroom" , 
    desc :  "تعلم كيفية استخدام Adobe Lightroom لتحسين صورك وإنشاء أسلوب بصري مميز." ,
    image2 : img21 ,
    caption : "سامي الحربي" ,
    captionimg : "خبير تعديل صور" ,
     category : "معدات"
  } , 
  {
    image : img40 , 
    // span1 : "معدات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "التصوير بالدرون: منظور جديد للعالم" , 
    desc : "اكتشف عالم التصوير الجوي وتعلم أساسيات استخدام الدرون لالتقاط صور من زوايا فريدة." ,
    image2 : img06 ,
    caption : "فيصل الدوسري" ,
    captionimg : "مصور جوي" ,
     category : "معدات"
  } , 
  {
    image : img41 , 
    // span1 : "معدات" ,
    // span2 : "8 دقائق للقراءة" ,
    // span3 : "6 يناير 2026 ",
    title : "RAW مقابل JPEG: متى تستخدم كلاً منهما" , 
    desc : "افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك." ,
    image2 : img19 ,
    caption : "كريم الفهد" ,
    captionimg : "خبير تقني" ,
     category : "معدات"
  } , 
]








export default function Gallery() {
  const [activeBtn, setActiveBtn] = useState("الكل");

  const [Card, setCard] = useState("الكل");

  return (
    <>
       <section className={Gallerystyle.section}>
               <div className="container">
                 <div className="row">
                
                   <div className="col-md-12 mt-5">
                     <div className={Gallerystyle.inner}>
                        <h6 className={Gallerystyle.inner}>مدونتنا</h6>
                       <h1 className='m-3'>استكشف <span className={Gallerystyle.inner}>مقالاتنا</span></h1>
                       <p className={Gallerystyle.color}>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
   
                     </div>
                   </div>
                 </div>
               
               </div>
        </section>


        <section className={Gallerystyle.sectionnav}>
          <div className="container">
  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

  
    <div className="search-box ms-auto">
      <input
        type="text"
        className="form-control w-100"
        placeholder="ابحث في المقالات..."
        dir="rtl"
        id={Gallerystyle.myinput}
      />
    </div>
<ul className="nav gap-2" dir="rtl">
  {[
    "الكل",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعيه",
    "تقنيات",
    "معدات",
  ].map((item) => (
    <li className="nav-item" key={item}>
      <button
        onClick={() => {
          setCard(item);
          setActiveBtn(item);
        }}
        className={`btn ${Gallerystyle.btn} ${
          activeBtn === item ? Gallerystyle.active : ""
        }`}
      >
        {item === "الكل" ? "جميع المقالات" : item}
      </button>
    </li>
  ))}
</ul>


  </div>



<div className="container my-5">
  <div className="row g-4">
    
    {myCard.filter((item)=> item.category == Card).map(function(card){
      return  <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

       
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={card.image}
            alt="article"
            className="img-fluid w-100"
          />

          
        </div>

        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
          {card.title}
          </h4>

          <p className={Gallerystyle.articleDesc}>
           {card.desc}
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={card.image2}
                alt="author"
              />
              <div>
                <h6> {card.caption}</h6>
                <span>{card.captionimg}</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>
    </div>
    })}

    {/* <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

       
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img2}
            alt="article"
            className="img-fluid w-100"
          />

         
        </div>

        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
            إتقان تصوير الساعة الذهبية: دليل <br />شامل
          </h4>

          <p className={Gallerystyle.articleDesc}>
            تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع
            نصائح احترافية حول الإضاءة والتكوين.
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img3}
                alt="author"
              />
              <div>
                <h6> سالم أحمد</h6>
                <span> مصور محترف</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

    
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img4}
            alt="article"
            className="img-fluid w-100"
          />

          
        </div>

 
        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>6 دقائق للقراءة</span>
            <span>•</span>
            <span>12 يناير 2026</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
            أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
          </h4>

          <p className={Gallerystyle.articleDesc}>
         "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية."
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img5}
                alt="author"
              />
              <div>
                <h6> محمد علي</h6>
                <span> مصور بورتريه</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

     
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img6}
            alt="article"
            className="img-fluid w-100"
          />

         
        </div>

  
        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
          دليل تصوير المناظر الطبيعية: من  <br />المبتدئ إلى المحترف

          </h4>

          <p className={Gallerystyle.articleDesc}>
           "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك."
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img7}
                alt="author"
              />
              <div>
                <h6> إبراهيم حسن</h6>
                <span> مصور طبيعة</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

  
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img8}
            alt="article"
            className="img-fluid w-100"
          />

        
        </div>

       
        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
           أساسيات إعدادات الكاميرا: مثلث <br />التعريض الضوئي

          </h4>

          <p className={Gallerystyle.articleDesc}>
          "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك."


          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img9}
                alt="author"
              />
              <div>
                <h6> داود خالد</h6>
                <span> مدرب تصوير</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

      
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img10}
            alt="article"
            className="img-fluid w-100"
          />

         
        </div>

      
        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
           قواعد التكوين الفوتوغرافي: كيف<br /> تجعل صورك أكثر جاذبية

          </h4>

          <p className={Gallerystyle.articleDesc}>
          "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً."
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img11}
                alt="author"
              />
              <div>
                <h6> ليث محمود</h6>
                <span> فنان بصري</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div>
    <div className="col-lg-4 col-md-6 col-sm-12">

      <div className={Gallerystyle.articleCard}>

       
        <div className={`${Gallerystyle.articleImage} position-relative`}>
          <img
            src={img12}
            alt="article"
            className="img-fluid w-100"
          />

          
        </div>

    
        <div className={Gallerystyle.articleBody}>

          <div className={Gallerystyle.articleMeta}>
            <span>8 دقائق للقراءة</span>
            <span>•</span>
            <span>5 يناير 2023</span>
          </div>

          <h4 className={Gallerystyle.articleTitle}>
       تصوير الهاتف المحمول: كيف  <br />تلتقط صوراً احترافية بهاتفك

          </h4>

          <p className={Gallerystyle.articleDesc}>
            تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع
            نصائح احترافية حول الإضاءة والتكوين.
          </p>

          <hr />

          <div className={Gallerystyle.articleFooter}>

            <div className={Gallerystyle.author}>
              <img
                src={img13}
                alt="author"
              />
              <div>
                <h6> جمال عبدالله</h6>
                <span> مصور ومراجع تقني</span>
              </div>
            </div>

            <button className={Gallerystyle.arrowBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>

          </div>
        </div>

      </div>

    </div> */}
  </div>
</div>





</div>

          
          </section> 
    </>
  )
}
