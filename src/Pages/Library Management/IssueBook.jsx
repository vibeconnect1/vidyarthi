import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
function IssueBook() {
  const columns = [
    {
      name: "View",
      cell: (row) => (
        <Link to={`/school-management/library/issue-book-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Student Card Number",
      selector: (row) => row.studentCardNo,
    },
    {
      name: "Book Title",
      selector: (row) => row.bookTitle,
    },
    {
      name: "Issue Date",
      selector: (row) => row.issueDate,
    },
    {
      name: "Return Date",
      selector: (row) => row.returnDate,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/library/add-issue-book/${row.id}`}>
            <BiSolidEdit size={15} />
          </Link>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      studentCardNo: "A12",
      bookTitle: "Story Book",
      issueDate: "2024-09-01",
      returnDate: "2024-09-15",
    },
    {
      id: 2,
      studentCardNo: "S002",
      bookTitle: "Math for Beginners",
      issueDate: "2024-09-02",
      returnDate: "2024-09-16",
    },
    {
      id: 3,
      studentCardNo: "S003",
      bookTitle: "Science Experiments",
      issueDate: "2024-09-03",
      returnDate: "2024-09-17",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Issue Book</p>
            <Link
              to={`/school-management/library/add-issue-book`}
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} /> Add
            </Link>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueBook;
