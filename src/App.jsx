import React from "react";
import BeautyProduct from "./Components/HeroSectionPage/BeautyProduct";
import NavBar from "./Components/HeroSectionPage/NavBar";

import BackgroundIMG from "./photos/BackgroundIMG.jpg"; // Make sure to provide the correct file extension

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
