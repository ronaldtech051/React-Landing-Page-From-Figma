import React from "react";
import Acadmy from "../images/acadmy.png";
import connect from "../images/connect.png";
import research from "../images/research.png";
import SectionImage from "../images/bubble.png";

const Section2 = () => {
  return (
    <>
      <div className="flex gap-8">
        {/* First Column */}
        <div className="w-1/2 p-8 ">
          {/* Main Heading */}
          <h1 className="font-Open Sans text-[65px] text-[#000000] leading-89 tracking-normal text-left font-bold mb-4">
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              All-in-One{" "}
            </span>
            platform that Makes Easier
          </h1>
          {/* Sub Heading */}
          <h2 className=" text-[#000000] font-Poppins text-[24px] font-normal leading-38 tracking-normal text-left">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </h2>
          <div className="flex gap-8 space-x-6">
            <div className=" w-[158px]  ">
              <div className="flex p-2 ">
                <span>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_36_1767"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="54"
                      height="54"
                    >
                      <path
                        d="M24.4368 47.4584C37.1511 47.4584 47.4577 37.1519 47.4577 24.4376C47.4577 11.7233 37.1511 1.41675 24.4368 1.41675C11.7226 1.41675 1.41602 11.7233 1.41602 24.4376C1.41602 37.1519 11.7226 47.4584 24.4368 47.4584Z"
                        fill="#555555"
                        stroke="white"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M32.0964 15.4228C31.0915 14.4154 29.8975 13.6164 28.5828 13.0719C27.2682 12.5274 25.8589 12.2481 24.4359 12.25C23.013 12.2481 21.6037 12.5274 20.289 13.0719C18.9744 13.6164 17.7803 14.4154 16.7754 15.4228M40.9865 40.9881L52.4766 52.4782"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_36_1767)">
                      <path d="M-4 -4H61V61H-4V-4Z" fill="#0076CE" />
                    </g>
                  </svg>
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold">SEARCH</span> for vital company
                information
              </div>
            </div>
            <div className=" w-[158px]">
              <div className="flex p-2">
                <span>
                  <img src={connect} alt="" />
                  <mask
                    id="mask0_36_1767"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                  >
                    <path
                      d="M24.4368 47.4584C37.1511 47.4584 47.4577 37.1519 47.4577 24.4376C47.4577 11.7233 37.1511 1.41675 24.4368 1.41675C11.7226 1.41675 1.41602 11.7233 1.41602 24.4376C1.41602 37.1519 11.7226 47.4584 24.4368 47.4584Z"
                      fill="#555555"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.0964 15.4228C31.0915 14.4154 29.8975 13.6164 28.5828 13.0719C27.2682 12.5274 25.8589 12.2481 24.4359 12.25C23.013 12.2481 21.6037 12.5274 20.289 13.0719C18.9744 13.6164 17.7803 14.4154 16.7754 15.4228M40.9865 40.9881L52.4766 52.4782"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_36_1767)">
                    <path d="M-4 -4H61V61H-4V-4Z" fill="#0076CE" />
                  </g>
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold">CONNECT</span> with the resources to
                meet your business needs
              </div>
            </div>
          </div>

          <div className=" flex gap-14">
            <div className="w-[158px]">
              <div className="flex p-2 ">
                <span>
                  <img src={research} alt="" />
                  <mask
                    id="mask0_36_1767"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                  >
                    <path
                      d="M24.4368 47.4584C37.1511 47.4584 47.4577 37.1519 47.4577 24.4376C47.4577 11.7233 37.1511 1.41675 24.4368 1.41675C11.7226 1.41675 1.41602 11.7233 1.41602 24.4376C1.41602 37.1519 11.7226 47.4584 24.4368 47.4584Z"
                      fill="#555555"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.0964 15.4228C31.0915 14.4154 29.8975 13.6164 28.5828 13.0719C27.2682 12.5274 25.8589 12.2481 24.4359 12.25C23.013 12.2481 21.6037 12.5274 20.289 13.0719C18.9744 13.6164 17.7803 14.4154 16.7754 15.4228M40.9865 40.9881L52.4766 52.4782"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_36_1767)">
                    <path d="M-4 -4H61V61H-4V-4Z" fill="#0076CE" />
                  </g>
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold">RESEARCH</span> and generate reports that drive growth{" "}
              </div>
            </div>
            <div className="w-[158px]">
              <div className="flex p-2 ">
                <span>
                  <img src={Acadmy} alt="" />
                  <mask
                    id="mask0_36_1767"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                  >
                    <path
                      d="M24.4368 47.4584C37.1511 47.4584 47.4577 37.1519 47.4577 24.4376C47.4577 11.7233 37.1511 1.41675 24.4368 1.41675C11.7226 1.41675 1.41602 11.7233 1.41602 24.4376C1.41602 37.1519 11.7226 47.4584 24.4368 47.4584Z"
                      fill="#555555"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.0964 15.4228C31.0915 14.4154 29.8975 13.6164 28.5828 13.0719C27.2682 12.5274 25.8589 12.2481 24.4359 12.25C23.013 12.2481 21.6037 12.5274 20.289 13.0719C18.9744 13.6164 17.7803 14.4154 16.7754 15.4228M40.9865 40.9881L52.4766 52.4782"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_36_1767)">
                    <path d="M-4 -4H61V61H-4V-4Z" fill="#0076CE" />
                  </g>
                </span>
              </div>
              <div className="p-2">
                <span className="font-bold">ACADEMY</span> to give you the
                skills for success in your career
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-1/2 p-8 ">
          {/* <div className="flex h-[600px]">
       
            <div className="w-1/2 p-4">
              <img src={Left} alt="Image 1" className="w-full " />
            </div>

     
            <div className="w-1/2 p-4">
              <img src={Right} alt="Image 2" className="w-full h-auto" />
            </div>
          </div> */}
          <img src={SectionImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section2;