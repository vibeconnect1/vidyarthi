import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../Form/Header";
import { GrHelpBook } from "react-icons/gr";
import OnboardingSettings from "./OnboardingSettings";
function OnboardingGeneralSetting() {
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
                General Settings
              </h2>
              <div className="bg-white rounded-md px-5 py-10">
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Until Approved, can employee access Employee Portal before
                    the joining date?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    For how long would you like to display the onboarding tab
                    for the employee after the date of joining upon successful
                    onboarding completion (upto 180 days)
                  </label>
                  <div>
                    <label className="mr-4 text-gray-700">
                      <input
                        type="text"
                        name="basicInformation"
                        className="mr-1 border-b border-gray-500 focus:outline-none "
                        placeholder="180"
                        readOnly
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Do you want to activate Self-Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Auto-Approve Self-Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Activate Onboarding Checklists?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Is Checklist Assignment Mandatory at time of Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 border-t border-gray-500 my-5">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Activate Resources?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Is Resources Assignment Mandatory at time of Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 border-t border-gray-500 my-5">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Activate First Day Information
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Is First Day Information Assignment Mandatory at time of
                    Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 border-t border-gray-500 my-5">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Activate Welcome Message
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Is Welcome Message Assignment Mandatory at time of
                    Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 border-t border-gray-500 my-5">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Do you want to activate letter generation at time of
                    onboarding
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4 border-t border-gray-500 my-5">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Activate Onboarding Survey
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-600 text-base my-3">
                    Is Onboarding Survey Assignment Mandatory at time of
                    Onboarding?
                  </label>
                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      Yes
                    </label>
                    <label className="text-gray-700">
                      <input
                        type="radio"
                        name="name"
                        className="mr-1"
                        disabled
                      />
                      No
                    </label>
                  </div>
                </div>
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
                    <li><Link to={''} className="text-blue-500">Click Here</Link> for detailed information.</li>
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

export default OnboardingGeneralSetting;
