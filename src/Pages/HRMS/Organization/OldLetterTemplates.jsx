import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import { GrHelpBook } from "react-icons/gr";
import CompanyDocumentSetting from "./CompanyDocumentSetting";
import { RxHamburgerMenu } from "react-icons/rx";
import OldLetterTemplatesModal from "./OldLetterTemplatesModal";
function OldLetterTemplates() {
    const [modal, setModal] = useState(false);
  const columns = [
    {
      name: "Template Label",
      selector: (row) => row.template_label,
      sortable: true,
    },
    {
      name: "Created on",
      selector: (row) => row.created_on,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <button onClick={() => setModal(true)}>
          <RxHamburgerMenu size={20} />
        </button>
      ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      template_label: "Offer Letter adarsh",
      created_on: "24-11-2017",
      employee_permissions: "Invisible",
      last_updated_on: "17-03-2023",
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
            <div className="w-full my-12">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium mx-3 my-2">Old Letter Templates</h2>
              </div>
              <div className="bg-white rounded-md py-3 px-5">
                <Table columns={columns} data={data} />
              </div>
            </div>
            <div className="my-4 mr-2 w-fit">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
                <div className="flex  gap-4 font-medium">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  {/* <p className="font-medium">Help Center</p> */}
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      You can store your company documents like HR policy,
                      forms, etc under one roof.
                    </li>
                    <li>
                      You can also manage document visibility permissions to
                      employees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && <OldLetterTemplatesModal onClose={() => setModal(false)} />}
    </div>
  );
}

export default OldLetterTemplates;
