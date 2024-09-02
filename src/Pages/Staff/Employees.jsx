import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
function Employees() {
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <Link to={`/school-management/staff/employees-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.employeeName,
    },
    {
      name: "Employee ID",
      selector: (row) => row.employeeId,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dob,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contactNumber,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Joining Date",
      selector: (row) => row.joiningDate,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
    },
    {
      name: "Qualification",
      selector: (row) => row.qualification,
    },
    {
      name: "Employment Type",
      selector: (row) => row.employmentType,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
  ];

  const data = [
    {
      id:1,
      employeeName: "Karan Sharma",
      employeeId: "E123",
      gender: "Male",
      dob: "1990-01-01",
      contactNumber: "1234567890",
      email: "abc@gmail.com",
      joiningDate: "2020-06-15",
      salary: "50000",
      role: "Teacher",
      designation: "Teacher",
      qualification: "Master s Degree",
      employmentType: "Full-Time",
      address: "Jp Road Andheri",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Employees</p>
            <Link
              to={`/school-management/staff/add-employees`}
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

export default Employees;
