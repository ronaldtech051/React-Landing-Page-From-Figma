import React from "react";
import FooterLogo from "../../images/footerlogo.png";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="footer-gradient ">
        <div className=" px-4 sm:px-6 text-gray-800 max-w-[100rem] sm:grid md:grid-cols-6 sm:grid-cols-2 mx-auto">
          <div className="p-5 px-6 mr-16">
            <img src={FooterLogo} alt="" />
            <h1 className="text-[14px] text-white pt-5">
              India's first platform dedicated to simplifying partner search
            </h1>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Company
            </div>
            <a className="my-3 block text-white" href="/#">
              About <span className=" text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white " href="/#">
              Pricing <span className="text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Career
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Solution
            </div>
            <a className="my-3 block text-white" href="/#">
              Search <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Connect <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Research <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Academy <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Resources
            </div>
            <a className="my-3 block text-white" href="/#">
              Blogs <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Forms <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">
              Support
            </div>
            <a className="my-3 block text-white" href="/#">
              Help<span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Contact US <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">Legal</div>
            <a className="my-3 block text-white" href="/#">
              Privacy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Terms <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block text-white" href="/#">
              Accessbillity <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
        <div className="max-w-[95rem] mx-auto ">
          <hr className="text-white " />
          <div class="flex justify-between">
            <div className="px-8 mt-5">
              <p class="text-white">
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
                Maharashtra
              </p>
            </div>
            <div class="flex space-x-4 px-4 mt-4">
              <Facebook className="text-white" />
              <Instagram className="text-white" />
              <Linkedin className="text-white" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
