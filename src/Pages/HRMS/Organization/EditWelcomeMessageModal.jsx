import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";

const EditWelcomeMessageModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Message</h1>
        <form action="" className="grid grid-cols-1 px-5 gap-x-5 gap-y-4 w-96">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Template Name"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name=""
              rows={2}
              placeholder="Define Message *(Maximum Character Limit is of 200 Characters)"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <button className="bg-black p-2 px-4 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditWelcomeMessageModal;
