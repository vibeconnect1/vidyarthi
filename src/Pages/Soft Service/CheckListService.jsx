import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import InstituteDetails from "../School management/InstituteDetails";
import Services from "./Services";
import Header from "../Form/Header";
const CheckListService = () => {
  const columns = [
    {
        name: "Action",
        cell: (row) => (
          <div className="flex items-center gap-4">
            <Link to={`/school-management/edit-checklist-service/${row.id}`}>
              <BiEdit size={15} />
            </Link>
          </div>
        ),
      },
    { name: "Name", selector: (row) => row.name, sortable: true },

    {
      name: "frequency",
      selector: (row) => row.frequency,
      sortable: true,
    },
    { name: "Start Date", selector: (row) => row.start_date, sortable: true },
    { name: "End Date", selector: (row) => row.end_date, sortable: true },
    {
      name: "No. of Questions",
      selector: (row) => row.questions.length,
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
  const data = [
    {
      id: 5,
      name: "Daily Operational Checklist",
      frequency: "Daily",
      start_date: "2023-01-01",
      end_date: "2023-12-31",
      questions: 3,
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col overflow-hidden w-full">
            <Services/>
          <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  mx-5">
            <input
              type="text"
              placeholder="Search By name"
              className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
            />
            <div className="md:flex grid grid-cols-2 sm:flex-row  flex-col gap-2">
              <Link
                to={"/school-management/add-check-list-service"}
                className="bg-black  rounded-lg flex font-semibold  items-center gap-2 text-white p-2 "
              >
                <IoAddCircleOutline size={20} />
                Add
              </Link>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Export
              </button>
            </div>
          </div>
          <div className=" bg-white rounded-md mx-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckListService;
