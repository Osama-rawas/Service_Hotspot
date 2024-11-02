"use client";
import InputText from "@/components/inputs/InputText";
import { IFormValues } from "@/utils/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-xl mx-auto ">
      <h2 className="text-black font-bold text-2xl leading-8 mt-7 mb-1 ">
        Create your account
      </h2>
      <div className="text-text_gray text-sm flex gap-1 mb-4">
        <p>Already have an account? </p>
        <a href=""> Sign in</a>
      </div>

      <form
        className="max-w-xl mx-auto mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <InputText
            id="phoneNumber"
            lblText=" Phone number:"
            type="text"
            required={true}
            placeHolder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            register={register}
            label="UserName"
          />

          <button
            type="button"
            className="text-text_white bg-bg_btn_blue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:border-gray-500 font-medium rounded-xl text-sm  sm:w-auto px-5 py-2.5 text-center mt-3"
          >
            Send Code
          </button>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-text_gray"
          >
            We&apos;ll send you a 6-digit code to verify your phone number.
          </p>
        </div>
        <div className="mb-5">
          <InputText
            id="code"
            lblText="Enter code"
            type="text"
            required={true}
            placeHolder="123456"
            pattern="[0-9]{6}"
            maxLength={6}
            register={register}
            label="code"
          />
        </div>
        <div className="mb-5">
          <InputText
            id="userName"
            lblText="Username"
            type="text"
            required={true}
            placeHolder="Your username"
            helperText="  Usernames must be at least 3 characters long and can contain
            letters, numbers, periods, and underscores."
            register={register}
            label="UserName"
          />
        </div>
        <div className="mb-5">
          <InputText
            id="Password"
            lblText="  Password (4-digit PIN)"
            type="password"
            required={true}
            placeHolder="****"
            helperText="Your password must be at least 4 characters long."
            maxLength={4}
            register={register}
            label="password"
          />
        </div>
        <div className="mb-5">
          <InputText
            id="email"
            lblText=" Email address"
            type="email"
            required={true}
            placeHolder="your@example.com"
            register={register}
            label="email"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-bg_btn_blue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center w-full "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
