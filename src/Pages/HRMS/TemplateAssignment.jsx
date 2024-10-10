import React, { useState } from "react";
import { PiPlusCircle } from "react-icons/pi";
import LeaveSetting from "./Leave/LeaveSetting";
import { BiEdit } from "react-icons/bi";
import Table from "../../ConfigurationFile/Table";
const Modal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Leave Template Assignment</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Template *
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Please select</option>
            {/* Add your options here */}
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Primary Approver *
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option>Please select</option>
            {/* Add your options here */}
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const TemplateAssignment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const columns = [
    {
      name: "view",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <button  onClick={openModal}>
            <BiEdit size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Employee Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Current Leave Policy",
      selector: (row) => row.Leave,
      sortable: true,
    },
    {
      name: "Supervisors",
      selector: (row) => row.Supervisors,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      Name: "person 1",
      Category: "hj",
      End_Date: "09:30 AM",
      actual: "11:30 AM",
      Start_Date: "23/10/2024",
      Leave_Days: "abc",
      status: "Upcoming",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSave = () => {
    // Implement save logic here
    closeModal();
  };

  return (
    <section className="flex ml-20">
      <LeaveSetting />
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-end gap-2 my-5">
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
          />
          <button
            onClick={openModal}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />
    </section>
  );
};

export default TemplateAssignment