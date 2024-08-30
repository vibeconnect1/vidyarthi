import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";
import AddSubjectModal from "../Modal/AddSubjectModal";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import EditSubjectModal from "../Modal/EditSubjectModal";

function Subject() {
  const [addSubjectModal, setAddSubjectModal] = useState(false);
  const [editSubjectModal, setEditSubjectModal] = useState(false);
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/subject-details`}>
            <BsEye size={15} />
          </Link>
          <button
          onClick={() => setEditSubjectModal(true)}
          >
            <BiSolidEdit size={15}/>
          </button>
        </div>
      ),
    },
    {
      name: "Subject Name",
      selector: (row) => row.subjectName,
    },
    {
      name: "Subject Code",
      selector: (row) => row.subjectCode,
    },
    {
      name: "Default for classes",
      selector: (row) => row.classes,
    },
  ];
  const data = [
    {
      subjectName: "English",
      subjectCode: "345",
      classes: "9th",
    },
  ];
  return (
    <section>
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-between gap-5 my-5">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button
            className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
            onClick={() => setAddSubjectModal(true)}
          >
            <IoAddCircleOutline size={20} /> Add
          </button>
        </div>
        <div>
          <Table columns={columns} data={data} pagination />
        </div>
        {addSubjectModal && (
          <AddSubjectModal onclose={() => setAddSubjectModal(false)} />
        )}
        {editSubjectModal && (
          <EditSubjectModal onclose={() => setEditSubjectModal(false)} />
        )}
      </div>
    </section>
  );
}

export default Subject;
