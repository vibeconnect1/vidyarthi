import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { PiPlusCircle } from "react-icons/pi";
import AddBirthdayModal from "../Modal/AddBirthdayModal";
import { FaTrashAlt } from "react-icons/fa";
import profile3 from "/profile3.jpg"
import profile4 from "/profile4.jpg"
import BirthdayDeleteModal from "../Modal/BirthdayDeleteModal";
const Birthday = () => {
  const [birthdayModal, setBirthdayModal] = useState(false);
  const [deleteBirthdayModal, setDeleteBirthdayModal] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 flex-col overflow-hidden">
          <div className="my-5 flex justify-between items-center">
            <h2 className="font-semibold text-2xl">Birthday</h2>
            <button
              onClick={() => setBirthdayModal(true)}
              className="border-2 border-gray-500  text-black duration-150 transition-all  p-1 px-4 rounded-md  cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add
            </button>
          </div>
          <h2>Staff Birthday</h2>
          <div className="border border-gray-300 my-2"/>
          <div className="flex gap-4 flex-wrap">
            {/* <div className="m-4 w-full flex justify-center">
              <span className="text-center">Please wait...</span>
            </div> */}
            <div className="  rounded-lg p-2 min-w-[425px] max-w-[425px] bg-white">
              <div className="rounded-lg flex w-full">
                <div className="flex-shrink-0">
                  <img src={profile3} className="w-40 h-40 rounded-lg" />
                </div>
                <div className="flex flex-col justify-between w-full ml-4">
                  <div className="flex flex-col gap-2 mt-2">
                    <div>
                      <span className="font-customFont">
                        <b>Akshat shrawat</b>
                      </span>
                    </div>
                    <span>8849264782</span>
                    <div className="text-wrap">
                      <span>abc@gmail.com</span>
                    </div>
                  </div>
                  <span className="flex justify-between items-center">
                    <span className="text-black font-medium ">2024 August 15</span>
                    <FaTrashAlt 
                      onClick={(e) => {
                        setDeleteBirthdayModal(true)
                      }}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="  rounded-lg p-2 min-w-[425px] max-w-[425px] bg-white">
              <div className="rounded-lg flex w-full">
                <div className="flex-shrink-0">
                  <img src={profile4} className="w-40 h-40 rounded-lg" />
                </div>
                <div className="flex flex-col justify-between w-full ml-4">
                  <div className="flex flex-col gap-2 mt-2">
                    <div>
                      <span className="font-customFont">
                        <b>Karan Singh</b>
                      </span>
                    </div>
                    <span>8949260782</span>
                    <div className="text-wrap">
                      <span>karan@gmail.com</span>
                    </div>
                  </div>
                  <span className="flex justify-between items-center">
                    <span className="text-black font-medium ">2024 July 15</span>
                    <FaTrashAlt 
                      onClick={(e) => {
                        setDeleteBirthdayModal(true)
                      }}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>
            {/* <p className="text-center w-full">
              No Birthday
              <br />
            </p> */}
          </div>
        </div>
      </div>
      {birthdayModal && (
        <AddBirthdayModal onclose={() => setBirthdayModal(false)} />
      )}
      {deleteBirthdayModal && (
        <BirthdayDeleteModal onclose={() => setDeleteBirthdayModal(false)} />
      )}
    </div>
  );
};

export default Birthday;
