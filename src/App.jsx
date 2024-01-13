import { React, useState } from "react";
import BeautyProduct from "./Components/HeroSectionPage/BeautyProduct";
import NavBar from "./Components/HeroSectionPage/NavBar";
import BackgroundIMG from "../src/backgroundIMG.jpg";
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="bg bg-cover bg-no-repeat h-screen bg-fixed relative max-md:bg-[60%] bg-left "
            style={{
              backgroundImage: `url(${BackgroundIMG})`,
            }}
          >
            <NavBar isOpen={isOpen} setOpen={setOpen} />
          </div>
        </motion.div>
      </motion.div>
      <BeautyProduct />
    </div>
  );
};

export default App;
