import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PerformanceSetting from "./PerformanceSetting";
import Table from "../../../ConfigurationFile/Table";
import PerformanceCycleSettingsBasicDetails from "./PerformanceCycleSettingsBasicDetails";
import PerformanceCycleSettingsAssessments from "./PerformanceCycleSettingsAssessments";
import PerformanceCycleSettingsReviewPeriod from "./PerformanceCycleSettingsReviewPeriod";
function PerformanceCycleSettings() {
  const [page, setPage] = useState("basicDetails");
  
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
            <h2 className="flex items-center text-gray-800 text-xl font-medium my-3">
              Cycle Settings
            </h2>
          </div>
          <div className="flex justify-around bg-white p-5 rounded-md">
            <div className="flex w-full">
              <div className=" flex justify-around gap-2 w-full">
                <h2
                  className={`p-1 ${
                    page === "basicDetails" &&
                    `bg-white font-medium text-green-500 shadow-custom-all-sides`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                  onClick={() => setPage("basicDetails")}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/success.png"
                      className="h-10 w-10 rounded-full"
                    ></img>
                    <h2>Step 1</h2>
                    <h2>Basic Details</h2>
                  </div>
                </h2>
                <h2
                  className={`p-1 ${
                    page === "assessments" &&
                    "bg-white font-medium text-green-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("assessments")}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/success.png"
                      className="h-10 w-10 rounded-full"
                    ></img>
                    <h2>Step 2</h2>
                    <h2>Assessments</h2>
                  </div>
                </h2>
                <h2
                  className={`p-1 ${
                    page === "reviewPeriod" &&
                    " font-medium text-green-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("reviewPeriod")}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/success.png"
                      className="h-10 w-10 rounded-full"
                    ></img>
                    <h2>Step 3</h2>
                    <h2>Review Period</h2>
                  </div>
                </h2>
              </div>
            </div>
          </div>
          {page === "basicDetails" && (
            <div>
              <PerformanceCycleSettingsBasicDetails/>
            </div>
          )}
          {page === "assessments" && (
            <div>
              <PerformanceCycleSettingsAssessments/>
            </div>
          )}
          {page === "reviewPeriod" && (
            <div>
              <PerformanceCycleSettingsReviewPeriod/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PerformanceCycleSettings;
