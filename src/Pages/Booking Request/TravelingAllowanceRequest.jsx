import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import BookingRequest from "./BookingRequest";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

function TravelingAllowanceRequest() {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/traveling-allowance-request-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-traveling-allowance-request/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Employee ID",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Employee Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Expense Category",
      selector: (row) => row.Expense_Category,
      sortable: true,
    },
    {
      name: "Date of Expense",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Description of Expense",
      selector: (row) => row.expense,
      sortable: true,
    },
    {
      name: "Amount Spent",
      selector: (row) => row.spent,
      sortable: true,
    },
    {
      name: "Supporting Documents",
      selector: (row) => row.document,
      sortable: true,
    },
    {
      name: "Reimbursement Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Reimbursement Method",
      selector: (row) => row.method,
      sortable: true,
    },
    {
      name: "Manager Approval",
      selector: (row) => row.Manager_Approval,
      sortable: true,
    },
    {
      name: "Booking Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Reimbursement Confirmation Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Cancellation",
      selector: (row) => (row.status === "Upcoming" && <button className="text-red-400 font-medium">Cancel</button>),
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
      Id: "55",
      name: "Mi",
      Expense_Category: "Meals",
      Arrival_City: "abc",
      Departure: "",
      date: "15/02/2024",
      time: "5:00pm",
      expense: "ghj",
      spent: "jkl",
      amount: "567",
      document: "abc",
      method: "ab",
      Manager_Approval: "Upcoming",
      status: "Upcoming",
    },
  ];
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <BookingRequest />
          <div className="flex md:flex-row flex-col gap-5 justify-between mt-10 my-2 mx-5">
            <div className="sm:flex grid grid-cols-2 items-center justify-center gap-4 bg-white my-2 rounded-md px-3 p-2 w-auto">
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
                  checked={selectedStatus === "upcoming"}
                  onChange={() => setSelectedStatus("upcoming")}
                />
                <label htmlFor="upcoming" className="text-sm">
                  Upcoming
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
                <label htmlFor="cancelled" className="text-sm">
                  Cancelled
                </label>
              </div>
            </div>
            <span className="flex gap-4">
              <Link
                to={"/school-management/add-traveling-allowance-request"}
                className="border-2 font-semibold hover:bg-black hover:text-white transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                style={{ height: "1cm" }}
              >
                <PiPlusCircle size={20} />
                Add
              </Link>
            </span>
          </div>
          <div className="mx-5">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelingAllowanceRequest