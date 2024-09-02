import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";

function CSR() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [rules, setRules] = useState([
    "Parents are an integral part of the school and the school expects them to cooperate in enforcing all the guidelines that will benefit the child and assist in the smooth functioning of the school.",
    "The calendar serves as a bridge between teachers, students, and parents. Parents are requested to sign the remarks written by teachers in the school calendar. Also, please sign in the 'Record of Circulars sent' on Page no 34 as & when the circular is sent.",
    "Parents can use the calendar to communicate with the teachers regarding their child's academics or behaviour. All other matters should be addressed to the Principal.",
    "The school insists on strict punctuality, regular school attendance, regulation regarding uniform, cleanliness in dress, good grooming, and fidelity to study and work assignments. Absence from school for merely social functions is discouraged.",
    "As the medium of instruction in the school is English, parents should provide ample opportunities for their children to converse in English at home.",
    "Parents need to check that their ward does not carry a mobile phone to school. In case of emergencies, the school landline is to be used by students.",
    "If a student is found carrying a mobile phone or any other electronic device, it will be confiscated and a fine of Rs. 2000/- will be imposed. The mobile will be returned only in the month of March.",
    "Parents are requested to encourage their ward to take a balanced interest in academics, co-curricular activities, and sports.",
    "Parents are advised to strictly avoid criticism of the school and school teachers in the presence of their ward, as it may lead to a loss of respect for the school/ school teachers which may, in turn, lead to failure to learn from him/her, resulting in lack of ward’s progress."
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
            Corporate Social Responsibility (CSR) in Schools
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-xl mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold text-gray-600">
                   CSR Benefits
                  </p>
                  <Link
                    to={`/school-management/academic/add-csr`}
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
                        {rule}
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

export default CSR;
