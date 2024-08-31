import React from "react";
import InstituteDetails from "./InstituteDetails";
import { FaRegFileAlt } from "react-icons/fa";

function StudyMaterialsDetails() {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Study Materials Details
        </h2>
        <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
          <div className="my-2 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Title:</p>
              <p className="text-sm font-normal ">The Midnight Visitor</p>
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
              <p>Attachment:</p>
              <p className="text-sm font-normal "><FaRegFileAlt size={20}/></p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center md:px-10">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal ">As the clock struck midnight, the old mansion creaked under the weight of its dark secrets. Emma, a young historian, stood in the grand hall, her breath shallow as she clutched a flickering lantern.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
export default StudyMaterialsDetails