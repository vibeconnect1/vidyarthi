import React, { useState } from "react";
import ModalWrapper from "../../Modal/ModalWrapper";
import { FaTrash } from "react-icons/fa";
import Select from "react-select";

const EditHolidayModal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [employeeFields, setEmployeeFields] = useState([]);

  // Handle radio button change
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Add new input field
  const addEmployeeField = () => {
    setEmployeeFields([...employeeFields, ""]);
  };

  // Remove input field
  const removeEmployeeField = (index) => {
    const updatedFields = employeeFields.filter((_, i) => i !== index);
    setEmployeeFields(updatedFields);
  };

  // Handle input change
  const handleInputChange = (e, index) => {
    const updatedFields = [...employeeFields];
    updatedFields[index] = e.target.value;
    setEmployeeFields(updatedFields);
  };

  const options = [
    { value: "rajesh_kumar", label: "Rajesh Kumar" },
    { value: "anita_sharma", label: "Anita Sharma" },
    { value: "vikram_singh", label: "Vikram Singh" },
    { value: "neha_mehta", label: "Neha Mehta" },
    { value: "arun_patel", label: "Arun Patel" },
  ];

  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Edit Holiday</h1>
        <form action="" className="grid grid-cols-1 px-5 gap-x-5 gap-y-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Please Provide a Label for This Holiday?"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="date"
              name=""
              id=""
              placeholder="Select Date"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-400 mb-2">
              Is This a Mandatory or a Flexi Holiday?
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="overwriteEmail"
                  value="true"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Mandatory</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="overwriteEmail"
                  value="false"
                  className="form-radio text-indigo-600"
                />
                <span className="ml-2">Flexi</span>
              </label>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-400 mb-2">
              Which Employees Does This Holiday Apply to?
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="overwriteEmail"
                  value="all"
                  className="form-radio text-indigo-600"
                  onChange={handleRadioChange}
                />
                <span className="ml-2">All Employees</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="overwriteEmail"
                  value="some"
                  className="form-radio text-indigo-600"
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Some Employees</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="overwriteEmail"
                  value="specific"
                  className="form-radio text-indigo-600"
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Specific Employees</span>
              </label>
              {/* Render dynamic input fields */}
            </div>
          </div>
          <div>
            {selectedOption === "some" && (
              <div className="mt-4">
                {employeeFields.length > 0 && (
                  <div className="mt-4">
                    {employeeFields.map((field, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <button
                          type="button"
                          className="bg-red-500 text-white px-2 py-1 rounded mx-3"
                          onClick={() => removeEmployeeField(index)}
                        >
                          <FaTrash />
                        </button>
                        <select
                          type="text"
                          value={field}
                          onChange={(e) => handleInputChange(e, index)}
                          placeholder={`Employee ${index + 1}`}
                          className="form-input border rounded px-4 py-2 mr-2"
                        >
                          <option>Select</option>
                          <option>Branch Location</option>
                          <option>Department</option>
                          <option>Employee Type</option>
                        </select>
                        <select
                          type="text"
                          value={field}
                          onChange={(e) => handleInputChange(e, index)}
                          placeholder={`Employee ${index + 1}`}
                          className="form-input border rounded px-4 py-2 mr-2"
                        >
                          <option>Is</option>
                          <option>Is Not</option>
                          <option>Employee Type</option>
                        </select>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  onClick={addEmployeeField}
                >
                  Add Employee Selector Rule
                </button>
              </div>
            )}
            {selectedOption === "specific" && (
              <div className="mt-4">
                <div className="w-full">
                  <Select
                    isMulti
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select options..."
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="mt-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-20 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Choose Icon</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
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

export default EditHolidayModal