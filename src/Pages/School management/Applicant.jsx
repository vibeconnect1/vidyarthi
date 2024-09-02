import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import Header from "../Form/Header";
import { BsEye } from "react-icons/bs";

function Applicant() {
  const columns = [
    {
        name: "Action",
  
        cell: (row) => (
          <Link to={`/school-management/academic/applicant-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        ),
      },
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dob,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Previous School",
      selector: (row) => row.previousSchool,
    },
    {
      name: "Father Name",
      selector: (row) => row.fatherName,
    },
    {
      name: "Father Occupation",
      selector: (row) => row.fatherOccupation,
    },
    {
      name: "Father Mobile",
      selector: (row) => row.fatherMobile,
    },
    {
      name: "Mother Name",
      selector: (row) => row.motherName,
    },
    {
      name: "Mother Occupation",
      selector: (row) => row.motherOccupation,
    },
    {
      name: "Mother Mobile",
      selector: (row) => row.motherMobile,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Emergency Contact Name",
      selector: (row) => row.emergencyContactName,
    },
    {
      name: "Emergency Contact Number",
      selector: (row) => row.emergencyContactNumber,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
  ];

  const data = [
    {
      firstName: "Vinay",
      lastName: "Singh",
      dob: "2005-02-15",
      gender: "Male",
      previousSchool: "Greenwood High School",
      fatherName: "Rakesh Singh",
      fatherOccupation: "Engineer",
      fatherMobile: "1234567890",
      motherName: "Neha Singh",
      motherOccupation: "Doctor",
      motherMobile: "0987654321",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      emergencyContactName: "Rakesh Singh",
      emergencyContactNumber: "1122334455",
      address: "M.k Road Virar",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Applicant</p>
            <Link
              to={`/school-management/academic/add-applicant`}
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

export default Applicant;
