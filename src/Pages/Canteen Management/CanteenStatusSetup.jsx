import React, { useState } from "react";
import CanteenNavbar from "./CanteenNavbar";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
function CanteenStatusSetup() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/histdetails/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Order",
      selector: (row) => row.Order,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Display",
      selector: (row) => row.Display,
      sortable: true,
    },
    {
      name: "Fixed Status",
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: "Mail",
      selector: (row) => row.Mail,
      sortable: true,
    },
    {
      name: "SMS",
      selector: (row) => row.SMS,
      sortable: true,
    },
    {
      name: "Can Cancel",
      selector: (row) => row.Can,
      sortable: true,
    },
    {
      name: "Color",
      selector: (row) => row.color,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      Order: "8",
      Status: "pending",
      Display: "pending",
      Mail: <input type="checkbox" />,
      SMS: <input type="checkbox" />,
      Can: <input type="checkbox" />,
    },
  ];

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <CanteenNavbar />
          <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2 mx-5">
            <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 border border-gray-300 bg-white rounded-md px-3 p-2 w-auto">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="all"
                  name="status"
                  checked={selectedStatus === "all"}
                  onChange={() => handleStatusChange("all")}
                />
                <label htmlFor="all" className="text-sm">
                  All
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="upcoming"
                  name="status"
                  checked={selectedStatus === "upcoming"}
                  onChange={() => handleStatusChange("upcoming")}
                />
                <label htmlFor="upcoming" className="text-sm">
                  Upcoming
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  checked={selectedStatus === "completed"}
                  onChange={() => handleStatusChange("completed")}
                />
                <label htmlFor="completed" className="text-sm">
                  Completed
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="cancelled"
                  name="status"
                  checked={selectedStatus === "cancelled"}
                  onChange={() => handleStatusChange("cancelled")}
                />
                <label htmlFor="cancelled" className="text-sm">
                  Cancelled
                </label>
              </div>
            </div>
            <span className="flex gap-4">
              <button
                onClick={openModal}
                className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ height: "1cm" }}
              >
                <PiPlusCircle size={20} />
                Add
              </button>
            </span>
          </div>
          <div className="mx-5">
          <Table columns={columns} data={data} isPagination={true} />
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={closeModal}
              ></div>
              <div className="bg-white w-96 h-auto rounded-lg shadow-lg p-4 relative z-10">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Add Status</h2>
                <form>
                  <div className="mb-4">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="status"
                      type="text"
                      placeholder="Status"
                    />
                  </div>
                  <div className="mb-4 flex justify-between">
                    <div className="w-1/2 mr-2">
                      <input
                        className="border-b border-gray-500 focus:outline-none w-full"
                        id="display-name"
                        type="text"
                        placeholder="Display Name"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <input
                        className="border-b border-gray-500 focus:outline-none w-full"
                        id="fixed-state"
                        type="text"
                        placeholder="Fixed State"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="order"
                      type="text"
                      placeholder="Order"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="color"
                      type="text"
                      placeholder="Color"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={closeModal}
                    >
                      Add
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CanteenStatusSetup;
