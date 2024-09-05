import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddExamTimetable = () => {
  const [fields, setFields] = useState([
    { paperCode: "", subject: "", date: "", time: "", roomNo: "" },
  ]);

  const handleAddField = () => {
    setFields([
      ...fields,
      { paperCode: "", subject: "", date: "", time: "", roomNo: "" },
    ]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleFieldChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(newFields);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Create Exam Timetable
            </p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-3 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="examName"
                  placeholder="Exam Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="class"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="">9th</option>
                  <option value="">10th</option>
                  <option value="">11th</option>
                  <option value="">12th</option>
                </select>
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="examCenter"
                  placeholder="Exam Center"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="border border-gray-500 my-5 mx-5"></div>
            {fields.map((field, index) => (
              <div
                key={index}
                className="grid md:grid-cols-3 item-start gap-5 px-5 w-full mt-5"
              >
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="paperCode"
                    value={field.paperCode}
                    placeholder="Paper Code"
                    className="border-b border-gray-500 focus:outline-none"
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="subject"
                    value={field.subject}
                    placeholder="Subject"
                    className="border-b border-gray-500 focus:outline-none"
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    name="date"
                    value={field.date}
                    placeholder="Date"
                    className="border-b border-gray-500 focus:outline-none"
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="time"
                    name="time"
                    value={field.time}
                    placeholder="Time"
                    className="border-b border-gray-500 focus:outline-none"
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="roomNo"
                    value={field.roomNo}
                    placeholder="Room No"
                    className="border-b border-gray-500 focus:outline-none"
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </div>
                <button
                  type="button"
                  className="self-center text-red-500"
                  onClick={() => handleRemoveField(index)}
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            ))}
            <div className="border border-gray-500 my-5 mx-5"></div>
            <div className="flex justify-start my-5 mx-5">
              <button
                type="button"
                className="border border-gray-500 rounded-md px-4 py-2 flex gap-2 justify-center items-center"
                onClick={handleAddField}
              >
                Add Subject
              </button>
            </div>
            <div className="flex justify-center my-5">
              <button className="border border-gray-500 rounded-md px-4 py-2 flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExamTimetable;
