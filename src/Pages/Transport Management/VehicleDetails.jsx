import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const VehicleDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Vehicle Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Vehicle Number:</p>
                <p className="text-sm font-normal">XYZ123</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Model:</p>
                <p className="text-sm font-normal">Toyota Prius</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Capacity:</p>
                <p className="text-sm font-normal">4</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Year of Manufacture:</p>
                <p className="text-sm font-normal">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
