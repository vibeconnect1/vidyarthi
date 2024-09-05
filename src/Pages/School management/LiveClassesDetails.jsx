import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";
import { FaRegFileAlt } from "react-icons/fa";

const LiveClassesDetails = () => {
  
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Live Class Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Topic:</p>
                <p className="text-sm font-normal">Mathematics Review</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Duration:</p>
                <p className="text-sm font-normal">45 minutes</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Date & Time:</p>
                <p className="text-sm font-normal">2024-09-03 10:00 AM</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Meeting Id:</p>
                <p className="text-sm font-normal">123-456-789</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Password:</p>
                <p className="text-sm font-normal">abc123</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Subject:</p>
                <p className="text-sm font-normal">Mathematics</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Teacher:</p>
                <p className="text-sm font-normal">Rahul Singh</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Class:</p>
                <p className="text-sm font-normal">10th</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Division:</p>
                <p className="text-sm font-normal">A</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Join Link:</p>
                <p className="text-sm font-normal">
                https://example.com/meeting/123-456-789
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:px-5">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal">As the clock struck midnight, the old mansion creaked under the weight of its dark secrets. Emma, a young historian, stood in the grand hall, her breath shallow as she clutched a flickering lantern.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassesDetails;
