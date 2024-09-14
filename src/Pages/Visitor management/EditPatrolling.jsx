import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const EditPatrolling = () => {
  const [interval, setInterval] = useState("hrs");
  const [formData, setFormData] = useState({
    timeInterval: "",
  });
  const [selectedHours, setSelectedHours] = useState([]);

  const hours = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const toggleHourSelection = (hour) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full mx-5">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-4 text-black">
            Edit Patrolling
          </h2>
          <form className="border border-gray-300 rounded-lg py-5 px-5 w-full bg-white mb-5">
            <div className="grid grid-cols-1 gap-2 my-3">
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col">
                  <select
                    name="buildingId"
                    placeholder="Enter Building Name"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Building</option>
                    <option value="">Building A</option>
                    <option value="">Building B</option>
                    <option value="">Building c</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="floorId"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Floor</option>
                    <option value="">Floor 1</option>
                    <option value="">Floor 2</option>
                    <option value="">Floor 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <select
                    name="unitId"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="">Select Unit</option>
                  </select>
                </div>
              </div>
              <h2 className="font-medium border-b border-black text-lg my-5">Frequency</h2>
              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col">
                  <input
                    type="date"
                    name="startDate"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="date"
                    name="endDate"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="time"
                    name="startTime"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="time"
                    name="endTime"
                    className="border-b border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 my-5">
                <p
                  onClick={() => setInterval("hrs")}
                  className={`font-medium cursor-pointer transition-all duration-300 ${
                    interval === "hrs" &&
                    "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
                  }`}
                >
                  Time Interval(hrs)
                </p>
                <p
                  onClick={() => setInterval("specific")}
                  className={`font-medium cursor-pointer transition-all duration-300 ${
                    interval === "specific" &&
                    "bg-black text-white shadow-custom-all-sides rounded-full p-1 px-2"
                  }`}
                >
                  Specific Time
                </p>
              </div>
              {interval === "hrs" && (
                <div>
                  <input
                    type="text"
                    name="timeInterval"
                    className="border p-1 rounded-md border-black my-1"
                    placeholder="Enter Interval Hour(s) "
                    value={formData.timeInterval}
                    onChange={handleChange}
                  />
                </div>
              )}
              {interval === "specific" && (
                <div className="grid grid-cols-6 gap-2 bg-gray-100 p-4 rounded">
                  {hours.map((hour) => (
                    <p
                      key={hour}
                      className={`p-2 rounded cursor-pointer ${
                        selectedHours.includes(hour)
                          ? "bg-gray-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                      onClick={() => toggleHourSelection(hour)}
                    >
                      {hour}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPatrolling