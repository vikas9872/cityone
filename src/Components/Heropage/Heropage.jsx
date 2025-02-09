import React from 'react';
import { useNavigate } from 'react-router-dom'

const Heropage = () => {
  const navigate=useNavigate();
  return (
    <div className="flex items-center h-full dark:bg-black">
      <div className="flex flex-col md:flex-row w-full h-full justify-evenly">
        <button className="flex flex-col items-center justify-center" onClick={()=>navigate("/manager")}>
          <img src="./Images/usericon.png" className="h-[150px] md:h-[300px] w-[150px] md:w-[300px]" alt="user_icon" />
          <h1 className="text-black dark:text-white">Employee</h1>
        </button>
        <button className="flex flex-col items-center justify-center" onClick={()=>navigate("/user")}>
          <img src="./Images/usericon.png" className="h-[150px] md:h-[300px] w-[150px] md:w-[300px]" alt="user_icon" />
          <h1 className="text-black dark:text-white">User</h1>
        </button>
      </div>
    </div>
  );
};

export default Heropage;
