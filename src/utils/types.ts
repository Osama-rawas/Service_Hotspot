import { StaticImageData } from "next/image";
declare module "*.png" {
  export const value: string;
}
export type StringOrNumber = string | number;
export type services = {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
  per: string;
};
export type serviceCard = {
  id: number;
  image: StaticImageData;
  title: string;
};

export type Option = {
  value: StringOrNumber;
  name: string;
};
export type CommentsType = {
  userName: string;
  rate: number;
  date: string;
  text: string;
  userImage: StaticImageData;
};
// for input forms
export interface IFormValues {
  UserName: string;
  password: string;
  code: number;
  email: string;
  nikeName: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  "State/Province/Region": string;
  "ZIP/Postal Code": string;
}
