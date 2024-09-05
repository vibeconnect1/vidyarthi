import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
function Book() {
  const columns = [
    {
      name: "View",
      cell: (row) => (
        <Link to={`/school-management/library/book-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Book Title",
      selector: (row) => row.bookTitle,
    },
    {
      name: "Author",
      selector: (row) => row.author,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Rack Number",
      selector: (row) => row.rackNumber,
    },
    {
      name: "Book Number",
      selector: (row) => row.bookNumber,
    },
    {
        name: "ISBN Number",
        selector: (row) => row.ISBNNumber,
    },
    {
        name: "Price",
        selector: (row) => row.price,
    },
    {
        name: "Quantity",
        selector: (row) => row.quantity,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/library/edit-book/${row.id}`}>
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
      bookTitle: "Story Book",
      author: "Jane Doe",
      subject: "Literature",
      rackNumber: "A12",
      bookNumber: "B123",
      ISBNNumber: "978-3-16-148410-0",
      price: "₹10.99",
      quantity: 15,
    },
    {
      id: 2,
      bookTitle: "Math for Beginners",
      author: "John Smith",
      subject: "Mathematics",
      rackNumber: "B34",
      bookNumber: "M234",
      ISBNNumber: "978-0-13-110362-7",
      price: "₹12.50",
      quantity: 8,
    },
    {
      id: 3,
      bookTitle: "Science Experiments",
      author: "Alice Johnson",
      subject: "Science",
      rackNumber: "C56",
      bookNumber: "S345",
      ISBNNumber: "978-1-56619-909-4",
      price: "₹15.00",
      quantity: 5,
    },
  ];
  
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Book Store</p>
            <Link
              to={`/school-management/library/add-book`}
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

export default Book;
