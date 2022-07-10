import './App.css';

function App() {
  return (
    <div className="container bg-red-50 w-screen h-screen p-4 flex items-center  flex-col">
      <div>
        <img src='https://s6.uupload.ir/files/untitled-1_shg.png' alt='blood-logo'/>
      </div>
      <div dir='rtl'>
        <h1 className='font-vazirB  text-gray-700'>تفسیر آزمایش خـون</h1>
        <br/>
        <span className='font-vazirL'>برنامه تفسیر آزمایش خون به شما کمک میکند بدون نیاز به دکتر ، ازمایش خود را تفسیر کنید</span>
      </div>
      
      <div className='w-full h-full  flex items-center justify-center'>
      <button className=' px-12 py-2  hover:ring-4 rounded-3xl bg-blue-500 font-vazirL text-blue-100'>ایجاد پروفایل</button>
      </div>
    </div>
  );
}

export default App;
