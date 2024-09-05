import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const LibraryCardDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
            Library Card Details
            </p>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Card Number:</p>
                <p className="text-sm font-normal">A12</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Student Name:</p>
                <p className="text-sm font-normal ">Karan Singh</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Roll No:</p>
                <p className="text-sm font-normal ">20</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Class:</p>
                <p className="text-sm font-normal ">5</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Division:</p>
                <p className="text-sm font-normal ">A</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Join Date:</p>
                <p className="text-sm font-normal ">3 Sep, 2024</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Expire Date:</p>
                <p className="text-sm font-normal ">3 Sep, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCardDetails