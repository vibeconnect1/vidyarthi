import React from "react";
import AdminHRMS from "./AdminHRMS";
import Table from "../../ConfigurationFile/Table";

const PayslipDetails4 = () => {
  const columns = [
    {
      name: "Particulars",
      selector: (row) => row.head,
      sortable: true,
    },
    {
      name: "Apr'2024	",
      selector: (row) => row.Amount,
      sortable: true,
    },
    {
      name: "May'2024	",
      selector: (row) => row.Earned,
      sortable: true,
    },
    {
      name: "June'2024	",
      selector: (row) => row.Arrear,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row.Total,
      sortable: true,
    },
  ];
  const columns1 = [
    {
      name: "Particulars",
      selector: (row) => row.head,
      sortable: true,
    },
    {
      name: "Apr'2024",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "May'2024",
      selector: (row) => row.Arrear,
      sortable: true,
    },
    {
      name: "June'2024",
      selector: (row) => row.Arrear,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.Total,
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
      Total: "Rs500",
    },
    {
      head: "Statutory Deductions",
      amount: "0",
    },
    {
      head: "Professional Tax",
      amount: "200",
      Total: "Rs200",
    },
    {
      head: "Income Tax",
      amount: "4830",
      Total: "Rs4830",
    },
    {
      head: "Gross Deductions",
      Total: "Rs5,530",
    },
  ];
  const data = [
    {
      head: "Fixed Earnings",
      Amount: "0",
    },
    {
      head: "Basic",
      Rate: "23000",
      Amount: "23000",
      Earned: "23000",
      Total: "23000",
    },
    {
      head: "HRA",
      Rate: "23000",
      Amount: "23000",
      Earned: "23000",
      Total: "23000",
    },
    {
      head: "Special",
      Rate: "23000",
      Amount: "23000",
      Earned: "23000",
      Total: "23000",
    },
    {
      head: "Child Education",
      Rate: "23000",
      Amount: "23000",
      Earned: "23000",
      Total: "23000",
    },
    {
      head: "Gross Earnings",
      Total: "Rs48,300",
    },
  ];
  return (
    <div>
      <AdminHRMS />
      <div className="p-8 ml-20">
        <div className="p-6">
          <div className="flex justify-center items-center border-b pb-4 mb-4 bg-white rounded-md">
            <div>
              {/* <img src="bodyprocoach_logo.png" alt="Bodyprocoach" className="h-12" /> */}
            </div>
            <div className="text-right">
              <h1 className="text-center text-xl font-semibold">
                Payslip for Apr'2024 to Jun'2024
              </h1>
              {/* <p>Vibe Connect</p> */}
              {/* <p>244/1952 Motilalnagar no.1, New Link Road</p> */}
              {/* <p>Near Vibgyor school, Goregaon West</p> */}
              {/* <p>Mumbai </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6 bg-white rounded-md p-5">
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
          <div className="flex justify-between mb-4 bg-white rounded-md p-5">
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
          <h2 className="font-semibold mt-5 mb-1">Allowances</h2>
          <Table columns={columns} data={data} isPagination={true} />
          <h2 className="font-semibold mt-5 mb-1">Deductions</h2>
          <Table columns={columns1} data={data1} isPagination={true} />
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

export default PayslipDetails4;
