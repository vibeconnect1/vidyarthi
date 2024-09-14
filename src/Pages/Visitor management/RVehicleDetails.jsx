import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import RVehicleQRCodeModal from "../Modal/RVehicleQRCodeModal";

const RVehicleDetails = () => {
  const [qrCode, setQrCode] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-black bg-white font-semibold rounded-md my-3 text-lg p-2 px-4 mx-5">
            R Vehicles Details
          </h2>
          <div className="bg-white mx-5 rounded-md py-5">
            <div className="flex gap-2 justify-end my-5 mx-5">
              <button
                className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => setQrCode(true)}
              >
                <FaQrcode /> QR Code
              </button>
              <Link
                to={`/school-management/edit-r-vehicle`}
                className="flex gap-2 items-center border-2 border-black px-4 p-1 rounded-full hover:bg-black transition-all duration-300 hover:text-white"
              >
                <BiEditAlt />
                Edit Details
              </Link>
            </div>
            <div className="md:grid  px-4 flex flex-col grid-cols-3 gap-5 gap-x-4">
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Slot Name : </p>
                <p className="">1</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Vehicle Category : </p>
                <p className="">4 Wheeler</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Vehicle Type : </p>
                <p className="">Hatchback</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Sticker Number: </p>
                <p className="">84</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Category : </p>
                <p className="">Owned</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">"Registration Number : </p>
                <p className="">456</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Active/Inactive : </p>
                <p className="">Active</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Insurance Number : </p>
                <p className="">2</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Insurance Valid Till : </p>
                <p className="">2/2/2024</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Person Name : </p>
                <p className="">Ramesh Kumar</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created by :</p>
                <p className="">Akshay Nyati</p>
              </div>

              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Created on :</p>
                <p className="">August 16, 2024 at 9:42 AM</p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="font-semibold text-sm">Updated on :</p>
                <p className="">August 16, 2024 at 9:43 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {qrCode && (
        <RVehicleQRCodeModal
          onClose={() => setQrCode(false)}
        />
      )}
    </div>
  );
};

export default RVehicleDetails;
