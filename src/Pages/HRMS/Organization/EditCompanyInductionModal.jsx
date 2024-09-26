import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";

const EditCompanyInductionModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Resource</h1>
        <form action="" className="grid grid-cols-1 px-5 gap-x-5 gap-y-4 w-96">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Induction Resource Name"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <select
              className="border-b border-gray-500 focus:outline-none"
              disabled
            >
              <option>Select Resource Type</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Embedded Video Link"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name=""
              rows={2}
              placeholder="Instructions"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
              Require Acknowledgement:
            </label>
            <div>
              <label className="mr-4">
                <input type="radio" name="name" className="mr-1" disabled />
                Yes
              </label>
              <label className="text-gray-700">
                <input type="radio" name="name" className="mr-1" disabled />
                No
              </label>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <label className="block  text-gray-600 text-base">
              Last Updated On
            </label>
            <div>28-03-2024</div>
          </div>
          <button className="bg-black p-2 px-4 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditCompanyInductionModal;
