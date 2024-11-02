import { serviceCard } from "@/utils/types";
import Image from "next/image";
import React from "react";
interface Cateprops {
  cates: serviceCard[];
  heading: string;
}
const CateSecion = (props: Cateprops) => {
  return (
    <div className="mt-4 mx-auto w-3/4 ">
      <h3 className="text-xl font-bold leading-7 ">{props.heading}</h3>
      <div className="grid  md:grid-cols-4 md:gap-16 grid-cols-2 gap-5 mt-2 mb-3">
        {props.cates.map((serv) => (
          <div key={serv.id} className="cursor-pointer">
            <Image src={serv.image} alt="services" />
            <h4 className="my-1">{serv.title}</h4>
          </div>
        ))}
      </div>
      <div className=" flex justify-center">
        <button
          type="button"
          className="text-text_black bg-bg_btn focus:outline-none hover:bg-gray-300  font-bold text-md rounded-xl  text-sm px-5 py-3 me-2 mb-3"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default CateSecion;
