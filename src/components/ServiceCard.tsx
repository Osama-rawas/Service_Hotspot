import Image from "next/image";
import React from "react";
import star from "@/assets/icons/star.png";
import { services } from "@/utils/types";
interface ServicesItemProps {
  services: services;
}
const ServiceCard = ({ services }: ServicesItemProps) => {
  return (
    <div>
      <Image src={services.image} alt="drill" />
      <div className="flex flex-col  gap-1">
        <p className="text-text_black font-medium leading-6 text-sm mt-1">
          {services.title}
        </p>
        <div className="flex justify-between text-text_gray">
          <p className="text-sm">
            <span>{services.price}</span>
            <span>/</span>
            <span>{services.per}</span>
          </p>
          <div className="flex gap-1">
            <Image src={star} alt="star" className="h-5 w-5" />
            <Image src={star} alt="star" className="h-5 w-5" />
            <Image src={star} alt="star" className="h-5 w-5" />
            <Image src={star} alt="star" className="h-5 w-5" />
            <Image src={star} alt="star" className="h-5 w-5" />
          </div>
        </div>
        <div className="flex justify-between text-text_gray">
          <p className="text-sm">6 reviews</p>
          <p className="text-sm"> 4.8</p>
        </div>
        <a href="">More Details </a>
      </div>
    </div>
  );
};

export default ServiceCard;
