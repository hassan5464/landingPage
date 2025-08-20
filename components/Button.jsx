"use client";
import Image from "next/image";
import React from "react";

const Button = () => {
  return (
    <button
      type="button"
      className="bg-white mb-14 w-[264px] h-[64px] cursor-pointer  flex justify-between items-center px-2 rounded-[192px] "
    >
      <p className="text-(--primary-color) font-bold text-[20px] pl-2.5">
        Request a service
      </p>
      <Image src="./Frame2.svg" width="52" height={52} alt="right cursor" />
    </button>
  );
};

export default Button;
