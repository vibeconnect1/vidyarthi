import React from "react";
import EmployeeDirectoryTaxSetting from "./EmployeeDirectoryTaxSetting";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";

function HousingLoanInfoTax() {
  const columns = [
    {
      name: "Lender Name",
      selector: (row) => row.lender_name,
      sortable: true,
    },
    {
      name: "Loan Number ",
      selector: (row) => row.loan_number,
      sortable: true,
    },
    {
      name: "Lender PAN",
      selector: (row) => row.lender_PAN,
      sortable: true,
    },
    {
      name: "Interest Verified Amt",
      selector: (row) => row.interest_verified_amt,
      sortable: true,
    },
    {
      name: "Interest Disallowed Amt",
      selector: (row) => row.interest_disallowed_amt,
      sortable: true,
    },
    {
      name: "Income & Loss from House property",
      selector: (row) => row.income_loss_house_property,
      sortable: true,
    },
    {
      name: "80EE Verified Amt",
      selector: (row) => row.verified_amt_80EE,
      sortable: true,
    },
    {
      name: "80EEA Verified Amt",
      selector: (row) => row.verified_amt_80EEA,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.remarks,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      lender_name: "",
      loan_number: "",
      lender_PAN: "",
      interest_verified_amt: "",
      interest_disallowed_amt: "",
      income_loss_house_property: "",
      verified_amt_80EE: "",
      verified_amt_80EEA: "",
      remarks: "",
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
                  Housing Loan Info
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

export default HousingLoanInfoTax;
