import React from "react";
import Image from "next/image";
import laptop from "../../public/laptopHeroImage2.png";
import arrow from "../../public/Frame2.svg";
import blackFram from "../../public/blackImage.png";
import seaLife from "../../public/seaLifeImage.png";

export default function CaseStudyTwo() {
  return (
    <>
      <header className="header-bg-two">
        <div className=" container mx-auto h-[500px] w-full flex justify-around ">
          {/* left section */}
          <div className="flex flex-col gap-6 items-start pt-24 pr-2 justify-center max-w-[627px]">
            <h1 className="font-bold text-7xl leading-20 text-black">
              Dive Wadi
            </h1>
            <p className="text-xl text-(--paragraph-color)">
              WORLDWIDE ASSOCIATION OF DIVING INSTRUCTORS
            </p>
            <button
              type="button"
              className="bg-white mt-10 w-[264px] h-[64px] cursor-pointer  flex justify-between items-center px-2 rounded-[192px] "
            >
              <p className="text-(--primary-color) font-bold text-[20px] pl-2.5">
                View Website
              </p>
              <Image src={arrow} width="52" height={52} alt="right cursor" />
            </button>
          </div>

          {/* right section */}
          <div className="flex justify-center items-end">
            <Image
              src={laptop}
              alt="laptop"
              width={606}
              height={364}
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-12">
        <h2 className="text-6xl font-bold mt-20">Get to Know Wadi</h2>

        {/* second-section */}
        <div className="grid grid-cols-2 gap-10 mt-10 mb-32 ">
          <div className="relative">
            {" "}
            <Image
              src={blackFram}
              alt="black frame"
              width="597"
              height={321.05}
              className="relative"
            />
            <Image
              src={seaLife}
              alt="seaLife"
              width="600"
              height={336.08}
              className="absolute top-7 left-8"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="font-bold text-5xl">About Project.</h3>
            <p className="text-xl text-(--paragraph-color) max-w-[571px] leading-8 mt-5">
              {" "}
              I oversee creating a website from scratch. I collaborate with
              clients, develop project plans, design user interfaces, and ensure
              the design aligns with the client's brand. I translate UI designs
              into code using Flutter, ensuring the website is responsive and
              fast. I coordinate with back-end developers, update clients on
              progress, and conduct testing to ensure the website is bug-free
              and high quality. My goal is to deliver a website that exceeds
              client expectations and provides an engaging user experience.
            </p>
          </div>
        </div>
     
        <div className="grid grid-cols-1 mt-10">
             {/* third-section */}
          <div className="grid grid-cols-2 gap-4 ">
            <div className="third-section-left rounded-2xl  px-5 py-10 text-white">
              <h3 className="font-bold text-5xl">Challenge</h3>
              <p className="text-xl max-w-[571px] leading-8 text-(--semi-white-color)">
                {" "}
                I oversee creating a website from scratch. I collaborate with
                clients, develop project plans, design user interfaces, and
                ensure the design aligns with the client's brand. I translate UI
                designs into code using Flutter, ensuring the website is
                responsive and fast. I coordinate with back-end developers,
                update clients on progress, and conduct testing to ensure the
                website is bug-free and high quality. My goal is to deliver a
                website that exceeds client expectations and provides an
                engaging user experience.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start bg-(--primary-color) rounded-2xl  px-5 py-10 text-white">
              <h3 className="font-bold text-5xl">Solutions</h3>
              <p className="text-xl max-w-[571px] leading-8 text-(--semi-white-color)">
                {" "}
                I oversee creating a website from scratch. I collaborate with
                clients, develop project plans, design user interfaces, and
                ensure the design aligns with the client's brand. I translate UI
                designs into code using Flutter, ensuring the website is
                responsive and fast. I coordinate with back-end developers,
                update clients on progress, and conduct testing to ensure the
                website is bug-free and high quality. My goal is to deliver a
                website that exceeds client expectations and provides an
                engaging user experience.
              </p>
            </div>
          </div>
          {/* fourth Section */}
          <div className="grid grid-cols-2 rounded-2xl mt-5 h-[450px] text-white overflow-hidden relative common-bg before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%]">
            <div className="flex flex-col justify-center bg-[var(--primary-color)] w-[750px] px-8 py-6 rounded-tr-[25%] rounded-br-[25%]">
              <h3 className="font-bold text-5xl ">Challenge</h3>
              <p className="text-xl leading-8 mt-5 text-(--semi-white-color)">
                I oversee creating a website from scratch. I collaborate with
                clients, develop project plans, design user interfaces, and
                ensure the design aligns with the client's brand. I translate UI
                designs into code using Flutter, ensuring the website is
                responsive and fast. I coordinate with back-end developers,
                update clients on progress, and conduct testing to ensure the
                website is bug-free and high quality. My goal is to deliver a
                website that exceeds client expectations and provides an
                engaging user experience.
              </p>
            </div>
          </div>
          {/* fifth section */}
          <div className="grid grid-cols-2 mt-5 gap-4">
            <div className="common-bg before:absolute rounded-2xl ">
              <div className="flex flex-col justify-center bg-[var(--primary-color)] w-[500px] px-8 py-6 rounded-tr-[25%] rounded-br-[25%] rounded-bl-2xl rounded-tl-2xl">
                <h3 className="font-bold text-5xl text-white ">Challenge</h3>
                <p className="text-xl leading-8 mt-5 text-(--semi-white-color)">
                  I oversee creating a website from scratch. I collaborate with
                  clients, develop project plans, design user interfaces, and
                  ensure the design aligns with the client's brand. I translate
                  UI designs into code using Flutter, ensuring the website is
                  responsive and fast. I coordinate with back-end developers,
                  update clients on progress, and conduct testing to ensure the
                  website is bug-free and high quality. My goal is to deliver a
                  website that exceeds client expectations and provides an
                  engaging user experience.
                </p>
              </div>
            </div>
            <div className="common-bg before:absolute before:top-0 before:right-1/2 before:w-[100%] before:h-[100%] rounded-2xl">
              <div className="flex flex-col justify-center bg-[var(--primary-color)] w-[500px] px-8 py-6 rounded-tr-[25%] rounded-br-[25%] rounded-bl-2xl rounded-tl-2xl">
                <h3 className="font-bold text-5xl text-white">Solution</h3>
                <p className="text-xl leading-8 mt-5 text-(--semi-white-color) ">
                  I oversee creating a website from scratch. I collaborate with
                  clients, develop project plans, design user interfaces, and
                  ensure the design aligns with the client's brand. I translate
                  UI designs into code using Flutter, ensuring the website is
                  responsive and fast. I coordinate with back-end developers,
                  update clients on progress, and conduct testing to ensure the
                  website is bug-free and high quality. My goal is to deliver a
                  website that exceeds client expectations and provides an
                  engaging user experience.
                </p>
              </div>
            </div>
          </div>

          {/* last-section */}
          <div className="flex flex-col justify-center items-center mt-10">
            <h3 className="font-bold text-5xl">Our Process</h3>
            <p className="text-center text-(--paragraph-color) text-xl max-w-[800px] leading-8 mt-5 mb-96">
              {" "}
              I oversee creating a website from scratch. I collaborate with
              clients, develop project plans, design user interfaces, and ensure
              the design
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
