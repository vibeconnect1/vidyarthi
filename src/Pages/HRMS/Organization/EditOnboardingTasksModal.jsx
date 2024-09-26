import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";

const EditOnboardingTasksModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Onboarding Task</h1>
        <form action="" className="grid grid-cols-1 px-5 gap-x-5 gap-y-4 w-96">
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Task Label"
              disabled
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <select
              className="border-b border-gray-500 focus:outline-none"
              disabled
            >
              <option>Select Category</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
              Is this task visible to employee?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
              Required for Running Payroll?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
              Can the admin mark this task as complete?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
              Can tasks be archived / ignored?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
            Is Comment Mandatory?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
            Upload Required by Task Assignee?
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
          <div className="flex flex-col gap-2">
            <label className="block  text-gray-600 text-base">
            Is this Upload Mandatory?
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
          <div className="flex flex-col gap-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Label for the Upload"
              disabled
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              htmlFor="file-upload"
              className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
            >
              <div className=" ">
                <p>Please Upload any Reference Instructions or Format for Assignee
                (Accepted Formats are .txt, .pdf, .jpg, .png, .xls,.xlsx, .doc,.docx, .ods, .edoc, .fdf, .dot, .ppt, .ppg, .html .zip .rar)</p>
              </div>
            </label>
            <input type="file" className="hidden" id="file-upload" disabled/>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name=""
              rows={2}
              placeholder="Description"
              disabled
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

export default EditOnboardingTasksModal;
