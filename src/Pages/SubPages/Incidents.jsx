import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { PiPlusCircle } from "react-icons/pi";

const Incidents = () => {
  const column = [
    {
      name: "view",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/incidents-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-incidents/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    { name: "ID", selector: (row) => row.ID, sortable: true },
    { name: "Description", selector: (row) => row.Description, sortable: true },
    { name: "Site", selector: (row) => row.Site, sortable: true },
    { name: "Region", selector: (row) => row.Region, sortable: true },
    { name: "Tower", selector: (row) => row.Tower, sortable: true },
    {
      name: "Incident Time",
      selector: (row) => row.IncidentTime,
      sortable: true,
    },
    { name: "Level", selector: (row) => row.Level, sortable: true },
    { name: "Category", selector: (row) => row.Category, sortable: true },
    {
      name: "Sub Category",
      selector: (row) => row.SubCategory,
      sortable: true,
    },
    {
      name: "Support Required",
      selector: (row) => row.SupportRequired,
      sortable: true,
    },
    { name: "Assigned To", selector: (row) => row.AssignedTo, sortable: true },
    {
      name: "Support Required",
      selector: (row) => row.SupportRequired,
      sortable: true,
    },
    {
      name: "CurrentStatus",
      selector: (row) => row.CurrentStatus,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      ID: 1079,
      Description: "Accident near Main Gate",
      Site: "GoPhygital",
      Region: "",
      IncidentTime: "18/03/2024 3:12 PM",
      Level: "L1",
      Category: "Health and Safetyending",
      SubCategory: "Injury / Illness",
      SupportRequired: "Yes ",
      AssignedTo: "",
      CurrentStatus: "Pending",
      action: <BsEye />,
    },
  ];
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <h2 className="text-lg font-semibold my-5 mx-5">INCIDENTS LIST</h2>
          <div className="flex flex-col sm:flex-row md:justify-between mx-5  gap-3 ">
            <input
              type="text"
              placeholder="search"
              className="border-2 p-2 w-70 border-gray-300 rounded-lg"
            />
            <Link
              to="/school-management/add-incidents"
              className=" border-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
            >
              <PiPlusCircle size={20} /> Add
            </Link>
          </div>
          <div className="my-5 mx-5">
            <Table columns={column} data={data} isPagination={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incidents;
