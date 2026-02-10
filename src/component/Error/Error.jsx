import React from 'react'
import Errorstyle from './Error.module.css'
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
        <div className={Errorstyle.errorWrapper}>
      <div className={Errorstyle.overlay} />

      <div className={Errorstyle.content}>

        <h1 className={Errorstyle.code}>404</h1>

        <div className={Errorstyle.iconWrapper}>
          <span className={Errorstyle.dot}></span>
          <div className={Errorstyle.circle}>
            <span className={Errorstyle.face}>☹</span>
          </div>
          <span className={Errorstyle.smallDot}></span>
        </div>

        <h2 className={Errorstyle.title}>عفوًا! الصفحة غير موجودة</h2>

        <p className={Errorstyle.desc}>
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها، دعنا نعيدك إلى
          المسار الصحيح.
        </p>

        <div className={Errorstyle.actions}>
          <Link to="/" className={Errorstyle.primaryBtn}>
            الذهاب للرئيسية
          </Link>

          <Link to="/articles" className={Errorstyle.secondaryBtn}>
            تصفح المقالات
          </Link>
        </div>

      </div>
    </div>
    </>
  )
}
