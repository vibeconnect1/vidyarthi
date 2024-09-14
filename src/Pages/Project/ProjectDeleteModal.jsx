import React from "react";
import ModalWrapper from "../Modal/ModalWrapper";

const ProjectDeleteModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="rounded-lg p-6 mx-4 flex flex-col gap-6">
        <div className="bg-white overflow-auto max-h-[70%] shadow-custom-all-sides  md:w-auto w-96 p-4 px-8 flex flex-col rounded-md gap-5">
          <p className="text-black font-medium text-lg">
            Are you sure you want to delete this board?
          </p>
          <div className="flex gap-2">
            <button className="bg-green-500 px-4 rounded-md">Confirm</button>
            <button className="bg-red-400 px-4 rounded-md text-white">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ProjectDeleteModal;
