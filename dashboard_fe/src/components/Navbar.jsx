import React from "react";
import "../index.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClicked = (e) => {
    navigate("/");
  };
  return (
    <nav className="flex flex-row space-x-5 space-x w-full bg-sky-500 p-5 space mr-10 text-white">
      <div className="flex flex-row space-x-5 align-center">
        <div className="hover:cursor-pointer mt-2">
          <AiOutlineMenu
            fontSize={18}
            height={30}
            width={30}
          />
        </div>
        <h2
          className="items-center text-lg font-bold hover:italic cursor-pointer"
          onClick={handleLogoClicked}
        >
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
          <Link to={"/"} replace className="hover:underline cursor-pointer">
            Dash
          </Link>
          <Link
            to={"/tables"}
            replace
            className="hover:underline cursor-pointer"
          >
            Tables
          </Link>
          <Link
            to={"/charts"}
            replace
            className="hover:underline cursor-pointer"
          >
            EDA
          </Link>
          <Link
            to={"/account"}
            replace
            className="hover:underline cursor-pointer"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
