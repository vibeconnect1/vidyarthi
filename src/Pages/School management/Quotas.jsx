import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Header from "../Form/Header";
import InstituteDetails from "./InstituteDetails";

const Quotas = () => {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <Link to={``}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Quota Name",
      selector: (row) => row.quotaName,
    },
    {
      name: "Reserved (%)",
      selector: (row) => row.reserved,
    },
    {
      name: "Allocated (%)",
      selector: (row) => row.allocated,
    },
    {
      name: "Right To  Equation",
      selector: (row) => row.rightToEquation,
    },
    {
      name: "Remaining (%)",
      selector: (row) => row.remaining,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/academic/edit-quota/${row.id}`}>
            <BiSolidEdit size={15} />
          </Link>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      quotaName: "Scheduled Castes (SC)",
      reserved: "15%",
      allocated: "12%",
      rightToEquation:'5%',
      remaining: "3%",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Quota</p>
            <Link
              to={`/school-management/academic/add-quota`}
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} /> Add
            </Link>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quotas;
