import React, { useState } from "react";
import EmployeeDirectoryTaxSetting from "./EmployeeDirectoryTaxSetting";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
function PerquisitesInformationTax() {
  const columns = [
    {
      name: "Perquisite Type",
      selector: (row) => row.perquisite_type,
      sortable: true,
    },
    {
      name: "Amount (In ₹)",
      selector: (row) => row.amount,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      perquisite_type: "Accommodation",
      amount: "",
    },
    {
      id: 2,
      perquisite_type: "Cars/Other Automotive",
      amount: "",
    },
  ];
  return (
    <div>
      {/* <Header /> */}
      <div className="flex">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6 space-y-4 ml-24">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link>
                <IoIosArrowBack />
              </Link>
              Investment Summary 2015-2016
            </h2>
            <Link className="bg-white text-black inline-flex items-center px-5 py-1 rounded-md gap-1">
              <IoIosArrowBack /> Back to Profile
            </Link>
          </div>
          <div className="flex gap-5 w-full">
            <div className="">
              <EmployeeDirectoryTaxSetting />
            </div>
            <div className="w-full">
              <div className="flex justify-between my-2">
                <h2 className="text-xl font-medium text-gray-800">
                  Perquisites Information
                </h2>
                <div className="flex gap-2 mx-5">
                  <div className="bg-white rounded-md px-5 py-1">
                    <h2 className="font-medium text-gray-800">
                      Ankit Nima | 135162
                    </h2>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search By name"
                      className="border-2 py-1 px-5 md:w-48 border-gray-300 rounded-lg placeholder:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[68rem]">
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerquisitesInformationTax;
