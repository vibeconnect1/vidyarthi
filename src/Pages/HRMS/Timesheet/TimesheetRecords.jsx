import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import profile3 from "/profile3.jpg";
function TimesheetRecords() {
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
      name: "Week 1",
      selector: (row) => row.week1,
      sortable: true,
    },
    {
      name: "Week 2",
      selector: (row) => row.week2,
      sortable: true,
    },
    {
      name: "Week 3",
      selector: (row) => row.week3,
      sortable: true,
    },
    {
      name: "Week 4",
      selector: (row) => row.week4,
      sortable: true,
    },
    {
      name: "Week 5",
      selector: (row) => row.week5,
      sortable: true,
    },
    {
      name: "MONTHLY HOURS",
      selector: (row) => row.monthly_hours,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <Link
            to={`/hrms/time-sheet/edit-time-sheet-requests/${row.id}`}
            className="border p-2"
          >
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
      week1: "00:00 HRS	",
      week2: "00:00 HRS",
      week3: "00:00 HRS",
      week4: "00:00 HRS",
      week5: "00:00 HRS",
      monthly_hours: "00:00 HRS",
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
            <h1 className="text-3xl font-bold">Timesheet Records</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-20">
        <div className="col-span-12 my-3 rounded-md mx-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet Records
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

export default TimesheetRecords;
