import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddRVehicles = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 text-black mx-5">
            Add Vehicles
          </h2>
          <div className="flex justify-center items-center  w-full">
            <form className="border border-gray-300 rounded-lg p-4 w-full mx-5 bg-white">
              <div className="grid md:grid-cols-3 gap-5 my-2 py-5">
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select User</option>
                    <option>Rahul Sharma</option>
                    <option>Mahon Jha</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select Parking Slot</option>
                    <option>Left Side</option>
                    <option>Right Side</option>
                    <option>B1</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select Vehicle Category</option>
                    <option>2 Wheeler</option>
                    <option>4 Wheeler</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select Vehicle Type</option>
                    <option>SUV</option>
                    <option>Sedan</option>
                    <option>Hatchback </option>
                    <option>Bike</option>
                    <option>Truck</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="slotNumber"
                    name="slotNumber"
                    placeholder="Enter Slot Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="stickerNumber"
                    name="stickerNumber"
                    placeholder="Enter Sticker Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    placeholder="Enter Registration Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="insuranceNumber"
                    name="insuranceNumber"
                    placeholder="Enter Insurance Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    id="insuranceValidTill"
                    name="insuranceValidTill"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select Category</option>
                    <option>Owned</option>
                    <option>Staff</option>
                    <option>Leased</option>
                    <option>warehouse</option>
                    <option>workshop</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    placeholder="Enter Vehicle Number"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <select className="border-b border-gray-500 focus:outline-none">
                    <option>Select Unit</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 justify-center items-center my-4">
                <button
                  type="submit"
                  className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddRVehicles;
