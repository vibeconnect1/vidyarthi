import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const SoftServiceWidgets = () => {
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/service-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-service/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Service Name",
      selector: (row) => row.name,
      sortable: true,
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
      selector: (row) =>
        row.units,
      sortable: true,
    },

    {
      name: "Created by",
      selector: (row) => row.user_name,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) =>row.created_at,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Electrical Maintenance",
      building_name: "Tower A",
      floor_name: "3rd Floor",
      unit: "301",
      user_name: "John Doe",
      created_at: "2024-09-14",
    },
    {
      id: 2,
      name: "Plumbing Service",
      building_name: "Tower B",
      floor_name: "5th Floor",
      unit: "505",
      user_name: "Jane Smith",
      created_at: "2024-09-12",
    },
    {
      id: 3,
      name: "Cleaning Service",
      building_name: "Tower C",
      floor_name: "1st Floor",
      unit: "105",
      user_name: "Mark Johnson",
      created_at: "2024-09-10",
    },
    {
      id: 4,
      name: "AC Repair",
      building_name: "Tower D",
      floor_name: "7th Floor",
      unit: "702",
      user_name: "Alice Brown",
      created_at: "2024-09-08",
    },
    {
      id: 5,
      name: "Fire Safety Inspection",
      building_name: "Tower E",
      floor_name: "2nd Floor",
      unit: "203",
      user_name: "Michael Green",
      created_at: "2024-09-06",
    },
  ];

  return (
    <section>
      <Header/>
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex gap-4 items-center overflow-auto mx-5 my-5 ">
            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col hover:bg-blue-400 hover:backdrop-blur-sm hover:bg-opacity-45 border-blue-400 cursor-pointer text-blue-400 border-4 items-center  text-sm w-fit font-medium transition-all duration-300">
              Total services
              <span className="font-medium text-base text-black"></span>
            </p>

            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 hover:bg-green-400 hover:backdrop-blur-sm hover:bg-opacity-45 border-green-400 rounded-md flex flex-col cursor-pointer border-4 items-center text-gray-500 text-sm w-fit font-medium transition-all duration-300">
              Checklist
              <span className="font-medium text-base text-black"></span>
            </p>
            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col hover:bg-red-400 hover:backdrop-blur-sm hover:bg-opacity-45 border-4 items-center cursor-pointer border-red-400 text-gray-500 text-sm w-fit font-medium transition-all duration-300">
              Tasks
              <span className="font-medium text-base text-black"></span>
            </p>
            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col border-4 items-center cursor-pointer border-yellow-400 text-yellow-500 text-sm w-fit font-medium">
              Tasks Pending
              <span className="font-medium text-base text-black"></span>
            </p>
            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col border-4 items-center cursor-pointer border-cyan-400 text-cyan-500 text-sm w-fit font-medium">
              Tasks Completed
              <span className="font-medium text-base text-black"></span>
            </p>
            <p className="bg-white min-w-44 shadow-custom-all-sides p-4 rounded-md flex flex-col border-4 items-center cursor-pointer border-orange-500 text-orange-500 text-sm w-fit font-medium">
              Tasks Overdue
              <span className="font-medium text-base text-black"></span>
            </p>
          </div>
          <div className="mx-5"> 
          <Table columns={column} data={data}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftServiceWidgets;
