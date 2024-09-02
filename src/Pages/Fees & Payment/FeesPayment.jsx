import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { IoAddCircleOutline } from "react-icons/io5";
import Table from "../../ConfigurationFile/Table";

const FeesPayment = () => {
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
          name: "Student Name",
          selector: (row) => row.studentName,
        },
        {
          name: "Class",
          selector: (row) => row.class,
        },
        {
          name: "Section",
          selector: (row) => row.section,
        },
        {
          name: "Roll No",
          selector: (row) => row.rollNo,
        },
        {
          name: "Fees Type",
          selector: (row) => row.feesType,
        },
        {
          name: "Total Fees",
          selector: (row) => row.totalFees,
        },
        {
          name: "Payment Method",
          selector: (row) => row.paymentMethod,
        },
        {
          name: "Payment Date",
          selector: (row) => row.paymentDate,
        },
        {
          name: "Action",
          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/school-management/fees-payment/edit-fees-payment/${row.id}`}>
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
          studentName: "Ajay Singh",
          class: "9th",
          section: "A",
          rollNo: "12",
          feesType: "Admission",
          totalFees: "₹ 64,000",
          paymentMethod: "Credit Card",
          paymentDate: "2024-08-25",
        },
        {
          id: 2,
          studentName: "Rohan Gupta",
          class: "10th",
          section: "B",
          rollNo: "15",
          feesType: "Library",
          totalFees: "₹ 50,000",
          paymentMethod: "Bank Transfer",
          paymentDate: "2024-08-20",
        },
        {
          id: 3,
          studentName: "Kavita Yadav",
          class: "8th",
          section: "C",
          rollNo: "8",
          feesType: "Lab Fees",
          totalFees: "₹ 10,000",
          paymentMethod: "Cash",
          paymentDate: "2024-08-22",
        },
      ];
      

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Fees Payment</p>
            <Link
              to={`/school-management/fees-payment/add-fees-payment`}
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

export default FeesPayment