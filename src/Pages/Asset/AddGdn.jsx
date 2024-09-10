import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import InstituteDetails from "../School management/InstituteDetails";

const AddGdn = () => {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="flex flex-col w-full overflow-hidden">
        <h2 className="text-center text-xl font-bold p-2 mx-12 my-2 rounded-md text-black bg-white">
          Add GDN
        </h2>
        <div className="w-full flex  flex-col overflow-hidden">
          <div className=" flex flex-col my-5 mx-12 p-4 gap-4 rounded-md bg-white">
            <h2 className=" border-b-2 border-gray-400 font-semibold text-lg">
              Basic Details
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col">
                  <input
                    type="date"
                    placeholder="Enter Date"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col ">
                  <textarea
                    name=""
                    id=""
                    cols="1"
                    rows="1"
                    placeholder="Description"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5 mx-12 p-4 gap-4 rounded-md bg-white">
            <h2 className=" border-b-2 border-gray-400 font-semibold text-lg">
              Inventory Details
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid md:grid-cols-2 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value=""> Selcet Inventory</option>
                    <option value="">Pratibha Enterprises</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Current Stock"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col  ">
                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="1"
                    placeholder="Comments"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <button className="bg-white text-black p-1 px-5 text-lg rounded-md border border-gray-500">
                    Add Inventory
                  </button>
                </div>
                <div className="flex flex-col">
                  <RiDeleteBin6Line className="text-red-500 my-2 mx-4" />
                </div>
              </div>
            </div>
            <div className="my-10 mx-5 text-center">
              <button className="bg-white text-black p-1 px-5 text-lg rounded-md border border-gray-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddGdn;
