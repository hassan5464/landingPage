"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-(--primary-color) z-99  top-0 right-0 left-0 fixed h-[105px]">
      <div className="container flex items-center justify-between  ">
        <div className="flex items-center justify-between gap-32">
          <div>
            <Link href={"/"}>
              <Image
                src={"./Logo.png.svg"}
                alt="company logo"
                width={42}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-10 *:text-white">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="relative">
                <Link href={"/"}>
                  <div className="flex items-center gap-2">
                    Services
                    <span>
                      <Image
                        src={"./chevron-down.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                </Link>
                {/* <div className="absolute w-[680px] h-[242px] top-[68px] -left-26 bg-gray-400 *:text-black transition delay-100">
                  <div className="flex flex-col gap-8 w-fit" style={{padding: "24px"}}> 
                    <span className=" absolute left-[144px] -top-14 border-28  border-r-transparent border-t-transparent border-l-transparent border-b-white"></span>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">UX/UI Design</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">Web development</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">Graphic Design</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">App Development</Link>
                  </div>
                </div> */}
              </li>
              <li  className="relative">
                <Link href={"/"}>
                  <div className="flex items-center gap-2">
                    Products
                    <span>
                      <Image
                        src={"./chevron-down.svg"}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                </Link>
                <div className="absolute w-[680px] h-[162px] top-[68px] -left-26 bg-gray-400 *:text-black transition delay-100">
                  <div
                    className="flex flex-col gap-8 w-fit"
                    style={{ padding: "24px" }}
                  >
                    <span className=" absolute left-[144px] -top-14 border-28  border-r-transparent border-t-transparent border-l-transparent border-b-white"></span>
                    <Link
                      href="/"
                      className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)"
                    >
                      E-commerce
                    </Link>
                    <Link
                      href="/"
                      className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)"
                    >
                      LMS
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href={"/"}>Projects</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-4 *:text-white">
          <div className="flex items-center gap-2 ">
            <span>EN</span>
            <Image
              src="./global.svg"
              alt="global icon"
              width={24}
              height={24}
            />
          </div>
          <button className="w-[165px] h-[52px] border border-white rounded-[50px] px-[24] py-[32px]">
            Contanct Us
          </button>
        </div>
        <div className="flex  items-center lg:hidden ">
          <button
            type="button"
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
            className=" cursor-pointer rounded-md p-2 "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className=" -inset-0.5" />
            <span className="sr-only">Open main menu</span>

            {isOpen ? (
              <svg
                className="size-[40px]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Image src="./Sort.svg" alt="sort icon" width={40} height={40} />
            )}
          </button>
        </div>

        <div
          className={` ${isOpen ? "" : "hidden"}
              absolute top-32 py-4  z-20 w-1/5  right-2  rounded-lg mr-2 `}
          id="navbar-sticky"
        >
          <div className="flex flex-col relative items-center p-6 md:p-0 mt-4 font-medium  rounded-lg   bg-(--primary-color)">
            <span className=" absolute right-10 -top-4 border-8  border-r-transparent border-t-transparent border-l-transparent"></span>
            <div className="">
              <ul className="ml-2 flex flex-col gap-1 md:gap-0 justify-center itmes-center  *:text-[18px]">
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white   rounded-sm hover:bg-black "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => (toggle ? setToggle(false) : setToggle(true))}
                >
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white  rounded-sm hover:bg-black   "
                  >
                    <div className="flex items-center gap-2">
                      Services
                      <span>
                        <Image
                          src={"./chevron-down.svg"}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </Link>
                </li>
                {/* //////////////////////// */}
                {/* {
                  toggle && <div className=" *:text-black ">
                  <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    About Us
                  </Link>
                </li>
                  </div>
                } */}
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white  rounded-sm hover:bg-black   "
                    // onClick={setToggle(true)}
                  >
                    <div className="flex items-center gap-2">
                      Products
                      <span>
                        <Image
                          src={"./chevron-down.svg"}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white rounded-sm  hover:bg-black     "
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white rounded-sm  hover:bg-black "
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
