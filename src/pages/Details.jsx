import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import anti from "../images/anti.png";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://cv-backend-search.onrender.com/details/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(details);
  return (
    <>
      <div className="flex ml-28 max-w-[80%] pl-40 mt-24 ">
        <div className="w-[42%] p-4 pr-16 text-left">
          <h2 className="font-Poppins text-[35px] font-bold leading-[53px] tracking-normal text-left">
            {details?.name}{" "}
          </h2>
          <p className="font-Poppins text-[20px] font-normal  tracking-normal text-left">
            I am here to provide my {details?.intro}, all to assist you
            effectively
          </p>
          <div className="flex w-[112px] h-[30px]  top-[238px]">
            <Star className="text-[#0076CE]" /> {/*use svg  */}
            <span className="text-[#0076CE]">{details?.rating}</span> (
            {details?.reviewCount})
          </div>
          <div className="bg-[#FFFFFF] w-[515px] h-[216px] top-[300px] rounded-[20px] ">
            <div className="p-4 ">
              <div className="flex flex-row justify-between">
                <h1 className="font-Poppins text-[20px] font-normal leading-[32px] tracking-normal text-left">
                  {details?.taskComplexity}
                </h1>
                <span className="font-Poppins text-[24px] font-bold leading-[36px] tracking-normal text-right">
                  {details?.price}
                </span>
              </div>
              <p className="w-[456px] h-[32px] top-[392px] left-[27px]">
                {details?.deliveryTime}{" "}
              </p>
            </div>
            <div>
              <button className=" ml-6 w-[220px] h-auto top-[447px] left-[27px] py-[10px] gap-[8px] px-4 p-2 rounded-[10px]  border-[#0076CE] text-white bg-[#0076CE] border-2 font-bold">
                Request proposal
              </button>
              <button className="ml-4 w-[220px] h-[46px] top-[447px] left-[272px] p-[10px] border-[1.5px] rounded-[10px] gap-[8px] px-4 border-[#0076CE] text-[#0076CE]  font-bold">
                Chat with me
              </button>
            </div>

            {/* testimonials */}
          </div>
          <div className="bg-[#FFFFFF] mt-6 w-[515px] h-[412px] top-[548px] rounded-[20px] p-6">
            <h1 className="font-Poppins text-[35px] font-bold leading-[53px] tracking-normal text-left">
              What People Say?
            </h1>
            <Slider
              text={details?.testimonial?.text}
              author={details?.testimonial?.author}
            />
          </div>
        </div>
        <div className="w-[733px] h-[412px] top-[165px] left-[675px] rounded-[20px] mr-8 ml-12 mt-10 ">
          <img src={anti} alt="Your Image" className="w-full h-auto" />
          <h1 className="font-poppins text-[35px] font-bold leading-[53px] tracking-normal text-left mt-4">
            About {details?.name}
          </h1>
          <div className="flex text-center uppercase space-x-16 mt-6">
            <p className="text-[14px] font-bold text-[#999999]">from </p>
            <p className="text-[14px] font-bold text-[#999999]">
              partner since
            </p>
            <p className="text-[14px] font-bold text-[#999999]">
              response average time
            </p>
          </div>
          <div className="flex text-center space-x-16 mt-6">
            <p>{details?.about?.from} </p>
            <p>{details?.about?.partnerSince} </p>
            <p className=" pl-16">{details?.about?.averageResponseTime}</p>
          </div>

          <h2 className="text-[#999999] font-bold text-[16px] mt-6">ABOUT</h2>
          <p>I am a {details?.about?.description}</p>

          <div className="flex col-span-2">
            <div className="p-2">
              <h3 className="uppercase text-[#999999] font-bold text-[16px] mt-6 mb-3">
                services i offer
              </h3>

              {details?.about?.services.map((service) => (
                <li>{service} </li>
              ))}
            </div>
            <div className="p-2">
              <h3 className="uppercase text-[#999999] font-bold text-[16px] mt-6 mb-3">
                why me?
              </h3>
              {details?.about?.benefits.map((benefit) => (
                <li>{benefit} </li>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[129px] w-[1279px] h-[562px] top-[1466px] left-[129px] mt-11 pl-40">
        <h1 className="font-poppins text-[35px] font-bold leading-[53px] tracking-normal text-left mb-9">
          Recommended for you
        </h1>
        <div className="col-span-3 flex rounded-lg overflow-hidden shadow-lg gap-8">
          <div className=" bg-white rounded-lg">
            <img className="w-full" src={anti} alt="Sunset in the mountains" />
            <div className="mx-2">
              <div className="font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-left mt-3">
                Michael jackson
                <span className=" ml-[90px] font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-right">
                  ₹4,370
                </span>
              </div>
              <p className=" text-base">
                I will do business evaluation and corporate services
              </p>
              <div className="flex ">
                <Star className="text-blue-600" />{" "}
                <span className="text-blue-600">
                  4.8 <span className="text-black">(89)</span>{" "}
                </span>
              </div>
              <button className="px-6 p-1 mt-5 rounded-lg  border-[#0076CE] text-white bg-[#0076CE] border-2 font-bold w-full ">
                View Services
              </button>
            </div>
          </div>
          <div className=" bg-white ">
            <img className="w-full" src={anti} alt="Sunset in the mountains" />
            <div className="mx-2">
              <div className="font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-left mt-3">
                Stevie Wonder
                <span className=" ml-[90px] font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-right">
                  ₹4,263
                </span>
              </div>
              <p className=" text-base">
                I will do business evaluation and corporate services
              </p>
              <div className="flex ">
                <Star className="text-blue-600" />{" "}
                <span className="text-blue-600">
                  5.0 <span className="text-black">(62)</span>{" "}
                </span>
              </div>
              <button className="px-6 p-1 mt-5 rounded-lg  border-[#0076CE] text-white bg-[#0076CE] border-2 font-bold w-full ">
                View Services
              </button>
            </div>
          </div>
          <div className=" bg-white">
            <img className="w-full" src={anti} alt="Sunset in the mountains" />
            <div className="mx-2">
              <div className="font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-left mt-3">
                Ray Charles
                <span className=" ml-[90px] font-poppins text-[20px] font-bold leading-[30px] tracking-normal text-right">
                  ₹2,586
                </span>
              </div>
              <p className=" text-base">
                I will do business evaluation and corporate services
              </p>
              <div className="flex ">
                <Star className="text-blue-600" />{" "}
                <span className="text-blue-600">
                  4.3 <span className="text-black">(189)</span>{" "}
                </span>
              </div>
              <button className="px-6 p-1 mt-5 rounded-lg  border-[#0076CE] text-white bg-[#0076CE] border-2 font-bold w-full mb-4 ">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
