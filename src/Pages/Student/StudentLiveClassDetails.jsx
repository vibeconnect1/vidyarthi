import React, { useState } from "react";
import Header from "../Form/Header";
import { FaDownload } from "react-icons/fa";
import StudentSidebar from "./StudentSidebar";
import StudentLiveClassSummaryModal from "../Modal/StudentLiveClassSummaryModal";

const StudentLiveClassDetails = () => {
  const [summaryModal, setSummaryModal] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Live Class Details
            </p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Topic:</p>
                <p className="text-sm font-normal">Mathematics Review</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Date:</p>
                <p className="text-sm font-normal">2024-09-03</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Start Time:</p>
                <p className="text-sm font-normal">10:00 AM</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Start End:</p>
                <p className="text-sm font-normal">11:00 AM</p>
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
                <p>Status:</p>
                <p className="text-sm font-normal">Upcoming</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Purpose ::</p>
                <p className="text-sm font-normal"></p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:px-5">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal">
                As the clock struck midnight, the old mansion creaked under the
                weight of its dark secrets. Emma, a young historian, stood in
                the grand hall, her breath shallow as she clutched a flickering
                lantern.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5 mx-5 border-b border-t border-gray-500 py-3">
            <button
              className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              onClick={() => setSummaryModal(true)}
            >
              Summary
            </button>
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
              Task
            </button>
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
              <FaDownload /> Meeting Video
            </button>
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
              <FaDownload /> Meeting Transcript
            </button>
          </div>
        </div>
        {summaryModal && (
          <StudentLiveClassSummaryModal onclose={() => setSummaryModal(false)} />
        )}
      </div>
    </div>
  );
};

export default StudentLiveClassDetails