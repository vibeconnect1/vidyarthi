import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const AddCanteenProduct = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Add Product</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full py-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Product Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="SKU"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name=""
                  placeholder="Master Price"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name=""
                  placeholder="Display Price"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Stock"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name=""
                  placeholder="Stock"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="subject"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Active
                  </option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="subject"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="flex flex-col space-y-4">
                <select
                  name="subject"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select Sub Category
                  </option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="SGST Rate"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="SGST Amount"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="CGST Rate"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="CGST Amount"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="IGST Rate"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name=""
                  placeholder="IGST Amount"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <textarea
                  name="description"
                  placeholder="Event Description"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <div className="mt-5">
                  <label
                    htmlFor="file-upload"
                    className="border border-dashed border-gray-500 p-4 mb-4 h-32 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                  >
                    <p>Click To Upload</p>
                  </label>
                  <input type="file" className="hidden" id="file-upload" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCanteenProduct;
