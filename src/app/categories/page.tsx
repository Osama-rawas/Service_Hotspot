import Image from "next/image";
import React from "react";
import heroCate from "@/assets/images/heroCate.png";
import {
  HandToolsservices,
  Kitchenservices,
  Nearservices,
  Professionalsservices,
} from "@/utils/data";
import CateSecion from "@/components/CateSecion";
const page = () => {
  return (
    <div className="container mx-auto ">
      <div className="md:w-3/4  md:mx-auto">
        <div className="relative">
          <Image src={heroCate} alt="hero" className="w-full max-sm:h-56" />
          <h3 className="xl:text-4xl xl:top-[40%] xl:left-10  absolute text-white text-xl top-14 left-5">
            Find help for any task
          </h3>
          <p className="xl:text-xl xl:top-[55%] xl:left-10  absolute text-white w-[90%] text-sm top-20 left-5">
            Over 3 million people trust Service Hotspot to find and hire the
            best pros for any project. Get started today.
          </p>
          <form className=" absolute md:top-[75%] w-[90%] md:left-10 top-36 left-5  ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
                placeholder="What  do you need help with?"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
              >
                Find a pro
              </button>
            </div>
          </form>
        </div>
      </div>

      <CateSecion cates={Nearservices} heading=" Top services near you" />
      <CateSecion cates={Kitchenservices} heading="Kitchen Appliances" />
      <CateSecion cates={HandToolsservices} heading="Hand Tools" />
      <CateSecion
        cates={Professionalsservices}
        heading="Professional Services"
      />
    </div>
  );
};

export default page;
