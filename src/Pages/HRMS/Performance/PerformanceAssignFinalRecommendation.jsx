import React from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaChevronDown } from "react-icons/fa";
function PerformanceAssignFinalRecommendation() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Reporting Supervisor",
      selector: (row) => row.reporting_supervisor,
      sortable: true,
    },
    {
      name: "Work Location",
      selector: (row) => row.work_location,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Appraisers Name",
      selector: (row) => row.appraisers_name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "",
      reporting_supervisor: "",
      work_location: "",
      department: "",
      appraisers_name: "",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-xl font-medium mx-5">
              Welcome, Salome Kulangara
            </h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
        <div className="my-3 col-span-12 rounded-md bg-white">
          <div className="flex justify-between p-5 border-b border-gray-400 mx-2 py-3">
            <h2>Final Recommender</h2>
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
      </div>
    </div>
  );
}

export default PerformanceAssignFinalRecommendation;
