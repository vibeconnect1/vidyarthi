import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Qr from "/QrCode.png";
import profile from "/profile.png";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import toast from "react-hot-toast";

const BusinessCard = () => {
//     const Email = user.email;
//   const handleEmailCopy = () => {
//     navigator.clipboard
//       .writeText(Email)
//       .then(() => {
//         toast.success("Email id Copied");
//       })
//       .catch((err) => {
//         console.error("Failed to copy text: ", err);
//       });
//   };
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className=" w-full flex flex-col overflow-hidden">
          <div className="grid md:grid-cols-12 my-2 gap-5 w-full mx-10 mt-5">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email to share business card"
              className="p-2 border border-gray-500 rounded-md sm:col-span-4"
            />
            <button className="bg-black p-2 rounded-md border-2 border-black text-white hover:bg-white hover:text-black transition-all duration-500 sm:col-span-2">
              Share
            </button>
          </div>
          <div className="bg-white mx-10 rounded-md">
            <div className="relative flex flex-col md:flex-row gap-4 justify-center md:justify-start w-full  md:px-4 py-10  rounded-md">
              <div className="bg-white  rounded-full z-10 h-20 w-20 absolute left-[10rem]  md:left-[8.5rem] top-2 shadow-custom-all-sides">
                <img src={profile} alt="" />
              </div>
              <div className="bg-black relative shadow-custom-all-sides h-48 w-80 rounded-md cursor-pointer">
                <div className="flex flex-col justify-center my-2">
                  <p className="text-center font-bold text-white mt-10 text-lg">
                    Rahul Singh
                  </p>
                  <p className="text-center font-medium text-white ">
                    Profession
                  </p>
                </div>
                <div>
                  <p className="text-center text-xs text-white">
                    testing description of card
                  </p>
                </div>
                <div className="mt-5 flex justify-center gap-1 md:gap-2 ">
                  <button className="bg-white p-2 flex justify-center items-center gap-2 rounded-l-md font-medium">
                    <FaPhoneAlt /> Phone
                  </button>
                  <button className="bg-white p-2 flex justify-center items-center gap-2  font-medium"
                //   onClick={handleEmailCopy}
                  >
                    <MdEmail size={20} /> Email
                  </button>
                  <button className="bg-white p-2 flex justify-center items-center gap-2  font-medium rounded-r-md">
                    <ImEarth /> Website
                  </button>
                </div>
              </div>
              <div className="bg-black p-4 w-fit rounded-md shadow-custom-all-sides">
                <img src={Qr} alt="QR Code" className="h-40 min-w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessCard;
