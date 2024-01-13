import React from "react";
import MainSection from "./MainSection";

const NavBar = () => {
  return (
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
      <nav class="h-[10vh] max-md:flex max-md:justify-between max-md:p-3 text-center pt-8">
        <h1 class="text-white font-roboto max-md:text-xl text-3xl tracking-[0.4em]">
          ShopNEXT
        </h1>
        <button class="max-md:hidden absolute right-0 top-1 p-4 text-white">
          Toggle
        </button>
        <p class="text-white max-md:block hidden">Menu</p>
        <div class="menu max-md:hidden">
          <ul class="list-none flex justify-center gap-14 text-white mt-6 text-md font-light">
            <li>HOME</li>
            <li>TESTIMONIALS</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>HELP</li>
          </ul>
        </div>
      </nav>
      <MainSection />
    </div>
  );
};

export default NavBar;
