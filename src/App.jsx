import React from "react";
import BeautyProduct from "./Components/HeroSectionPage/BeautyProduct";
import NavBar from "./Components/HeroSectionPage/NavBar";

import BackgroundIMG from "../src/backgroundIMG.jpg";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div
        className="bg-cover bg-no-repeat bg-center h-screen bg-fixed relative "
        style={{ backgroundImage: `url(${BackgroundIMG})` }}
      >
        <NavBar />
      </div>
      <BeautyProduct />
    </div>
  );
};

export default App;
