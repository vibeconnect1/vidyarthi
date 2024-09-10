import React from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const PPMTask = () => {
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
  const routineData = [
    {
      asset_id: "1",
      id: "101",
      asset_name: "Generator",
      checklist_name: "Monthly Maintenance",
      start_time: "2024-09-05T10:00:00",
      status: "Pending",
      assigned_to_name: "Rakesh Sharma"
    },
    {
      asset_id: "2",
      id: "102",
      asset_name: "Air Conditioner",
      checklist_name: "Weekly Inspection",
      start_time: "2024-09-06T12:30:00",
      status: "Completed",
      assigned_to_name: "Vivek Singh"
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
        </div>
        <Table
          columns={RoutineColumns}
          data={routineData}
          isPagination={true}
        />
      </div>
    </section>
  );
};

export default PPMTask;
