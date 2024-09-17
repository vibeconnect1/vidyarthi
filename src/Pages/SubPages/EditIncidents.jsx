import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { PiPlusCircle } from "react-icons/pi";

const EditIncidents = () => {
  const [incident, setIncident] = useState([{ name: "", mobile: "" }]);
  const [checkbutton, setCheckbutton] = useState();
  const [medical, setMedical] = useState();
  const [investigation, setInvestigation] = useState([
    { name1: "", mobile1: "" },
  ]);

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

  const handleAddInvestigation = (event) => {
    event.preventDefault();
    setInvestigation([...investigation, { name1: "", mobile1: "" }]);
  };

  const handleInputChange1 = (index, event) => {
    const { name1, value } = event.target;
    const newInvestigation = [...investigation];
    newInvestigation[index][name1] = value;
    setInvestigation(newInvestigation);
  };

  const handleRemoveInvestigation = (index) => {
    const newInvestigation = [...investigation];
    newInvestigation.splice(index, 1);
    setInvestigation(newInvestigation);
  };

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <h2 className="text-center text-lg mx-10 my-3 font-semibold p-2 rounded-md bg-white">
            Edit Incidents
          </h2>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              DETAILS
            </h2>
            <div className="flex  flex-col justify-around ">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full">
                <div className="flex flex-col ">
                  <div className="flex gap-2">
                    <input
                      type="date"
                      placeholder="Date"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                    <input
                      type="time"
                      placeholder="Time"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select The Incident Primary Category</option>
                    <option value="">System Down</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select The Category For The Injury / Illness Incident</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select The Secondary Category For The Incident</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Probability</option>
                    <option value="">Rare </option>
                    <option value="">Possible </option>
                    <option value="">Likely </option>
                    <option value="">Often </option>
                    <option value="">Frequent Almost/Certain </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Property Damage Category</option>
                    <option value="">other </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Insured by</option>
                    <option value="">Building insurance </option>
                    <option value="">Private/Individual </option>
                    <option value="">others </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Primary root cause category</option>
                  </select>
                </div>
                <div className="flex flex-col col-span-3">
                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="1"
                    placeholder="Accident near Main Gate (Description)"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col col-span-3">
                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="1"
                    placeholder="Preventive action"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-8 w-full my-5">
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Building</option>
                    <option value="">HelpDesk</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select The Category For The System down Incident</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select The Incident Secondary Category</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Severity </option>
                    <option value="">Insignificant </option>
                    <option value="">Minor </option>
                    <option value="">moderate </option>
                    <option value="">major </option>
                    <option value="">catasTrophic </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Incident level</option>
                    <option value="">Level-4 </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Has Any Property Damage Happened In The Incident?</option>
                    <option value="">Yes </option>
                    <option value="">No </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name=""
                    id=""
                    className="border-b border-gray-500 focus:outline-none w-full"
                  >
                    <option value="">Select Damage covered under insurance</option>
                    <option value="">Yes </option>
                    <option value="">No </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="RCA"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Corrective action"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              ADD WITNESSES DETAILS
            </h2>
            <div>
              {incident.map((incident1, index) => (
                <div key={index}>
                  <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-4 my-5 mb-3 w-full">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        value={incident.mobile}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Mobile"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        value={incident.mobile}
                        onChange={(event) => handleInputChange(index, event)}
                      />
                    </div>
                    <button onClick={() => handleRemoveIncident(index)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="border border-gray-500 p-1 flex gap-2 rounded-md"
                onClick={handleAddIncident}
              > 
                <PiPlusCircle size={20}/> Add More
              </button>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              COST OF INCIDENT
            </h2>
            <div className="flex flex-col justify-around ">
              <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-5 w-full">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Equipment/Property Damaged Cost"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Production Loss"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Treatment Cost"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Absenteeism Cost"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Other Cost"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Total Cost"
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              FIRST AID PROVIDED
            </h2>
            <div className="flex  gap-2">
              <input
                type="checkbox"
                name="is_meter"
                id="meterApplicable"
                placeholder="Was First Aid provided by Employees ?"
                onClick={() => setCheckbutton(!checkbutton)}
              />
              {checkbutton && (
                <div>
                  <div className="flex flex-col ml-10">
                    <input
                      type="text"
                      placeholder="Name of First Aid Attendants"
                      className="border-b border-gray-500 focus:outline-none w-full"
                      value={incident.mobile}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col col-span-3 my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              MEDICAL TREATMENT
            </h2>
            <div className="flex  gap-2">
              <label htmlFor="meterApplicable">
                Sent for Medical Treatment{" "}
              </label>
              <input
                type="checkbox"
                name="is_meter"
                id="meterApplicable"
                onClick={() => setMedical(!medical)}
              />
              {medical && (
                <div className="flex gap-4">
                  <div className="flex flex-col ml-10">
                    <input
                      type="text"
                      placeholder=" Treatment Facility"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex flex-col ml-10">
                    <input
                      type="text"
                      placeholder=" Attending Physician"
                      className="border-b border-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              ADD WITNESSES DETAILS
            </h2>
            <div>
              {investigation.map((investigation1, index) => (
                <div key={index}>
                  <div className="grid md:grid-cols-4 item-start gap-x-4 gap-y-4 mb-3 w-full">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border p-1 px-4 border-gray-500 rounded-md"
                        value={investigation.mobile1}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Mobile"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        value={investigation.mobile1}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="border-b border-gray-500 focus:outline-none w-full"
                        value={investigation.mobile1}
                        onChange={(event) => handleInputChange1(index, event)}
                      />
                    </div>
                    <button onClick={() => handleRemoveInvestigation(index)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <button
                className="border border-gray-500  p-1 flex gap-2 rounded-md"
                onClick={handleAddInvestigation}
              >
                <PiPlusCircle size={20}/> Add More
              </button>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <div className=" mt-3 mb-10 ">
              <div className="flex items-center gap-6">
                {/* <label htmlFor="meterApplicable">Support</label> */}
                <input type="checkbox" name="is_meter" id="meterApplicable" />
                <label htmlFor="meterApplicable">Support required</label>
              </div>
              <div className="flex md:flex-row flex-col gap-2">
                {/* <label htmlFor="meterApplicable">Disclaimer </label>
                 */}
                <div className="flex items-center gap-6">
                  <input type="checkbox" name="is_meter" id="meterApplicable" />
                  <label htmlFor="meterApplicable">
                    I have correctly stated all the facts related to the
                    incident
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2 md:mx-10 p-4 gap-4 rounded-md bg-white">
            <h2 className=" text-lg border-black border-b font-semibold ">
              ATTACHMENTS
            </h2>
            <p className="text-medium font-semibold">ATTACHMENTS</p>
            <p className="text-xs ">No ATTACHMENTS</p>
          </div>
          <div className="flex justify-center mb-20 my-3">
            <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
              Update Incident
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditIncidents;
