import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import filter from "/filter.png";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import profile3 from "/profile3.jpg";
import { FilterForm } from "../../../ConfigurationFile/FilterForm";
function FlexiBenefits() {
  const [page, setPage] = useState("pending");
  const [filterDropdown, setFilterDropdown] = useState(false);

  const flexiBenefitStatusList = [
    "Level 1 Approval Pending",
    "Level 2 Approval Pending",
  ];
  const supervisorList = ["Karan", "Rohit", " Sonu"];
  const employeeDepartmentList = ["Finance", "HR", " HR", "L machine", "L packing", "Marketing", "Operations", "Sales", "Unassigned"];
  const pendingColumns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
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
          {/* <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer text-yellow-500">
            <FaCheck size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <HiDotsVertical />
          </button> */}
        </div>
      ),
    },
  ];
  const pendingData = [
    {
      id: 1,
      employee_name: "",
      title: "",
      category: "",
      amount: "",
      submitted_on: "",
      status: "",
    },
  ];
  const completedColumns = [
    {
      name: "Name",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <div>
            <img
              src={profile3}
              className="h-10 w-10 rounded-full bg-gray-100"
            ></img>
          </div>
          <div>
            <h2 className="font-medium text-base w-full">
              {row.employee_name}
            </h2>
          </div>
        </div>
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Amount",
      cell: (row) => (
        <div className="flex items-center flex-col">
          <span className="">{row.amount_applied}</span>
          <span className="">{row.amount_approved}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
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
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <RiDeleteBin5Fill size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <FaDownload />
          </button>
        </div>
      ),
    },
  ];
  const completedData = [
    {
      id: 1,
      employee_name: "Karan Singh",
      title: "Flexi - REP 1",
      category: "Books & Periodicals",
      amount_applied: "Applied: Rs.3000",
      amount_approved: "Approved: Rs.3000",
      submitted_on: "26-06-2024",
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
            <h1 className="text-3xl font-bold">Flexi Benefit Management</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-24">
        <div className="col-span-12 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Flexi Benefits
            </h2>
            <div className="md:flex gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                />
              </div>
              <div>
                <button
                  className="bg-white rounded-full h-10 w-10"
                  onClick={() => setFilterDropdown(!filterDropdown)}
                >
                  <span className="flex justify-center items-center text-black">
                    <img src={filter} alt="filter-icon" />
                  </span>
                </button>
              </div>
              {filterDropdown && (
                <div className="absolute mt-12 right-32 bg-white rounded-md z-20 border-2 w-2/4 p-5">
                  <div className="grid grid-cols-3 gap-8 pt-5">
                    <FilterForm
                      label="Flexi Benefit Status"
                      options={flexiBenefitStatusList}
                    />
                    <input
                      type="text"
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="Start Date"
                    />
                    <input
                      type="text"
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="End Date"
                    />
                    <FilterForm
                      label="Supervisor"
                      options={supervisorList}
                    />
                    <FilterForm
                      label="Employee Department"
                      options={employeeDepartmentList}
                    />
                    <div className="flex justify-end col-span-3 gap-2">
                      <button className="border border-gray-500 rounded-md text-black py-1 px-4">
                        Clear
                      </button>
                      <button className="bg-gray-500 text-white py-1 px-4 rounded-md ">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md py-2 px-5 my-3">
            <div className="flex w-full">
              <div className=" flex gap-2 py-3">
                <h2
                  className={`p-1 ${
                    page === "pending" &&
                    `font-medium text-blue-500 border-b-2 border-blue-500`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear border-b`}
                  onClick={() => setPage("pending")}
                >
                  Pending Benefits
                </h2>
                <h2
                  className={`p-1 ${
                    page === "completed" &&
                    "font-medium text-blue-500 border-b-2 border-blue-500"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear border-b`}
                  onClick={() => setPage("completed")}
                >
                  Pending Benefits
                </h2>
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

export default FlexiBenefits;
