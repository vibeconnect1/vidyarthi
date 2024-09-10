import React, { useState } from "react";
import { BiEdit, BiFilterAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
const Meter = () => {
  const [filter, setFilter] = useState(false);
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/assets-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-assets`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },

    { name: "Floor", selector: (row) => row.floor_name, sortable: true },
    { name: "Unit", selector: (row) => row.unit_name, sortable: true },

    {
      name: "Asset Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Serial Number",
      selector: (row) => row.serial_number,
      sortable: true,
    },

    {
      name: "Model Number",
      selector: (row) => row.model_number,
      sortable: true,
    },
    {
      name: "Purchase Date",
      selector: (row) => row.purchased_on,
      sortable: true,
    },

    {
      name: "Purchase Cost",
      selector: (row) => row.purchase_cost,
      sortable: true,
    },
    {
      name: "Warranty Expiry",
      selector: (row) => row.warranty_expiry,
      sortable: true,
    },
    {
      name: "Critical",
      selector: (row) => row.critical,
      sortable: true,
    },
    {
      name: "Breakdown",
      selector: (row) => row.breakdown,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Installation Date",
      selector: (row) => row.installation,
      sortable: true,
    },
    {
      name: "Meter Configured",
      selector: (row) => row.is_meter,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      building_name: "Main Building",
      floor_name: "2nd Floor",
      unit_name: "Unit 205",
      name: "HVAC System",
      serial_number: "SN123456789",
      model_number: "HVAC-2021",
      purchased_on: "2023-02-01",
      purchase_cost: "$15,000",
      warranty_expiry: "2026-02-01",
      critical: "Yes",
      breakdown: "No",
      capacity: "5 Ton",
      created_at: "2023-01-15",
      installation: "2023-02-05",
      is_meter: "Yes",
    },
    {
      id: 2,
      building_name: "Annex Building",
      floor_name: "1st Floor",
      unit_name: "Unit 101",
      name: "Backup Generator",
      serial_number: "SN987654321",
      model_number: "GEN-2022",
      purchased_on: "2022-06-12",
      purchase_cost: "$25,000",
      warranty_expiry: "2025-06-12",
      critical: "No",
      breakdown: "Yes",
      capacity: "1000 kW",
      created_at: "2022-05-20",
      installation: "2022-06-20",
      is_meter: "No",
    },
    {
      id: 3,
      building_name: "Warehouse",
      floor_name: "Ground Floor",
      unit_name: "Unit A1",
      name: "Industrial Robot",
      serial_number: "SN1122334455",
      model_number: "RBT-2020",
      purchased_on: "2021-11-25",
      purchase_cost: "$80,000",
      warranty_expiry: "2024-11-25",
      critical: "Yes",
      breakdown: "No",
      capacity: "200 kg load",
      created_at: "2021-11-10",
      installation: "2021-11-30",
      is_meter: "Yes",
    },
    {
      id: 4,
      building_name: "Office Block",
      floor_name: "3rd Floor",
      unit_name: "Unit 305",
      name: "Server Rack",
      serial_number: "SN4455667788",
      model_number: "SRV-2021",
      purchased_on: "2021-05-10",
      purchase_cost: "$10,000",
      warranty_expiry: "2024-05-10",
      critical: "No",
      breakdown: "No",
      capacity: "42U",
      created_at: "2021-04-25",
      installation: "2021-05-15",
      is_meter: "No",
    },
    {
      id: 5,
      building_name: "Main Building",
      floor_name: "1st Floor",
      unit_name: "Unit 103",
      name: "Air Conditioning Unit",
      serial_number: "SN6655443322",
      model_number: "AC-2021",
      purchased_on: "2022-08-05",
      purchase_cost: "$5,000",
      warranty_expiry: "2025-08-05",
      critical: "Yes",
      breakdown: "No",
      capacity: "3 Ton",
      created_at: "2022-07-25",
      installation: "2022-08-10",
      is_meter: "Yes",
    },
  ];

  return (
    <section className="flex">
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        {filter && (
          <div className="flex flex-col md:flex-row mt-1 items-center justify-center gap-2">
            <select
              name="building_name"
              id="building_name"
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Building</option>
            </select>

            <select
              name="floor_name"
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Floor</option>
            </select>
            <select
              name="unit_name"
              className="border p-1 px-4 max-w-44 w-44 border-gray-500 rounded-md"
            >
              <option value="">Select Unit</option>
            </select>
            <button className="bg-black p-1 px-4 text-white rounded-md">
              Apply
            </button>
          </div>
        )}
        <div className="flex justify-between my-5">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex gap-3">
            <Link
              to={`/school-management/add-assets`}
              className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              <IoAddCircleOutline size={20} /> Add
            </Link>
            <button
              className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
              onClick={() => setFilter(!filter)}
            >
              <BiFilterAlt size={20} /> Filter
            </button>
          </div>
        </div>
        <div className=" bg-white rounded-md">
          <Table columns={column} data={data} pagination />
        </div>
      </div>
    </section>
  );
};

export default Meter;
