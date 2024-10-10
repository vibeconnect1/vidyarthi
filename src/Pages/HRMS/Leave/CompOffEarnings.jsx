import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import profile3 from "/profile3.jpg";
import { PiPlusCircle } from "react-icons/pi";
function CompOffEarnings() {
  const [page, setPage] = useState("pending");
  const pendingColumns = [
    {
      name: "Employee",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <div>
            <img
              src={profile3}
              className="h-10 w-10 rounded-full bg-gray-100"
            ></img>
          </div>
          <div>
            <h2 className="font-medium text-base">{row.employee_name}</h2>
          </div>
        </div>
      ),
    },
    {
      name: "Applied on",
      selector: (row) => row.applied_on,
      sortable: true,
    },
    {
      name: "Applied For",
      selector: (row) => row.applied_for,
      sortable: true,
    },
    {
      name: "Is Half Day?",
      selector: (row) => row.is_half_day,
      sortable: true,
    },
    {
      name: "Used on",
      selector: (row) => row.used_on,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
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
          <button className="border p-2 cursor-pointer text-yellow-500">
            <FaCheck size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <IoCloseSharp size={15} />
          </button>
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      employee_name: "Karan",
      applied_on: "13-03-2023",
      applied_for: "12-03-2023",
      is_half_day: "No",
      used_on: "",
      comment: "",
      status: "Level 1 Approval Pending",
    },
  ];
  const completedColumns = [
    {
      name: "Employee",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <div>
            <img
              src={profile3}
              className="h-10 w-10 rounded-full bg-gray-100"
            ></img>
          </div>
          <div>
            <h2 className="font-medium text-base">{row.employee_name}</h2>
          </div>
        </div>
      ),
    },
    {
      name: "Applied on",
      selector: (row) => row.applied_on,
      sortable: true,
    },
    {
      name: "Applied For",
      selector: (row) => row.applied_for,
      sortable: true,
    },
    {
      name: "Is Half Day?",
      selector: (row) => row.is_half_day,
      sortable: true,
    },
    {
      name: "Used on",
      selector: (row) => row.used_on,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
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
          {/* <button className="border p-2 cursor-pointer text-yellow-500">
            <FaCheck size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <IoCloseSharp size={15} />
          </button> */}
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Rohan",
      applied_on: "13-03-2023",
      applied_for: "12-03-2023",
      is_half_day: "No",
      used_on: "",
      comment: "",
      status: "Approved",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Comp Off Earnings</h1>
          </div>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12 my-3 rounded-md">
            <div className="flex justify-between">
              <div className="flex w-full">
                <div className=" flex gap-2 p-2 pb-0 border-b border-gray-400">
                  <h2
                    className={`p-1 ${
                      page === "pending" &&
                      `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                    } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("pending")}
                  >
                    Pending Earnings
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "completed" &&
                      "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                    } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                    onClick={() => setPage("completed")}
                  >
                    Completed Earnings
                  </h2>
                </div>
              </div>
              <div className="md:flex justify-end gap-2 mb-1">
                <div>
                  <input
                    type="text"
                    placeholder="Search by Employee Name or Code"
                    className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                  />
                </div>
                <button className="bg-white rounded-full h-10 w-10">
                  <span className="flex justify-center items-center text-black">
                    <img src={filter} alt="filter-icon" />
                  </span>
                </button>
                <div>
                  <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center whitespace-nowrap gap-2">
                    <PiPlusCircle size={15} />
                    <span>CompOff Earnings</span>
                  </button>
                </div>
              </div>
            </div>
            {page === "pending" && (
              <div className="my-2">
                <Table
                  columns={pendingColumns}
                  data={pendingData}
                  selectableRows={true}
                />
              </div>
            )}
            {page === "completed" && (
              <div className="my-2">
                <Table
                  columns={completedColumns}
                  data={completedData}
                  selectableRows={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompOffEarnings;
