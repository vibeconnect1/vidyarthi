import React, { useState } from "react";
import Services from "./Services";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const ServiceTask = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const Column = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/service/checklist/${row.soft_service_id}/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Service Name",
      selector: (row) => row.soft_service_name,
      sortable: true,
    },
    {
      name: "Checklist Name",
      selector: (row) => row.checklist_name,
      sortable: true,
    },

    {
      name: "Start Date",
      selector: (row) => row.start_time,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assigned_to_name,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      soft_service_id: 101,
      soft_service_name: "Cleaning",
      checklist_name: "Daily Cleaning",
      start_time: "2023-09-14",
      status: "pending",
      assigned_to_name: "John Doe",
    },
    {
      id: 2,
      soft_service_id: 102,
      soft_service_name: "Maintenance",
      checklist_name: "Weekly Maintenance",
      start_time: "2023-09-10",
      status: "complete",
      assigned_to_name: "Jane Smith",
    },
    {
      id: 3,
      soft_service_id: 103,
      soft_service_name: "Security",
      checklist_name: "Daily Security Check",
      start_time: "2023-09-12",
      status: "overdue",
      assigned_to_name: "Mike Lee",
    },
    // Add more data as needed
  ];
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <Services />
          <div className="flex sm:flex-row flex-col justify-between gap-2 my-5 mx-5">
            <div className="md:flex justify-between grid grid-cols-2 items-center  gap-2 border border-gray-300 rounded-md px-3 p-2 w-auto">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="all"
                  name="status"
                  checked={selectedStatus === "all"}
                  onChange={() => setSelectedStatus("all")}
                />
                <label htmlFor="all" className="text-sm">
                  All
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  checked={selectedStatus === "pending"}
                  onChange={() => setSelectedStatus("pending")}
                />
                <label htmlFor="pending" className="text-sm">
                  Pending
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  checked={selectedStatus === "complete"}
                  onChange={() => setSelectedStatus("complete")}
                />
                <label htmlFor="completed" className="text-sm">
                  Completed
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="completed"
                  name="status"
                  checked={selectedStatus === "overdue"}
                  onChange={() => setSelectedStatus("overdue")}
                />
                <label htmlFor="overdue" className="text-sm">
                  Overdue
                </label>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2">
              <input
                type="text"
                placeholder="Search By name"
                className="border border-gray-400 md:w-96 placeholder:text-xs rounded-lg p-2"
              />
            </div>
          </div>
          <div className="mx-5">
            <Table columns={Column} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTask;
