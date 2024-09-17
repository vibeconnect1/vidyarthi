import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddAuditChecklist = () => {
  const [scheduleFor, setScheduleFor] = useState("asset");
  const [selection, setSelection] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [isOnTask, setIsOnTask] = useState(false);
  const [isOnWeight, setIsOnWeight] = useState(false);
  const [sections, setSections] = useState([]);

  const handleAddSectionClick = () => {
    setSections([...sections, { id: sections.length + 1 }]); // Adding a new section with a unique ID
  };
  const handleDeleteSectionClick = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const handleToggle1 = () => {
    setIsOnTask(!isOnTask);
  };
  const handleToggle2 = () => {
    setIsOnWeight(!isOnWeight);
  };

  const handleRadioChange = (event) => {
    setSelection(event.target.value);
  };

  const renderFormFields = () => {
    switch (scheduleFor) {
      case "asset":
        return (
          <div className="grid md:grid-cols-1 gap-5">
            <div className="grid gap-2 items-center  w-full">
              <select
                type="text"
                name="assetName"
                id="assetName"
                placeholder="Enter Asset Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
          </div>
        );
      case "Services":
        return (
          <div className="grid md:grid-cols-3 gap-5">
            <div className="grid gap-2 items-center w-full">
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                placeholder="Enter Service Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
          </div>
        );
      case "Vendor":
        return (
          <div className="grid md:grid-cols-3 gap-5">
            <div className="grid gap-2 items-center w-full">
              <input
                type="text"
                name="vendorName"
                id="vendorName"
                placeholder="Enter Vendor Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
          </div>
        );
      case "Training":
        return (
          <div className="grid md:grid-cols-3 gap-5">
            <div className="grid gap-2 items-center w-full ">
              <input
                type="text"
                name="trainingName"
                id="trainingName"
                placeholder="Enter Training Name"
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderTaskFields = () => (
    <div className="grid md:grid-cols-3 space-y-2 gap-5">
      <div className="grid gap-2 items-center w-full">
        <select id="group" className="border-b border-gray-500 focus:outline-none">
          <option value="">Select Group</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="grid gap-2 items-center w-full">
        <select id="subGroup" className="border-b border-gray-500 focus:outline-none">
          <option value="">Select SubGroup</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="grid gap-2 items-center w-full">
        <input
          type="text"
          id="task"
          className="border-b border-gray-500 focus:outline-none"
          placeholder="Enter Task"
        />
      </div>
      <div className="grid gap-2 items-center w-full">
        <select
          id="inputType"
          className="border-b border-gray-500 focus:outline-none"
        >
          <option value="">Select Input Type</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="mandatoryCheckbox"
            // checked={isMandatory}
            // onChange={handleMandatoryToggle}
            className="mr-2"
          />
          <label htmlFor="mandatoryCheckbox">Mandatory</label>
        </div>
        &nbsp;&nbsp;
        <div className="flex items-center">
          <input
            type="checkbox"
            id="readingCheckbox"
            // checked={isReading}
            // onChange={handleReadingToggle}
            className="mr-2"
          />
          <label htmlFor="readingCheckbox">Reading</label>
        </div>
        &nbsp;&nbsp;
        <div className="flex items-center">
          <input
            type="checkbox"
            id="helpTextCheckbox"
            // checked={isHelpText}
            // onChange={handleHelpTextToggle}
            className="mr-2"
          />
          <label htmlFor="helpTextCheckbox">Help Text</label>
        </div>
      </div>
      {isOnWeight && (
        <div className="grid gap-2 items-center w-full">
          <input
            type="text"
            placeholder="Enter Weightage"
            className="border-b border-gray-500 focus:outline-none"
          />
          <span>
            <input type="checkbox" />
            &nbsp;
            <label htmlFor="">Rating</label>
          </span>
        </div>
      )}
    </div>
  );

  const renderScheduleFields = () => (
    <div>
      <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
        Schedule
      </h2>
      <div className="grid md:grid-cols-3 space-y-2 gap-5">
        <div>
          <label htmlFor="assignTo" className="font-semibold">
            Checklist Type:
          </label>
          <form>
            <label>
              <input
                type="radio"
                name="selection"
                value="individual"
                onChange={handleRadioChange}
              />
              &nbsp;Individual
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              <input
                type="radio"
                name="selection"
                value="asset-group"
                onChange={handleRadioChange}
              />
              &nbsp;Asset Group
            </label>
          </form>
        </div>
        {selection === "individual" && (
          <div className="grid gap-2 items-center w-full">
            {renderFormFields()}
          </div>
        )}
        {selection === "asset-group" && (
          <div className="grid md:grid-cols-1 gap-5">
            <div className="grid gap-2 items-center w-full">
              <select
                id="assignToGroup"
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Asset Group</option>
                {/* Add options here */}
              </select>
            </div>
          </div>
        )}
        {selection === "asset-group" && (
          <div className="grid gap-2 items-center w-full">
            <select
              id="assignToSubGroup"
              className="border-b border-gray-500 focus:outline-none"
            >
              <option value="">Select Sub Group</option>
              {/* Add options here */}
            </select>
          </div>
        )}

        <div className="grid  gap-2 items-center w-full">
          <select
            id="assignTo"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Assignee</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="scanType"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Scan Type</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="planDuration"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Plan Duration</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="priority"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Priority</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="emailTriggerRule"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Email Trigger Rule</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="supervisors"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Supervisors</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="category"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Category</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="lockOverdueTask"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Lock Overdue Task</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="frequency"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Frequency</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="startFrom"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Start From</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select id="endAt" className="border-b border-gray-500 focus:outline-none">
            <option value="">Select End At</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="grid gap-2 items-center w-full">
          <select
            id="selectSupplier"
            className="border-b border-gray-500 focus:outline-none"
          >
            <option value="">Select Supplier</option>
            {/* Add options here */}
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className="m-2">
          <h2 className="text-center text-xl font-bold p-2 rounded-full bg-white mx-10 my-3">
            Checklist Audit
          </h2>
          <div className="md:mx-10 my-5 mb-10  p-5 px-10 rounded-lg bg-white">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Basic Info
            </h2>
            <div className="flex sm:flex-row flex-col justify-around items-center">
              <div className="grid grid-cols-4 items-center">
                <p className="font-semibold">For :</p>
                <div className="flex gap-5">
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      scheduleFor === "asset" && "bg-black text-white"
                    }`}
                    onClick={() => setScheduleFor("asset")}
                  >
                    Asset
                  </p>
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      scheduleFor === "Services" && "bg-black text-white"
                    }`}
                    onClick={() => setScheduleFor("Services")}
                  >
                    Services
                  </p>
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      scheduleFor === "Vendor" && "bg-black text-white"
                    }`}
                    onClick={() => setScheduleFor("Vendor")}
                  >
                    Vendor
                  </p>
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      scheduleFor === "Training" && "bg-black text-white"
                    }`}
                    onClick={() => setScheduleFor("Training")}
                  >
                    Training
                  </p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex">
                <div className="grid gap-2 items-center w-full">
                  <label
                    htmlFor="toggleSwitch"
                    className="font-semibold cursor-pointer"
                  >
                    Create New:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="toggleSwitch"
                      checked={isOn}
                      onChange={handleToggle}
                      className="hidden"
                    />
                    <div
                      onClick={handleToggle} // Toggle the switch when clicked
                      className={`w-10 h-4 bg-gray-400 rounded-full p-1 flex items-center ${
                        isOn ? "bg-blue-500" : "bg-gray-300"
                      } cursor-pointer`}
                    >
                      <div
                        className={`w-3 h-3 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                          isOn ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                    <label htmlFor="toggleSwitch" className="text-sm ml-2">
                      {isOn ? "" : ""}
                    </label>
                  </div>
                </div>

                <div className="grid gap-2 items-center w-full">
                  <label
                    htmlFor="toggleSwitch1"
                    className="font-semibold cursor-pointer"
                  >
                    Create Task:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="toggleSwitch1"
                      checked={isOnTask}
                      onChange={handleToggle1}
                      className="hidden"
                    />
                    <div
                      onClick={handleToggle1} // Toggle the switch when clicked
                      className={`w-10 h-4 bg-gray-400 rounded-full p-1 flex items-center ${
                        isOnTask ? "bg-blue-500" : "bg-gray-300"
                      } cursor-pointer`}
                    >
                      <div
                        className={`w-3 h-3 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                          isOnTask ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                    <label htmlFor="toggleSwitch1" className="text-sm ml-2">
                      {isOnTask ? "" : ""}
                    </label>
                  </div>
                </div>
                <div className="grid gap-2 items-center w-full">
                  <label
                    htmlFor="toggleSwitch2"
                    className="font-semibold cursor-pointer"
                  >
                    Weightage:
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="toggleSwitch2"
                      checked={isOnWeight}
                      onChange={handleToggle2}
                      className="hidden"
                    />
                    <div
                      onClick={handleToggle2} // Toggle the switch when clicked
                      className={`w-10 h-4 bg-gray-400 rounded-full p-1 flex items-center ${
                        isOnWeight ? "bg-blue-500" : "bg-gray-300"
                      } cursor-pointer`}
                    >
                      <div
                        className={`w-3 h-3 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
                          isOnWeight ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                    <label htmlFor="toggleSwitch2" className="text-sm ml-2">
                      {isOnWeight ? "" : ""}
                    </label>
                  </div>
                </div>
              </div>
              <div>
                {isOn && <div className="w-full">{renderScheduleFields()}</div>}
                {isOnTask && (
                  <div className="grid grid-cols-3 gap-5 my-5">
                    <select
                      name=""
                      id=""
                      className=" border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">select assigned to</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">select category</option>
                    </select>
                  </div>
                )}
              </div>
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                Activity Name
              </h2>
              <div className="flex flex-col justify-around items-center mt-1">
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    name="activityName"
                    id="activityName"
                    placeholder="Enter Activity Name"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col w-full mt-3">
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              &nbsp;
              <div>
                Allow Observations&nbsp;&nbsp;&nbsp;
                <input type="checkbox" />
              </div>
            </div>

            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Task
            </h2>
            {renderTaskFields()}

            <div className="grid gap-2 items-center w-full">
              <button
                onClick={handleAddSectionClick}
                className="bg-black text-white p-2 px-4 rounded-md font-medium h-10 w-40 mt-5"
              >
                Add Section
              </button>
              {sections.map((section) => (
                <div key={section.id}>
                  {/* Your task fields here */}
                  {renderTaskFields()}
                  {/* Add more fields as needed */}
                  <button
                    className="bg-black text-white p-2 px-4 rounded-md font-medium h-10 w-40 mt-5"
                    onClick={() => handleDeleteSectionClick(section.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {/* <h2 className="border-b text-center text-xl border-black mb-6 font-bold">Schedule</h2> */}

            <div className="sm:flex justify-center grid gap-2 my-5">
              <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAuditChecklist;
