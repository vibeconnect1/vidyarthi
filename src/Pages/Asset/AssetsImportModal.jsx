import React from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import { IoAddCircleOutline } from "react-icons/io5";

const AssetsImportModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center w-96">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2 border-b border-gray-300 pb-2">
          <span>
            <IoAddCircleOutline size={20} />
          </span>{" "}
          Bulk Update
        </h2>
        <div className="my-2">
          <p className="my-3">Drag Drop or</p>
          <input type="file"></input>
        </div>

        <div className="flex gap-5 my-3">
          <button
            className="border border-gray-500 rounded-md px-4 py-1 flex gap-2 justify-center items-center text-base bg-black text-white hover:bg-white hover:text-black"
          >
            Import
          </button>
          <button className="border border-gray-500 rounded-md px-4 py-1 flex gap-2 justify-center items-center text-base bg-black text-white hover:bg-white hover:text-black ">
            Download Simple Format
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AssetsImportModal;
