import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import Header from "../Form/Header";
import { CiSearch } from "react-icons/ci";
import InstituteDetails from "../School management/InstituteDetails";
import { BiSolidEdit } from "react-icons/bi";

const Canteen = () => {
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <div className="flex gap-3">
          <Link
            to={`/school-management/canteen-product-details/${row.id}`}
          >
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-canteen-product/${row.id}`}>
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
          <p className="text-xl font-bold text-gray-600 mx-5 my-5">Canteen</p>
          <div className="flex justify-between mx-5 my-5">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
              />
              <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div>
              <Link
                to={`/school-management/add-canteen-product`}
                className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              >
                <IoAddCircleOutline size={20} /> Add
              </Link>
            </div>
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
