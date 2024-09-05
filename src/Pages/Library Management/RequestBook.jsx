import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
function RequestBook() {
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
      name: "Book Id",
      selector: (row) => row.bookId, 
    },
    {
      name: "Book Name",
      selector: (row) => row.bookName, 
    },
    {
      name: "Request Date",
      selector: (row) => row.requestDate, 
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/library/edit-request-book/${row.id}`}>
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
      bookId: "B001", 
      bookName: "Story Book", 
      requestDate: "2024-09-01", 
    },
    {
      id: 2,
      studentCardNo: "S002",
      bookId: "B002", 
      bookName: "Math for Beginners", 
      requestDate: "2024-09-02", 
    },
    {
      id: 3,
      studentCardNo: "S003",
      bookId: "B003", 
      bookName: "Science Experiments", 
      requestDate: "2024-09-03", 
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Request Book</p>
            <Link
              to={`/school-management/library/add-request-book`}
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

export default RequestBook;
