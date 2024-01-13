import React from "react";

const MainSection = () => {
  return (
    <div class="contain h-screen flex flex-col justify-center opacity-100 max-md:gap-4 max-md:pl-5 p-10 gap-5 text-justify">
      <p class="text-white max-md:text-xl text-3xl">A Whole New Look </p>
      <h1 class="max-md:text-5xl text-white text-8xl font-roboto font-bold max-md:font-medium">
        BEAUTY Pronounced
      </h1>
      <p class="max-md:text-sm text-white text-xl max-md:w-full w-[50%] leading-8">
        Welcome to ShopNEXT, where beauty meets elegance! Our beauty shop is a
        haven for those who seek to enhance their natural radiance and indulge
        in luxurious self-care experiences. Step into a world of glamour and
        sophistication, where our curated selection of premium beauty products
        and services awaits.
      </p>
      <button class="border border-white text-white max-md:w-[30%] max-md:h-[7vh] w-[10%] h-[8vh] shadow-2xl hover:shadow-[#51a7af9c]">
        View More
      </button>
    </div>
  );
};

export default MainSection;
