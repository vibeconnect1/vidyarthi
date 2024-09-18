import React from "react";

import { PiPlusCircle } from "react-icons/pi";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const Insurance = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <div className="my-5 flex md:flex-row flex-col justify-between items-center md:mx-5">
            <h2 className="font-semibold text-2xl">My Insurance Policy</h2>
            <Link
              to={"/school-management/add-insurance-policy"}
              className="border-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all border-black p-1 px-4 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} />
              Add New Policy
            </Link>
          </div>

          <div className="md:mx-5 rounded-md h-full bg-white">
            <div className="bg-gray-100 m-3 p-5 py-4 rounded-md">
              <p className="font-bold text-lg text-center md:text-left my-2">
                Policy Name
              </p>
              <div className="md:grid md:grid-cols-8 flex flex-col gap-2 md:gap-0">
                <div className="grid md:grid-cols-2 md:col-span-6">
                  <div className="grid grid-cols-2">
                    <p className="font-medium">Holder Name :</p>
                    <p>Holder</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="font-medium">Covered by :</p>
                    <p>Holder</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="font-medium">Policy Number :</p>
                    <p>Holder</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p className="font-medium">Policy period :</p>
                    <p>Holder</p>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 col-span-2">
                  <button className="bg-review text-white p-1 rounded-md bg-green-500">
                    Review Policy
                  </button>
                  <button className="bg-review text-white p-1 rounded-md flex gap-2 justify-center items-center bg-green-500">
                    <FaFile /> Download Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
