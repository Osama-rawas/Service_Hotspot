"use client";
import Image from "next/image";
import React from "react";
import servicesHome from "@/assets/images/servicesHome.png";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/utils/data";
import { useRouter } from "next/navigation";

const ServicesPage = () => {
  const router = useRouter();
  return (
    <div className="container m-auto fix-height my-5">
      <div className="relative flex justify-center">
        <Image src={servicesHome} alt="servicesHome" />
      </div>
      <div className="text-center my-4">
        <h2 className="font-bold text-xl leading-7">
          Featured services near you
        </h2>
      </div>
      <div className="my-2 flex justify-center gap-5">
        {servicesData.map((service) => (
          <div key={service.id}>
            <ServiceCard services={service} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center flex-col w-2/5 m-auto">
        <button
          type="button"
          className="text-text_black bg-bg_btn focus:outline-none hover:bg-gray-300  font-bold text-md rounded-xl  text-sm px-5 py-3 me-2 m-3 mb-8 "
        >
          More services nearby
        </button>

        <button
          type="button"
          className="text-text_white  bg-blue-600  focus:outline-none hover:bg-blue-700 font-bold text-md rounded-xl  text-sm px-5 py-3 m-3 me-2 mb-5"
          onClick={() => router.push("/login")}
        >
          Log in
        </button>

        <span className="text-center text-text_gray text-sm mb-2">Or</span>
        <button
          type="button"
          className="text-text_black bg-bg_btn focus:outline-none hover:bg-gray-300  font-bold text-md rounded-xl  text-sm px-5 py-3 me-2 m-3 mb-5"
          onClick={() => router.push("/register")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
