import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom"

const IntroPage = () => {

const navigate = useNavigate()


  const profileHandler =()=>{

    navigate("/acc")
    localStorage.setItem("page",'existAcc')

  }

   useEffect(()=>{
    const local = localStorage.getItem("page")
    if(local){
      navigate("/acc")

    }


   },[])
    return ( 
        <div className="container bg-gradient-to-r from-stone-50 to-violet-100 w-screen h-screen p-4 flex items-center  flex-col">
        <div>
          <img src='https://s6.uupload.ir/files/untitled-1_shg.png' alt='blood-logo'/>
        </div>
        <div dir='rtl' className='px-2 w-full h-full  flex flex-col items-start justify-center'>
          <h1 className='font-vazirB  text-gray-700 mb-3'>تفسیر آزمایش خـون</h1>
          <span className='font-vazirL text-justify'>
  
          این برنامه سعی می‌کند تا دید نسبتاً کاملی از وضعیت نتیجه آزمایش خون خود داشته باشید، البته <span className='text-red-500'> هیچکس مانند پزشک نمی‌تواند</span> به شما کمک کند. زیرا تنها با نتیجه آزمایش نمی‌توان در مورد بیماری یا میزان پیشرفت درمان اظهار نظر کرد.
  
          </span>
        </div>
        
        <div className='w-full h-full  flex items-center justify-center'>
        <button className=' px-12 py-2  hover:ring-violet-300 hover:ring-4 rounded-3xl bg-violet-500 font-vazirL text-violet-100' onClick={profileHandler}>ایجاد پروفایل</button>
        </div>
      </div>
     );
}
 
export default IntroPage;