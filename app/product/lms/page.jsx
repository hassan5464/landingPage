import React from "react";
import Image from "next/image";
import dashboard from "../../../public/dashboardImage.png";
import light from "../../../public/lightingImage.png";
import sparkel from "../../../public/sparkelImage.png";
import zapFast from "../../../public/zapFastImage.png";
import chat from "../../../public/chatImage.png";
import arrow from "../../../public/justArrow.png";
import power from "../../../public/PowerImage.png";
import feature from "../../../public/featureImage.png";
import pChat from "../../../public/positiveChatImage.png";
import mins from "../../../public/minsIcon.png";
import plus from "../../../public/plusIcon.png";
import testimonial1 from "../../../public/testimonialImage.png";
import select from "../../../public/selectIcon.png";
import whiteArrow from "../../../public/whiteArrowIcon.png";

export default function LMS() {
  return (
    <>
      <header className="header-bg">
        <div className=" container mx-auto h-[864px] w-full flex justify-around ">
          <div className="flex flex-col  items-center mt-24 gap-6 text-white text-center relative">
            <h1 className="text-7xl font-bold w-5xl">
              Your Gateway to Smarter Learning{" "}
            </h1>

            <p className="text-xl w-[870px]">
              Elevate Your Teaching, Engage Your Learners, and Transform
              Education with Our Cutting-Edge LMS Platform.
            </p>

            <div className="flex gap-7">
              <button
                type="button"
                className="bg-white mt-10 w-[228px] h-[64px] cursor-pointer text-center px-2 rounded-[192px] "
              >
                <p className="text-(--primary-color) font-bold text-[20px] pl-2.5">
                  Subscribe Now
                </p>
              </button>
              <button
                type="button"
                className="bg-transparent mt-10 w-[228px] h-[64px] cursor-pointer text-center px-2 rounded-[192px] border border-white"
              >
                <p className="text-white font-bold text-[20px] pl-2.5">
                  Request a Demo
                </p>
              </button>
            </div>

            <Image
              src={dashboard}
              alt="dashboard"
              className="absolute top-[360px] left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-52">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="w-40 h-10 mt-96 rounded-xl bg-(--primary-color) text-white flex items-center justify-center">
            Key Features
          </p>

          <h3 className="w-[820px] h-[60px] font-bold text-5xl text-center">
            Feature Highlights
          </h3>
          {/* second-section */}
          <section className="flex justify-between items-start gap-8 mt-10 flex-wrap max-w-[1152.1px]">
            <section className="flex flex-col gap-3 justify-center items-center text-center w-[260px]">
              <Image src={light} alt="light" className="w-11 h-11" />
              <h4 className="font-bold text-2xl">Custom Learning Paths</h4>
              <p className="text-lg text-(--custom-gray-color)">
                Use this text to describe your product feature or service.
              </p>
            </section>

            <section className="flex flex-col gap-3 justify-center items-center text-center w-[260px]">
              <Image src={sparkel} alt="sparkel" className="w-11 h-11" />
              <h4 className="font-bold text-2xl">Easy Integration</h4>
              <p className="text-lg text-(--custom-gray-color)">
                Use this text to describe your product feature or service.
              </p>
            </section>

            <section className="flex flex-col gap-3 justify-center items-center text-center w-[260px]">
              <Image src={light} alt="light" className="w-11 h-11" />
              <h4 className="font-bold text-2xl">Engaging Content</h4>
              <p className="text-lg text-(--custom-gray-color)">
                Use this text to describe your product feature or service.
              </p>
            </section>

            <section className="flex flex-col gap-3 justify-center items-center text-center w-[260px]">
              <Image src={light} alt="light" className="w-11 h-11" />
              <h4 className="font-bold text-2xl">Detailed Analytics</h4>
              <p className="text-lg text-(--custom-gray-color)">
                Use this text to describe your product feature or service.
              </p>
            </section>
          </section>
          {/* third-section */}
          <section className="grid grid-cols-3 gap-8 mt-20 mb-32 ">
            <section className="flex flex-col gap-3 justify-start items-start">
              <Image src={zapFast} alt="zapFast" className="w-14 h-14" />
              <h3 className="font-bold text-5xl">Unlock These Benefits</h3>
              <p className="text-lg text-(--custom-gray-color)">
                Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse
                tempor et ipsum sit egestas nunc. Diam in cum a in.
              </p>
            </section>
            <section className="flex flex-col gap-8 justify-start items-start">
              <section className="flex flex-col gap-6 justify-start items-start bg-(--light-babyBlue-color) p-4 rounded-lg">
                <Image src={chat} alt="chat" className="w-14 h-14" />
                <h3 className="font-bold text-2xl  w-[357px]">
                  Better Performance
                </h3>
                <p className="w-[357px] text-(--custom-gray-color)">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
                <button
                  type="button"
                  className=" cursor-pointer flex justify-between items-center px-2 font-bold "
                >
                  <p className="text-(--primary-color) ">View integration</p>
                  <Image
                    src={arrow}
                    width="20"
                    height={20}
                    alt="right cursor"
                  />
                </button>
              </section>
              <section className="flex flex-col gap-8 justify-start items-start bg-(--light-babyBlue-color) p-4 rounded-lg">
                <Image src={power} alt="power" className="w-14 h-14" />
                <h3 className="font-bold text-2xl w-[357px]">
                  Scalable for Growth
                </h3>
                <p className="w-[357px] text-(--custom-gray-color)">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
                <button
                  type="button"
                  className=" cursor-pointer flex justify-between items-center px-2 font-bold "
                >
                  <p className="text-(--primary-color) ">View integration</p>
                  <Image
                    src={arrow}
                    width="20"
                    height={20}
                    alt="right cursor"
                  />
                </button>
              </section>
            </section>
            <section className="flex flex-col gap-8 justify-start items-start">
              <section className="flex flex-col gap-6 justify-start items-start bg-(--light-babyBlue-color) p-4 rounded-lg">
                <Image src={feature} alt="feature" className="w-14 h-14" />
                <h3 className="font-bold text-2xl  w-[357px]">
                  Fast Onboarding
                </h3>
                <p className="w-[357px] text-(--custom-gray-color)">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data.
                </p>
                <button
                  type="button"
                  className=" cursor-pointer flex justify-between items-center px-2 font-bold "
                >
                  <p className="text-(--primary-color) ">View integration</p>
                  <Image
                    src={arrow}
                    width="20"
                    height={20}
                    alt="right cursor"
                  />
                </button>
              </section>
              <section className="flex flex-col gap-8 justify-start items-start bg-(--light-babyBlue-color) p-4 rounded-lg">
                <Image src={pChat} alt="pChat" className="w-14 h-14" />
                <h3 className="font-bold text-2xl w-[357px]">
                  Compilance Ready
                </h3>
                <p className="w-[357px] text-(--custom-gray-color)">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
                <button
                  type="button"
                  className=" cursor-pointer flex justify-between items-center px-2 font-bold "
                >
                  <p className="text-(--primary-color) ">View integration</p>
                  <Image
                    src={arrow}
                    width="20"
                    height={20}
                    alt="right cursor"
                  />
                </button>
              </section>
            </section>
            <section></section>
          </section>

          {/* forth-section */}
          <section className="flex flex-col justify-center items-center gap-12 mb-32">
            <section className="flex flex-col justify-center items-center gap-6 w-[859px]">
              <h3 className="font-bold text-5xl w-[820px] text-center">
                Frequently Asked Questions
              </h3>
              <p className="text-lg text-(--custom-gray-color) text-center w-[800px]">
                Transforming Ideas into Cutting-Edge Software for a Digital
                World: Empowering Businesses with Custom Solutions, Seamless
                Integrations, and Innovative Technologies{" "}
              </p>
            </section>
            <section className="w-[760px] flex flex-col gap-1 justify-center items-start container mx-auto">
              <div className="flex justify-between w-[770px] px-4">
                {" "}
                <h4 className="w-[233px] text-xl font-medium">
                  Can I use Spline for free?
                </h4>
                <Image src={mins} alt="mins" width={20} height={20} />
              </div>
              <p className="text-(--custom-gray-color) text-[15px] w-[712px] px-4">
                Yes, totally! The Basic plan is free. You can have unlimited
                personal files and file viewers. Maximum{" "}
              </p>
              <p className="text-(--custom-gray-color) text-[15px] w-[712px] px-4">
                1 team project can be created with 2 team files and 2 editors.
                You also have access to the Spline{" "}
              </p>
              <p className="text-(--custom-gray-color) text-[15px] w-[712px] px-4 mb-9">
                Library and can publish your scenes with a Spline logo.{" "}
              </p>
              <div className="flex flex-col gap-10 justify-center">
                <div className="flex  justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      Why should I upgrade to Super or Super Team?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      How does team billing work?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      How can I cancel my subscription?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      Can I change from monthly to yearly?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      Can I change from monthly to yearly?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      How can I ask other questions about pricing?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between w-[770px] px-4">
                    {" "}
                    <h4 className="w-[450px] text-xl font-medium">
                      Interested in Spline for Education?
                    </h4>
                    <Image src={plus} alt="plus" width={20} height={20} />
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* last-section */}
          <section className="grid grid-cols-2 gap-[50px] mt-20 mb-32 ">
            <section className="flex flex-col gap-3 justify-start items-start">
              <Image src={testimonial1} alt="testimonial1" />
            </section>
            <section className="flex flex-col gap-20 justify-start w-[672px]">
              <section className="">
                <h3 className="font-bold text-5xl py-4">Subscribe Now</h3>
              </section>
              <section className="flex  gap-6 justify-between items-start">
                <section className="flex flex-col gap-5 w-[320px]">
                  <span className="font-medium text-2xl">Name</span>
                  <span className="ps-5 font-light text-(--custom-gray-color)">
                    Enter your name
                  </span>
                </section>
                <section className="flex flex-col gap-5 w-[320px]">
                  <span className="font-medium text-2xl">Your phone</span>
                  <span className="pl-5 font-light text-(--custom-gray-color)">
                    01155856594
                  </span>
                </section>
              </section>
              <section className="flex  gap-6 justify-between items-start">
                <section className="flex flex-col gap-5 w-[320px]">
                  <span className="font-medium text-2xl">Your email</span>
                  <span className="ps-5 font-light text-(--custom-gray-color)">
                    Enter your email
                  </span>
                </section>
                <section className="flex flex-col gap-5 w-[320px]">
                  <span className="font-medium text-2xl">Service</span>
                  <div className="flex justify-between gap-1">
                    <span className="pl-5 font-light text-(--custom-gray-color)">
                      Select service
                    </span>
                    <Image src={select} alt="select" width={20} height={20} />
                  </div>
                </section>
              </section>
              <section className="flex  gap-6 justify-between items-start mb-36">
                <section className="flex flex-col gap-5">
                  <span className="font-medium text-2xl">Description</span>
                  <span className="ps-5 font-light text-(--custom-gray-color)">
                    Enter details about your project
                  </span>
                </section>
              </section>

              <section className="flex justify-end items-end">
                <button
                  type="button"
                  className="bg-(--primary-color) mt-10 w-[264px] h-[64px] cursor-pointer  flex justify-between items-center px-2 rounded-[192px] "
                >
                  <p className="text-white font-bold text-[20px] pl-2.5">
                    Send
                  </p>
                  <Image
                    src={whiteArrow}
                    width="52"
                    height={52}
                    alt="right cursor"
                  />
                </button>
              </section>
            </section>

            <section></section>
          </section>
        </div>
      </main>
    </>
  );
}
