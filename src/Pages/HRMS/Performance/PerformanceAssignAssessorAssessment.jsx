import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { FaChevronDown } from "react-icons/fa";
import filter from "/filter.png";
function PerformanceAssignAssessorAssessment() {
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
    },
    {
      name: "Assessor Assigned",
      selector: (row) => row.assessor_assigned,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          {/* <button className="border p-2">
            <BsEye size={15} />
          </button> */}
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "",
      assessor_assigned: "",
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
            <h1 className="text-3xl font-bold">
              Assign Assessor for Assessment 1
            </h1>
          </div>
          <p className="mx-10 my-2">
            Assign employee assessors for this Tuzar | APC
          </p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
        <div className="col-span-7 my-3 rounded-md bg-white">
          <div className="flex justify-between p-5 border-b border-gray-400 mx-2 py-3">
            <h2>Select Assessors</h2>
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
                <button className="border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <Table columns={columns} data={data} selectableRows={true} />
          </div>
        </div>
        <div className="col-span-5 my-3 rounded-md">
          <h2 className="my-5">Employee Assessor Selection</h2>
          <div className="bg-white p-5 rounded-md w-full">
            <p>Please define the assessors for an employee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceAssignAssessorAssessment;
