import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { RiDeleteBin6Line } from "react-icons/ri";

const ResultForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    rollNumber: "",
    studentClass: "",
    division: "",
    results: [
      {
        subject: "",
        marksObtained: "",
        totalMarks: "",
        grade: "",
        remarks: "",
      },
    ],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const results = [...form.results];
    results[index] = { ...results[index], [name]: value };
    setForm({ ...form, results });
  };

  const handleStudentChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addResult = () => {
    setForm({
      ...form,
      results: [
        ...form.results,
        {
          subject: "",
          marksObtained: "",
          totalMarks: "",
          grade: "",
          remarks: "",
          division: "",
        },
      ],
    });
  };

  const removeResult = (index) => {
    const results = [...form.results];
    results.splice(index, 1);
    setForm({ ...form, results });
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <h1 className="text-2xl font-bold mb-4">Enter Student Results</h1>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={form.studentName}
                  onChange={handleStudentChange}
                  placeholder="Student Name"
                  className="border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  value={form.rollNumber}
                  onChange={handleStudentChange}
                  placeholder="Roll No"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="studentClass"
                  name="studentClass"
                  placeholder="Class"
                  value={form.studentClass}
                  onChange={handleStudentChange}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="division"
                  value={form.division}
                  placeholder="Division"
                  onChange={(e) => handleInputChange(e, index)}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>
            {form.results.map((result, index) => (
              <div
                key={index}
                className="my-3 rounded-md bg-white pt-5"
              >
                <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id={`subject-${index}`}
                      name="subject"
                      value={result.subject}
                      placeholder="Subject"
                      onChange={(e) => handleInputChange(e, index)}
                      className="border-b border-gray-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      id={`marksObtained-${index}`}
                      name="marksObtained"
                      value={result.marksObtained}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Marks Obtained"
                      className="border-b border-gray-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="number"
                      id={`totalMarks-${index}`}
                      name="totalMarks"
                      value={result.totalMarks}
                      placeholder="Total Marks"
                      onChange={(e) => handleInputChange(e, index)}
                      className="border-b border-gray-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id={`grade-${index}`}
                      name="grade"
                      value={result.grade}
                      placeholder="Grade"
                      onChange={(e) => handleInputChange(e, index)}
                      className="border-b border-gray-500 focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button type="button" onClick={() => removeResult(index)}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mx-5 my-5">
              <button
                type="button"
                onClick={addResult}
                className="px-4 py-2 border border-gray-500 text-black rounded-lg"
              >
                Add Mark
              </button>
            </div>
            <div className="border border-gray-500 my-3 mx-5"></div>
            <div className="mb-3 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 border border-gray-500 text-black rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
