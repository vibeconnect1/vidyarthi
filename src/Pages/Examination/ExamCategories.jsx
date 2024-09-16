import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import ExamCategoriesModal from "./ExamCategoriesModal";
import EditExamCategoriesModal from "./EditExamCategoriesModal";

function ExamCategories() {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button onClick={() => setEditModal(true)}>
            <BiSolidEdit size={15} />
          </button>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Exam Type",
      selector: (row) => row.examType,
    },
    {
      name: "Exam Mark",
      selector: (row) => row.examMark,
    },
  ];

  const data = [
    {
      id: 1,
      examType: "Unit text",
      examMark: "25",
    },
    {
      id: 2,
      examType: "Final Exam",
      examMark: "100",
    },
    {
      id: 3,
      examType: "Practical Exam",
      examMark: "50",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Exam Category</p>
            <button
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
              onClick={() => setAddModal(true)}
            >
              <IoAddCircleOutline size={20} /> Add
            </button>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
      {
        addModal && (<div>
            <ExamCategoriesModal onclose={() =>setAddModal(false)} />
        </div>)
      }
      {
        editModal && (<div>
            <EditExamCategoriesModal onclose={() =>setEditModal(false)} />
        </div>)
      }
    </div>
  );
}

export default ExamCategories;
