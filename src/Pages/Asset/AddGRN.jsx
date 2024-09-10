import React from "react";
import InstituteDetails from "../School management/InstituteDetails";

const AddGRN = () => {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="flex flex-col w-full overflow-hidden">
        <h2 className="text-center text-xl font-bold p-2 mx-12 my-2 rounded-md text-black bg-white">
          Add Grn
        </h2>
        <div>
          <div className="flex flex-col my-5 p-4 gap-4 rounded-md mx-12 bg-white">
            <h2 className="text-lg border- font-semibold text-center">
              GRN DETAILS
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Purchase Order</option>
                    <option value="">10019 - 4500000235</option>
                    <option value="">10020 - 4500000235</option>
                    <option value="">10020 - 4500000235</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Pratibha Enterprises </option>
                    <option value="">Pratibha Enterprises</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Payment Mode</option>
                    <option value="">Cheque</option>
                    <option value="">RTGS</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Text"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    placeholder="Enter Date"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    placeholder="Enter Date"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Other Expense"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="3"
                    placeholder="Note"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5 p-4 gap-4 rounded-md bg-white mx-12">
            <h2 className=" text-lg border-black font-semibold text-center">
              INVENTORY DETAILS
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Inventory Type</option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    placeholder="4"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Received Quantity"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Approved Quantity"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Rejected Quantity"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="9300.0"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="0"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <button className="bg-white text-black p-2 text-lg rounded-md border border-gray-500">
                  Add Batch
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white mx-12 rounded-md  py-1">
            <div className="my-3 mx-5">
              <h2 className=" text-lg border-black font-semibold text-start my-5">
                ATTACHMENTS*
              </h2>
              <div className="mt-5">
                <label
                  htmlFor="file-upload"
                  className="border border-dashed border-gray-500 p-4 mb-4 h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                >
                  <p>Click To Upload</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
            </div>
            <div>
              <div className="my-3 mx-5 text-end">
                <button className="bg-white text-black p-1 px-5 text-lg rounded-md border border-gray-500">
                  Total Amount:- 0.00
                </button>
              </div>
              <div className="my-10 mx-5 text-center">
                <button className="bg-white text-black p-1 px-5 text-lg rounded-md border border-gray-500">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddGRN;
