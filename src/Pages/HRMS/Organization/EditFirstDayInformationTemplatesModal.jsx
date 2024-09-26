import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";

const EditFirstDayInformationTemplatesModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Template</h1>
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
              placeholder="Location"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Reporting Time"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="HR Name"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              name=""
              id=""
              placeholder="HR Contact"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Buddy"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name=""
              rows={2}
              placeholder="Other Instructions(Maximum Character Limit is of 1000 Characters)"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="file-upload"
              className="border border-dashed border-gray-500 p-4 mb-4 h-20 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
            >
              <div className=" ">
                <p>Attachments</p>
              </div>
            </label>
            <input type="file" className="hidden" id="file-upload" />
          </div>
          <button className="bg-black p-2 px-4 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditFirstDayInformationTemplatesModal;
