import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Passes from "./Passes";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const VisitorPage = () => {
  const [page, setPage] = useState("All");
  const [selectedVisitor, setSelectedVisitor] = useState("expected");

  const AllColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/passes/visitors/visitor-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/passes/visitors/edit-visitor/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Visitor Type",
      selector: (row) => row.visit_type,
      sortable: true,
    },
    {
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Contact No.",
      selector: (row) => row.contact_no,
      sortable: true,
    },

    {
      name: "Purpose",
      selector: (row) => row.purpose,
      sortable: true,
    },
    {
      name: "Coming from",
      selector: (row) => row.coming_from,
      sortable: true,
    },
    {
      name: "Expected Date",
      selector: (row) => row.expected_date,
      sortable: true,
    },
    {
      name: "Expected Time",
      selector: (row) => row.expected_time,
      sortable: true,
    },
    {
      name: "Vehicle No.",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },

    {
      name: "Host Approval",
      selector: (row) => (row.skip_host_approval ? "Not Required" : "Required"),
      sortable: true,
    },

    {
      name: "Pass Start",
      selector: (row) => row.start_pass,
      sortable: true,
    },
    {
      name: "Pass End",
      selector: (row) => row.end_pass,
      sortable: true,
    },
    // {
    //   name: "Check In",
    //   selector: (row) =>row.checkIn,
    //   sortable: true,
    // },
    // {
    //   name: "Check Out",
    //   selector: (row) => row.check_out,
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Host",
      selector: (row) => row.host,
      sortable: true,
    },
  ];
  const AllData = [
    {
      id: 1,
      visit_type: "Business",
      name: "John Doe",
      contact_no: "1234567890",
      purpose: "Meeting",
      coming_from: "New York",
      expected_date: "2024-09-11",
      expected_time: "10:00 AM",
      vehicle_number: "NY1234",
      skip_host_approval: false,
      start_pass: "2024-09-11T10:00:00",
      end_pass: "2024-09-11T05:00:00",
      status: "Pending",
      host: "Jane Smith",
    },
    {
      id: 2,
      visit_type: "Personal",
      name: "Alice Johnson",
      contact_no: "0987654321",
      purpose: "Interview",
      coming_from: "Los Angeles",
      expected_date: "2024-09-12",
      expected_time: "11:00 AM",
      vehicle_number: "LA5678",
      skip_host_approval: true,
      start_pass: "2024-09-12T11:00:00",
      end_pass: "2024-09-12T04:00:00",
      status: "Approved",
      host: "Mike Johnson",
    },
    {
      id: 3,
      visit_type: "Personal",
      name: "David Johnson",
      contact_no: "0987654321",
      purpose: "Interview",
      coming_from: "Los Angeles",
      expected_date: "2024-09-12",
      expected_time: "11:00 AM",
      vehicle_number: "LA5678",
      skip_host_approval: true,
      start_pass: "2024-09-12T11:00:00",
      end_pass: "2024-09-12T04:00:00",
      status: "Approved",
      host: "Mike Johnson",
    },
  ];
  const VisitorInColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/passes/visitors/visitor-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/passes/visitors/edit-visitor/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Visitor Type",
      selector: (row) => row.visit_type,
      sortable: true,
    },
    {
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Contact No.",
      selector: (row) => row.contact_no,
      sortable: true,
    },

    {
      name: "Purpose",
      selector: (row) => row.purpose,
      sortable: true,
    },
    {
      name: "Coming from",
      selector: (row) => row.coming_from,
      sortable: true,
    },
    {
      name: "Expected Date",
      selector: (row) => row.expected_date,
      sortable: true,
    },
    {
      name: "Expected Time",
      selector: (row) => row.expected_time,
      sortable: true,
    },
    {
      name: "Vehicle No.",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },

    {
      name: "Host Approval",
      selector: (row) => (row.skip_host_approval ? "Not Required" : "Required"),
      sortable: true,
    },

    {
      name: "Pass Start",
      selector: (row) => row.start_pass,
      sortable: true,
    },
    {
      name: "Pass End",
      selector: (row) => row.end_pass,
      sortable: true,
    },
    // {
    //   name: "Check In",
    //   selector: (row) =>row.checkIn,
    //   sortable: true,
    // },
    // {
    //   name: "Check Out",
    //   selector: (row) => row.check_out,
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Host",
      selector: (row) => row.host,
      sortable: true,
    },
  ];
  const VisitorInData = [
    {
      id: 1,
      visit_type: "Business",
      name: "John Doe",
      contact_no: "1234567890",
      purpose: "Meeting",
      coming_from: "New York",
      expected_date: "2024-09-11",
      expected_time: "10:00 AM",
      vehicle_number: "NY1234",
      skip_host_approval: false,
      start_pass: "2024-09-11T10:00:00",
      end_pass: "2024-09-11T05:00:00",
      status: "Pending",
      host: "Jane Smith",
    },
    {
      id: 2,
      visit_type: "Personal",
      name: "Alice Johnson",
      contact_no: "0987654321",
      purpose: "Interview",
      coming_from: "Los Angeles",
      expected_date: "2024-09-12",
      expected_time: "11:00 AM",
      vehicle_number: "LA5678",
      skip_host_approval: true,
      start_pass: "2024-09-12T11:00:00",
      end_pass: "2024-09-12T04:00:00",
      status: "Approved",
      host: "Mike Johnson",
    },
    // Add more data here...
  ];

  const VisitorOutColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/admin/passes/visitors/visitor-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/admin/passes/visitors/edit-visitor/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Visitor Type",
      selector: (row) => row.visit_type,
      sortable: true,
    },
    {
      name: " Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Contact No.",
      selector: (row) => row.contact_no,
      sortable: true,
    },

    {
      name: "Purpose",
      selector: (row) => row.purpose,
      sortable: true,
    },
    {
      name: "Coming from",
      selector: (row) => row.coming_from,
      sortable: true,
    },
    {
      name: "Expected Date",
      selector: (row) => row.expected_date,
      sortable: true,
    },
    {
      name: "Expected Time",
      selector: (row) => row.expected_time,
      sortable: true,
    },
    {
      name: "Vehicle No.",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },

    {
      name: "Host Approval",
      selector: (row) => (row.skip_host_approval ? "Not Required" : "Required"),
      sortable: true,
    },

    {
      name: "Pass Start",
      selector: (row) => row.start_pass,
      sortable: true,
    },
    {
      name: "Pass End",
      selector: (row) => row.end_pass,
      sortable: true,
    },
    // {
    //   name: "Check In",
    //   selector: (row) =>row.checkIn,
    //   sortable: true,
    // },
    // {
    //   name: "Check Out",
    //   selector: (row) => row.check_out,
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Host",
      selector: (row) => row.host,
      sortable: true,
    },
  ];
  const visitorOutData = [
    {
      id: 1,
      visit_type: "Business",
      name: "John Doe",
      contact_no: "1234567890",
      purpose: "Meeting",
      coming_from: "New York",
      expected_date: "2024-09-11",
      expected_time: "10:00 AM",
      vehicle_number: "NY1234",
      skip_host_approval: false,
      start_pass: "2024-09-11T10:00:00",
      end_pass: "2024-09-11T05:00:00",
      status: "Pending",
      host: "Jane Smith",
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
                  page === "Visitor In"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Visitor In")}
              >
                Visitor In
              </h2>
              <h2
                className={`p-2 ${
                  page === "Visitor Out"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md  rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Visitor Out")}
              >
                Visitor Out
              </h2>
              <h2
                className={`p-2 ${
                  page === "Approval"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Approval")}
              >
                Approval
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
              <div className="flex justify-between w-full">
                <div className="grid md:grid-cols-3 gap-2 items-center">
                  <input
                    type="text"
                    className="border border-black p-2 rounded-md placeholder:text-sm"
                    placeholder="Search using Visitor name, Host, vehicle number"
                  />

                  <div className="border md:flex-row flex-col flex p-2 rounded-md text-center border-black">
                    <span
                      className={` md:border-r px-2 border-black cursor-pointer hover:underline ${
                        selectedVisitor === "expected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("expected")}
                    >
                      <span>Expected visitor</span>
                    </span>
                    <span
                      className={`cursor-pointer hover:underline ${
                        selectedVisitor === "unexpected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("unexpected")}
                    >
                      &nbsp; <span>Unexpected visitor</span>
                    </span>
                  </div>
                </div>
                <Link
                  to={"/school-management/add-visitor"}
                  className=" font-semibold border border-gray-500  hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  Add New Visitor
                </Link>
              </div>
            )}
            {page === "Visitor In" && (
              <div className="flex justify-between w-full">
                <div className="grid md:grid-cols-3 gap-2 items-center">
                  <input
                    type="text"
                    className="border border-black p-2 rounded-md placeholder:text-sm"
                    placeholder="Search using Visitor name, Host, vehicle number"
                  />

                  <div className="border md:flex-row flex-col flex p-2 rounded-md text-center border-black">
                    <span
                      className={` md:border-r px-2 border-black cursor-pointer hover:underline ${
                        selectedVisitor === "expected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("expected")}
                    >
                      <span>Expected visitor</span>
                    </span>
                    <span
                      className={`cursor-pointer hover:underline ${
                        selectedVisitor === "unexpected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("unexpected")}
                    >
                      &nbsp; <span>Unexpected visitor</span>
                    </span>
                  </div>
                </div>
                <Link
                  to={"/school-management/add-visitor"}
                  className=" font-semibold border border-gray-500  hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  Add New Visitor
                </Link>
              </div>
            )}
            {page === "Visitor Out" && (
              <div className="flex justify-between w-full">
                <div className="grid md:grid-cols-3 gap-2 items-center">
                  <input
                    type="text"
                    className="border border-black p-2 rounded-md placeholder:text-sm"
                    placeholder="Search using Visitor name, Host, vehicle number"
                  />

                  <div className="border md:flex-row flex-col flex p-2 rounded-md text-center border-black">
                    <span
                      className={` md:border-r px-2 border-black cursor-pointer hover:underline ${
                        selectedVisitor === "expected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("expected")}
                    >
                      <span>Expected visitor</span>
                    </span>
                    <span
                      className={`cursor-pointer hover:underline ${
                        selectedVisitor === "unexpected"
                          ? "text-blue-600 underline"
                          : ""
                      } text-center`}
                      onClick={() => setSelectedVisitor("unexpected")}
                    >
                      &nbsp; <span>Unexpected visitor</span>
                    </span>
                  </div>
                </div>
                <Link
                  to={"/admin/add-new-visitor"}
                  className=" font-semibold border border-gray-500  hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  Add New Visitor
                </Link>
              </div>
            )}
            {page === "Approval" && (
              <div className="">
                <div className="my-3">
                  <input
                    type="text"
                    className="border border-black p-2 w-96 rounded-md placeholder:text-sm"
                    placeholder="Search using Visitor name, Host, vehicle number"
                  />
                </div>
                {/* <Table columns={VisitorColumns} data={visitorData} /> */}
              </div>
            )}
            {page === "History" && (
              <div>
                <div className="my-3">
                  <input
                    type="text"
                    className="border border-black p-2 w-96 rounded-md placeholder:text-sm"
                    placeholder="Search using Visitor name, Host, vehicle number"
                  />
                </div>
                {/* <Table columns={VisitorColumns} data={visitorData} /> */}
              </div>
            )}
          </div>
          <div className="my-4">
            {/* all */}
            {selectedVisitor === "expected" && page === "All" && (
              <Table columns={AllColumns} data={AllData} />
            )}
            {selectedVisitor === "unexpected" && page === "All" && (
              // <Table columns={VisitorColumns} data={visitor} />
              <p className="font-medium text-center">No Records</p>
            )}
            {/* Visitor In*/}
            {selectedVisitor === "expected" && page === "Visitor In" && (
              <Table columns={VisitorInColumns} data={VisitorInData} />
            )}
            {/* Visitor Out*/}
            {selectedVisitor === "expected" && page === "Visitor Out" && (
              <Table columns={VisitorOutColumns} data={visitorOutData} />
            )}
            {selectedVisitor === "unexpected" && page === "Visitor Out" && (
              <Table columns={VisitorOutColumns} data={visitorOutData} />
              // <p className="font-medium text-center">No Records</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorPage;
