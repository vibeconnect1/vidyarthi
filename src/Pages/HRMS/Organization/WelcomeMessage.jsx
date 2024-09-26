import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import { GrHelpBook } from "react-icons/gr";
import OnboardingSettings from "./OnboardingSettings";
import { BiEdit } from "react-icons/bi";
import Table from "../../../ConfigurationFile/Table";
import EditFirstDayInformationTemplatesModal from "./EditFirstDayInformationTemplatesModal";
import EditWelcomeMessageModal from "./EditWelcomeMessageModal";
function WelcomeMessage() {
  const [editModal, setEditModal] = useState(false);
  const columns = [
    {
      name: "Message Label",
      selector: (row) => row.message_label,
      sortable: true,
    },
    {
      name: "Updated On",
      selector: (row) => row.updated_on,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="">
          <button onClick={() => setEditModal(true)}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      message_label: "Welcome Message",
      updated_on: "23-05-2024",
      status: "Active",
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
              HR Workflow Settings
            </h2>
            <p className="text-base font-medium text-gray-800 mx-8">
              All HR work settings can be done under this section
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col">
            <div>
              <OnboardingSettings />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-medium mt-12 mb-2 mx-5">
                Welcome Message
              </h2>
              <div>
                <Table columns={columns} data={data} />
              </div>
            </div>
            <div className="my-4 w-fit">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
                <div className="flex  gap-4 font-medium">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  {/* <p className="font-medium">Help Center</p> */}
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Onboarding settings allow you to configure your new
                      employee self-onboarding process, customize the welcome
                      email and allocate onboarding tasks to respective
                      stakeholders. For e.g., allocating tasks to new joinee
                      like submission of documents to the HR, etc, allocating
                      tasks to stakeholders (IT/HR/Admin) like issuing laptop,
                      ID cards, employee induction, etc.
                    </li>
                    <li>
                      You can edit the tasks and categories as and when needed.
                      You can delete tasks and categories only if not assigned.
                    </li>
                    <li>
                      <Link to={""} className="text-blue-500">
                        Click Here
                      </Link>{" "}
                      for detailed information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {editModal && (
          <EditWelcomeMessageModal
            onClose={() => setEditModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default WelcomeMessage;
