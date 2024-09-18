import React from "react";
import { IoAddCircle } from "react-icons/io5";
import ModalWrapper from "./ModalWrapper";

const ExportBookingModal = ({ onclose }) => {

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col items-center justify-center">
        <h2 className="flex gap-4 items-center justify-center mb-5 font-bold text-lg">
          <IoAddCircle size={20} />
          Export Booking Report
        </h2>
        <div className="grid grid-cols-1 space-y-2 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium">
              From :
            </label>
            <input
              type="date"
              name=""
              id=""
              placeholder="From"
              className="border-b border-gray-500 focus:outline-none w-96"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium">
              To :
            </label>
            <input
              type="date"
              name=""
              id=""
              placeholder="To"
              className="border-b border-gray-500 focus:outline-none w-96"
            />
          </div>
        </div>

        <button className="bg-black p-2 px-4 text-white rounded-md my-5">
          Submit
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ExportBookingModal