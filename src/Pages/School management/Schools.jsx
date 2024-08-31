import React from "react";
import Sidebar from "../Form/Sidebar";
import Header from "../Form/Header";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Schools() {
  const schoolData = [
    {
      instituteName: "Greenwood High School",
      board: "CBSE",
      country: "India",
      zone: "West",
      cluster: "Mumbai",
      siteLocation: "Andheri",
      firstName: "Rakesh",
      lastName: "Sharma",
      contactNumber: "9876543210",
      associateUsers: 5,
    },
    {
      instituteName: "Sunrise International School",
      board: "ICSE",
      country: "India",
      zone: "East",
      cluster: "Agra",
      siteLocation: "Jp road Agra",
      firstName: "Amit",
      lastName: "Verma",
      contactNumber: "9876543222",
      associateUsers: 3,
    },
    {
      instituteName: "Bright Future Academy",
      board: "GCSE",
      country: "UK",
      zone: "North",
      cluster: "London",
      siteLocation: "Camden",
      firstName: "John",
      lastName: "Doe",
      contactNumber: "9876543233",
      associateUsers: 4,
    },
    {
      instituteName: "Blue Ridge High",
      board: "Australian Curriculum",
      country: "Australia",
      zone: "South",
      cluster: "Sydney",
      siteLocation: "Sydney",
      firstName: "Steve",
      lastName: "Smith",
      contactNumber: "9876543244",
      associateUsers: 6,
    },
  ];

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6">
          <div className="flex justify-between my-5">
            <h2 className="text-2xl font-semibold">Schools</h2>
            <div className="flex gap-5">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
                />
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <Link
                to={`/school-management/institute-form`}
                className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
              >
                <IoAddCircleOutline size={20} /> Add
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="">
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    View
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Institute Name
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Board
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Country
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Zone
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Cluster
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Site Location
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    First Name
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Last Name
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Contact Number
                  </th>
                  <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                    Associate Users
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoolData.map((school, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">
                      <Link to={`/school-management/school-dashboard`}>
                        <BsEye />
                      </Link>{" "}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {school.instituteName}
                    </td>
                    <td className="py-3 px-4 border-b">{school.board}</td>
                    <td className="py-3 px-4 border-b">{school.country}</td>
                    <td className="py-3 px-4 border-b">{school.zone}</td>
                    <td className="py-3 px-4 border-b">{school.cluster}</td>
                    <td className="py-3 px-4 border-b">
                      {school.siteLocation}
                    </td>
                    <td className="py-3 px-4 border-b">{school.firstName}</td>
                    <td className="py-3 px-4 border-b">{school.lastName}</td>
                    <td className="py-3 px-4 border-b">
                      {school.contactNumber}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {school.associateUsers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schools;
