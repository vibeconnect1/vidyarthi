import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import upma from "/upma.jpg";
const CanteenProductDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Product Details</p>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Product Name:</p>
                <p className="text-sm font-normal">Upma With Chutney & Sambar</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Sku:</p>
                <p className="text-sm font-normal">SKU001</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Master Price:</p>
                <p className="text-sm font-normal">40</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Display Price:</p>
                <p className="text-sm font-normal">40</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Stock:</p>
                <p className="text-sm font-normal">5</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Active:</p>
                <p className="text-sm font-normal">Yes</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Category:</p>
                <p className="text-sm font-normal">Breaskfast</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Subcategory:</p>
                <p className="text-sm font-normal">Breaskfast</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <h2>Image</h2>
            <img
              src={upma}
              className="w-72 h-48 object-cover rounded-md "
              alt="Event"
            />
          </div>
          <div className="flex flex-col my-2 p-4 gap-4 rounded-md mx-5 bg-white">
            <h2>GST</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanteenProductDetails;
