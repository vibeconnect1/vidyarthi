import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import Table from "../../../ConfigurationFile/Table";
import ExpenseManagementSetting from "./ExpenseManagementSetting";

function ExpenseTemplates() {
  const columns = [
    {
      name: "Template Name",
      selector: (row) => row.template_name,
      sortable: true,
    },
    {
      name: "Number of employees covered",
      selector: (row) => row.number_of_employees_covered,
      sortable: true,
    },
    {
      name: "Number of expense categories",
      selector: (row) => row.number_of_expense_categories,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      template_name: "Travel Expense(Junior)",
      number_of_employees_covered: "24",
      number_of_expense_categories: "7"
    },
    {
      id: 2,
      template_name: "Food Expense",
      number_of_employees_covered: "15",
      number_of_expense_categories: "3"
    },
    {
      id: 3,
      template_name: "Client Installation",
      number_of_employees_covered: "1",
      number_of_expense_categories: "1"
    },
    {
      id: 4,
      template_name: "operations Expense",
      number_of_employees_covered: "0",
      number_of_expense_categories: "5"
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
            <h1 className="text-3xl font-bold">Expense Management</h1>
          </div>
          <p className="mx-10 my-2">View Expense Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <ExpenseManagementSetting />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-start">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Expense Templates
            </h2>
          </div>
          <div className="my-3">
            <Table columns={columns} data={data} />
          </div>
        </div>
        <div className="col-span-3 rounded-md">
          <div className="my-4 w-full">
            <div className="flex flex-col mt-4 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2">
              <div className="flex  gap-4 font-medium">
                <GrHelpBook size={20} />
                <h2>Help Center</h2>
              </div>
              <div className=" ">
                {/* <p className="font-medium">Help Center</p> */}
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    Expense consists of different categories like travelling,
                    mobile allowance, food allowance, or any other expense
                    related to the business.
                  </li>
                  <li>
                    Expense settings allows you to configure and assign expense
                    policy for different category of expenses based on profiles,
                    band, etc.
                  </li>
                  <li>
                    Within the expense category settings, you can set custom
                    expense policies like expense limit, choose to allow
                    employees to upload expense receipts, cut-off expense
                    submission timeline, frequency of reminders for unsubmitted
                    (saved) expenses.
                  </li>
                  <li>
                    You will see default leave categories like (i) Per Diem: You
                    can set daily allowance limits like lunch allowance, etc.
                    (ii) Distance/fuel: You can set kilometer wise limits (per
                    km rate) for 2-wheelers and 4-wheelers (iii) Time: You can
                    set your frequency of expense submissions in a period.
                  </li>
                  <li>
                    Within the expense template settings, you can set approval
                    hierarchy.
                  </li>
                  <li>
                    You can edit/update the templates and categories at any
                    time. You cannot delete the templates and modules if already
                    assigned.
                  </li>
                  <li>
                    The admin can process all approved expenses and generate a
                    consolidated report and bank report.
                  </li>
                  <li>
                    <Link to={`Click Here`} className="text-red-500">
                      Click Here
                    </Link>{" "}
                    for detailed information.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTemplates;
