import React from "react";
import ModalWrapper from "../Modal/ModalWrapper";

const EditTimelineModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="rounded-lg p-6 mx-4 flex flex-col gap-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Update Timeline of Project/Board
        </h3>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="project-timeline" className="text-gray-700 text-lg">
              Project Name
            </label>
            <input
              id="project-timeline"
              type="date"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="bg-gray-300 rounded-md px-4 py-2 font-medium text-gray-800 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-gray-500 rounded-md px-4 py-2 font-medium text-white hover:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditTimelineModal;
