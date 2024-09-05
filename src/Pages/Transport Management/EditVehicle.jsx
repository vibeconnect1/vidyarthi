import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const EditVehicle = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Edit Vehicle</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="vehicleNumber"
                  placeholder="Vehicle Number"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name="capacity"
                  placeholder="Capacity"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="year"
                  placeholder="Year of Manufacture"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-center my-5">
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

export default EditVehicle