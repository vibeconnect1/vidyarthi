import React from "react";
import ModalWrapper from "../Modal/ModalWrapper";

const EditExamCategoriesModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2">
          Edit Exam Category
        </h2>
        <div className="w-96 space-y-5 my-5">
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              placeholder="Exam Type"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name=""
              placeholder="Exam Marks"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <button className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base w-full hover:bg-gray-200">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditExamCategoriesModal