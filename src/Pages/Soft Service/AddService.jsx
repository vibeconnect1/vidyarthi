import React, { useState } from "react";
import Select from "react-select";
import CronChecklist from "../../ConfigurationFile/CronChecklist";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const AddService = () => {
  const [selectedUnits, setSelectedUnits] = useState([]);

  const units = [
    { value: "unit1", label: "Unit 1" },
    { value: "unit2", label: "Unit 2" },
    { value: "unit3", label: "Unit 3" },
    { value: "unit4", label: "Unit 4" },
  ];

  const handleChangeSelect = (selectedOptions) => {
    setSelectedUnits(selectedOptions);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: "left",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center text-xl font-bold p-2 rounded-md text-black bg-white mx-5 my-3">
            Create Service
          </h2>
          <div className="md:mx-5 my-5 md:mb-10  p-5 px-10 rounded-lg bg-white">
            <div className="grid md:grid-cols-3 gap-4 py-5">
              <div className="flex flex-col ">
                <input
                  id="service-name"
                  type="text"
                  name="name"
                  placeholder="Enter Service Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <select
                  id="building"
                  className="border-b border-gray-500 focus:outline-none"
                  name="building"
                >
                  <option value="">Select Building</option>
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  id="floor"
                  className="border-b border-gray-500 focus:outline-none"
                  name="floor_name"
                >
                  <option value="">Select Floor</option>
                </select>
              </div>

              <div className="flex flex-col z-50">
                <Select
                  id="unit"
                  closeMenuOnSelect={false}
                  isMulti
                  value={selectedUnits} // Bind the selected values
                  onChange={handleChangeSelect} // Handle changes in the selection
                  options={units} // Provide unit options
                  noOptionsMessage={() => "No Units Available"}
                  placeholder="Select Units"
                  styles={customStyles}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <p className="font-medium border-b ">Cron setting</p>
              <CronChecklist />
            </div>

            <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
              Attachments
            </h2>
            <div className="mt-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-36 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Click To Upload</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>

            <div className="md:flex grid md:grid-cols-2 gap-2 my-5 justify-center">
              <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                Save & Show Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
