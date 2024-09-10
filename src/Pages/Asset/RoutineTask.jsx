import React from "react";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";

const RoutineTask = () => {
  const RoutineColumns = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/routine-task-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Asset Name", selector: (row) => row.asset_name, sortable: true },
    {
      name: "Checklist",
      selector: (row) => row.checklist_name,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_time,
      sortable: true,
    },

    { name: "Status", selector: (row) => row.status, sortable: true },
    {
      name: "Assigned To",
      selector: (row) => row.assigned_to_name,
      sortable: true,
    },
  ];
  const RoutineData = [
    {
      id: 103,
      asset_name: "Laptop Dell XPS 15",
      checklist_name: "Monthly Hardware Check",
      start_time: "2023-09-01 08:30 AM",
      status: "Completed",
      assigned_to_name: "Rohan Gupta",
    },
    {
      id: 123,
      asset_name: "HP LaserJet Printer",
      checklist_name: "Weekly Printer Maintenance",
      start_time: "2023-09-03 10:00 AM",
      status: "Pending",
      assigned_to_name: "Prakash Kumar",
    },
    {
      id: 134,
      asset_name: "MacBook Pro 13",
      checklist_name: "Quarterly Software Update",
      start_time: "2023-09-05 09:00 AM",
      status: "Pending",
      assigned_to_name: "Mukesh Pal",
    },
    
  ];

  return (
    <section className="flex">
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
          <input
            type="text"
            placeholder="Search By Asset name or Checklist name"
            className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
          />
          <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2"></div>
        </div>
        <Table
          columns={RoutineColumns}
          data={RoutineData}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default RoutineTask;
