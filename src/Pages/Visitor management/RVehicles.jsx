import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Passes from "./Passes";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const RVehicles = () => {
  const [page, setPage] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const AllColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/r-vehicle-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-r-vehicle`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.Vehicle_Number,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },
    {
      name: "Parking Slot",
      selector: (row) => row.Parking_Slot,
      sortable: true,
    },
    {
      name: "Vehicle Category",
      selector: (row) => row.Vehicle_Category,
      sortable: true,
    },

    {
      name: "Vehicle Type",
      selector: (row) => row.Vehicle_Type,
      sortable: true,
    },

    {
      name: "Sticker Number",
      selector: (row) => row.Sticker_Number,
      sortable: true,
    },
    {
      name: "Registration Number",
      selector: (row) => row.Registration_Number,
      sortable: true,
    },
    {
      name: "Insurance Number",
      selector: (row) => row.Insurance_Number,
      sortable: true,
    },
  ];
  const AllData = [
    {
      id: 1,
      Vehicle_Number: "MH12AB1234",
      Category: "SUV",
      Parking_Slot: "A1",
      Vehicle_Category: "Private",
      Vehicle_Type: "Four-Wheeler",
      Sticker_Number: "STK123456",
      Registration_Number: "REG123456",
      Insurance_Number: "INS123456",
    },
    {
      id: 2,
      Vehicle_Number: "MH12XY5678",
      Category: "Sedan",
      Parking_Slot: "B2",
      Vehicle_Category: "Private",
      Vehicle_Type: "Four-Wheeler",
      Sticker_Number: "STK789012",
      Registration_Number: "REG789012",
      Insurance_Number: "INS789012",
    },
    {
      id: 3,
      Vehicle_Number: "MH14GH9876",
      Category: "Hatchback",
      Parking_Slot: "C3",
      Vehicle_Category: "Commercial",
      Vehicle_Type: "Four-Wheeler",
      Sticker_Number: "STK345678",
      Registration_Number: "REG345678",
      Insurance_Number: "INS345678",
    },
  ];

  const HistoryColumn = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/histdetails/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.Vehicle_Number,
      sortable: true,
    },

    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
    },

    {
      name: "Staff Name",
      selector: (row) => row.Staff_Name,
      sortable: true,
    },
    {
      name: "In Date",
      selector: (row) => row.in_date,
      sortable: true,
    },
    {
      name: "In Time",
      selector: (row) => row.in_time,
      sortable: true,
    },
    {
      name: "Out Date",
      selector: (row) => row.out_date,
      sortable: true,
    },
    {
      name: "Out Time",
      selector: (row) => row.out_time,
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
  ];

  const HistoryData = [
    {
      id: 1,
      Vehicle_Number: "789",
      Category: "uio",
      Staff_Name: "abc",
      in_date: "25/05/2024",
      in_time: "25/05/2024",
      out_date: "25/05/2024",
      out_time: "25/05/2024",
    },
    {
      id: 2,
      Vehicle_Number: "789",
      Category: "uio",
      Staff_Name: "abc",
      in_date: "25/05/2024",
      in_time: "25/05/2024",
      out_date: "25/05/2024",
      out_time: "25/05/2024",
    },
    {
      id: 3,
      Vehicle_Number: "789",
      Category: "uio",
      Staff_Name: "abc",
      in_date: "25/05/2024",
      in_time: "25/05/2024",
      out_date: "25/05/2024",
      out_time: "25/05/2024",
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
                  page === "All"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("All")}
              >
                All
              </h2>
              <h2
                className={`p-2 ${
                  page === "History"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("History")}
              >
                History
              </h2>
            </div>
          </div>
          <div className="flex justify-between">
            {page === "All" && (
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <div className="my-3">
                    <input
                      type="text"
                      className="border border-black p-2 rounded-md placeholder:text-sm"
                      placeholder="Search using Visitor name, Host, vehicle number"
                    />
                  </div>
                  <div>
                    <Link
                      to={"/school-management/add-r-vehicle"}
                      className=" font-semibold border border-gray-500  hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                    >
                      <PiPlusCircle size={20} />
                      Add
                    </Link>
                  </div>
                </div>
                <Table columns={AllColumns} data={ AllData} />
              </div>
            )}
            {page === "History" && (
              <div className="w-full">
                <div className="sm:flex grid grid-cols-2 items-center justify-center  gap-4 bg-white rounded-md px-3 p-2 w-96 my-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="all"
                      name="status"
                      checked={selectedStatus === "all"}
                      onChange={() => handleStatusChange("all")}
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
                      checked={
                        selectedStatus === "upcoming" ||
                        selectedStatus === "upcoming"
                      }
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
                      onChange={() => handleStatusChange("completed")}
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
                    />
                    <label htmlFor="completed" className="text-sm">
                      Cancelled
                    </label>
                  </div>
                </div>
                <Table columns={HistoryColumn} data={HistoryData} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RVehicles;
