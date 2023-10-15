import React from "react";

const Group1 = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="font-Open Sans text-[65px] font-bold leading-89 tracking-tight text-center">
        Want to{" "}
        <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          {" "}
          Join{" "}
        </span>
        Us?
      </h1>
      <h2 className="text-2xl font-semibold mb-8">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </h2>

      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                1st
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                Commencement of business
              </h3>
              <p className="text-gray-700">
                Invested shareholders must confirm payment and office address{" "}
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>Within 180</p>
                <p>Days</p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹ 50,000 for the company</p>
                <p>₹ 1,000/day for the directors</p>
              </div>
            </div>
          </div>

          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                2nd
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                Auditor Appointment
              </h3>
              <p className="text-gray-700">
                Company informs new auditor and submits ADT.1 form to ROC.
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>Within 30</p>
                <p>Days</p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹ 300 per month</p>
              </div>
            </div>
          </div>
          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                3rd
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                DIN eKYC
              </h3>
              <p className="text-gray-700">
                Directors share personal information for identification &
                verification
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>Every year</p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹ 5000 one time</p>
              </div>
            </div>
          </div>
          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                4th
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                DPT-3
              </h3>
              <p className="text-gray-700">
                Companies report money taken from people to ROC; auditors
                confirm details.
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>Within 30 days</p>
                <p>Days</p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹ 300 per month</p>
              </div>
            </div>
          </div>
          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                5th
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                MCA Form AOC-4
              </h3>
              <p className="text-gray-700">
                It's like an official report card for a company's documents
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>On or Before 30th November </p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹200 per day (No upper limit)*</p>
              </div>
            </div>
          </div>
          <div className="relative w-[405] h-[266px] bg-[#FFFFFF] m-4 p-6 rounded-lg">
            <div className="absolute top-0 left-0 w-12 h-14 z-40 mb-8  rounded-lg rate">
              <h1 className="font-bold text-white text-center px-2 p-2 text-xl">
                6th
              </h1>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#000000] text-[20px]">
                MCA Form MGT-7
              </h3>
              <p className="text-gray-700">
                Companies must annually report activities and finances to the
                registrar.
              </p>
            </div>

            <div className="bg-[#F4F4F4] mt-4 flex col-span-2">
              <div className="p-4 text-left">
                <h1 className="text-blue-600 font-bold">Due Date</h1>
                <p>On or Before 30th december </p>
              </div>
              <div className="p-4 text-left">
                <p className="text-pink-500 font-bold">Penalty fees</p>
                <p>₹200 per day (No upper limit)*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold"> every day </span>until you file the form .
        There is no maximum penalty amount. So, if you don't file the form for a
        year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default Group1;
