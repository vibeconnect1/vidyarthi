import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PerformanceSetting from "./PerformanceSetting";
import { BsEye } from "react-icons/bs";
import filter from "/filter.png";
import Table from "../../../ConfigurationFile/Table";
import profile3 from "/profile3.jpg";
function PerformanceEmployeeReview() {
  const columns = [
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
            <h2 className="font-medium text-base">{row.employee_name}</h2>
          </div>
        </div>
      ),
    },
    {
      name: "Average Score",
      selector: (row) => row.average_score,
      sortable: true,
    },
    {
      name: "Final Recommendation",
      selector: (row) => row.final_recommendation,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link to={`/hrms/performance/performance-employee-review/details-summary/${row.id}`} className="border p-2">
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Rohan",
      average_score: "average_score",
      final_recommendation: "Not Started",
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
              Performance Management System
            </h1>
          </div>
          <p className="mx-10 my-2">
            Performance reviews and ratings for each employee under this Section
          </p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div>
            <PerformanceSetting />
          </div>
        </div>
        <div className="col-span-9 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Employee Review
            </h2>
            <div className="flex gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                />
              </div>
              <button className="bg-white rounded-full h-10 w-10">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
            </div>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceEmployeeReview;
