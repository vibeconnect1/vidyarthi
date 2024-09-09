import React from "react";
import Header from "../Form/Header";
import event from "/event.jpg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import StudentSidebar from "./StudentSidebar";
import { MdPersonAdd } from "react-icons/md";

const StudentEventDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Event Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-2 rounded-md mx-5 bg-white">
            <div className="flex flex-col md:flex-row md:gap-8 my-2 px-5">
              {/* Image section */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0 h-full">
                {event ? (
                  <img
                    src={event}
                    className="w-full h-full object-cover rounded-md"
                    alt="Event"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="w-full md:w-1/2 grid grid-cols-1 gap-4 custom-bg px-5 py-5 rounded-md h-full">
                <div className="grid grid-cols-2 items-center">
                  <p className="font-medium">Create By:</p>
                  <p className="text-sm font-normal">Sanjay More</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p className="font-medium flex gap-1">
                    <CiLocationOn className="mt-1" /> Location:
                  </p>
                  <p className="text-sm font-normal">Mira Road</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p className="font-medium">Start Date & Time:</p>
                  <p className="text-sm font-normal">7/9/2024, 12:00 PM</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p className="font-medium">End Date & Time:</p>
                  <p className="text-sm font-normal">7/9/2024, 12:00 PM</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p className="flex gap-1 font-medium">
                    <AiOutlineLike className="mt-1" /> Coming:
                  </p>
                  <p className="text-sm font-normal">40</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p className="font-medium">RSVP:</p>
                  <p className="text-sm font-normal">Yes</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:px-5">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal">
                This name stands out by combining “Tech” to convey a focus on
                technology, and “Spark” to suggest innovation and inspiration.
                “Summit” implies a high-level gathering for tech professionals,
                offering valuable insights and networking opportunities.
              </p>
            </div>
            <div className="mx-5 my-3">
                <button className="border border-gray-500 rounded-md px-5 py-1 flex gap-1"><MdPersonAdd className="mt-1"/>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEventDetails