import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";

function Discipline() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [rules, setRules] = useState([
    "Students must adhere to the school's dress code, which includes wearing the prescribed uniform and maintaining a neat appearance.",
    "Respectful behavior towards teachers, staff, and peers is expected at all times. Bullying or harassment of any kind is strictly prohibited.",
    "Students are expected to attend all classes regularly and punctually. Absences must be reported and justified according to school policy.",
    "Possession or use of prohibited items, such as electronic devices and substances, is not allowed. Any such items will be confiscated and disciplinary action will be taken.",
    "Students should actively participate in class and complete all assignments and homework by the deadlines provided.",
    "The use of offensive language or gestures is unacceptable. Students should communicate respectfully in all situations.",
    "Students are required to follow all instructions given by teachers and staff during school hours and in extracurricular activities.",
    "Damage to school property or any acts of vandalism will result in disciplinary action and restitution for the damage caused.",
    "Students must follow the school's policy on mobile phones, which should be turned off and kept in their lockers during school hours."
  ]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditText(rules[index]);
  };

  const handleSave = () => {
    const updatedRules = [...rules];
    updatedRules[editingIndex] = editText;
    setRules(updatedRules);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedRules = rules.filter((_, i) => i !== index);
    setRules(updatedRules);
  };

  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="container mx-auto p-6 lg:p-12">
          <h2 className="text-center text-2xl font-medium p-2 py-6 bg-white rounded-md text-gray-600">
            School Discipline Code
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-xl mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold text-gray-600">
                    Discipline Points
                  </p>
                  <Link
                    to={`/school-management/academic/add-discipline`}
                    className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
                  >
                    <IoAddCircleOutline size={20} /> Add
                  </Link>
                </div>
              </div>
              <ul className="text-gray-700 leading-relaxed list-disc mx-5 space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="relative flex items-start gap-2">
                    {editingIndex === index ? (
                      <div className="flex flex-col w-full">
                        <textarea
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="border rounded-md p-2 mb-2"
                          rows="3"
                        />
                        <div className="flex gap-2">
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
                        {rule}
                      </div>
                    )}
                    {editingIndex === index ? null : (
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => handleEditClick(index)}
                          className="text-blue-500"
                        >
                          <IoPencilSharp size={20} />
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

export default Discipline;
