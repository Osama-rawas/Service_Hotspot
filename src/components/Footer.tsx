import Image from "next/image";
import React from "react";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import instagram from "@/assets/icons/instagram.png";
const Footer = () => {
  return (
    <footer className="w-full bg-bg_main ">
      <div className=" p-4  ">
        <ul className="flex justify-around flex-wrap mx-20 mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline text-text_nav">
              Help
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-text_nav">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-text_nav">
              Terms
            </a>
          </li>
        </ul>
        <ul className="flex justify-center flex-wrap gap-5 mt-2 ">
          <li>
            <Image src={facebook} alt="facebook" className="h-6 w-6" />
          </li>
          <li>
            <Image src={twitter} alt="twitter" className="h-6 w-6" />
          </li>
          <li>
            <Image src={instagram} alt="instagram" className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
