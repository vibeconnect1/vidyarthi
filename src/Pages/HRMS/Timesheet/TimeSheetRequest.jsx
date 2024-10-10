import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaChevronDown } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

function TimeSheetRequest() {
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Latest Submission Date",
      selector: (row) => row.latest_submission_date,
      sortable: true,
    },
    {
      name: "No. of Approved Applications",
      selector: (row) => row.approved_applications,
      sortable: true,
    },
    {
      name: "No. of Pending Applications",
      selector: (row) => row.pending_applications,
      sortable: true,
    },
    {
        name: "Action",
        cell: (row) => (
          <div>
            <Link to={`/hrms/time-sheet/edit-time-sheet-requests/${row.id}`}>
              <BiEdit size={15} />
            </Link>
          </div>
        ),
      },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Rahul Yadav",
      latest_submission_date: "-",
      approved_applications: "0",
      pending_applications: "0",
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
            <h1 className="text-3xl font-bold">Timesheet Requests</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-20">
        <div className="col-span-12 my-3 rounded-md mx-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet Requests
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
              <div>
                <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
              </div>
              <div>
                <select className="bg-white py-2 px-4 rounded-md w-full">
                  <option value="September-2024">September-2024</option>
                  <option value="August-2024">August-2024</option>
                  <option value="July-2024">July-2024</option>
                  <option value="June-2024">June-2024</option>
                  <option value="May-2024">May-2024</option>
                  <option value="April-2024">April-2024</option>
                  <option value="March-2024">March-2024</option>
                  <option value="February-2024">February-2024</option>
                  <option value="January-2024">January-2024</option>
                  <option value="December-2023">December-2023</option>
                  <option value="November-2023">November-2023</option>
                  <option value="October-2023">October-2023</option>
                  <option value="September-2023">September-2023</option>
                  <option value="August-2023">August-2023</option>
                  <option value="July-2023">July-2023</option>
                  <option value="June-2023">June-2023</option>
                  <option value="May-2023">May-2023</option>
                  <option value="April-2023">April-2023</option>
                  <option value="March-2023">March-2023</option>
                </select>
              </div>
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

export default TimeSheetRequest;
