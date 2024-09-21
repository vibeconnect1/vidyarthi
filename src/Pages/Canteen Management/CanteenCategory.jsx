import React, { useState } from "react";
import CanteenNavbar from "./CanteenNavbar";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
function CanteenCategory() {
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
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Category Name",
      selector: (row) => row.Category_Name,
      sortable: true,
    },
    {
      name: "Timings",
      selector: (row) => row.Timings,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      Category_Name: "MP",
      Timings: "10",
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
            <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto bg-white">
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
                className="fixed inset-0 bg-black bg-opacity-50 "
                onClick={closeModal}
              ></div>
              <div className="bg-white w-80 h-60 rounded-lg shadow-lg p-4 relative z-10 ">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 "
                  onClick={closeModal}
                >
                  &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Add Category</h2>
                <form>
                  <div className="my-5">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="category-name"
                      type="text"
                      placeholder="Category Name"
                    />
                  </div>
                  <div className="my-5">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="timings"
                      type="text"
                      placeholder="Timings"
                    />
                  </div>
                  <div className="flex items-center justify-between my-10">
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

export default CanteenCategory;
