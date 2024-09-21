import React, { useState } from "react";
import HRMSHelpCenter from "./HRMSHelpCenter";
import OrganizationSetting from "./OrganizationSetting";

const AddressInformation = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex gap-2 justify-between ml-20">
      <OrganizationSetting />
      <div className=" py-6 bg-white rounded-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-6">Address Information</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={handleEditAddress}
              className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Save
            </button>
          )}
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 ">
            <div className=" ">
              <label className="block text-gray-700 font-medium">
                Address Line 1
              </label>
              <input
                type="text"
                name="addressLine1"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="">
              <label className="block text-gray-700 font-medium">
                Address Line 2
              </label>
              <input
                type="text"
                name="addressLine2"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="">
              <label className="block text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="">
              <label className="block text-gray-700 font-medium">
                State/Province
              </label>
              <input
                type="text"
                name="stateProvince"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Zip/Pin Code
              </label>
              <input
                type="text"
                name="zipCode"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Country</label>
              <input
                type="text"
                name="country"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
                  !isEditing ? "bg-gray-200" : ""
                }`}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
      <HRMSHelpCenter help={"basic"} />
    </div>
  );
};

export default AddressInformation