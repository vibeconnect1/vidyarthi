import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit, BiFilterAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuPanelLeftClose } from "react-icons/lu";
import AssetsImportModal from "./AssetsImportModal";

function Assets() {
  const [filter, setFilter] = useState(false);
  const [importModal, setImportModal] = useState(false);
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
      name: "Asset Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "Building",
      selector: (row) => row.building_name,
      sortable: true,
    },

    { name: "Floor", selector: (row) => row.floor_name, sortable: true },
    { name: "Unit", selector: (row) => row.unit_name, sortable: true },

    {
      name: "OEM Name",
      selector: (row) => row.oem_name,
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
      name: "Group",
      selector: (row) => row.group_name,
      sortable: true,
    },
    {
      name: "Sub Group",
      selector: (row) => row.sub_group_name,
      sortable: true,
    },
    {
      name: "Purchase Date",
      selector: (row) => row.purchasedDate,
      sortable: true,
    },

    {
      name: "Purchase Cost",
      selector: (row) => row.purchaseCost,
      sortable: true,
    },

    {
      name: "Critical",
      selector: (row) => row.critical,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="">
          <div className="bg-green-500 px-5 py-1 rounded-md">In Use</div>
        </div>
      ),
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
    },
    {
      name: "Updated On",
      selector: (row) => row.updatedOn,
      sortable: true,
    },
    {
      name: "Warranty",
      selector: (row) => row.warranty,
      sortable: true,
    },
    {
      name: "W Start",
      selector: (row) => row.warrantyStart,
      sortable: true,
    },

    {
      name: "Installation Date",
      selector: (row) => row.installationDate,
      sortable: true,
    },
    {
      name: "W Expiry",
      selector: (row) => row.warrantyExpiry,
      sortable: true,
    },

    {
      name: "Meter Configured",
      selector: (row) => row.meterConfigured,
      sortable: true,
    },

    {
      name: "Supplier",
      selector: (row) => row.supplier,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "AC Unit",
      building_name: "Building A",
      floor_name: "2nd Floor",
      unit_name: "Unit 204",
      oem_name: "Samsung",
      serial_number: "SN123456789",
      model_number: "ModelX100",
      group_name: "HVAC",
      sub_group_name: "Cooling",
      purchasedDate: "2024-01-10",
      purchaseCost: "₹50000.00",
      critical: "No",
      status: "In Use",
      capacity: "2 Tons",
      createdOn: "2024-01-12",
      updatedOn: "2024-08-15",
      warranty: "5 Years",
      warrantyStart: "2024-01-12",
      installationDate: "2024-01-15",
      warrantyExpiry: "2029-01-12",
      meterConfigured: "Yes",
      supplier: "AC Solutions Ltd.",
    },
    {
      id: 2,
      name: "Backup Generator",
      building_name: "Building B",
      floor_name: "Ground Floor",
      unit_name: "Unit G1",
      oem_name: "Honda",
      serial_number: "GEN6789456",
      model_number: "GEN-X2000",
      group_name: "Power Systems",
      sub_group_name: "Generators",
      purchasedDate: "2023-12-01",
      purchaseCost: "₹250000.00",
      critical: "Yes",
      status: "Under Maintenance",
      capacity: "200 kW",
      createdOn: "2023-12-05",
      updatedOn: "2024-07-20",
      warranty: "2 Years",
      warrantyStart: "2023-12-05",
      installationDate: "2023-12-10",
      warrantyExpiry: "2025-12-05",
      meterConfigured: "No",
      supplier: "PowerTech Ltd.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col overflow-hidden w-full">
        <div>
          {filter && (
            <div className='className="flex flex-col md:flex-row  items-center justify-center gap-2'>
              <div className="flex justify-center gap-5">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Building Name</option>
                  <option value="">East</option>
                  <option value="">West</option>
                </select>
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Floor</option>
                </select>
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Unit</option>
                </select>
                <button className="bg-blue-500 p-1 px-4 py-1 text-white rounded-md">
                  Apply
                </button>
                <button className="bg-red-500 p-1 px-5 py-1 text-white rounded-md">
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between mx-5 my-5">
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
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base">
              <LuPanelLeftClose size={20} /> Hide Columns
            </button>
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
            onClick={() => setImportModal(true)}
            >
              Import
            </button>
          </div>
        </div>
        <div className="mx-5 bg-white rounded-md px-5">
          <Table columns={column} data={data} pagination />
        </div>
      </div>
      {importModal && (
          <AssetsImportModal onclose={() => setImportModal(false)} />
        )}
    </div>
  );
}

export default Assets;
