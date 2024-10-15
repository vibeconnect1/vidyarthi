import React from "react";
import AdminHRMS from "../AdminHRMS";
import SurveySidebar from "./SurveySidebar";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

function ExitInterviewsSetting() {
  const columns = [
    {
      name: "Template Name",
      selector: (row) => row.template_name,
      sortable: true,
    },
    {
      name: "Initiation Count",
      selector: (row) => row.initiation_count,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Last Updated On",
      selector: (row) => row.last_updated_on,
      sortable: true,
    },
    {
      name: "Last Updated By",
      selector: (row) => row.last_updated_by,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <IoCloseSharp size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <MdContentCopy size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      template_name: "Exit Interview Template",
      initiation_count: "12",
      status: "Active",
      last_updated_on: "01-04-2024",
      last_updated_by: "Vinayak Kapdoskar",
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
      <div className="grid grid-cols-12 gap-5 my-3 mx-5">
        <div className="col-span-3 ml-20">
          <SurveySidebar />
        </div>
        <div className="col-span-9 my-5">
          <div className="flex justify-between mt-5">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Exit Interviews
            </h2>
            <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md whitespace-nowrap">
              Create New Template
            </button>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExitInterviewsSetting;
