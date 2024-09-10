import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const PPMActivity = () => {
  const PPMColumn = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/ppm-checklist-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      name: "Frequency",
      selector: (row) => row.frequency,
      sortable: true,
    },
    {
      name: "No. Of Questions",
      selector: (row) => row.questions,
      sortable: true,
    },
    {
      name: "Associations",
      selector: (row) => (
        <div>
          <Link
            to={`/school-management/check-list-associate/${row.id}`}
            className=" px-4 bg-green-400 text-white rounded-full"
          >
            Associate
          </Link>
        </div>
      ),
      sortable: true,
    },
  ];
  const ppmData = [
    {
      id: 1,
      name: "Test attachments",
      start_date: "2024-09-01",
      end_date: "2024-09-30",
      frequency: "Monthly",
      questions: 1
    },
    {
      id: 2,
      name: "PPM Testing - Checklist",
      start_date: "2024-07-01",
      end_date: "2024-07-31",
      frequency: "Quarterly",
      questions: 2,
    },
  ];
  return (
    <section className="flex">
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div className="flex flex-wrap justify-between items-center my-2 ">
          <input
            type="text"
            placeholder="Search By name"
            className="border-2 p-2 w-96 border-gray-300 rounded-lg"
          />
          <div className="flex flex-wrap gap-2">
            <Link
              to={"/school-management/add-PPMActivity"}
              className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} />
              Add
            </Link>
          </div>
        </div>
        <Table columns={PPMColumn} data={ppmData} />
      </div>
    </section>
  );
};

export default PPMActivity;
