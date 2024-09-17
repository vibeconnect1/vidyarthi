import React from "react";
import ModalWrapper from "./ModalWrapper";

const IncidentsDetailsUpdateModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col w-64 justify-center">
        <h2 className="flex gap-4 items-center justify-center font-bold text-lg my-2">
          Status Update
        </h2>
        <div className="border-t-2 border-black">
          <div className="flex flex-col my-5">
            <select
              text="time"
              name=""
              id=""
              className="border-b border-gray-500 focus:outline-none w-full"
            >
              <option value="">Select </option>
            </select>
          </div>
          <div className="flex flex-col">
            <textarea
              name=""
              id=""
              cols="5"
              rows="1"
              placeholder="Comment"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
          </div>
        </div>
        <div className="border-t-2 border-black my-4"></div>
        <div className="flex justify-end">
          <button className="bg-black p-1 px-4 border-2 rounded-md text-white font-medium border-black hover:bg-white hover:text-black transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default IncidentsDetailsUpdateModal;
