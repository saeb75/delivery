import React from "react";
import MainSlider from "../MainSlider/MainSlider";
import wave from "../../assents/wave1.png";
const Hero = () => {
  return (
    <div className="bg-hero-bg h-full bg-cover bg-center flex flex-col items-center justify-center ">
      <MainSlider />
      <div>
        <img src={wave} />
      </div>
    </div>
  );
};

export default Hero;
