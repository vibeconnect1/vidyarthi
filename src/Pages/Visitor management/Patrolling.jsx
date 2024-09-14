import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Passes from "./Passes";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const Patrolling = () => {
  const [page, setPage] = useState("Schedule");

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/patrolling-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-patrolling`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },
    {
      name: "Floor",
      selector: (row) => row.floor_name,
      sortable: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit_name,
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
      name: "Start Time",
      selector: (row) => row.start_time,
      sortable: true,
    },
    {
      name: "End Time",
      selector: (row) => row.end_time,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.created_at,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      building_name: "Building A",
      floor_name: "Floor 1",
      unit_name: "Unit 101",
      start_date: "2024-09-10",
      end_date: "2024-09-12",
      start_time: "08:00 AM",
      end_time: "05:00 PM",
      created_at: "2024-09-01 10:00 AM",
    },
    {
      id: 2,
      building_name: "Building B",
      floor_name: "Floor 2",
      unit_name: "Unit 202",
      start_date: "2024-09-15",
      end_date: "2024-09-16",
      start_time: "09:00 AM",
      end_time: "06:00 PM",
      created_at: "2024-09-05 11:00 AM",
    },
    {
      id: 3,
      building_name: "Building C",
      floor_name: "Floor 3",
      unit_name: "Unit 303",
      start_date: "2024-09-20",
      end_date: "2024-09-21",
      start_time: "07:00 AM",
      end_time: "04:00 PM",
      created_at: "2024-09-07 09:30 AM",
    },
  ];
  const LogsColumn = [
    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },
    {
      name: "Floor",
      selector: (row) => row.floor_name,
      sortable: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit_name,
      sortable: true,
    },
    {
      name: "Expected Time",
      selector: (row) => row.expected_time,
      sortable: true,
    },
    {
      name: "Actual Date",
      selector: (row) => row.actual_time,
      sortable: true,
    },
  ];

  const LogsData = [
    {
      id: 1,
      building_name: "Building A",
      floor_name: "Floor 1",
      unit_name: "Unit 101",
      expected_time: "2024-09-10 08:00 AM",
      actual_time: "2024-09-10 08:15 AM",
    },
    {
      id: 2,
      building_name: "Building B",
      floor_name: "Floor 2",
      unit_name: "Unit 202",
      expected_time: "2024-09-12 09:00 AM",
      actual_time: "2024-09-12 09:10 AM",
    },
    {
      id: 3,
      building_name: "Building C",
      floor_name: "Floor 3",
      unit_name: "Unit 303",
      expected_time: "2024-09-15 07:00 AM",
      actual_time: "2024-09-15 07:05 AM",
    },
  ];
  
  return (
    <div className="visitors-page">
      <section className="flex">
        <InstituteDetails />
        <div className=" w-full flex mx-3  flex-col overflow-hidden">
          <Passes />
          <div className="flex w-full  m-2">
            <div className="flex w-full md:flex-row flex-col space-x-4  border-b border-gray-400">
              <h2
                className={`p-2 ${
                  page === "Schedule"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Schedule")}
              >
                Schedule
              </h2>
              <h2
                className={`p-2 ${
                  page === "Logs"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Logs")}
              >
                Logs
              </h2>
            </div>
          </div>
          <div className="flex justify-between">
            {page === "Schedule" && (
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="my-3 flex-grow">
                    <input
                      type="text"
                      className="border border-black p-2 rounded-md placeholder:text-sm w-full"
                      placeholder="Search using Visitor name, Host, vehicle number"
                    />
                  </div>
                  <div className="ml-4">
                    <Link
                      to={"/school-management/add-patrolling"}
                      className="font-semibold border border-gray-500 hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                    >
                      <PiPlusCircle size={20} />
                      Add
                    </Link>
                  </div>
                </div>
                <Table columns={columns} data={data} />
              </div>
            )}
            {page === "Logs" && (
              <div className="w-full">
                <div>
                  <div className="my-3 flex-grow">
                    <input
                      type="text"
                      className="border border-black p-2 rounded-md placeholder:text-sm w-full"
                      placeholder="Search using Visitor name, Host, vehicle number"
                    />
                  </div>
                </div>
                <Table columns={LogsColumn} data={LogsData} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patrolling;
