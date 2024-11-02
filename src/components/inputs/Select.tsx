import { Option } from "@/utils/types";
import React from "react";
interface selectProps {
  id: string;
  lblText: string;
  options: Option[];
}
const options = (array: Option[]) => {
  return array.map((option, index) => (
    <option key={index} value={option.value}>
      {option.name}
    </option>
  ));
};

const Select = (props: selectProps) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-text_black "
      >
        {props.lblText}
      </label>
      <select
        id={props.id}
        className="bg-text_white border border-border_gray text-text_nav  text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:outline-none "
      >
        {options(props.options)}
      </select>
    </>
  );
};

export default Select;
