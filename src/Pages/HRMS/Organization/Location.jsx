import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import OrganizationSetting from "./OrganizationSetting";
import Table from "../../../ConfigurationFile/Table";
import HRMSHelpCenter from "./HRMSHelpCenter";
import { IoAddCircleOutline } from "react-icons/io5";

const Location = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  const columns = [
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },

    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => handleEditModal(row.id)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      location: "Head Office",
      city: "New York",
      state: "NY",
      country: "USA",
    },
    {
      id: 2,
      location: "Branch Office",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
    },
    {
      id: 3,
      location: "Warehouse",
      city: "Chicago",
      state: "IL",
      country: "USA",
    },
    {
      id: 4,
      location: "Regional Office",
      city: "Houston",
      state: "TX",
      country: "USA",
    },
  ];

  return (
    <section className="flex ml-20">
      <OrganizationSetting />
      <div className=" w-full flex m-3 flex-col overflow-hidden">
        <div className=" flex w-full gap-3 my-2">
          <input
            type="text"
            placeholder="Search by location "
            className="border border-gray-400 w-full placeholder:text-sm rounded-md p-2"
          />
          <div>
            <button
              className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              onClick={() => setModalIsOpen(true)}
            >
              <IoAddCircleOutline size={20} />
              Add
            </button>
          </div>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <HRMSHelpCenter help={"location"} />
      {modalIsOpen && (
        <div className="fixed inset-0 z-50 flex items-center overflow-y-auto justify-center bg-gray-500 bg-opacity-50">
          <div className="max-h-screen h-30 bg-white p-8 w-96 rounded-lg shadow-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Edit Branch Location</h2>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid gap-1">
                <label htmlFor="" className="font-medium">
                  Location
                </label>
                <input
                  type="text"
                  className="border p-2 border-black rounded-md"
                  name="location"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  className="border p-2 border-black rounded-md"
                  name="city"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  className="border p-2 border-black rounded-md"
                  name="state"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  className="border p-2 border-black rounded-md"
                  name="country"
                />
              </div>
            </div>
            <div className="flex mt-2 justify-end gap-2 w-full">
              <button className="bg-black text-white hover:bg-gray-700 font-medium py-2 px-4 rounded">
                Update
              </button>
              <button
                className="bg-red-400 text-white e font-medium py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Location;
