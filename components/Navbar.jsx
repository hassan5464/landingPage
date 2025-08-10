"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openNav, setOpenNav] = useState("");

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
              <li className="relative" 
              onClick={() => (openNav ?setOpenNav("") : setOpenNav("service"))}>
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

                { openNav === "service" ? <div className="absolute w-[680px] h-[242px] top-[68px] -left-26 bg-white *:text-black transition delay-100">
                  <div className="flex flex-col gap-8 w-fit" style={{padding: "24px"}}> 
                    <span className=" absolute left-[144px] -top-14 border-28  border-r-transparent border-t-transparent border-l-transparent border-b-white"></span>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">UX/UI Design</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">Web development</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">Graphic Design</Link>
                    <Link href="/" className="hover:text-(--primary-color) hover:border-b hover:border-b-(--primary-color)">App Development</Link>
                  </div>
                </div>: "" }
              </li>
              <li  className="relative" 
              onClick={() => (openNav ?setOpenNav("") : setOpenNav("product"))}>
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
                {openNav === "product" ? 
                <div className="absolute w-[680px] h-[162px] top-[68px] -left-26 bg-white *:text-black transition delay-100">
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
                : ""}
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
          <button className="flex items-center gap-2 cursor-pointer">
            <span>EN</span>
            <Image
              src="./global.svg"
              alt="global icon"
              width={24}
              height={24}
            />
          </button>
          <button className="w-[165px] h-[52px] border cursor-pointer border-white rounded-[50px] ">
            Contanct Us
          </button>
        </div>




                         {/* Mobil button menu */}
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
                className="size-[40px] text-white"
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
              <svg
                    className="size-[40px] text-white"
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
            )}
          </button>
        </div>
               {/* Mobil Nav */}
        <div
          className={` ${isOpen ? "" : "hidden"}
              absolute top-30 py-4  z-20 w-1/3  right-2  rounded-lg mr-2 `}
          id="navbar-sticky"
        >
          <div className="relative  font-medium  rounded-lg   bg-(--primary-color)" >
            <span className=" absolute right-8 -top-9 border-18   border-r-transparent border-t-transparent border-l-transparent"></span>
            <div className="" >
              <ul className=" flex flex-col  justify-center items-start *:text-[18px]">
                <li className="">
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white text-center  rounded-sm hover:bg-black "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => (openNav ?setOpenNav("") : setOpenNav("service"))}
                  className="transition delay-200"
                >
                  <Link
                    href="#"
                    className="block py-2 px-3  text-white text-center rounded-sm hover:bg-black   "
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
                {
                  openNav === "service" ? <div className=" *:text-black ml-3 ">
                  <li  >
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    UX/UI Design



                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3   "
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    Web development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3   "
                  >
                    App Development
                  </Link>
                </li>
                
                  </div> :""
                }
                <li>
                  <Link
                    href="#"
                    className="block px-3 py-3 text-white text-center rounded-sm hover:bg-black   "
                    onClick={() => (openNav ?setOpenNav(""): setOpenNav("product"))}
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
                 {
                  openNav === "product" ? <div className=" *:text-black ml-3">
                  <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    E-commerce



                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 px-3  rounded-sm  "
                  >
                    LMS
                  </Link>
                </li>
                
                
                
                  </div>: " "
                }
                <li className="" >
                  <Link
                    href="#"
                    className="block py-2 px-3 text-center  text-white rounded-sm  hover:bg-black     "
                  >
                    Projects
                  </Link>
                </li>
                <li className=" " >
                  <Link
                    href="#"
                    className="block py-2 px-3 text-center text-white rounded-sm  hover:bg-black "
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
