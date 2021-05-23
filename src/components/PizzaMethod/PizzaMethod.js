import React from "react";
import pizzaHand from "../../assents/bg/1.png";
import pizzaHand2 from "../../assents/bg/2.jpg";
import { IoIosArrowDropright } from "react-icons/io";
const PizzaMethod = () => {
  return (
    <div className="bg-white grid grid-cols-12 gap-y-10 overflow-hidden ">
      <div style={{ height: 530 }} className="relative p-6   col-span-12 ">
        <img src={pizzaHand} className=" absolute bottom-0 left-0 w-full" />
        <div>
          <p className="text-2xl w-72 font-bold ">
            Great pizza is all about using the right ingredients and honoured
            methods of preparation.
          </p>
          <p className="uppercase flex items-center text-red-700 font-bold text-sm mt-4">
            read more{" "}
            <span className="ml-1 text-xl">
              <IoIosArrowDropright />
            </span>
          </p>
        </div>
      </div>
      <div className="relative p-6   col-span-12">
        <div className="rounded-3xl overflow-hidden">
          <img src={pizzaHand2} />
        </div>
      </div>
    </div>
  );
};

export default PizzaMethod;
