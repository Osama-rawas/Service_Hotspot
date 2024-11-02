"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Intro = () => {
  const router = useRouter();
  return (
    <div className="container fix-height flex justify-center items-center ">
      <div className=" text-center">
        <h1 className="font-bold text-3xl text-text_black leading-10">
          Discover the best services for you
        </h1>
        <p className="text-sm leading-6 my-3">
          Get the best services and be a participant in the best experience
        </p>
        <div className="mt-12">
          <button
            type="button"
            className="text-text_white bg-blue-600 w-full focus:outline-none hover:bg-blue-700  font-bold text-md rounded-xl  text-sm px-5 py-3 me-2 mb-2 mt-2"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
          <button
            type="button"
            className="text-text_black bg-bg_btn w-full focus:outline-none hover:bg-gray-300  font-bold text-md rounded-xl  text-sm px-5 py-3 me-2 mb-2 mt-2"
            onClick={() => router.push("/register")}
          >
            Sign up
          </button>
        </div>
        <Link href="/services" className="flex justify-end items-center gap-1">
          Continue as a guest
          <FaRegArrowAltCircleRight className="pt-1" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
