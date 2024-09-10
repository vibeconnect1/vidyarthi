import React from "react";
import Table from "../../ConfigurationFile/Table";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function ClassTimeTable() {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Link
            to={`/school-management/class-time-table-details/${row.id}`}
            className="text-gray-600 hover:text-gray-900"
          >
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Classes",
      selector: (row) => row.classes,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
  ];
  const data = [
    {
      classes: "10th",
      division: "A",
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
          <Link to={`/school-management/add-class-time-table`}
            className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
          >
            <IoAddCircleOutline size={20} /> Add
          </Link>
        </div>
        <div>
          <Table columns={columns} data={data} pagination />
        </div>
      </div>
    </section>
  );
}

export default ClassTimeTable