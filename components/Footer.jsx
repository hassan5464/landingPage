"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MoveUp } from "lucide-react";
import Button from "./Button";

const Footer = () => {
  const scrollTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-(--primary-color) min-h-[610px]   py-[48px] w-full sticky bottom-0 top-[610px] left-0 right-0 ">
      <div className="container ">
        <div className="flex flex-col  justify-center items-center border-b border-b-gray-200">
          <h3 className="font-bold text-center white  mb-5 text-[48px]">
            Want To Know More About
            <br /> Us? We Got You!
          </h3>
          <p className="w-1/2 text-center mb-10 text-gray-300">
            We are always ready to answer your questions. Contact us and let us
            <br />
            know about your requirements. We’ll be glad to help!
          </p>
          <Button />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mt-10">
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link href={"/"}>
                <Image
                  src={"./linkedin.svg"}
                  width={24}
                  height={30}
                  alt="linkdin logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"./instagram.svg"}
                  width={24}
                  height={28}
                  alt="instgram logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image
                  src={"./facebook.svg"}
                  width={28}
                  height={28}
                  alt="facebook logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Image src={"./x.svg"} width={28} height={30} alt="x logo" />
              </Link>
            </li>
          </ul>

          <button onClick={scrollTop} className="white cursor-pointer" >
            <MoveUp color="white" size={14} className="inline" />
            Take me back to the top
          </button>

          <ul className="flex items-center justify-between gap-4 *:white">
            <li>
              <Link href={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href={"/"}>Help Center</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
