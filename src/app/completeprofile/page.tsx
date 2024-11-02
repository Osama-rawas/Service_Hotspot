"use client";
import InputText from "@/components/inputs/InputText";
import Select from "@/components/inputs/Select";
import Timetable from "@/components/inputs/Timetable";
import { countries, paymentMethod } from "@/utils/data";
import { IFormValues } from "@/utils/types";
import { SubmitHandler, useForm } from "react-hook-form";

const CompleteProfilePage = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-xl mx-auto ">
      <h2 className="text-black font-bold text-2xl leading-8 mt-7 mb-1 ">
        Complete your profile
      </h2>
      <div className="text-text_gray text-sm flex gap-1 mb-4">
        <p>
          Add your nickname, address, accepted payment method, and optional
          gender/sex
        </p>
      </div>

      <form className="max-w-xl mx-auto mb-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center mb-5">
          <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full ">
            <svg
              className="absolute w-22 h-22 -bottom-2 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <button
                type="button"
                className="   outline-none font-medium rounded-lg text-sm "
              >
                <svg
                  className="w-6 h-6 text-text_gray "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-4">
          <div className="mb-5">
            <InputText
              id="nikeName"
              lblText="Nickname"
              type="text"
              required={true}
              placeHolder="Nike Name...."
              register={register}
              label="nikeName"
            />
          </div>
          <div className="mb-5">
            <Select
              id="countries"
              lblText="Country or Region"
              options={countries}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-5">
            <InputText
              id="AddressLine1"
              lblText="Address Line 1"
              type="text"
              required={true}
              placeHolder="Musterstraße 1, 10115 Berlin, Germany"
              helperText="Street address ,P.O. box, Company name, c/o."
              register={register}
              label="AddressLine1"
            />
          </div>
          <div className="mb-5">
            <InputText
              id="AddressLine2"
              lblText="Address Line 2"
              type="text"
              required={true}
              placeHolder="Appartment, Suite, unit , building , floor ,etc."
              helperText="Appartment, Suite, unit , building , floor ,etc."
              register={register}
              label="AddressLine2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-5">
            <InputText
              id="city"
              lblText="City"
              type="text"
              required={true}
              placeHolder="City..."
              register={register}
              label="City"
            />
          </div>
          <div className="mb-5">
            <InputText
              id="State"
              lblText="State/Province/Region"
              type="text"
              required={true}
              placeHolder="State/Province/Region"
              register={register}
              label="State/Province/Region"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-5">
            <InputText
              id="zip"
              lblText="ZIP/Postal Code"
              type="text"
              required={true}
              placeHolder="ZIP/Postal Code"
              register={register}
              label="ZIP/Postal Code"
            />
          </div>
          <div className="mb-5">
            <Select
              id="Payment"
              lblText="Accepted Payment Method"
              options={paymentMethod}
            />
          </div>
        </div>
        <div className="text-text_black  flex gap-1 mb-4 leading-6 font-bold text-lg">
          <p>Availability timetable</p>
        </div>
        <Timetable />
        <button
          type="submit"
          className="  w-28 text-white bg-bg_btn_blue hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center mt-6 "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CompleteProfilePage;
