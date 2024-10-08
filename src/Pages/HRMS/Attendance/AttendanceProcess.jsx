import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { HiRocketLaunch } from "react-icons/hi2";
import { LuRefreshCcw } from "react-icons/lu";
import { FaDownload, FaInfoCircle } from "react-icons/fa";
function AttendanceProcess() {
  const columns = [
    {
      name: "Attendance Process Period",
      selector: (row) => row.attendance_process_period,
      sortable: true,
    },
    {
      name: "Run Date",
      selector: (row) => row.run_date,
      sortable: true,
    },
    {
      name: "Process Details",
      selector: (row) => row.process_details,
      sortable: true,
    },
    {
      name: "Export To Leave",
      selector: (row) => row.export_to_leave,
      sortable: true,
    },
    {
      name: "Export To Payroll",
      selector: (row) => row.export_to_payroll,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center flex-col space-y-1">
          <p>{row.status}</p>
          <span className="bg-green-500 text-white px-4 rounded-md">
            {row.status_percent}
          </span>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <FaDownload size={15} />
          </button>
          <button className="border p-2 cursor-pointer ">
            <FaDownload size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      attendance_process_period: "April-2024",
      run_date: "30-07-2024",
      process_details:
        "No of Processed Employees: 17 No of Unprocessed Employees: 26 No of Pending Employees: 0 Status: Incomplete",
      export_to_leave: (
        <div className="flex gap-2">
          <button className="bg-gray-500 rounded-md py-2 px-4 text-white">
            <LuRefreshCcw />
          </button>
          <button>
            <FaInfoCircle size={20} title="Sync Done: No" />
          </button>
        </div>
      ),
      export_to_payroll: (
        <div className="flex gap-2">
          <button className="bg-gray-500 rounded-md py-2 px-4 text-white">
            <LuRefreshCcw />
          </button>
          <button>
            <FaInfoCircle size={20} title="Sync Done: No" />
          </button>
        </div>
      ),
      status: "Completed",
      status_percent: "100%",
    },
    {
        id: 2,
        attendance_process_period: "March-2024",
        run_date: "13-05-2024",
        process_details:
          "No of Processed Employees: 8 No of Unprocessed Employees: 34 No of Pending Employees: 0 Status: Incomplete",
        export_to_leave: "Yes",
        export_to_payroll: "Yes",
        status: "Completed",
        status_percent: "100%",
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
            <h1 className="text-3xl font-bold">Attendance Finalization</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 ml-24 mx-5">
        <div className="col-span-12 my-3 rounded-md">
          <div className="flex justify-end">
            <div className="md:flex gap-2 mb-1">
              <Link to={`/hrms/attendance/attendance-process/running-attendance-process`} className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center w-full gap-2">
                <HiRocketLaunch size={15} />{" "}
                <span className="text-base">
                  Process August-2024 Attendance
                </span>
              </Link>
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

export default AttendanceProcess;
