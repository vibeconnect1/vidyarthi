import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const TransportAllocationDetails = () => {

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Transport AllocationDetails Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Route Name:</p>
                <p className="text-sm font-normal">Link Road</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Vehicle Name:</p>
                <p className="text-sm font-normal">Bus</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Vehicle Number:</p>
                <p className="text-sm font-normal">Mh 2 HA 8968</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Driver Name:</p>
                <p className="text-sm font-normal">Ramesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportAllocationDetails