import React from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import { CiSearch } from "react-icons/ci";
import { GrHelpBook } from "react-icons/gr";
import CompanyDocumentSetting from "./CompanyDocumentSetting";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { TbCopy } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
function LetterTemplates() {
  const columns = [
    {
      name: "Template Name",
      selector: (row) => row.templateName,
      sortable: true,
    },
    {
      name: "Employee Signature Required?",
      selector: (row) => row.employee_signature_required,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Company Signature Required",
      selector: (row) => row.company_signature_required,
      sortable: true,
    },
    {
      name: "Last Updated",
      selector: (row) => row.last_updated,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/hrms/organization/edit-letter-templates/${row.id}`}>
            <BiEdit size={15} />
          </Link>
          <Link to={``}>
            <TbCopy size={15} />
          </Link>
          <Link to={``}>
            <BsThreeDotsVertical size={15} />
          </Link>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      templateName: "Offer Letter Format",
      employee_signature_required: "No",
      status: (
        <div className="bg-green-100 text-green-500 rounded-md px-5 py-2">
          Active
        </div>
      ),
      company_signature_required: "Yes",
      last_updated: "Vinayak Kapdoskar 20-06-2024",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex ml-24">
        <div className="flex flex-col overflow-hidden w-full">
          <div className="my-6">
            <h2 className="text-2xl font-medium text-gray-800 flex items-center gap-2">
              <Link to={``}>
                <IoIosArrowBack />
              </Link>
              Document + Letters
            </h2>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <div>
              <CompanyDocumentSetting />
            </div>
            <div className="my-12">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium">Letter Templates</h2>
                <div className="flex gap-3">
                  <div>
                    <Link
                      to={`/hrms/organization/add-letter-templates`}
                      className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                    >
                      <IoAddCircleOutline size={20} />
                      Add Letter Templates
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search"
                      className="border bg-white rounded-xl pl-3 pr-4 py-2 w-full focus:outline-none mb-2"
                    />
                    <CiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                  </div>
                </div>
              </div>
              <div>
                <Table columns={columns} data={data} />
              </div>
            </div>
            <div className="my-4 mr-2">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-80">
                <div className="flex  gap-4 font-medium">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  {/* <p className="font-medium">Help Center</p> */}
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Create multiple letter templates for employees like
                      joining forms, appointment letters, contract employees'
                      letters, etc. You can choose to have employee and
                      employers' signature on the letters as per need.
                    </li>
                    <li>
                      The letters can be created based on dynamic fields
                      available in Quikchex.
                    </li>
                    <li>
                      The letters can also be signed digitally by employee and
                      employer.
                    </li>
                    <li>
                    You can edit/delete the letter templates at any time.
                    </li>
                    <li>
                    <Link to={``} className="text-blue-500">Click Here</Link> for detailed information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterTemplates;
