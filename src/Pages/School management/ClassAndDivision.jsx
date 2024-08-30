import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import ClassesModal from "../Modal/ClassesModal";

function ClassAndDivision() {
    const [addModal, setAddModal] = useState(false);
  const columns = [
    {
      name: "Classes",
      selector: (row) => row.classes,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "Total Students",
      selector: (row) => row.students,
    },
  ];
  const data = [
    {
      classes: "10th",
      division: (
        <div>
          <button className="border border-gray-500 rounded-md px-4 py-2">
            manage
          </button>
        </div>
      ),
      students: "0",
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
            onClick={() => setAddModal(true)}
          >
            <IoAddCircleOutline size={20} /> Add
          </button>
        </div>
        <div>
          <Table columns={columns} data={data} pagination />
        </div>
        {addModal && (
          <ClassesModal
            onclose={() => setAddModal(false)}
          />
        )}
      </div>
    </section>
  );
}

export default ClassAndDivision;
