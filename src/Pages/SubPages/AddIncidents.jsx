import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddIncidents = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <h2 className="text-center text-lg mx-10 my-5 font-semibold p-2 rounded-md bg-white">
            Add Incidents
          </h2>
          <div className="border-2 flex flex-col my-2 md:mx-10 p-8 gap-4 bg-white rounded-md ">
            <h2 className=" text-lg border-black border-b font-semibold ">
              DETAILS
            </h2>
            <div className="flex  flex-col justify-around ">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <input
                      type="date"
                      placeholder="Date"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                    <input
                      type="time"
                      placeholder="Time"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">
                      Select The Incident Primary Category
                    </option>
                    <option value="">Health and Safety</option>
                    <option value="">Fire</option>
                    <option value="">Near Miss/Good Catch</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">
                      Select The Category For The Incident
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Secondary Category</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Secondary Category</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Severity </option>
                    <option value="">Insignificant </option>
                    <option value="">Minor </option>
                    <option value="">moderate </option>
                    <option value="">major </option>
                    <option value="">catasTrophic </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Incident level</option>
                    <option value="">Level-1 </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Building</option>
                    <option value="">HelpDesk</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">
                      Select Near Miss / Good Catch Incident
                    </option>
                    <option value="">Near Miss / Good Catch </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Category For The Incident</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">
                      Select Secondary Category For The Incident
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">
                      Select The Secondary Category For The Incident
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">
                      Select Secondary Category For The Incident
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Probability</option>
                    <option value="">Rare </option>
                    <option value="">Possible </option>
                    <option value="">Likely </option>
                    <option value="">Often </option>
                    <option value="">Frequent Almost/Certain </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col my-3">
                <textarea
                  name=""
                  id=""
                  cols="5"
                  rows="3"
                  placeholder="Accident near Main Gate"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap- rounded-md bg-white">
            <div className=" mt-3 mb-10 ">
              <div className="flex items-center gap-6">
                {/* <label htmlFor="meterApplicable">Support</label> */}
                <input type="checkbox" name="is_meter" id="meterApplicable" />
                <label htmlFor="meterApplicable">Support required</label>
              </div>
              <div className="flex md:flex-row flex-col gap-2">
                {/* <label htmlFor="meterApplicable">Disclaimer </label>
                 */}
                <div className="flex items-center gap-6">
                  <input type="checkbox" name="is_meter" id="meterApplicable" />
                  <label htmlFor="meterApplicable">
                    I have correctly stated all the facts related to the
                    incident
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white ">
            <h2 className=" text-lg border-black border-b font-semibold ">
              ATTACHMENTS
            </h2>
            <div className="mt-2">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-32 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Click To Upload</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>
          </div>
          <div className="flex justify-center mb-20 my-3">
            <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
              Create Incident
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddIncidents;
