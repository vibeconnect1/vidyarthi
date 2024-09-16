import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";

const Supplier = () => {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/supplier-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-supplier`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Vendor Name",
      selector: (row) => row.vendor_name,
      sortable: true,
    },
    {
      name: "Company Name",
      selector: (row) => row.company_name,
      sortable: true,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
      sortable: true,
    },
    {
      name: "Product",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "GSTIN Number",
      selector: (row) => row.gstin_number,
      sortable: true,
    },
    { name: "PAN Number", selector: (row) => row.pan_number, sortable: true },
    {
      name: "Status",
      selector: (row) =>
        row.active ? (
          <p className="bg-green-400 px-4 w-fit text-white rounded-full">
            Active
          </p>
        ) : (
          <p className="bg-red-400 px-4 w-fit text-white rounded-full">
            Inactive
          </p>
        ),
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      vendor_name: "John Doe",
      company_name: "Acme Corporation",
      mobile: "9876543210",
      email: "johndoe@example.com",
      gstin_number: "27AAAAA0000A1Z5",
      pan_number: "ABCDE1234F",
      supplier:'supplier Name',
      product:"Book",
      active: true,
    },
    {
      id: 2,
      vendor_name: "Jane Smith",
      company_name: "Beta Technologies",
      mobile: "8765432109",
      email: "janesmith@example.com",
      gstin_number: "27AAAAA0000A1Z6",
      pan_number: "XYZDE1234G",
      product:"Table",
      supplier:'supplier Name',
      active: false,
    },
    {
      id: 3,
      vendor_name: "Mark Johnson",
      company_name: "Gamma Solutions",
      mobile: "7654321098",
      email: "markjohnson@example.com",
      gstin_number: "27AAAAA0000A1Z7",
      pan_number: "LMNDE1234H",
      product: "Computer",
      supplier:'supplier Name',
      active: true,
    },
    // Add more rows as needed
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <div className="flex md:flex-row flex-col justify-between items-center my-5 gap-2 mx-5">
            <input
              type="text"
              placeholder="Search By name"
              className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
            />
            <div className="md:flex grid grid-cols-2 sm:flex-row  flex-col gap-2">
              <Link
                to={"/school-management/add-supplier"}
                className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              >
                <IoAddCircleOutline size={20} />
                Add
              </Link>

              <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
                Export
              </button>
            </div>
          </div>
          <div className="mx-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supplier;
