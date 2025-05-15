import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { chessContext } from "../context/Context";

const Home = () => {
  const { connectToServer } = useContext(chessContext);
return (
  <div className="w-full md:flex-row flex flex-col h-[680px] overflow-hidden">
    <div className="left md:w-[50%] w-[100%] flex flex-col justify-center items-center h-full">
      <div className="text-5xl font-medium mb-6">
      </div>
         <Link to="/Game" className="text-md bg-[black] hover:bg-[gray] inline-block cursor-pointer p-4 px-8 transition duration-200 ease rounded-sm font-mono">
           START
         </Link>
    </div>
    <div className="right md:w-[50%] w-[100%] h-full flex justify-center items-center">
      <div className="rounded-md w-full h-screen">
        <img className="w-full h-full object-cover pointer-events-none select-none" src="/images/image.jpg" alt="" />
      </div>
    </div>
  </div>
);
};
export default Home;
