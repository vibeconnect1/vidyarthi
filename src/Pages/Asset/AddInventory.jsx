import React from "react";
import InstituteDetails from "../School management/InstituteDetails";

const AddInventory = () => {
  return (
    <section className="flex">
        <InstituteDetails/>
      <div className="flex flex-col w-full overflow-hidden">
        <h2
          className="text-center my-2 text-xl font-bold p-2 bg-white rounded-md text-black mx-12"
        >
          Add Stock
        </h2>
        <div className="md:mx-12 my-5 mb-10  p-5 px-10 rounded-lg bg-white">
          <div className="flex  flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Stock Name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="rate"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Rate"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="availableQuantity"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Quantity"
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="groupId"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Select Group</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="subGroupId"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option>Select Sub Group</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="minStock"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Minimum Stock Level"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="maxStock"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Maximum Stock Level"
                />
              </div>
            </div>

            <div className="flex flex-col my-2">
              <textarea
                name="description"
                id=""
                cols="30"
                rows="3"
                className="border-b border-gray-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-center my-2">
              <button
                className=" text-black p-1 px-4 rounded-md font-medium border border-gray-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddInventory