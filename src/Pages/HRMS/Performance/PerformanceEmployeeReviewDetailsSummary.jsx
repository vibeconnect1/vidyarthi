import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import PerformanceEmployeeReviewDetailsSetting from "./PerformanceEmployeeReviewDetailsSetting";
function PerformanceEmployeeReviewDetailsSummary() {
  const [page, setPage] = useState("assessments");
  const assessmentsColumns = [
    {
      name: "Period",
      selector: (row) => row.period,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
    },
  ];
  const assessmentsData = [
    {
      id: 1,
      period: "Assessment 1",
      status: "Completed",
      score: "3.25",
    },
  ];
  const finalRecommendationColumns = [
    {
      name: "Period",
      selector: (row) => row.period,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
    },
  ];
  const finalRecommendationData = [
    {
      id: 1,
      period: "Final Recommendation",
      status: "Not Started",
      score: "Pending",
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
          <div className="grid grid-cols-2 gap-5">
            <div className=" bg-white w-full rounded-md">
              <div className="border-b my-3 px-3 pb-2 flex justify-between">
                <h2 className="font-medium">Cycle Assigned</h2>
                <h2 className="font-medium">3.25</h2>
              </div>
            </div>
            <div className=" bg-white w-full rounded-md pb-3">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Goal Progress Status</h2>
              </div>
              <div className="flex justify-center">
                <img src="/NoImg.jpg" className="w-60 h-40"></img>
              </div>
              <h2 className="text-center">No Available Data to display</h2>
            </div>
          </div>
          <div className="bg-white rounded-md my-5">
            <div className="border-b my-3 px-3 py-3">
              <h2 className="font-medium">Timeline</h2>
            </div>
            <div className="flex w-full my-5">
              <div className=" flex gap-2 border-b border-gray-400 w-full">
                <h2
                  className={`p-1 ${
                    page === "assessments" &&
                    `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                  onClick={() => setPage("assessments")}
                >
                  Assessments
                </h2>
                <h2
                  className={`p-1 ${
                    page === "finalRecommendation" &&
                    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("finalRecommendation")}
                >
                  Final Recommendation
                </h2>
              </div>
            </div>
            {page === "assessments" && (
              <div className="my-2">
                <Table columns={assessmentsColumns} data={assessmentsData} />
              </div>
            )}
            {page === "finalRecommendation" && (
              <div className="my-2">
                <Table
                  columns={finalRecommendationColumns}
                  data={finalRecommendationData}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceEmployeeReviewDetailsSummary;
