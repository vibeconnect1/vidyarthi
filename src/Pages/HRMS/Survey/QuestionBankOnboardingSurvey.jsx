import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import SurveySidebar from "./SurveySidebar";
import filter from "/filter.png";
import Table from "../../../ConfigurationFile/Table";
import { BiEdit } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
function QuestionBankOnboardingSurvey() {
  const [page, setPage] = useState("questionBank");
  const questionBankColumns = [
    {
      name: "Questions",
      selector: (row) => row.questions,
      sortable: true,
    },
    {
      name: "Template",
      selector: (row) => row.template,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const questionBankData = [
    {
      id: 1,
      questions:
        "Q.1: On a scale of 1-10, how well were the expectations for your role communicated in terms of collaboration and teamwork with other departments or teams?",
        template: "0",
        status: "Active",
        category: "Role Clarity",
    },
  ];
  const myQuestionsColumns = [
    {
      name: "Questions",
      selector: (row) => row.questions,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.created_on,
      sortable: true,
    },
    {
      name: "Template",
      selector: (row) => row.template,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <BsEye size={15} />
          </button>
          <button className="border p-2">
            <BiEdit size={15} />
          </button>
          <button className="border p-2 cursor-pointer">
            <IoCloseSharp size={15} />
          </button>
        </div>
      ),
    },
  ];
  const myQuestionsData = [
    {
      id: 1,
      questions: "No Question Found",
      created_on: "",
      template: "",
      status: "",
      category: "",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Karan Singh</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 my-3">
        <div className="col-span-3 ml-24">
          <SurveySidebar />
        </div>
        <div className="col-span-9 my-5">
          <div className="flex w-full mt-5">
            <div className=" flex gap-2 pb-0 border-b border-gray-400">
              <h2
                className={`p-1 ${
                  page === "questionBank" &&
                  `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setPage("questionBank")}
              >
                Question Bank  ( 7 )
              </h2>
              <h2
                className={`p-1 ${
                  page === "myQuestions" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("myQuestions")}
              >
                My Questions  ( 0 )
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-md px-5 py-3 my-3">
            {page === "questionBank" && (
              <div className="my-2">
                <div className="flex justify-between border-b pb-2">
                  <h2 className="flex items-center text-gray-800 text-xl font-medium">
                  Onboarding Survey
                  </h2>
                  <div className="flex justify-end gap-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Search by Employee Name or Code"
                        className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                      />
                    </div>
                    <button className="bg-white rounded-full h-10 w-10">
                      <span className="flex justify-center items-center text-black">
                        <img src={filter} alt="filter-icon" />
                      </span>
                    </button>
                  </div>
                </div>
                <Table columns={questionBankColumns} data={questionBankData} />
              </div>
            )}
            {page === "myQuestions" && (
              <div className="my-2">
                <div className="flex justify-between border-b pb-2">
                  <h2 className="flex items-center text-gray-800 text-xl font-medium">
                  Onboarding Survey
                  </h2>
                  <div className="flex justify-end gap-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Search by Employee Name or Code"
                        className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                      />
                    </div>
                    <div>
                      <button className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md whitespace-nowrap">
                        Add New Question
                      </button>
                    </div>
                    <button className="bg-white rounded-full h-10 w-10">
                      <span className="flex justify-center items-center">
                        <img src={filter} alt="filter-icon" />
                      </span>
                    </button>
                  </div>
                </div>
                <Table columns={myQuestionsColumns} data={myQuestionsData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionBankOnboardingSurvey
