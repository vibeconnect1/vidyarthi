import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const EditTicket = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div>
            <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md text-black mx-12 my-3">
              Edit Ticket Details
            </h2>
            <div className="bg-white mx-12 rounded-md mb-5">
              <div className="p-8 flex flex-col gap-5">
                <div className="w-full border border-gray-500 rounded-md py-1">
                  <p className="font-semibold text-center">Test 1</p>
                </div>
                <div className="grid grid-cols-2 gap-y-5 gap-x-10">
                  <div className="grid grid-cols-2 gap-2 items-center w-full">
                    <p className="font-semibold ">Site Owner :</p>
                    <p></p>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <p className="font-semibold ">Ticket No.:</p>
                    <p>10660</p>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <p className="font-semibold ">Site :</p>
                    <p>Nyati Unitree</p>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <p className="font-semibold ">Building Name :</p>
                    <p>East Building</p>
                  </div>
                  <div className="grid grid-cols-2 items-center w-full">
                    <p className="font-semibold ">Floor Name :</p>
                    <p>5th Floor</p>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <p className="font-semibold ">Unit :</p>
                    <p>room 5</p>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <p className="font-semibold ">Related To :</p>
                    <p></p>
                  </div>
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Status :
                    </label>
                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Status</option>
                      <option value="Complaint">Completed</option>
                      <option value="Suggestion">Close</option>
                      <option value="Request">Cancel</option>
                      <option value="Request">Pending</option>
                      <option value="Request">Open</option>
                    </select>
                  </div>
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
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      Approval Authority: :
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
                  <div className="grid grid-cols-2  items-center w-full">
                    <label htmlFor="" className="font-semibold ">
                      select option
                    </label>
                    <select
                      id=""
                      value=""
                      name=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Reactive</option>
                      <option value="">Proactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid ">
            <div className="flex flex-col justify-around my-2 ">
              <div className=""></div>
              <div className="flex flex-col  flex-wrap gap-2">
                <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md text-black mx-12 my-3">
                  Additional Info
                </h2>
                <div className="bg-white mx-12 py-5 rounded-md">
                  <div className="px-4 flex flex-col gap-1 justify-center">
                    <textarea
                      name="root_cause"
                      cols="15"
                      rows="2"
                      value=""
                      placeholder="Root Cause"
                      className="border-b border-gray-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="px-4 flex flex-col gap-1 justify-center">
                    <textarea
                      name="impact"
                      cols="15"
                      rows="2"
                      value=""
                      placeholder="Impact"
                      className="border-b border-gray-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="px-4 flex flex-col gap-1 justify-center">
                    <textarea
                      name="corrective_action"
                      cols="15"
                      rows="2"
                      value=""
                      placeholder="Corrective Action"
                      className="border-b border-gray-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="px-4 flex flex-col gap-1 justify-center">
                    <textarea
                      name="correction"
                      cols="15"
                      rows="2"
                      value=""
                      placeholder="Correction"
                      className="border-b border-gray-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="px-4 flex flex-col gap-1 justify-center">
                    <textarea
                      name="text"
                      value=""
                      placeholder="Comment:"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mt-5 mx-5">
                      <label
                        htmlFor="file-upload"
                        className="border border-dashed border-gray-500 p-4 mb-4 h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                      >
                        <p>Click To Upload</p>
                      </label>
                      <input type="file" className="hidden" id="file-upload" />
                    </div>
                  </div>
                  <div className="mt-5 w-full flex justify-center  ">
                    <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditTicket;
