import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoTrashBinSharp } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";

function PathToSuccess() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [successPoints, setSuccessPoints] = useState([
    "Consistent attendance and punctuality contribute significantly to academic success and personal growth.",
    "Active participation in class and engagement in extracurricular activities enhances learning experiences and skills development.",
    "Setting and pursuing clear academic and personal goals helps in achieving long-term success.",
    "Developing good study habits and effective time management strategies is essential for academic excellence.",
    "Building positive relationships with teachers and peers fosters a supportive learning environment.",
    "Seeking help and clarification when needed demonstrates commitment to understanding and improvement.",
    "Maintaining a balanced lifestyle, including proper nutrition, exercise, and adequate rest, supports overall well-being and academic performance.",
    "Embracing challenges and learning from mistakes are crucial for personal and academic growth.",
    "Regular self-assessment and reflection help in identifying strengths, areas for improvement, and progress toward goals."
  ]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditText(successPoints[index]);
  };

  const handleSave = () => {
    const updatedPoints = [...successPoints];
    updatedPoints[editingIndex] = editText;
    setSuccessPoints(updatedPoints);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedPoints = successPoints.filter((_, i) => i !== index);
    setSuccessPoints(updatedPoints);
  };

  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="container mx-auto p-6 lg:p-12">
          <h2 className="text-center text-2xl font-medium p-2 py-6 bg-white rounded-md text-gray-600">
            Path To Success
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-xl mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold text-gray-600">
                    Success Points
                  </p>
                  <Link
                    to={`/school-management/academic/add-path-to-success`}
                    className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
                  >
                    <IoAddCircleOutline size={20} /> Add
                  </Link>
                </div>
              </div>
              <ul className="text-gray-700 leading-relaxed list-disc mx-5 space-y-4">
                {successPoints.map((point, index) => (
                  <li key={index} className="relative flex items-start gap-2">
                    {editingIndex === index ? (
                      <div className="flex flex-col w-full">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="border-b border-gray-500 focus:outline-none"
                          rows="3"
                        />
                        <div className="flex gap-2 my-2">
                          <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-1 rounded-md"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancel}
                            className="bg-red-500 text-white px-4 py-1 rounded-md"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-grow">
                        {point}
                      </div>
                    )}
                    {editingIndex === index ? null : (
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => handleEditClick(index)}
                          className="text-gray-500"
                        >
                          <BiSolidEdit size={20} />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-500"
                        >
                          <IoTrashBinSharp size={20} />
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PathToSuccess;