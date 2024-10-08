import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { AiOutlineFileExcel } from "react-icons/ai";

function AttendanceLogs() {
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Employee Code",
      selector: (row) => row.employee_code,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Capture Type",
      selector: (row) => row.capture_type,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
      sortable: true,
    },
    {
      name: "Selfie Image",
      selector: (row) => row.selfie_image,
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
      employee_name: "",
      employee_code: "",
      date: "",
      time: "",
      created_at: "",
      capture_type: "",
      location: "",
      comment: "",
      selfie_image: "",
      early_mark: "",
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
            <h1 className="text-3xl font-bold">Attendance Logs</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-20">
        <div className="col-span-12 my-3 rounded-md mx-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Attendance Logs
            </h2>
            <div className="flex gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                />
              </div>
              <div>
                <select className="bg-white py-2 px-4 rounded-md w-full">
                  <option value="October-2023">October-2023</option>
                  <option value="November-2023">November-2023</option>
                  <option value="December-2023">December-2023</option>
                  <option value="January-2024">January-2024</option>
                  <option value="February-2024">February-2024</option>
                  <option value="March-2024">March-2024</option>
                  <option value="April-2024">April-2024</option>
                  <option value="May-2024">May-2024</option>
                  <option value="June-2024">June-2024</option>
                  <option value="July-2024">July-2024</option>
                  <option value="August-2024">August-2024</option>
                  <option value="September-2024">September-2024</option>
                  <option selected="selected" value="October-2024">
                    October-2024
                  </option>
                  <option value="November-2024">November-2024</option>
                </select>
              </div>
              <div>
                <button className="bg-white rounded-md py-2 px-4 flex items-center gap-1">
                  <AiOutlineFileExcel /> Export
                </button>
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

export default AttendanceLogs;
