import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";

const ScheduledAudit = () => {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/schedule-audit-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-schedule-audit/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Activity",
      selector: (row) => row.activityName,
      sortable: true,
    },
    {
      name: "Task",
      selector: (row) => row.task,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.assignedTo,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
    },
  ];
  const data = [
    {
      id: "1",
      activityName: "abc",
      assosiationNumber: "2",
      task: "xyz",
      assignedTo: "kunal",
      createdOn: "10/12/2023",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex md:flex-row md:justify-between flex-col gap-10 my-2 mx-5">
        <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 bg-white rounded-md px-3 p-2 w-auto">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="all"
              name="status"
              // checked={selectedStatus === "all"}
              // onChange={() => handleStatusChange("all")}
            />
            <label htmlFor="all" className="text-sm">
              All
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="open"
              name="status"
              // checked={selectedStatus === "open"}
              // onChange={() => handleStatusChange("open")}
            />
            <label htmlFor="open" className="text-sm">
              Open
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="closed"
              name="status"
              // checked={selectedStatus === "closed"}
              // onChange={() => handleStatusChange("closed")}
            />
            <label htmlFor="closed" className="text-sm">
              Closed
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="pending"
              name="status"
              // checked={selectedStatus === "pending"}
              // onChange={() => handleStatusChange("pending")}
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
              // checked={selectedStatus === "completed"}
              // onChange={() => handleStatusChange("completed")}
            />
            <label htmlFor="completed" className="text-sm">
              Completed
            </label>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={"/school-management/add-schedule-audit"}
            style={{}}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-300 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
            // onClick={() => setShowCountry(!showCountry)}
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
          <input
            type="text"
            placeholder="Search  "
            className="border border-gray-400 w-96 placeholder:text-xs rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={exportToExcel}
          >
            Export
          </button>
        </div>
      </div>
      <div className="mx-5">
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </div>
  );
};

export default ScheduledAudit;
