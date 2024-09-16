import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import InstituteDetails from "../School management/InstituteDetails";
const EditServiceCheckList = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setSelectedType(value); 
  };

  const [addNewQuestion, setAddNewQuestion] = useState([
    { name: "", type: "", options: ["", "", "", ""] },
  ]);
  const handleAddQuestionFields = () => {
    setAddNewQuestion([
      ...addNewQuestion,
      { name: "", type: "", options: ["", "", "", ""] },
    ]);
  };

  const handleRemoveQuestionFields = (index) => {
    const newFields = [...addNewQuestion];
    newFields.splice(index, 1);
    setAddNewQuestion(newFields);
  };
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...addNewQuestion];
    if (field === "name" || field === "type") {
      newQuestions[index][field] = value;
    } else {
      newQuestions[index].options[field] = value;
    }
    setAddNewQuestion(newQuestions);
  };
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full overflow-hidden flex flex-col mx-5">
        <h2 className="text-center text-xl font-bold p-2 my-2 rounded-md text-black bg-white">
          Edit Checklist
        </h2>
        <div className="my-5 mb-10 sm:border border-gray-400 p-5 px-10 rounded-lg bg-white">
          <div className="flex  flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-5 py-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Checklist Name"
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="frequency"
                  id="frequency"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Frequency</option>

                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half yearly">Half yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="start_date"
                  id="start_date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="end_date"
                  id="end_date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              {addNewQuestion.map((data, i) => (
                <div key={i}>
                  <div className="my-5">
                    <h2 className="border-b-2 border-black text font-medium">
                      Add New Question
                    </h2>
                    <div className="my-5 grid file:marker: gap-4">
                      <input
                        type="text"
                        className="border-b border-gray-500 focus:outline-none"
                        placeholder="Add New Question"
                      />
                    </div>
                    <div className="my-5">
                      <select
                        className="border-b border-gray-500 focus:outline-none"
                        value={selectedType} 
                        onChange={handleTypeChange} 
                      >
                        <option value="">Select Answer Type</option>
                        <option value="multiple">
                          Multiple Choice Question
                        </option>
                        <option value="inbox">Input box</option>
                        <option value="description">Description box</option>
                      </select>

                      {selectedType === "multiple" && (
                        <div className="grid grid-cols-4 gap-4 my-5">
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none"
                            placeholder="Done"
                          />
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none"
                            placeholder="Not Done"
                          />
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none"
                            placeholder="Option 3"
                          />
                          <input
                            type="text"
                            className="border-b border-gray-500 focus:outline-none"
                            placeholder="Option 4"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                        onClick={() => handleRemoveQuestionFields(i)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="p-1 border-2 border-black px-4 rounded-md my-2 flex gap-2 items-center"
                onClick={() => handleAddQuestionFields()}
              >
                <BiPlus />
                Add Question
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditServiceCheckList;
