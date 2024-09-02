import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";

const FeesType = () => {
  const columns = [
    {
      name: "View",

      cell: (row) => (
        <Link to={`/school-management/fees-payment/feesType-details/${row.id}`}>
          <BsEye size={15} />
        </Link>
      ),
    },
    {
      name: "Fees Type",
      selector: (row) => row.feesType,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Period",
      selector: (row) => row.period,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Action",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/fees-payment/edit-feesType/${row.id}`}>
            <BiSolidEdit size={15} />
          </Link>
          <button>
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      feesType: "Admission",
      class: "9th",
      period: "Yearly",
      amount:'₹ 64,000',
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Fees Type</p>
            <Link
              to={`/school-management/fees-payment/add-feesType`}
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} /> Add
            </Link>
          </div>
          <div className="mx-5 bg-white rounded-md px-5">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesType