import React from "react";
import img1 from "../../assents/font/1.png";
import img2 from "../../assents/font/2.png";
import img3 from "../../assents/font/3.png";
import PizzaMethod from "../PizzaMethod/PizzaMethod";
let data = [
  {
    img: img1,
    title: "Choose Pizza",
    desc:
      "User generated content in will have multiple touchpoints for offshoring.",
  },
  {
    img: img2,
    title: "Delivery or Takeaway",
    desc: "Nanotechnology immersion along the information will close the loop.",
  },
  {
    img: img3,
    title: "Enjoy Pizza",
    desc: "Praesent interdum mollis neque. In along egestas nulla eget pede.",
  },
];
const DeleveryWay = () => {
  return (
    <div className="bg-primary py-24">
      <div className="container mx-auto ">
        <p className="flex justify-center mx-auto w-64 text-center text-red-600 text-4xl font-bold">
          Fresh Pizza. Delivered.
        </p>
        <div className=" grid grid-cols-12 gap-y-10  my-16 ">
          {data.map((item) => {
            return (
              <div className="flex flex-col items-center col-span-12 justify-center">
                <img src={item.img} />
                <h2 className="text-2xl font-bold mt-3">{item.title}</h2>
                <p className="text-center w-56 mt-6">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <PizzaMethod />
      </div>
    </div>
  );
};

export default DeleveryWay;
