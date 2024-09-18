import React, { useState } from "react";
import Select from "react-select";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

const AddParking = () => {
  const [behalf, setBehalf] = useState("self");

  const users = [
    { label: 'User 1', value: 'user1' },
    { label: 'User 2', value: 'user2' },
    { label: 'New User', value: 'newUser' }
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: 'left',
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
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-xl font-semibold text-center mx-10 my-3 py-2 bg-white text-black rounded-md">
            Book Parking
          </h2>
          <div className="rounded-md md:mx-10 bg-white p-8 my-5">
            <div className="md:grid flex flex-col grid-cols-3 items-center my-2">
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
            <div className="flex md:grid  grid-cols-3 justify-between gap-5  flex-col">
              <div className="flex flex-col">
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Select Date"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none w-full">
                  <option value="">Select Tower</option>
                  <option value="">East Building</option>
                  <option value="">West Building</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none w-full">
                  <option value="">Select Floor</option>
                  <option value="user1">Floor 1</option>
                  <option value="User2">Floor 2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <select className="border-b border-gray-500 focus:outline-none w-full">
                  <option value="">Select Parking Slot</option>
                  <option value="all">All</option>
                  <option value="EV">EV</option>
                  <option value="visitor">Visitor</option>
                </select>
              </div>
              <div className="grid  items-center">
                <select className="border-b border-gray-500 focus:outline-none w-full">
                  <option value="">Select Vehicle Type</option>
                  <option value="4 wheeler">4 Wheeler</option>
                  <option value="2 wheeler">2 Wheeler</option>
                </select>
              </div>
              <div className="grid  items-center">
                <input
                  type="time"
                  name=""
                  id=""
                  placeholder="From"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="grid items-center">
                <input
                  type="time"
                  name=""
                  id=""
                  placeholder="To"
                  className="border-b border-gray-500 focus:outline-none w-fulld"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="p-1 px-4 bg-black text-white hover:bg-white hover:text-black rounded-md border-2 border-black font-medium transition-all duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddParking;
