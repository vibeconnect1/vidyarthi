import React, { useState } from "react";
import Select from "react-select";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import { IoCloudUploadOutline } from "react-icons/io5";

const AddGoodsInOut = () => {
  const [type, setType] = useState("visitor");
  const [ward, setWard] = useState("in");

  const visitors = [
    { value: "rahul", label: "Rahul" },
    { value: "karan", label: "karan" },
    { value: "kapil", label: "Kapil" },
  ];

  const staff = [
    { value: "suraj", label: "Suraj" },
    { value: "arun", label: "Arun" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex md:mx-5 flex-col overflow-hidden">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-lg mb-4 text-black my-3">
            Add Goods
          </h2>
          <div className="flex justify-center items-center my-2 w-full md:p-2">
            <div className="md:border border-gray-300 rounded-lg md:p-4 p-2 w-full bg-white">
              <form className="space-y-4">
                <div className="grid lg:grid-cols-3 gap-5">
                  <div className="lg:flex grid grid-cols-2 items-center gap-5 my-2">
                    <p className="font-medium">Type :</p>
                    <div className="flex gap-5">
                      <h2
                        onClick={() => setType("visitor")}
                        className={`rounded-full cursor-pointer p-1 px-5 border-gray-400 border ${
                          type === "visitor" &&
                          "bg-black text-white font-medium"
                        }`}
                      >
                        Visitor
                      </h2>
                      <h2
                        onClick={() => setType("staff")}
                        className={`rounded-full p-1 cursor-pointer px-5 border-gray-400 border ${
                          type === "staff" && "bg-black text-white font-medium"
                        }`}
                      >
                        Staff
                      </h2>
                    </div>
                  </div>
                  <div className="lg:flex grid grid-cols-2 items-center gap-5 my-2">
                    <p className="font-medium">Inward/Outward :</p>
                    <div className="flex gap-5">
                      <h2
                        onClick={() => setWard("in")}
                        className={`rounded-full cursor-pointer p-1 px-5 border-gray-400 border ${
                          ward === "in" && "bg-black text-white font-medium"
                        }`}
                      >
                        Inward
                      </h2>
                      <h2
                        onClick={() => setWard("out")}
                        className={`rounded-full p-1 cursor-pointer px-5 border-gray-400 border ${
                          ward === "out" && "bg-black text-white font-medium"
                        }`}
                      >
                        Outward
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 my-2">
                  {type === "visitor" ? (
                    <div className="grid gap-2 items-center w-full">
                      <Select
                        id="visitor"
                        options={visitors}
                        noOptionsMessage={() => "Visitors not available..."}
                        className="border-b border-gray-500 focus:outline-none"
                        styles={customStyles}
                      />
                    </div>
                  ) : (
                    <div className="grid gap-2 items-center w-full">
                      <Select
                        id="visitor"
                        options={staff}
                        noOptionsMessage={() => "Visitors not available..."}
                        styles={customStyles}
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                  )}
                  <div className="grid gap-2 items-center w-full">
                    <input
                      type="number"
                      id="goodsQty"
                      name="noOfGoods"
                      placeholder="Enter number"
                      className="border-b border-gray-500 focus:outline-none"
                      min="1"
                    />
                  </div>

                  <div className="grid gap-2 items-center w-full">
                    <input
                      type="text"
                      id="vehicleNumber"
                      name="vehicleNumber"
                      placeholder="Enter vehicle number"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="3"
                    placeholder="Description"
                    className="border-b border-gray-500 focus:outline-none"
                  ></textarea>
                </div>

                <div className="grid gap-2 items-center w-full mt-2">
                  <label htmlFor="documents" className="font-semibold">
                    Documents
                  </label>
                  <div className="mt-5">
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-500 p-4 mb-4 h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                    >
                      <IoCloudUploadOutline size={30} />
                      <p>Click To Upload</p>
                    </label>
                    <input type="file" className="hidden" id="file-upload" />
                  </div>
                </div>

                <div className="flex gap-5 justify-center items-center my-4">
                  <button
                    type="submit"
                    className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddGoodsInOut;
