import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function Attendance() {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Link
            to={``}
            className="text-gray-600 hover:text-gray-900"
          >
            <BsEye size={18} />
          </Link>
        </div>
      ),
    },
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];

  const data = [
    {
      rollNo: "001",
      name: "John Doe",
      date: "2024-08-31",
      status: "Present",
    },
    {
      rollNo: "002",
      name: "Jane Smith",
      date: "2024-08-31",
      status: "Absent",
    },
  ];

  return (
    <section className="p-6  min-h-screen">
      <div className="w-full flex flex-col overflow-hidden shadow-lg rounded-lg">
        <div className="bg-white p-6 rounded-t-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                <option value="">Select Class</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none">
                <option value="">Select Division</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                className="my-2 block w-full py-2 shadow-sm border-b border-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div>
        <Table columns={columns} data={data} pagination />
        </div>
      </div>
    </section>
  );
}

export default Attendance;
