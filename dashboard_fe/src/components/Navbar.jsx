import React from "react";
import "../index.css";
import {AiOutlineMenu,AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-5 space-x w-full bg-sky-500 p-5 space mr-10 text-white">
      <div className="flex flex-row space-x-5 align-center">
        <AiOutlineMenu className="hover:mouse-pointer mt-2" fontSize={18} height={30} width={30} />
        <h2 className="items-center text-lg font-bold hover:italic">
          Supermarket Dash
        </h2>
      </div>
      <div className="flex flex-row space-x-5">
        <div className="flex flex-row">
          <input
            className="border-slate-200 placeholder-slate-400 contrast-more:placeholder-slate-500 block w-full px-4 py-2 text-sky-700 bg-white rounded-l-2xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
            placeholder="Search"
          />
          <button className="px-3 text-white bg-purple-600 rounded-r-2xl">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <div className="flex flex-row space-x-5 mt-2 text-white">
          <p>Dash</p>
          <p>Tables</p>
          <p>EDA</p>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
