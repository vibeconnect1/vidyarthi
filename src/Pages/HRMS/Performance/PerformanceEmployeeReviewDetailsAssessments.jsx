import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import PerformanceEmployeeReviewDetailsSetting from "./PerformanceEmployeeReviewDetailsSetting";
import { BsEye } from "react-icons/bs";
function PerformanceEmployeeReviewDetailsAssessments() {
  const columns = [
    {
      name: "Assessor Name",
      selector: (row) => row.assessor_name,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Assessor Weightage",
      selector: (row) => row.assessor_weightage,
      sortable: true,
    },
    {
      name: "Submission Dates",
      selector: (row) => row.submission_dates,
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
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      assessor_name: "Salome Kulangara",
      rating: "3.25",
      assessor_weightage: "100 %",
      submission_dates: "09-08-2024",
      status: "Completed",
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
        <div className="col-span-4 my-3 rounded-md ml-20">
          <div>
            <PerformanceEmployeeReviewDetailsSetting />
          </div>
        </div>
        <div className="col-span-8 my-3 rounded-md">
          <div className="my-2">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceEmployeeReviewDetailsAssessments;
