import React from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const AMCDetails = () => {
  const columns = [
    {
      name: "View",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={``}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Vendor ",
      selector: (row) => row.vendor_name,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.start_date,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.end_date,
      sortable: true,
    },
    {
      name: "Frequency",
      selector: (row) => row.frequency,
      sortable: true,
    },
  ];
  return (
    <section>
      <div className="m-2">
        <div className="flex flex-col my-5 p-4 gap-4 rounded-md bg-white">
          <h2 className="border-b  text-xl border-black font-semibold">
            AMC Details
          </h2>
          <Table columns={columns} />
        </div>
        <div className="flex flex-col bg-white px-5 py-5">
          <h2 className="border-b  text-xl border-black font-semibold">
            Add AMC
          </h2>
          <div className="grid md:grid-cols-3 gap-5 py-5">
            <div className="flex flex-col">
              <select
                name="vendor_id"
                id=""
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Vendor</option>
              </select>
            </div>
            <div className="flex flex-col">
              <input
                type="date"
                name="start_date"
                id=""
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="date"
                name="end_date"
                id=""
                className="border-b border-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <select
                name="frequency"
                id=""
                className="border-b border-gray-500 focus:outline-none"
              >
                <option value="">Select Frequency</option>
                <option value="one Time">One Time</option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half yearly">Half yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="border-b  text-xl border-black font-semibold my-2">
              Upload AMC Terms
            </h2>
            <div className="mt-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Click To Upload</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-black p-1 px-4 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMCDetails;
