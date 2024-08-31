import React, { useState } from "react";
import Select from 'react-select'; // Add this line
import ModalWrapper from "../Modal/ModalWrapper";

const AddSubjectModal = ({ onclose }) => {
  const [subject, setSubject] = useState("addSubject");
  const options = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'marathi', label: 'Marathi' },
    { value: 'maths', label: 'Maths' },
    { value: 'science', label: 'Science' },
  ];
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2">
          Add Subject
        </h2>
        <div className="flex justify-between my-3">
          <button
            onClick={() => setSubject("addSubject")}
            className={`px-4 py-2 ${
              subject === "addSubject" ? "text-blue-500 " : " text-black"
            }`}
          >
            Add Subject
          </button>
          <button
            onClick={() => setSubject("extraSubject")}
            className={`px-4 py-2 rounded-md ${
              subject === "extraSubject" ? "text-blue-500" : "text-black"
            }`}
          >
            Add Extra Subject
          </button>
        </div>
        <div className="border-t border-black">
          {subject === "addSubject" && (
            <div>
              <div className="md:grid grid-cols-1 gap-2 my-3">
                <Select
                  isMulti
                  name="class"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  value={selectedOptions}
                  onChange={handleChange}
                  placeholder="Select Subjects"
                />
                <input
                  type="text"
                  placeholder="Subject Code"
                  className="border p-1 py-2 border-gray-500 rounded-md md:w-full mt-2"
                />
                <input
                  type="text"
                  placeholder="Default for classes"
                  className="border p-1 py-2 border-gray-500 rounded-md md:w-full mt-2"
                />
              </div>
              <div className="border-t border-black my-2"></div>
              <div className="flex justify-end">
                <button className="p-1 px-4 py-2 border-2 rounded-md text-black font-medium">
                  Submit
                </button>
              </div>
            </div>
          )}
          {subject === "extraSubject" && (
            <div>
              <div className="md:grid grid-cols-1 gap-2 my-3">
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="border p-1 py-2 border-gray-500 rounded-md md:w-full"
                />
                <input
                  type="text"
                  placeholder="Subject Code"
                  className="border p-1 py-2 border-gray-500 rounded-md md:w-full mt-2"
                />
                <input
                  type="text"
                  placeholder="Default for classes"
                  className="border p-1 py-2 border-gray-500 rounded-md md:w-full mt-2"
                />
              </div>
              <div className="border-t border-black my-2"></div>
              <div className="flex justify-end">
                <button className="p-1 px-4 py-2 border-2 rounded-md text-black font-medium">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddSubjectModal;
