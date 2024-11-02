"use client";
import React from "react";
import InputText from "@/components/inputs/InputText";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "@/utils/types";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="container fix-height flex  items-center flex-col">
      <h2 className="text-black font-bold text-2xl leading-8 mt-7 mb-1 ">
        Log in to Service Hotspot
      </h2>

      <form
        className="max-w-xl mx-auto mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <InputText
            required
            id="userName"
            lblText="UserName"
            type="text"
            placeHolder="UserName"
            helperText="Usernames must be at least 3 characters long and can contain letters,
        numbers, periods, and underscores."
            register={register}
            label="UserName"
          />
        </div>
        <div className="mb-1">
          <InputText
            id="password"
            lblText="password"
            type="password"
            required={true}
            placeHolder="***********"
            register={register}
            label="password"
          />
        </div>
        <p id="helper-text-explanation" className="text-sm text-text_gray ">
          Forgot password ?
        </p>
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-white bg-bg_btn_blue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center w-28 mt-8 mb-6"
          >
            Log in
          </button>
        </div>
        <Link href="/register" className="text-sm text-text_gray ">
          Don’t have an account ?
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
