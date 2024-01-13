import React from "react";
import MainSection from "./MainSection";
import { Rotate as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const NavLink = ({ text }) => (
  <li className="w-full p-14 cursor-pointer duration-300 hover:bg-[#407a7d] flex justify-center items-center hover:text-xl text-gray-400">
    {text}
  </li>
);

const NavBar = ({ isOpen, setOpen }) => (
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
          {["HOME", "TESTIMONIALS", "SHOP", "ABOUT", "HELP"].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </nav>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -900 }}
        animate={{ opacity: 0.93, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        exit={{ y: 900 }}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="h-screen w-full absolute top-0 z-0 bg-[#0a3639] flex flex-col items-center ">
          <ul className="h-screen w-full flex justify-center flex-col items-center gap-2">
            {["HOME", "TESTIMONIALS", "SHOP", "ABOUT", "HELP"].map((text) => (
              <NavLink key={text} text={text} />
            ))}
          </ul>
        </div>
      </motion.div>
    )}

    <MainSection />
  </div>
);

export default NavBar;
