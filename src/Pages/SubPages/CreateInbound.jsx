import React from "react";
import { PiPlusCircle } from "react-icons/pi";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const CreateInbound = () => {
  const vendors = [
    { id: 1, name: "Vendor A" },
    { id: 2, name: "Vendor B" },
    { id: 3, name: "Vendor C" },
  ];
  const recipients = [
    { id: 1, name: "Vendor A" },
    { id: 2, name: "Vendor B" },
    { id: 3, name: "Vendor C" },
  ];
  const type = [
    { id: 1, name: "Type A" },
    { id: 2, name: "Type B" },
    { id: 3, name: "Type C" },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-xl font-bold p-2  rounded-md bg-white mx-10 my-3">
            Create New Inbound Package
          </h2>
          <div className="my-5 bg-white rounded-md mx-10 py-5">
            <div className="flex justify-around my-10 mx-10 p-4 border border-gray-500 rounded-md">
              <div className="flex gap-2 items-center ">
                <label htmlFor="vendorSelect" className="font-semibold text-lg">
                  Select Vendor:
                </label>
                <select
                  id="vendorSelect"
                  onChange={(e) => onSelect(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select a Vendor</option>
                  {vendors.map((vendor) => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                </select>
                <button className="border-2 px-2 p-1 rounded-md font-semibold flex items-center gap-2 border-black">
                  <PiPlusCircle />
                  Add vendor
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="" className="font-semibold text-lg">
                  Receiving Date:
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Receiving Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <h2 className="border-b text-center text-xl border-black m-5 font-bold">
              Package Details
            </h2>
            <div className="grid grid-cols-4 gap-5 mx-10">
              <div className="flex flex-col">
                <select
                  id="vendorSelect"
                  onChange={(e) => onSelect(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Recipient</option>
                  {recipients.map((recipient) => (
                    <option key={recipient.id} value={recipient.id}>
                      {recipient.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Sender"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Mobile No"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter AWB Number"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Company"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Company's Address Line 1"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" Company's Address Line 2"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter State"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter City"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Pin Code"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <select
                  id="vendorSelect"
                  onChange={(e) => onSelect(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Type</option>
                  {type.map((recipient) => (
                    <option key={recipient.id} value={recipient.id}>
                      {recipient.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-10 my-5">
              <button className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 border-black font-semibold">
                Create Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateInbound;
