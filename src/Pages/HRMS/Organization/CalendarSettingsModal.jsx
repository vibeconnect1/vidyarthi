import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";
import Select from "react-select";

const CalendarSettingsModal = ({ onClose }) => {
  const options = [
    { value: "rajesh_kumar", label: "Rajesh Kumar" },
    { value: "anita_sharma", label: "Anita Sharma" },
    { value: "vikram_singh", label: "Vikram Singh" },
    { value: "neha_mehta", label: "Neha Mehta" },
    { value: "arun_patel", label: "Arun Patel" },
  ];

  const options1 = [
    { value: "rajesh_kumar", label: "Rajesh Kumar" },
    { value: "anita_sharma", label: "Anita Sharma" },
    { value: "vikram_singh", label: "Vikram Singh" },
    { value: "neha_mehta", label: "Neha Mehta" },
    { value: "arun_patel", label: "Arun Patel" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: 'left',
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Milestone</h1>
        <form action="" className="grid grid-cols-1 px-5 gap-x-5 gap-y-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Please select the milestone"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
              isMulti
              options={options}
              classNamePrefix="select"
              placeholder="Who can view this calendar event?"
              styles={customStyles}
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
              isMulti
              options={options1}
              classNamePrefix="select"
              placeholder="Select Employee(s) from the list below who can view this event on their Dashboard:"
              styles={customStyles}
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-400 mb-2">
              Would you like to include this event in daily calendar milestone
              email notification?
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="milestone"
                  value="yes"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="milestone"
                  value="no"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-400 mb-2">
              Would you like to send a auto-mailer to employees on this day?
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="auto_mailer"
                  value="all"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="auto_mailer"
                  value="Yes"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <button className="bg-black p-2 px-4 text-white rounded-md my-5">
            Submit
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CalendarSettingsModal;
