import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";

const AdmitCards = () => {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div>
          <input type="checkbox" />
        </div>
      ),
    },
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "Exam Type",
      selector: (row) => row.examType,
    },
  ];

  const data = [
    {
      id: 1,
      Name: "John Doe",
      rollNo: "001",
      class: "10th Grade", // Same class for all
      division: "A", // Same division for all
      examType: "Final Exam", // Same exam type for all
    },
    {
      id: 2,
      Name: "Jane Smith",
      rollNo: "002",
      class: "10th Grade", // Same class for all
      division: "A", // Same division for all
      examType: "Final Exam", // Same exam type for all
    },
    {
      id: 3,
      Name: "Mark Johnson",
      rollNo: "003",
      class: "10th Grade", // Same class for all
      division: "A", // Same division for all
      examType: "Final Exam", // Same exam type for all
    },
    {
      id: 4,
      Name: "Emily Davis",
      rollNo: "004",
      class: "10th Grade", // Same class for all
      division: "A", // Same division for all
      examType: "Final Exam", // Same exam type for all
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="mx-5 my-5">
            <h1 className="text-3xl font-bold">Admit Card Generation</h1>
          </div>
          <div className="flex space-x-4 mb-6 mx-5">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Search by name or ID"
            />
            <select className="p-2 border rounded">
              <option value="">Select Class</option>
              <option value="10">Class 10</option>
              <option value="12">Class 12</option>
            </select>
            <select className="p-2 border rounded">
              <option value="">Select Division</option>
              <option value="10">A</option>
              <option value="12">B</option>
              <option value="12">C</option>
            </select>
            <select className="p-2 border rounded">
              <option value="">Select Exam</option>
              <option value="final">Final Exam</option>
              <option value="mid">Mid-Term Exam</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>
          <div className="mx-5">
            <Table columns={columns} data={data} pagination />
          </div>
          <div className="flex justify-between mt-6 mx-5">
            <button className="bg-green-500 text-white px-6 py-2 rounded">
              Generate Admit Cards
            </button>
            <button className="bg-gray-500 text-white px-6 py-2 rounded">
              Download All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitCards;
