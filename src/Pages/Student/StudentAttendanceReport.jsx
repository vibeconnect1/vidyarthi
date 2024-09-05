import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import Table from "../../ConfigurationFile/Table";

function StudentAttendanceReport() {
  const [attendance, setAttendance] = useState(false);
  const columns = [
    {
      name: "Month",
      selector: (row) => row.month,
    },
    {
      name: "Total Attendance",
      selector: (row) => row.totalAttendance,
    },
    {
      name: "Total Present",
      selector: (row) => row.totalPresent,
    },
    {
      name: "Total Absent",
      selector: (row) => row.totalAbsent,
    },
  ];
  const data = [
    {
      month: "August",
      totalAttendance: "23",
      totalPresent: "18",
      totalAbsent: "5",
    },
  ];

  const columnsAttendance = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Attendance",
      selector: (row) => row.attendance,
    },
  ];
  const dataAttendance = [
    {
      date: "1",
      attendance: "A",
    },
    {
        date: "2",
        attendance: "P",
    },
    {
        date: "3",
        attendance: "P",
    },
    {
        date: "4",
        attendance: "",
    },
    {
        date: "5",
        attendance: "P",
    },
    {
        date: "6",
        attendance: "A",
    },
    {
        date: "7",
        attendance: "P",
    },
    {
        date: "8",
        attendance: "P",
    },
    {
        date: "9",
        attendance: "P",
    },
    {
        date: "10",
        attendance: "P",
    },
    {
        date: "11",
        attendance: "",
    },
    {
        date: "12",
        attendance: "P",
    },
    {
        date: "13",
        attendance: "P",
    },
    {
        date: "14",
        attendance: "P",
    },
    {
        date: "15",
        attendance: "P",
    },
    {
        date: "16",
        attendance: "A",
    },
    {
        date: "17",
        attendance: "P",
    },
    {
        date: "18",
        attendance: "",
    },
    {
        date: "19",
        attendance: "P",
    },
    {
        date: "20",
        attendance: "P",
    },
    {
        date: "22",
        attendance: "P",
    },
    {
        date: "23",
        attendance: "P",
    },
    {
        date: "24",
        attendance: "P",
    },
    {
        date: "25",
        attendance: "P",
    },
    {
        date: "26",
        attendance: "",
    },
    {
        date: "27",
        attendance: "P",
    },
    {
        date: "28",
        attendance: "P",
    },
    {
        date: "29",
        attendance: "P",
    },
    {
        date: "30",
        attendance: "",
    },
    {
        date: "31",
        attendance: "P",
    },

  ];
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-gray-700 mx-5 my-5">
            Attendance
          </h2>
          <div className="mx-5 ">
            <Table columns={columns} data={data} pagination />
          </div>
          <div className="flex gap-5 mx-5 my-5">
            <div>
              <label>Month</label>
              <div className="flex flex-col mb-2">
                <input
                  type="month"
                  name=""
                  placeholder="Select Month"
                  className="border-b border-gray-500 focus:outline-none custom-bg"
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                className="border border-gray-500 rounded-md px-5 py-1"
                onClick={() => setAttendance(!attendance)}
              >
                View Attendance
              </button>
            </div>
          </div>
          {attendance && (
            <div>
              <div className="mx-5 mb-5">
                <Table columns={columnsAttendance} data={dataAttendance} pagination />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentAttendanceReport;
