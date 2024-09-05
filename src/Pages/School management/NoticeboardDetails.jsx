import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import { FaRegFileAlt } from "react-icons/fa";
const NoticeboardDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Create Noticeboard
            </p>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Title:</p>
                <p className="text-sm font-normal ">Equation</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Class:</p>
                <p className="text-sm font-normal ">9th</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Division:</p>
                <p className="text-sm font-normal ">A</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Student:</p>
                <p className="text-sm font-normal ">All</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Date:</p>
                <p className="text-sm font-normal ">3,sep 2024</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Attachment:</p>
                <p className="text-sm font-normal ">
                  <FaRegFileAlt size={20} />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:px-5">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal ">
                As the clock struck midnight, the old mansion creaked under the
                weight of its dark secrets. Emma, a young historian, stood in
                the grand hall, her breath shallow as she clutched a flickering
                lantern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeboardDetails;
