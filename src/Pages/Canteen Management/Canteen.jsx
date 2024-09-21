import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { BiSolidEdit } from "react-icons/bi";
import CanteenNavbar from "./CanteenNavbar";
import { PiPlusCircle } from "react-icons/pi";

const Canteen = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <div className="flex gap-3">
          <Link
            to={`/canteen/canteen-product-details/${row.id}`}
          >
            <BsEye size={15} />
          </Link>
          <Link to={`/canteen/edit-canteen-product/${row.id}`}>
            <BiSolidEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Sku",
      selector: (row) => row.sku,
    },
    {
      name: "Product",
      selector: (row) => row.product,
    },
    {
      name: "Master Price",
      selector: (row) => row.masterPrice,
    },
    {
      name: "Display Price",
      selector: (row) => row.displayPrice,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Sub Category",
      selector: (row) => row.subCategory,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
    },
    {
      name: "Update On",
      selector: (row) => row.updatedOn,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Cancellation",
      selector: (row) => row.cancellation,
    },
  ];

  const data = [
    {
      id: 1,
      sku: "SKU001",
      product: "Upma With Chutney & Sambar",
      masterPrice: "40",
      displayPrice: "40",
      category: "Breaskfast",
      subCategory: "Breaskfast",
      createdOn: "2024-08-01",
      updatedOn: "2024-08-15",
      status: "Available",
      cancellation: "Not Applicable",
    },
    {
      id: 2,
      sku: "SKU002",
      product: "Product B",
      masterPrice: " ₹200.00",
      displayPrice: " ₹180.00",
      category: "Category 2",
      subCategory: "Subcategory B",
      createdOn: "2024-07-15",
      updatedOn: "2024-08-10",
      status: "Out of Stock",
      cancellation: "Requested",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <CanteenNavbar/>
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
              <Link to={`/canteen/add-canteen-product`}
                className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ height: "1cm" }}
              >
                <PiPlusCircle size={20} />
                Add
              </Link>
            </span>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canteen;
