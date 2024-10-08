import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
function Role() {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <Link to={``}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
        name: "Action",
  
        cell: (row) => (
          <div className="flex items-center gap-4">
            <Link to={`/school-management/staff/edit-role/${row.id}`}>
              <BiSolidEdit size={15} />
            </Link>
            <button><RiDeleteBin5Line size={15} /></button>
          </div>
        ),
      },
  ];

  const data = [
    {
      id:1,
      role: "Teacher",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Role</p>
            <Link
              to={`/school-management/staff/add-role`}
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

export default Role