import React from "react";
import AdminHRMS from "../AdminHRMS";
import Table from "../../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
function InvestmentApprovals() {
  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.joining_date,
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
      sortable: true,
    },
    {
      name: "Type Of Submission",
      selector: (row) => row.type_of_submission,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Approved On",
      selector: (row) => row.approved_on,
      sortable: true,
    },
    {
      name: "Batch No.",
      selector: (row) => row.batch_no,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/hrms/investment-approvals/investment-under-80C`}  >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      employee_name: "Karan",
      joining_date: "05 Jan 2015",
      submitted_on: "27 May 2024",
      submitted_on: "Declaration Approval",
      status: "Declaration Approval",
      approved_on: "27 May 2024",
      batch_no: "FY2425/66019",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Investment Approvals</h1>
            <div className="md:flex justify-end gap-2 mb-1 mx-5 my-5 space-y-2"></div>
          </header>
          <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
            <div className="col-span-12 my-3 rounded-md">
              <div className="flex justify-between">
                <h2 className="flex items-center text-gray-800 text-xl font-medium">
                  Investment Approvals
                </h2>
                <div className="md:flex justify-end gap-2 mb-1">
                  <div>
                    <input
                      type="text"
                      placeholder="Search by Employee Name or Code"
                      className="border border-gray-500 p-2 text-black rounded-xl w-full  md:w-96"
                    />
                  </div>
                </div>
              </div>
              <div className="my-2">
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentApprovals;
