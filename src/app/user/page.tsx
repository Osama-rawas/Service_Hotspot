import Image from "next/image";
import user from "@/assets/images/user.jpg";
import { Comments, servicesData } from "@/utils/data";
import ServiceCard from "@/components/ServiceCard";

import { CommentsType } from "@/utils/types";
import Comment from "@/components/Comment";
const UserPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-5">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col w-2/6">
          <Image src={user} alt="user" className="w-32 h-32 rounded mx-auto" />
          <p className=" text-text_black font-bold leading-7 text-lg mt-1">
            Belal Belal
          </p>
          <p className=" leading-6 text-text_gray">San Francisco, California</p>
          <div className="flex justify-between ">
            <p className=" leading-6 text-text_gray">5 reviews</p>
            <p className=" leading-6 text-text_gray">4.7</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className=" leading-6 text-text_black font-bold">Available</p>
            <p className=" leading-6 text-[#3A8996] font-bold">Fri-Mon</p>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-center font-bold mb-5 leading-7">Bio</h4>
          <p>
            I&apos;m a freelance artist based in San Francisco. I specialize in
            abstract paintings and murals. My style is very colorful and
            vibrant. I love to make my work as unique as possible. I&apos;m open
            to any type of project, so feel free to reach out!
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center font-semibold text-3xl leading-7">
          Professional Services
        </h2>
        <div className="grid grid-cols-3 mt-5 gap-10">
          {servicesData.map((service) => (
            <div key={service.id}>
              <ServiceCard services={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center font-semibold text-3xl leading-7">
          For Rent
        </h2>
        <div className="grid grid-cols-3 mt-5 gap-10">
          {servicesData.map((service) => (
            <div key={service.id}>
              <ServiceCard services={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center font-semibold text-3xl leading-7">
          Comments
        </h2>
        {Comments.map((comment: CommentsType, index) => (
          <div key={index}>
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
