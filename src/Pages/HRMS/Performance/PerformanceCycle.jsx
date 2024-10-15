import React from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import PerformanceSettingSidebar from "./PerformanceSettingSidebar";
import { PiPlusCircle } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

function PerformanceCycle() {
  const goalCategoriesColumns = [
    {
      name: "Cycle Name",
      selector: (row) => row.cycle_name,
      sortable: true,
    },
    {
      name: "Cycle Period",
      selector: (row) => row.cycle_period,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.created_date,
      sortable: true,
    },
    {
      name: "Updated Date",
      selector: (row) => row.updated_date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2 cursor-pointer">
            <BsEye size={15} />
          </button>
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <FaRegCheckCircle size={15} />
          </button>
        </div>
      ),
    },
  ];
  const goalCategoriesData = [
    {
      id: 1,
      cycle_name: "1862 | Annua...",
      cycle_period: "Jan 2024 to Dec 2024",
      created_date: "09-08-2024	",
      updated_date: "09-08-2024",
      status: "Active",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Karan Singh</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 my-3">
        <div className="col-span-4 ml-20">
          <PerformanceSettingSidebar />
        </div>
        <div className="col-span-8 my-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Performance Cycle
            </h2>
            <button className="border border-gray-400 text-gray-500 font-semibold py-2 px-4 rounded flex items-center whitespace-nowrap gap-2">
              <PiPlusCircle size={15} />
              <span>Create New Cycle</span>
            </button>
          </div>
          <div className="my-2 bg-white rounded-md p-5">
            <Table columns={goalCategoriesColumns} data={goalCategoriesData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCycle;
