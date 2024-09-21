import React, { useState } from "react";
import OrganizationSetting from "./OrganizationSetting";

const GeographicalSetting = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [timezone, setTimezone] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [currency, setCurrency] = useState("");

  // Dummy data for selects

  const timezones = ["UTC-12", "UTC-8", "UTC+0", "UTC+5"];
  const dateFormats = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD"];
  const currencies = ["USD", "GBP", "CAD", "AUD"];

  return (
    <div className="flex gap-10 ml-20">
      <OrganizationSetting />
      <div className="w-2/3 mt-2  py-6 bg-white rounded-lg ">
        {/* <h2 className="text-xl font-bold mb-4">Geographical Settings</h2> */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-6">Geographical Settings</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country of Origin
          </label>
          {/* <Select
        id="country"
        value={selectedCountry}
        onChange={handleSelectChange}
        options={countryOptions}
        placeholder="Select a country"
        noOptionsMessage={() => "No countries available"}
      /> */}
      <select
            id="timezone"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              !isEditing ? "bg-gray-200" : ""
            }`}
           
            disabled={!isEditing}
          >
            <option value="">Select Country</option>
            <option value="IN">India</option>
           
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="timezone"
            className="block text-sm font-medium text-gray-700"
          >
            Timezone
          </label>
          <select
            id="timezone"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            disabled={!isEditing}
          >
            <option value="">Select a timezone</option>
            {timezones.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateFormat"
            className="block text-sm font-medium text-gray-700"
          >
            Date Format
          </label>
          <select
            id="dateFormat"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            disabled={!isEditing}
          >
            <option value="">Select a date format</option>
            {dateFormats.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="currency"
            className="block text-sm font-medium text-gray-700"
          >
            Default Currency
          </label>
          <select
            id="currency"
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              !isEditing ? "bg-gray-200" : ""
            }`}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            disabled={!isEditing}
          >
            <option value="">Select a currency</option>
            {currencies.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GeographicalSetting