import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const GoodsInOutDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-black bg-white font-semibold rounded-md my-3 text-lg p-2 px-4 mx-5">
            GoodsInOut Details
          </h2>
          <div className="bg-white mx-5 rounded-md py-5">
            <div className="md:grid px-4 flex flex-col grid-cols-3 gap-5 gap-x-4">
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Inward/Outward: </p>
                <p>in</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Visitor : </p>
                <p>test new</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">No. of Goods: </p>
                <p>0</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Vehicle No.: </p>
                <p>34eere3</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Goods In Time: </p>
                <p>3:18 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Goods Out Time : </p>
                <p>3:18 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created by: </p>
                <p>Company Admin</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created On: </p>
                <p>2024-09-01 10:00 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Updated on: </p>
                <p>2024-09-12</p>
              </div>
            </div>
            <div className="grid grid-cols-1 mx-4">
              <p className="font-semibold text-sm py-2">Description : </p>
              <p>
                To add data according to the columns defined in your columns
                array, you should create a data array where each object matches
                the structure expected by the columns. Here’s an example of how
                you
              </p>
            </div>
          </div>
          <div className="mx-5 my-5">
            <h2 className="border-b border-gray-500 my-5 text-lg font-medium">
              Attachments
            </h2>
            <div className="bg-white py-5 px-5 my-5 rounded-md flex justify-center">
              <p>No Attachments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsInOutDetails;
