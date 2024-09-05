import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";

const SalaryProcessing = () => {
    const columns = [
        {
          name: "View",
          cell: (row) => (
            <Link to={`/school-management/fees-payment/salary-processing-details/${row.id}`}>
              <BsEye size={15} />
            </Link>
          ),
        },
        {
          name: "Employee Name",
          selector: (row) => row.empName,
        },
        {
          name: "Employee ID",
          selector: (row) => row.empid,
        },
        {
          name: "Department",
          selector: (row) => row.department,
        },
        {
          name: "Salary",
          selector: (row) => row.salary,
        },
        {
          name: "Payment Date",
          selector: (row) => row.paymentDate,
        },
        {
          name: "Payment Method",
          selector: (row) => row.paymentMethod,
        },
        {
          name: "Action",
          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/school-management/fees-payment/edit-salary-processing/${row.id}`}>
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
          empid:101,
          empName: 'Rahul Yadav',
          department: 'Finance',
          salary: 64000,
          paymentDate: '12 Aug, 2024',
          paymentMethod: 'Check',
        },
      ];

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Salary Processing</p>
            <Link
              to={`/school-management/fees-payment/add-salary-processing`}
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

export default SalaryProcessing;
