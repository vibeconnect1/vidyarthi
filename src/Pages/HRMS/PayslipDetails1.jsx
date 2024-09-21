import React from "react";
import Table from "../../ConfigurationFile/Table";
import AdminHRMS from "./AdminHRMS";

const PayslipDetails1 = () => {
  const columns = [
    {
      name: "Earning Head",
      selector: (row) => row.head,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
    },
  ];
  const columns1 = [
    {
      name: "Deduction  Head",
      selector: (row) => row.head,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
  ];
  const data1 = [
    {
      head: "Variable Deductions",
      amount: "0",
    },
    {
      head: "SH",
      amount: "500",
    },
    {
      head: "Statutory Deductions",
      amount: "0",
    },
    {
      head: "Professional Tax",
      amount: "200",
    },
    {
      head: "Income Tax",
      amount: "4830",
    },
    {
      head: "Gross Deductions",
      amount: "Rs5,530",
    },
  ];
  const data = [
    {
      head: "Fixed Earnings",
      Amount: "0",
    },
    {
      head: "Basic",
      Amount: "23000",
    },
    {
      head: "HRA",
      Amount: "11,500",
    },
    {
      head: "Special",
      Amount: "13,600",
    },
    {
      head: "Child Education",
      Amount: "200",
    },
    {
      head: "Gross Earnings",
      Amount: "Rs48,300",
    },
  ];
  return (
    <div>
      <AdminHRMS />
      <div className="p-8 ml-20">
        <div className="shadow-md rounded-lg p-6">
          <div className="bg-white flex justify-center items-center border-b pb-4 mb-4 p-5 rounded-md">
            <div>
              {/* <img src="bodyprocoach_logo.png" alt="Bodyprocoach" className="h-12" /> */}
            </div>
            <div className="text-right">
              <h1 className="text-center text-xl font-semibold">
                Payslip for June - 2024
              </h1>
              {/* <p>Vibe Connect</p> */}
              {/* <p>244/1952 Motilalnagar no.1, New Link Road</p> */}
              {/* <p>Near Vibgyor school, Goregaon West</p> */}
              {/* <p>Mumbai </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6 bg-white  p-5 rounded-md">
            <div>
              <p>
                <strong>Employee Code:</strong> BPC3
              </p>
              <p>
                <strong>Name:</strong> Mittu Panda
              </p>
              <p>
                <strong>City:</strong> Mumbai
              </p>
              <p>
                <strong>State:</strong> Maharashtra
              </p>
              <p>
                <strong>Location Name:</strong> Mumbai
              </p>
              <p>
                <strong>Department:</strong> Management
              </p>
              <p>
                <strong>Bank Name:</strong> HDFC BANK LTD
              </p>
              <p>
                <strong>A/C Number:</strong> 50100034510730
              </p>
            </div>
            <div>
              <p>
                <strong>Joining Date:</strong> 02-09-2019
              </p>
              <p>
                <strong>UAN Number:</strong>
              </p>
              <p>
                <strong>PF Number:</strong> /
              </p>
              <p>
                <strong>ESIC Number:</strong>
              </p>
              <p>
                <strong>PAN Number:</strong> CCHPP1835P
              </p>
              <p>
                <strong>Designation:</strong> Business & Operations Manager
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4 bg-white  p-5 rounded-md">
            <div>
              <p>
                <strong>Total Days:</strong> 30.0
              </p>
              <p>
                <strong>Days Paid:</strong> 30.0
              </p>
            </div>
            <div>
              <p>
                <strong>Absent Days:</strong> 0.0
              </p>
              <p>
                <strong>Arrear Days:</strong> 0
              </p>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="font-semibold mb-2">Earnings</h2>
            <p><strong>Fixed Earnings</strong></p>
            <p><strong>Basic:</strong> ₹ 23,000.0</p>
            <p><strong>HRA:</strong> ₹ 11,500.0</p>
            <p><strong>Special:</strong> ₹ 13,600.0</p>
            <p><strong>Child Education:</strong> ₹ 200.0</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Deductions</h2>
            <p><strong>Variable Deductions</strong></p>
            <p><strong>SH:</strong> ₹ 500.0</p>
            <p><strong>Statutory Deductions</strong></p>
            <p><strong>Professional Tax:</strong> ₹ 200.0</p>
            <p><strong>Income Tax:</strong> ₹ 4,830.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p><strong>Gross Earnings:</strong> ₹ 48,300.0</p>
          </div>
          <div>
            <p><strong>Gross Deductions:</strong> ₹ 5,530.0</p>
          </div>
        </div> */}
          <h2 className="font-semibold mt-5 mb-1">Earnings</h2>
          <Table columns={columns} data={data} isPagination={true} />
          <h2 className="font-semibold mt-5 mb-1">Deductions</h2>
          <div className="bg-gray-400">
            <Table columns={columns1} data={data1} isPagination={true} />
          </div>
          <div className="text-right mt-4">
            <p className="font-semibold text-xl">Net Salary: ₹ 42,770.0</p>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="bg-gray-300 text-gray-700 p-2 rounded-md mr-2">
              Back
            </button>
            <button
              // onClick={handleAddDepartment}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayslipDetails1;
