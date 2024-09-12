import React from "react";
import InstituteDetails from "../School management/InstituteDetails";

const EditAssetAmc = () => {
  return (
    <section className="flex">
      <div className="hidden md:block">
        <InstituteDetails />
      </div>
      <div className="w-full flex mx-8 flex-col overflow-hidden">
            <h2 className="text-center text-xl font-bold p-2 rounded-md text-black bg-white my-2">
              Edit AMC
            </h2>
        <div className="flex flex-col my-5 p-4 gap-4 rounded-md bg-white">
          <div className="flex flex-col m-2">
            <h2 className="border-b  text-xl border-black font-semibold">
              Edit AMC
            </h2>
            <div className="grid md:grid-cols-3 gap-5 py-5">
              <div className="flex flex-col">
                <select
                  name="vendor_id"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Vendor</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="start_date"
                  id=""
                  placeholder="Start Date "
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="end_date"
                  id=""
                  placeholder="End Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="frequency"
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Frequency</option>
                  <option value="one Time">One Time</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half yearly">Half yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="border-b  text-xl border-black font-semibold my-2">
                Upload AMC Terms
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
            <div className="flex justify-center my-5">
              <button className="bg-black p-1 px-4 text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditAssetAmc;
