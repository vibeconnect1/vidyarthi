import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Switch from "../../ConfigurationFile/Switch";

const EditSupplier = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 bg-white my-3 mx-12 rounded-md text-black">
            Edit Supplier
          </h2>
          <div className="md:mx-12 my-5 mb-10  p-5 px-10 rounded-lg bg-white">
            <h2 className="border-b text-xl border-black mb-6 font-semibold">
              Company Details
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Company Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Vendor Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Primary Phone"
                  className="border-b border-gray-500 focus:outline-none"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Secondary Phone"
                  className="border-b border-gray-500 focus:outline-none"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Primary Email"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Secondary Email"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="PAN"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <select
                  className="border-b border-gray-500 focus:outline-none"
                  name=""
                >
                  <option value="">Select Supplier Type</option>
                  <option value="">Raw Materials</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <select
                  className="border-b border-gray-500 focus:outline-none"
                  name=""
                >
                  <option value="">Select Category</option>
                  <option value="">Distributors</option>
                  <option value="">Supplier</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="url"
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Website URL"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter GST Number"
                />
              </div>
              <div className="flex gap-4 items-center">
                <p>Inactive</p>
                <Switch />
                <p>Active</p>
              </div>
            </div>
            <div>
              <h2 className="border-b text-xl my-5 border-black mb-6 font-semibold">
                Additional INFO
              </h2>
              <div className="flex flex-col gap-2">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  placeholder="Note"
                  className="border-b border-gray-500 focus:outline-none"
                ></textarea>
              </div>
            </div>
            <h2 className="border-b text-xl my-5 border-black mb-6 font-semibold">
              Address
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address Line 1"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address Line 2"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter District"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" Enter City"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter State"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Pin Code"
                  className="border-b border-gray-500 focus:outline-none"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Country"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <h2 className="border-b text-xl my-5 border-black mb-6 font-semibold">
              Bank Details
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Account Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Account Number"
                  className="border-b border-gray-500 focus:outline-none"
                  pattern="[0-9]*"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Bank & Branch"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="IFSC Code"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <h2 className="border-b text-xl my-5 border-black mb-6 font-semibold">
              Attachments
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
            <div className="flex gap-5 justify-center items-center my-4">
              <button className="border border-gray-500 text-black text-base py-1 px-5 rounded hover:bg-gray-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditSupplier;
