import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiUser,BiFemaleSign,BiMaleSign } from "react-icons/bi";


const CreateAccPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [data, setData] = useState({
    name: "",
    gender: "",
  });



  const seeLocal = localStorage.getItem("showIntro");

  const exitHandler = (e) => {
    localStorage.clear();
    navigate("/");
  };
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
   
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div
      dir="rtl"
      className="container bg-gradient-to-r font-vazirB text-violet-900 from-stone-50 to-violet-100 w-screen h-screen p-4 flex items-center  flex-col"
    >
      <h3>ایجاد پروفایل</h3>
   
      <div>
        <form onSubmit={submitHandler}>
          <div className="relative ">
            <label htmlFor="name" className="absolute  px-3 py-2  ">
              <BiUser size={23}></BiUser>
            </label>
            <input
              onChange={inputHandler}
              id="name"
              type="text"
              name="name"
              className="w-80 h-10 rounded-full border-gray-300 border  focus:border-gray-100 outline-1 pr-10 outline-violet-800"
            />
          </div>
          <div className="w-80 h-10 rounded-full mt-10 border-gray-300 border flex items-center justify-around">
            <label
              className={`${gender === "male" && "bg-violet-300 border-violet-600 border-2 text-white "} flex justify-center items-center w-1/2 h-full overflow-hidden rounded-r-full font-vazirB text-sm `}
              onClick={() => {
                setGender("male");
              }}
              name="male"
              htmlFor="male"
            >
              <input
                onClick={inputHandler}
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="hidden"
              />
              مـرد
            </label>

            <label
              className={`${gender === "female" && "bg-violet-300 border-violet-600 border-2 text-white"} flex justify-center items-center w-1/2 h-full overflow-hidden rounded-l-full font-vazirB text-sm`}
              onClick={() => {
                setGender("female");
              }}
              name="female"
              htmlFor="female"
            >
              <input
                onClick={inputHandler}
                type="radio"
                name="gender"
                value="female"
                id="female"
                className="hidden"
              />
              زن
            </label>
          </div>
          <div className="w-80 h-10 rounded-full mt-10 border-gray-300 border flex items-center justify-around">

          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={exitHandler}>Exit</button>
    </div>
  );
};

export default CreateAccPage;
