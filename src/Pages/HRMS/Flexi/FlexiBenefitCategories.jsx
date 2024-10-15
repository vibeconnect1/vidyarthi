import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GrHelpBook } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import FlexiSettingsidebar from "./FlexiSettingsidebar";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../../ConfigurationFile/Table";

function FlexiBenefitCategories() {
  const columns = [
    {
      name: "Flexi Benefit Label",
      selector: (row) => row.flexi_benefit_label,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link to={`/hrms/flexi/setting/edit-flexi-benefit-categories/${row.id}`} className="border p-2 cursor-pointer">
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      flexi_benefit_label: "Internet",
    },
    {
      id: 2,
      flexi_benefit_label: "PayTM Food Voucher",
    },
    {
      id: 3,
      flexi_benefit_label: "Books & Periodicals",
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
            <h1 className="text-3xl font-bold">Flexi Benefit Management</h1>
          </div>
          <p className="mx-10 my-2">View Flexi Benefit Settings</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div className="bg-white rounded-md">
            <FlexiSettingsidebar />
          </div>
        </div>
        <div className="col-span-6 my-3 rounded-md">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Flexi Benefit Categories
            </h2>
            <Link to={`/hrms/flexi/setting/add-flexi-benefit-categories`} className="bg-white rounded-md w-fit px-5 py-1 flex items-center gap-2">
              <PiPlusCircle size={15} /> Flexi Benefit Category
            </Link>
          </div>
          <div className="my-2">
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
                    Flexi benefit settings allow you to configure salary-related
                    reimbursements that let employees save on tax by submitting
                    proofs. Unsubmitted amount will be considered as a taxable
                    income.
                  </li>
                  <li>
                    You can create different categories like internet
                    allowances, petrol reimbursements, food allowances, etc. and
                    set the allowance amount in the employee salary table. You
                    can set the frequency as
                    monthly/quarterly/semi-annually/annually.
                  </li>
                  <li>
                    The eligibility of the calculations will be based on the
                    attendance.
                  </li>
                  <li>
                    The eligibility of the calculations will be based on the
                    attendance.
                  </li>
                  <li>
                    Employees can track their eligibility and reimbursement
                    status from the flexi-benefits section. They also have an
                    option to generate separate flexi payslip.
                  </li>
                  <li>
                    Categories cannot be edited/deleted if already assigned to
                    employees.
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

export default FlexiBenefitCategories;
