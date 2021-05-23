import React from "react";
import MainSlider from "../MainSlider/MainSlider";
import wave from "../../assents/wave1.png";
import img1 from "../../assents/specailCard/1.jpg";
import img2 from "../../assents/specailCard/2.jpg";
import img3 from "../../assents/specailCard/3.jpg";
let data = [
  { img: img1, title: "Special Offers", desc: "Premium Garden Veggie" },
  { img: img2, title: "Special Offers", desc: "Chicken-Bacon Parmesan" },
  { img: img3, title: "Pizza", desc: "Delicious Margherita" },
];
const Offers = () => {
  return (
    <div className="bg-hero-bg  bg-cover bg-fixed relative">
      <div className="transform rotate-180 absolute -top-2">
        <img src={wave} />
      </div>
      <div className="container py-44 mx-auto">
        <p className="mx-auto flex justify-center text-5xl font-bold text-white mb-16 ">
          Special Offers
        </p>
        <div className="grid grid-cols-12 gap-y-10  ">
          {data.map((item) => {
            return (
              <div className=" flex justify-center col-span-12">
                <div
                  style={{
                    background: `url(${item.img})`,
                    backgroundSize: "cover",
                    width: 330,
                    height: 500,
                  }}
                  className=" bg-cover bg-yellow-400 rounded-3xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <p className="flex justify-center text-lg text-white font-semibold">
                      {item.title}
                    </p>
                    <p className="flex justify-center text-center text-3xl text-white font-semibold">
                      {item.desc}
                    </p>
                  </div>
                  <button className="rounded-3xl bg-yellow-400 w-full capitalize p-2">
                    add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" absolute bottom-0">
        <img src={wave} />
      </div>
    </div>
  );
};

export default Offers;
