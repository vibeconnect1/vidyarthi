import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

const CreateTicket = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div>
            <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md text-black mx-12 my-3">
              Create Ticket
            </h2>
            <div className="bg-white mx-12 rounded-md mb-5">
              <form className="p-8 flex flex-col gap-5">
                <div className="grid grid-cols-2  gap-4 ">
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Type of :
                    </label>
                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Issue Type</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Request">Request</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Tower Name :
                    </label>
                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Tower</option>
                      <option value="">East Building</option>
                      <option value="">West Building</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <label htmlFor="" className="font-semibold">
                      Floor Name :
                    </label>
                    <select
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Floor</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Unit Name :
                    </label>

                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Unit Name</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Priority :
                    </label>
                    <select
                      value=""
                      id=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Priority</option>
                      <option value="P1">P1</option>
                      <option value="P2">P2</option>
                      <option value="P3">P3</option>
                      <option value="P4">P4</option>
                      <option value="P5">P5</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Category :
                    </label>
                    <select
                      id="two"
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Category</option>
                      <option value="">Plumbing</option>
                      <option value="">Carpenter</option>
                      <option value="">HouseKeeping</option>
                      <option value="">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Sub Category :
                    </label>
                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Sub Category</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <label htmlFor="" className=" font-semibold ">
                      Assigned To :
                    </label>
                    <select
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Assign To</option>
                      <option value="">Karan Singh</option>
                      <option value="">Kapil Pandey</option>
                      <option value="">Rohan More</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col justify-around">
                    <label
                      htmlFor=""
                      className="font-semibold my-2 flex justify-start"
                    >
                      Title :
                    </label>
                    <textarea
                      name="heading"
                      placeholder="Enter Title"
                      rows=""
                      cols={25}
                      className="border-b border-gray-500 focus:outline-none"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col justify-around ">
                  <label htmlFor="" className="font-semibold">
                    Description :
                  </label>
                  <textarea
                    name="text"
                    placeholder=" Describe your concern!"
                    id=""
                    cols="25"
                    rows="3"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div>
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
                <div className="flex gap-5 justify-center items-center my-4">
                  <button
                    type="submit"
                    className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTicket;
