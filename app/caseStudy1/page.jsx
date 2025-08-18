"use client";

import Image from "next/image";

import worker from "../../public/maleOffice.png";
import arrow from "../../public/Frame2.svg";
import hegaz from "../../public/hegazImage.png";
import hagzz from "../../public/hagzzImage.png";
import diveWadi from "../../public/diveWadiImage.png";
import wadiLogo from "../../public/wadiLogoImage.png";
import nafea from "../../public/nafeaImage.png";
import nafeaLogo from "../../public/nafeaLogoImage.png";
import nafeaLogoP2 from "../../public/nafeaLogoPart2.png";
import Arrow from "@/components/Icons/Arrow";

export default function CaseStudyOne() {
  return (
    <>
      <header className="header-bg">
        <div className=" container mx-auto h-[712px] w-full flex justify-around ">
          {/* left section */}
          <div className="text-white flex flex-col gap-6 items-start pt-4 pr-2 justify-center max-w-xl">
            <h1 className="font-bold text-6xl leading-20">
              Software development case studies
            </h1>
            <p className="text-xl leading-10">
              An award-winning software house with disciplines in digital
              marketing, design, and website development. Focused on
              understanding you.
            </p>
            <button
              type="button"
              className="bg-white mt-10 w-[264px] h-[64px] cursor-pointer  flex justify-between items-center px-2 rounded-[192px] "
            >
              <p className="text-(--primary-color) font-bold text-[20px] pl-2.5">
                Request a service
              </p>
              <Image src={arrow} width="52" height={52} alt="right cursor" />
            </button>
          </div>

          {/* right section */}
          <div className="flex justify-center items-center">
            <Image
              src={worker}
              alt="Worker"
              width={954}
              height={635.8}
              className="object-contain"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-12">
        <div className="w-[820px] mt-14">
          <div className="flex flex-col mb-10">
            <h2 className="text-6xl font-bold leading-20 mb-5">
              All software development case studies
            </h2>
            <p className="text-lg mb-8 text-(--paragraph-color) leading-8 max-w-3xl">
              Transforming Ideas into Cutting-Edge Software for a Digital World:
              Empowering Businesses with Custom Solutions, Seamless
              Integrations, and Innovative Technologies to Drive Growth and
              Success
            </p>
            <div className="flex  gap-6 font-semibold text-(--paragraph-color)">
              <span className="text-(--primary-color) relative after:content-[''] after:block after:h-[1px] after:bg-[var(--primary-color)] after:w-full after:absolute after:-bottom-1">
                UI/UX Design
              </span>
              <span>Websites</span>
              <span>Applications</span>
              <span>Graphic Design</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-14">
          <div className="grid grid-cols-2 gap-12 ">
            <Image src={hegaz} alt="green phone and tablete" />
            <div className="flex flex-col justify-center items-between gap-4 ">
              <Image
                src={hagzz}
                alt="hagzz logo"
                className="h-[37px] w-[128px] bg-black rounded-lg py-1.5 px-3"
              />

              <h3 className="text-5xl font-bold my-4">Hagez</h3>
              <p className="text-(--paragraph-color) max-w-[380px] leading-7 my-4">
                Lorem ipsum dolor sit amet consectetur. Orci mi viverra orci
                elit.
              </p>
              <div className="flex gap-6 font-semibold text-(--paragraph-color)">
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Frond - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Back - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Dev - ops
                </span>
              </div>
              <div className="flex text-(--primary-color) my-6">
                <span>See More</span>
                <Arrow />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 ">
            <Image src={diveWadi} alt="laptop" />
            <div className="flex flex-col justify-center items-between gap-4 ">
              <Image src={wadiLogo} alt="Dive wadi logo" className="w-[131px] h-[64px]"/>

              <h3 className="text-5xl font-bold my-4">Dive Wadi</h3>
              <p className="text-(--paragraph-color) max-w-[380px] leading-7 my-4">
                Lorem ipsum dolor sit amet consectetur. Orci mi viverra orci
                elit.
              </p>
              <div className="flex gap-6 font-semibold text-(--paragraph-color)">
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Frond - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Back - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Dev - ops
                </span>
              </div>
              <div className="flex text-(--primary-color) my-6">
                <span>See More</span>
                <Arrow />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12  mb-[300px]">
            <Image src={nafea} alt="laptop" />
            <div className="flex flex-col justify-center items-between gap-4 ">
              <div className="flex">
                <Image src={nafeaLogo} alt="nafea logo" className="w-[73.1px] h-[64px]"/>
                <Image src={nafeaLogoP2} alt="nafea logo part 2" className="w-[82.61px] h-[34.84px] mt-8" />
              </div>

              <h3 className="text-5xl font-bold my-4">Hagez</h3>
              <p className="text-(--paragraph-color) max-w-[380px] leading-7 my-4">
                Lorem ipsum dolor sit amet consectetur. Orci mi viverra orci
                elit.
              </p>
              <div className="flex gap-6 font-semibold text-(--paragraph-color)">
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Frond - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Back - End
                </span>
                <span className="border border-(--paragraph-color) rounded-lg py-[6px] px-3">
                  Dev - ops
                </span>
              </div>
              <div className="flex text-(--primary-color) my-6">
                <span>See More</span>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
