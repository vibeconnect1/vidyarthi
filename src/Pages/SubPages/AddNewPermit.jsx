import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddNewPermit = () => {
  const [showEntityList, setShowEntityList] = useState(false);
  const [activities, setActivities] = useState([
    { id: 1, activity: "", subActivity: "", hazardCategory: "", risks: "" },
  ]);
  const [nextId, setNextId] = useState(2);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newActivities = [...activities];
    newActivities[index][name] = value;
    setActivities(newActivities);
  };

  const handleAddActivity = () => {
    setActivities([
      ...activities,
      {
        id: nextId,
        activity: "",
        subActivity: "",
        hazardCategory: "",
        risks: "",
      },
    ]);
    setNextId(nextId + 1);
  };

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleRadioChange = (event) => {
    setShowEntityList(event.target.value === "client");
  };

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 rounded-md mx-10 bg-white my-3 ">
            New Permit
          </h2>
          <div className="md:mx-10 my-5 mb-10 p-5 px-10 rounded-lg bg-white">
            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              PERMIT REQUESTOR DETAILS
            </h2>
            <h1 className="font-semibold">Requestor Details :</h1>

            <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
              {/* Requestor details input fields */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="name"
                      type="text"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="contact-number"
                      type="text"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="site"
                      type="text"
                      placeholder="Enter site"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="department"
                      type="text"
                      placeholder="Enter Department"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="unit"
                      type="text"
                      placeholder="Unit"
                    />
                  </div>
                  {/* <div className="col-span-1 flex items-end">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
        Submit
      </button>
    </div> */}
                </div>
              </div>
            </div>

            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              BASIC DETAILS
            </h2>

            <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
              {/* Basic details input fields */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 ">
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="permit-for"
                      type="text"
                      placeholder="Enter Permit For"
                    />
                  </div>
                  <div className="col-span-1">
                    <select
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="building"
                    >
                      <option>Select Building</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <select
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="wing"
                    >
                      <option>Select Wing</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="col-span-1">
                    <select
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="area"
                    >
                      <option>Select Area</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <select
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="floor"
                    >
                      <option>Select Floor</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <select
                      className="border-b border-gray-500 focus:outline-none  w-full"
                      id="room"
                    >
                      <option>Select Room</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 py-3">
                  <div className="col-span-1 w-full">
                    <label className="" htmlFor="type">
                      Client Specific
                    </label>
                    <div className="flex items-center my-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        id="internal"
                        name="type"
                        value="internal"
                        onChange={handleRadioChange}
                      />
                      <label
                        className="text-gray-700 font-bold mr-4"
                        htmlFor="internal"
                      >
                        Internal
                      </label>
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        id="client"
                        name="type"
                        value="client"
                        onChange={handleRadioChange}
                      />
                      <label
                        className="text-gray-700 font-bold"
                        htmlFor="client"
                      >
                        Client
                      </label>
                    </div>
                  </div>
                  {showEntityList && (
                    <div className="col-span-2 md:col-span-1">
                      <select
                        className="border-b border-gray-500 focus:outline-none"
                        id="entity-list"
                        style={{ width: "100%" }}
                      >
                        <option>Select List of Entity</option>
                      </select>
                    </div>
                  )}
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="copy-to"
                      type="text"
                      placeholder="Copy To"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              PERMIT DETAILS
            </h2>

            <h3 className="font-semibold">Select Permit Type</h3>
            {/* Permit details input fields */}
            <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="cold-work"
                    name="permit-type"
                    value="Cold Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="cold-work"
                  >
                    Cold Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="confined-space-work"
                    name="permit-type"
                    value="Confined Space Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="confined-space-work"
                  >
                    Confined Space Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="electrical-work"
                    name="permit-type"
                    value="Electrical Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="electrical-work"
                  >
                    Electrical Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="excavation-work"
                    name="permit-type"
                    value="Excavation Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="excavation-work"
                  >
                    Excavation Work
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="height-work"
                    name="permit-type"
                    value="Height Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="height-work"
                  >
                    Height Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="hot-work"
                    name="permit-type"
                    value="Hot Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="hot-work"
                  >
                    Hot Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="radiology-work"
                    name="permit-type"
                    value="Radiology Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="radiology-work"
                  >
                    Radiology Work
                  </label>
                </div>
                <div className="col-span-1">
                  <input
                    type="radio"
                    id="loading-unloading-work"
                    name="permit-type"
                    value="Loading, Unloading Hazardous Material Work"
                  />
                  <label
                    className="text-gray-700 font-bold ml-2"
                    htmlFor="loading-unloading-work"
                  >
                    Loading, Unloading Hazardous Material Work
                  </label>
                </div>
              </div>
            </div>

            <h3 className="font-semibold">Enter Permit Description</h3>

            <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
              {/* Permit details input fields */}
              <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
                {activities.map((activity, index) => (
                  <div key={activity.id} className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="col-span-1">
                        <input
                          className="border-b border-gray-500 focus:outline-none w-full"
                          id={`activity-${index}`}
                          type="text"
                          placeholder="Select Activity"
                          name="activity"
                          value={activity.activity}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                      <div className="col-span-1">
                        <input
                          className="border-b border-gray-500 focus:outline-none w-full"
                          id={`sub-activity-${index}`}
                          type="text"
                          placeholder="Select Sub Activity"
                          name="subActivity"
                          value={activity.subActivity}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="col-span-1">
                        <input
                          className="border-b border-gray-500 focus:outline-none w-full"
                          id={`hazard-category-${index}`}
                          type="text"
                          placeholder="Select Category of Hazards"
                          name="hazardCategory"
                          value={activity.hazardCategory}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                      <div className="col-span-1">
                        <input
                          className="border-b border-gray-500 focus:outline-none w-full"
                          id={`risks-${index}`}
                          type="text"
                          placeholder="Enter Risks"
                          name="risks"
                          value={activity.risks}
                          onChange={(e) => handleInputChange(index, e)}
                        />
                      </div>
                    </div>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => handleDeleteActivity(activity.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleAddActivity}
                  >
                    Add Activity
                  </button>
                </div>
              </div>

              <div className="w-full mx-3 my-5 p-5 shadow-lg rounded-lg border border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="vendor"
                      type="text"
                      placeholder="Enter Vendor"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="expiryDateTime"
                      type="text"
                      placeholder="Expiry Date & Time"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <textarea
                      className="border-b border-gray-500 focus:outline-none w-full"
                      id="comment"
                      placeholder="Enter Comment"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
              ATTACHMENTS
            </h3>
            <div className="mt-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-32 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Click To Upload</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>
            <div className="sm:flex justify-center grid gap-2 my-5 ">
              <button
                className="bg-black text-white p-2 px-4 rounded-md font-medium"
                //   onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewPermit;
