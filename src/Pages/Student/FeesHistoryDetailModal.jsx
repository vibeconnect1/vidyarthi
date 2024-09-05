import React from "react";
import ModalWrapper from "../Modal/ModalWrapper";

const FeesHistoryDetailModal = ({ onclose }) => {
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-5">
          Payment History
        </h2>
        <div>
          <h1 className="text-xl font-medium text-gray-700">
            Greenwood High School
          </h1>
          <p className="text-gray-700 text-lg">jp road Andheri</p>
          <p className="text-gray-600 mt-1">
            Email:
            <span className="text-gray-600 hover:underline">
              info@school.com
            </span>
            | Phone:
            <span className="text-indigo-600 hover:underline">
              (123) 456-7890
            </span>
          </p>
        </div>
        <div className="border border-gray-500 my-5"></div>
        <div className="grid grid-cols-2 py-5 space-y-2 space-x-5">
          <div className="flex gap-4 ml-5">
            <h2 className="text-lg font-medium text-gray-500">Student Name</h2>
            <p className="text-gray-500 text-base mt-1">Karan Gupta</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Student Roll No:</h2>
            <p className="text-gray-500 text-base mt-1">001</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Student Email:</h2>
            <p className="text-gray-500 text-base mt-1">Karan@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Student Mobile No:</h2>
            <p className="text-gray-500 text-base mt-1">1234567812</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Receipt Number:</h2>
            <p className="text-gray-500 text-base mt-1">0001</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Amount</h2>
            <p className="text-gray-500 text-base mt-1">₹ 64,000</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Payment Method</h2>
            <p className="text-gray-500 text-base mt-1">Check</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Transaction Id:</h2>
            <p className="text-gray-500 text-base mt-1">JKM12</p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-medium text-gray-500">Date:</h2>
            <p className="text-gray-500 text-base mt-1">12, June, 2024</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default FeesHistoryDetailModal;
