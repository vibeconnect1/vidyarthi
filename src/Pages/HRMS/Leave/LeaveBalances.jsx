import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import { FaChevronDown } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
function LeaveBalances() {
  const [leaveCycle, setLeaveCycle] = useState(false);
  const columns = [
    {
      name: "Leave Category",
      selector: (row) => row.leave_category,
      sortable: true,
    },
    {
      name: "Opening Balance",
      selector: (row) => row.opening_balance,
      sortable: true,
    },
    {
      name: "Accrued Balance",
      selector: (row) => row.accrued_balance,
      sortable: true,
    },
    {
      name: "Leaves Taken",
      selector: (row) => row.leaves_taken,
      sortable: true,
    },
    {
      name: "Leaves Adjusted",
      selector: (row) => row.leaves_adjusted,
      sortable: true,
    },
    {
      name: "Leaves Lapsed",
      selector: (row) => row.leaves_lapsed,
      sortable: true,
    },
    {
      name: "Leaves Encashed",
      selector: (row) => row.leaves_encashed,
      sortable: true,
    },
    {
      name: "Ending Balance",
      selector: (row) => row.ending_balance,
      sortable: true,
    },
    {
      name: "Future Leaves",
      selector: (row) => row.future_leaves,
      sortable: true,
    },
    {
      name: "Usable Balance",
      selector: (row) => row.usable_balance,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <button>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      leave_category: "Casual Leave",
      opening_balance: "-5.0",
      accrued_balance: "18.0",
      leaves_taken: "0.0",
      leaves_adjusted: "0.0",
      leaves_lapsed: "0.0",
      leaves_encashed: "0.0",
      ending_balance: "13.0",
      future_leaves: "0.0",
      usable_balance: "13.0",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Leave Balances</h1>
          </div>
          <p className="mx-10 my-2">View Leave Balance History</p>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12 my-3 rounded-md bg-white p-5">
            <div className="flex justify-between">
              <h2 className="flex items-center text-gray-800 text-xl font-medium">
                Leave Management
              </h2>
              <div>
                <button className="border border-gray-500 text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                  <span>Actions</span>
                  <FaChevronDown />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-4 w-full my-5">
              {/* Employee Name Select Option */}
              <div>
                <select
                  id="employee"
                  name="employee"
                  className="border-b border-gray-500 focus:outline-none w-full py-2"
                >
                  <option>John Doe</option>
                  <option>Jane Smith</option>
                  <option>Michael Johnson</option>
                </select>
              </div>
              <div>
                <select
                  id="leaveCycle"
                  name="leaveCycle"
                  className="border-b border-gray-500 focus:outline-none w-full py-2"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div>
                <button
                  className="bg-gray-500 rounded-md py-2 px-4 text-white"
                  onClick={() => setLeaveCycle(!leaveCycle)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 my-3 rounded-md bg-white p-5">
            {!leaveCycle ? (
              <div className="flex justify-center items-center flex-col">
                <p className="text-center my-5">
                  Note: Please select an employee name and leave cycle.
                  <div>
                    <img src="/surveyimg.png"></img>
                  </div>
                </p>
              </div>
            ) : (
              <div>
                <Table columns={columns} data={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveBalances;
