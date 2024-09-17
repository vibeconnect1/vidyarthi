import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const PermitPendingApproval = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/permit-pending-approval-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Permit Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Reference No.",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Site Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Level",
      selector: (row) => row.level,
      sortable: true,
    },

    {
      name: "Cancellation",
      selector: (row) =>
        row.status === "Upcoming" && (
          <button className="text-red-400 font-medium">Cancel</button>
        ),
      sortable: true,
    },
    {
      name: "Approval",
      selector: (row) =>
        row.status === "Upcoming" && (
          <div className="flex justify-center gap-2">
            <button className="text-green-400 font-medium hover:bg-green-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <TiTick size={20} />
            </button>
            <button className="text-red-400 font-medium hover:bg-red-400 hover:text-white transition-all duration-200 p-1 rounded-full">
              <IoClose size={20} />
            </button>
          </div>
        ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      Type: "abc",
      status: "Upcoming",
      no: "78",
      name: "abv",
      level: "hjk",
    },
    {
      id: 2,
      Type: "abc",
      status: "Upcoming",
      no: "78",
      name: "abv",
      level: "hjk",
    },
    {
      id: 3,
      Type: "abc",
      status: "Upcoming",
      no: "78",
      name: "abv",
      level: "hjk",
    },
  ];

  return (
    <section className="flex">
      <div className=" w-full flex mx-3 flex-col overflow-hidden">
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2 mx-5">
          <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 border border-gray-300 rounded-md px-3 p-2 w-auto bg-white">
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
                id="upcoming"
                name="status"
                // checked={selectedStatus === "open"}
                checked={
                  selectedStatus === "upcoming" || selectedStatus === "upcoming"
                }
                // onChange={() => handleStatusChange("open")}
              />
              <label htmlFor="open" className="text-sm">
                upcoming
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="completed"
                name="status"
                checked={selectedStatus === "completed"}
                onChange={() => setSelectedStatus("completed")}
              />
              <label htmlFor="completed" className="text-sm">
                Completed
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cancelled"
                name="status"
                checked={selectedStatus === "cancelled"}
                onChange={() => setSelectedStatus("cancelled")}
              />
              <label htmlFor="completed" className="text-sm">
                Cancelled
              </label>
            </div>
          </div>
          <span className="flex gap-4">
            <button
              className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
              style={{ height: "1cm" }}
            >
              Filter
            </button>
          </span>
        </div>
        <div className="mx-5">
          <Table columns={columns} data={data} isPagination={true} />
        </div>
      </div>
    </section>
  );
};

export default PermitPendingApproval;
