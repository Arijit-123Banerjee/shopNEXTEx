import React, { useState } from "react";
import MainSection from "./MainSection";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
      <nav className="h-[10vh] max-md:flex max-md:justify-between max-md:items-center max-md:p-3 text-center pt-8">
        <h1 className="text-white font-roboto max-md:text-xl text-3xl tracking-[0.4em]">
          ShopNEXT
        </h1>
        <button className="max-md:hidden absolute right-0 top-1 p-4 text-white">
          Toggle
        </button>
        <div className="text-white max-md:block hidden z-10">
          <Hamburger size={21} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="menu max-md:hidden">
          <ul className="list-none flex justify-center gap-14 text-white mt-6 text-md font-light">
            <li>HOME</li>
            <li>TESTIMONIALS</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>HELP</li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="h-screen w-[100%] bg-green-800 absolute top-0 z-0 "></div>
      )}
      <MainSection />
    </div>
  );
};

export default NavBar;
