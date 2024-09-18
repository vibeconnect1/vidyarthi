import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Select from "react-select";
const AddSeatBooking = () => {
  const [behalf, setBehalf] = useState("self");
  const users = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
    { value: "user3", label: "User 3" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: "left",
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
    <section className="w-screen">
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col overflow-hidden w-full">
          <div className="">
            <h2 className="text-xl font-semibold text-center text-black bg-white py-2 mx-10 rounded-md my-3">
              Book Your Seat
            </h2>
          </div>
          <div className="bg-white rounded-md md:mx-10 p-4">
            <div className="md:grid flex flex-col grid-cols-4 items-center py-5">
              <p className="font-semibold">For :</p>
              <div className="flex gap-5">
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    behalf === "self" && "bg-black text-white"
                  }`}
                  onClick={() => setBehalf("self")}
                >
                  Self
                </p>
                <p
                  className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                    behalf === "others" && "bg-black text-white"
                  }`}
                  onClick={() => setBehalf("others")}
                >
                  Others
                </p>
              </div>
              {behalf === "others" && (
                <Select
                  options={users}
                  placeholder="Select User"
                  className="border-b border-gray-500 focus:outline-none w-full"
                  isMulti
                  styles={customStyles}
                />
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-5 my-4">
              <div className="grid  items-center">
                <input
                  type="date"
                  name="seat_date"
                  placeholder="Select Date"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="grid ">
                <select
                  name="building_id"
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Select Building :</option>
                </select>
              </div>
              <div className="grid ">
                <select
                  name="floor_id"
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Select Floor</option>
                </select>
              </div>
            </div>
            <div className="border-b border-gray-500 my-10 mb-10" />
            <div className="flex justify-center my-5">
              <button className=" p-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSeatBooking;
