import { IFormValues } from "@/utils/types";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

interface InputTextProps {
  id: string;
  lblText: string;
  type: string;
  required?: boolean;
  placeHolder: string;
  helperText?: string;
  pattern?: string;
  maxLength?: number;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}
const InputText = (props: InputTextProps) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-text_black"
      >
        {props.lblText}
      </label>
      <input
        type={props.type}
        id={props.id}
        aria-describedby="helper-text-explanation"
        className="bg-text_white border border-border_gray text-text_nav text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:outline-none"
        required={props.required}
        placeholder={props.placeHolder}
        pattern={props.pattern}
        maxLength={props.maxLength}
        {...props.register(props.label)}
      />
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        {props.helperText}
      </p>
    </>
  );
};

export default InputText;
