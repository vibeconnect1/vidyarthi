import React, { useState } from "react";

const AdmitCards = () => {
  const [students] = useState([
    {
      id: 1,
      name: "John Doe",
      rollNumber: "A123",
      examDate: "2024-09-20",
      subjects: ["Math", "Science", "History"],
      examCenter: "Hall A",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "B456",
      examDate: "2024-09-21",
      subjects: ["Math", "Science", "Geography"],
      examCenter: "Hall B",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleGenerateAdmitCard = (student) => {
    setSelectedStudent(student);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Admit Card Generation</h1>
        <p className="text-gray-600">
          Generate and distribute admit cards for upcoming exams.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Search by name or ID"
        />
        <select className="p-2 border rounded">
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="12">Class 12</option>
        </select>
        <select className="p-2 border rounded">
          <option value="">Select Exam</option>
          <option value="final">Final Exam</option>
          <option value="mid">Mid-Term Exam</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Select</th>
              <th className="p-2 border">Student ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Exam</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Student Rows */}
            <tr>
              <td className="p-2 border">
                <input type="checkbox" />
              </td>
              <td className="p-2 border">STU123</td>
              <td className="p-2 border">John Doe</td>
              <td className="p-2 border">Class 10</td>
              <td className="p-2 border">Final Exam</td>
              <td className="p-2 border text-green-600">Generated</td>
              <td className="p-2 border">
                <button className="text-blue-500">Preview</button>
              </td>
            </tr>
            <tr>
              <td className="p-2 border">
                <input type="checkbox" />
              </td>
              <td className="p-2 border">STU124</td>
              <td className="p-2 border">Jane Smith</td>
              <td className="p-2 border">Class 12</td>
              <td className="p-2 border">Mid-Term Exam</td>
              <td className="p-2 border text-red-600">Not Generated</td>
              <td className="p-2 border">
                <button className="text-blue-500">Preview</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Generate and Download Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Generate Admit Cards
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded">
          Download All
        </button>
      </div>
      
    </div>
  );
};

export default AdmitCards;
