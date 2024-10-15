import React from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import PerformanceSettingSidebar from "./PerformanceSettingSidebar";
import { PiPlusCircle } from "react-icons/pi";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineContentCopy } from "react-icons/md";

function PerformanceEvaluationTemplate() {
  const goalCategoriesColumns = [
    {
      name: "Template Name",
      selector: (row) => row.template_name,
      sortable: true,
    },
    {
      name: "Updated Date",
      selector: (row) => row.updated_date,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.created_date,
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
            <RiDeleteBin6Line size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <MdOutlineContentCopy size={15} />
          </button>
        </div>
      ),
    },
  ];
  const goalCategoriesData = [
    {
      id: 1,
      template_name: "Performance ...",
      updated_date: "09-06-2020",
      created_date: "25-04-2023",
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
              Evaluation Template
            </h2>
            <button className="border border-gray-400 text-gray-500 font-semibold py-2 px-4 rounded flex items-center whitespace-nowrap gap-2">
              <PiPlusCircle size={15} />
              <span>Add Evaluation Template</span>
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

export default PerformanceEvaluationTemplate;
