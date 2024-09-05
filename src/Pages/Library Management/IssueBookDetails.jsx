import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const IssueBookDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Issued Book Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Student Card Number:</p>
                <p className="text-sm font-normal">A12</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Book Title:</p>
                <p className="text-sm font-normal">Story Book</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Issue Date:</p>
                <p className="text-sm font-normal">2024-09-01</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Return Date:</p>
                <p className="text-sm font-normal">2024-09-15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueBookDetails;
