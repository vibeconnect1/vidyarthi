import React from "react";
import ModalWrapper from "./ModalWrapper";

const EditDeliveryVendorModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Vendor</h1>
        <form action="" className="grid grid-cols-2 px-5 gap-x-5 gap-y-4">
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter Vendor Name" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter Website Link" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter SPOC Person" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter Contact Number" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter Agreement Start Date" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="text" name="" id="" placeholder="Enter Agreement end Date" className="border-b border-gray-500 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <input type="file" name="" id=""   />
          </div>
          <button className="bg-black p-2 px-4 text-white rounded-md my-5" >
          Submit
        </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default EditDeliveryVendorModal