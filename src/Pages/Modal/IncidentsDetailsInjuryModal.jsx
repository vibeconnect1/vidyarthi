import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { RiDeleteBin6Line } from "react-icons/ri";
const IncidentsDetailsInjuryModal = ({ onclose }) => {
  const [incident, setIncident] = useState([{ name: "", mobile: "" }]);
  const [injury, setInjury] = useState();
  const handleAddIncident = (event) => {
    event.preventDefault();
    setIncident([...incident, { name: "", mobile: "" }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newIncident = [...incident];
    newIncident[index][name] = value;
    setIncident(newIncident);
  };

  const handleRemoveIncident = (index) => {
    const newIncident = [...incident];
    newIncident.splice(index, 1);
    setIncident(newIncident);
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl"> Add Injury</h1>
        <div className="border-b border-black"></div>
        {incident.map((incident1, index) => (
          <div key={index}>
            <div className="grid  px-5 gap-x-5 gap-y-4">
              <div className="flex flex-col gap-2">
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Select Injury Type</option>
                  <option value="">Head</option>
                  <option value="">Neck</option>
                  <option value="">Nose</option>
                  <option value="">Tongue</option>
                  <option value="">Arms</option>
                  <option value="">Legs</option>
                  <option value="">Eye</option>
                  <option value="">Ears</option>
                  <option value="">Skin</option>
                  <option value="">Mouth</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <select
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none w-full"
                >
                  <option value="">Who got injured</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 px-5 gap-x-5 gap-y-4 my-5">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  value={incident.mobile}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Mobile"
                  value={incident.mobile}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Company Name"
                  value={incident.mobile}
                  onChange={(event) => handleInputChange(index, event)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="border-b border-black my-5"></div>
            <div>
              <button
                className="bg-red-400 text-white p-2 px-4 rounded-md font-medium"
                onClick={() => handleRemoveIncident(index)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-start">
          <button
            className="bg-green-500 text-white p-2 px-4 rounded-md font-medium"
            onClick={handleAddIncident}
          >
            Add More
          </button>
        </div>
        <div className="border-b border-black"></div>
        <div className="flex justify-end">
          <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default IncidentsDetailsInjuryModal