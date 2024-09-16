import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Services from "./Services";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const ServicePage = () => {
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
      selector: (row) => row.unit,
      sortable: true,
    },

    {
      name: "Created by",
      selector: (row) => row.user_name,
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
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
        <Services />
          <div className="flex flex-wrap justify-between items-center my-2 mx-5">
            <input
              type="text"
              placeholder="Search By Service name"
              className="border-2 p-2 w-96 border-gray-300 rounded-lg"
            />
            <div className="flex flex-wrap md:my-0 my-2 gap-2">
              <Link
                to={"/school-management/service-add"}
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
          <div className="mx-5">
            <Table columns={column} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
