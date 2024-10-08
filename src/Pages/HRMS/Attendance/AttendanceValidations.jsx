import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";

function AttendanceValidations() {
  const columns = [
    {
      name: "Generated At",
      selector: (row) => row.generated_at,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      generated_at: "07-10-2024 00 : 10",
      date: "06-10-2024",
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
            <h1 className="text-3xl font-bold">Attendance Validations</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 ml-24">
        <div className="col-span-9 my-3 rounded-md">
          <div className="flex justify-end">
            <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded">
              Run Validation
            </button>
          </div>
          <div className="my-2">
            <Table columns={columns} data={data} />
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    The system automatically performs daily checks for the
                    current date, noting instances such as Present, Absent,
                    Half-days, Late Arrivals, Early Departures, Leaves etc based
                    on check-in/check-out times.
                  </li>
                  <li>
                    In case there are updates to Attendance Policy,
                    Shift/Roster, Biometric Sync, etc., that apply
                    retrospectively, administrators must manually validate
                    attendance for previous dates to ensure these changes are
                    correctly reflected.
                  </li>
                  <li>
                    Administrators can validate attendance for a maximum period
                    of 30 days at once.
                  </li>
                  <li>For additional information, please <Link to={``} className="text-red-500">Click Here</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceValidations;
