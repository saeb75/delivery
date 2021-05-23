import React from "react";
import Slider from "react-slick";
import "./style.css";
import pitza1 from "../../assents/pitza/1.png";
import pitza2 from "../../assents/pitza/2.png";
import pitza3 from "../../assents/pitza/3.png";
import { GoPlus } from "react-icons/go";
let dataSlider = [
  { img: pitza1, title: "Thin and Crispy Ortolana", desc: "" },
  { img: pitza2, title: "Mushroom and Mascarpone ", desc: "" },
  { img: pitza3, title: "Sweet and Spicy Pepperoni", desc: "" },
];
const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    arrows: false,

    customPaging: (i) => (
      <div className="costumDots mt-25">
        <span></span>
      </div>
    ),
  };
  return (
    <div className="container mx-auto grid-cols-12 px-5 py-20 ">
      <div>
        {dataSlider.length > 0 && (
          <Slider {...settings}>
            {dataSlider.map((item) => {
              return (
                <div>
                  <div>
                    <div className="flex justify-center items-center ml-5">
                      <img src={item.img} />
                    </div>
                    <div className="animeSlide">
                      <h1 className="text-4xl font-bold text-white">
                        {item.title}adsadasd
                      </h1>
                      <p className="mt-5 text-lg text-white mb-5">
                        100 % Grass-fed beef patty, cheddar cheese, special
                        sauce, tomato, pickles, lettuce, sesame seed bun
                      </p>
                      <div>
                        <div className="w-60 h-16 bg-white rounded-full pl-10 pr-2 py-10 flex justify-between items-center mb-10">
                          <div>
                            <h3 className="text-3xl font-bold">$12.00</h3>
                            <p className="text-gray-500">220gr/600cal</p>
                          </div>
                          <div className="flex text-3xl justify-center items-center bg-yellow-400 rounded-full w-16 h-16">
                            <GoPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default MainSlider;
