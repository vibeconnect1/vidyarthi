import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

function ExamResult() {
  const columns = [
    {
      name: "Exam Name",
      selector: (row) => row.examName,
    },
    {
        name: "Class",
        selector: (row) => row.class,
    },
    {
        name: "Start Date",
        selector: (row) => row.startDate,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
    },
    {
      name: "Exam Center",
      selector: (row) => row.examCenter,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`/school-management/edit-exam-timetable/${row.id}`} className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base">
          <IoAddCircleOutline size={20} /> Add Result
          </Link>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      examName: "Unit text",
      class: "9th",
      startDate: "10 Sep, 2024",
      endDate: "15 Sep, 2024",
      examCenter: "At School",
    },
  ];
  
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Exam Result</p>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamResult