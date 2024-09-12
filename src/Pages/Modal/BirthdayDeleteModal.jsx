import React from "react";
import ModalWrapper from "./ModalWrapper";

const BirthdayDeleteModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10 w-full">
        <h1 className="font-medium text-center text-xl text-gray-500">
          Do you want to Delete Birthday?
        </h1>
        <div className="flex justify-end gap-4">
          <button
            className="font-medium text-black bg-green-400 px-4 rounded-full"
          >
            Yes
          </button>
          <button
            className="font-medium text-black bg-red-400 px-4 rounded-full"
          >
            No
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BirthdayDeleteModal