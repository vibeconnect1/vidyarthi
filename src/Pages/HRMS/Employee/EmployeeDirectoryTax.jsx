import React from "react";
import { Link } from "react-router-dom";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import Table from "../../../ConfigurationFile/Table";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { FaDownload, FaMoneyBill } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
function EmployeeDirectoryTax() {
  const columns = [
    {
      name: "Fiscal Year",
      selector: (row) => row.fiscal_year,
      sortable: true,
    },
    {
      name: "Total Section-80 C Declarations(₹)",
      selector: (row) => row.section_declarations,
      sortable: true,
    },
    {
      name: "Total Other Declarations (₹)",
      selector: (row) => row.other_declarations,
      sortable: true,
    },
    {
      name: "Total Rent Declarations (₹)",
      selector: (row) => row.rent_declarations,
      sortable: true,
    },
    {
      name: "Total Perquisites (₹)",
      selector: (row) => row.perquisites,
      sortable: true,
    },
    {
      name: "Total Other Income (₹)",
      selector: (row) => row.total_other_income,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button>
            <FaDownload size={15} />
          </button>
          <Link to={`/hrms/employee-directory/tax/deductions-80C`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      fiscal_year: "2015-2016",
      section_declarations: "5,85,000.0",
      other_declarations: "1,39,200.0",
      rent_declarations: "3,00,000.0",
      perquisites: "0.0",
      total_other_income: "-1,50,000.0",
    },
  ];
  return (
    <div className=" w-full">
      <EditEmployeeDirectoryPage />
      <div className="flex flex-col w-full overflow-hidden">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <EmployeeDirectorySetting />
          </div>
          <div className="col-span-3">
            <div className=" bg-white rounded-md mx-5 py-5 px-5">
              <h1 className="text-lg font-medium border-b border-gray-500 py-5">
                Tax
              </h1>
              <div className="bg-white rounded-md">
                <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                  <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                    <FaMoneyBill size={24} />
                    Income Tax Declarations
                  </h2>
                  <div>
                    <Link className="px-4 py-1 border border-gray-500 text-black rounded-full flex items-center gap-3">
                      <FaDownload size={20} /> Form 12B
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryTax;
