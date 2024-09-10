import React, { useState } from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { CloseOutline } from "react-ionicons";
import InstituteDetails from "../School management/InstituteDetails";


const PPMChecklistDetails = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [addNewQuestion, setAddNewQuestion] = useState([
    { id: "", name: "", type: "", options: ["", "", "", ""], _destroy: "0" },
  ]);

  const handleAddQuestionFields = () => {
  
    setAddNewQuestion([
      ...addNewQuestion,
      { name: "", type: "", options: ["", "", "", ""] },
    ]);
  };

  const handleRemoveQuestionFields = (index) => {
    setAddNewQuestion((prevQuest) => {
      const updatedQuest = [...prevQuest];
      if (updatedQuest.id) {
        updatedQuest._destroy = "1";
      } else {
      updatedQuest.splice(index, 1);
      }
      return updatedQuest;
    });
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
  
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section className="flex">
        <InstituteDetails/>
      <div className="flex flex-col overflow-hidden w-full">
        <h2
          className="text-center text-xl font-bold p-2  rounded-md text-black bg-white md:mx-12 my-2"
        >
          {isEditing ? "Edit Checklist Details" : "PPM Checklist Details"}
        </h2>
        <div className="lg:mx-10 my-5 mb-10  md:p-5 md:px-10 rounded-lg bg-white">
          <div className="flex justify-end">
            {!isEditing ? (
              <button
                className="flex items-center gap-2 font-medium p-1 px-4 rounded-full border-2 border-black"
                onClick={toggleEdit}
              >
                <BiEdit /> Edit
              </button>
            ) : (
              <button
                className="flex items-center gap-2 font-medium p-1 px-4 rounded-full bg-red-400 text-white"
                onClick={toggleEdit}
              >
                <CloseOutline /> Cancel
              </button>
            )}
          </div>
          <form >
            <div className="flex flex-col justify-around">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-semibold">
                    Name:
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="Enter Checklist Name"
                    />
                  ) : (
                    <input
                      readOnly
                      type="text"
                      name="name"
                      id="name"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="frequency" className="font-semibold">
                    Frequency:
                  </label>
                  {isEditing ? (
                    <select
                      name="frequency"
                      id="frequency"
                      className="border-b border-gray-500 focus:outline-none"
                    >
                      <option value="">Select Frequency</option>
                      <option value="One time">One Time</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="half yearly">Half yearly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  ) : (
                    <input
                      readOnly
                      type="text"
                      name="name"
                      id="name"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="start_date" className="font-semibold">
                    Start Date:
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="start_date"
                      id="start_date"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  ) : (
                    <input
                      readOnly
                      type="text"
                      name="start_date"
                      id="start_date"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="end_date" className="font-semibold">
                    End Date:
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="end_date"
                      id="end_date"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  ) : (
                    <input
                      readOnly
                      type="text"
                      name="end_date"
                      id="end_date"
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  )}
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  {addNewQuestion
                    .filter((que) => que._destroy !== "1")
                    .map((data, i) => (
                      <div key={i}>
                        <div className="my-5 ">
                          <h2 className="border-b-2 border-black text font-medium">
                            {isEditing
                              ? `Edit Question ${i + 1} `
                              : `Questions ${i + 1}`}
                          </h2>
                          <div className="my-2 grid gap-4  ">
                            {isEditing ? (
                              <input
                                type="text"
                                name={`question_${i}`}
                                id={`question_${i}`}
                                className="border-b border-gray-500 focus:outline-none"
                                placeholder="Add New Question"
                                value={data.name}
                                onChange={(e) =>
                                  handleQuestionChange(
                                    i,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            ) : (
                              <input
                                readOnly
                                type="text"
                                name={`question_${i}`}
                                id={`question_${i}`}
                                className="border-b border-gray-500 focus:outline-none"
                                placeholder="Add New Question"
                              />
                            )}
                          </div>
                          <div className="my-2">
                            {isEditing ? (
                              <select
                                name={`type_${i}`}
                                id={`type_${i}`}
                                value={data.type}
                                onChange={(e) =>
                                  handleQuestionChange(
                                    i,
                                    "type",
                                    e.target.value
                                  )
                                }
                                className="border-b border-gray-500 focus:outline-none"
                              >
                                <option value="">Select Answer Type</option>
                                <option value="multiple">
                                  Multiple Choice Question
                                </option>
                                <option value="inbox">Input box</option>
                                <option value="description">
                                  Description box
                                </option>
                              </select>
                            ) : (
                              <input
                                readOnly
                                type="text"
                                name="start_date"
                                id="start_date"
                                className="border-b border-gray-500 focus:outline-none"
                              />
                            )}
                            {data.type === "multiple" && (
                              <>
                                {isEditing ? (
                                  <div className="grid grid-cols-4 gap-4 my-2">
                                    <input
                                      type="text"
                                      name={`option1_${i}`}
                                      id={`option1_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 1"
                                      value={data.options[0] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          0,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option2_${i}`}
                                      id={`option2_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 2"
                                      value={data.options[1] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          1,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option3_${i}`}
                                      id={`option3_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 3"
                                      value={data.options[2] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          2,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option4_${i}`}
                                      id={`option4_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 4"
                                      value={data.options[3] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          3,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                ) : (
                                  <div className="grid grid-cols-4 gap-4 my-2">
                                    <input
                                      type="text"
                                      name={`option1_${i}`}
                                      id={`option1_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 1"
                                      value={data.options[0] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          0,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option2_${i}`}
                                      id={`option2_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 2"
                                      value={data.options[1] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          1,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option3_${i}`}
                                      id={`option3_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 3"
                                      value={data.options[2] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          2,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <input
                                      type="text"
                                      name={`option4_${i}`}
                                      id={`option4_${i}`}
                                      className="border-b border-gray-500 focus:outline-none"
                                      placeholder="option 4"
                                      value={data.options[3] || ""}
                                      onChange={(e) =>
                                        handleQuestionChange(
                                          i,
                                          3,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                          {isEditing && (
                            <div className="flex justify-end gap-2">
                              <button
                                className="p-1 border-2 border-red-500 text-white hover:bg-white hover:text-red-500 bg-red-500 px-4 transition-all duration-300 rounded-md "
                                onClick={() => handleRemoveQuestionFields(i)}
                              >
                                <IoClose />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
                {isEditing && (
                  <button
                    type="button"
                    className="p-1 border-2 border-black px-4 rounded-md my-2 flex gap-2 items-center"
                    onClick={() => handleAddQuestionFields()}
                  >
                    <BiPlus />
                    Add Question
                  </button>
                )}
              </div>
              <div className="flex justify-center">
                {isEditing && (
                  <button
                    type="submit"
                    className="bg-black text-white p-2 px-4 rounded-md font-medium"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PPMChecklistDetails