import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { FaFileAlt, FaCheck } from "react-icons/fa";
import Table from "../../ConfigurationFile/Table";
import PayslipDetailsList from "./PayslipDetailsList";
const Payslip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const columns = [
    {
      name: "Actions",

      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/hrms/alerts/payslip-details-page/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <button onClick={() => setIsModalOpen2(true)}>
            <FaFileAlt size={15} />
          </button>

          <button onClick={() => setIsModalOpen1(true)}>
            <FaCheck size={15} />
          </button>
        </div>
      ),
    },
    {
      name: "Month-Year",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "Payslips Published",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Payslips Un-Published",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Bulk Upload",
      selector: (row) => row.State,
      sortable: true,
    },
  ];

  const data = [
    {
      Name: "June-2024",
      Location: "June-2024	",
      City: "0",
      State: (
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Generate
        </button>
      ),
      Label: "0",
      Country: "India",
    },
  ];

  return (
    <section className="flex ml-20">
      <PayslipDetailsList />
      <div className=" w-full flex m-3 flex-col overflow-hidden">
        <div className=" flex justify-between my-5">
          {/* <Link
            to={"/templates/leave-templates"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </Link> */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
              <div className="bg-white p-6 rounded-lg w-96 h-4/6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Generate Bulk Payslips for June-2024
                  </h2>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Select Payslip Type
                      <select className="border border-gray-400 rounded-lg p-2 w-full">
                        <option value="Employees">Payslip</option>
                      </select>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2">
                      Which Employees Do You Want to Include in this Report?
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="All Employees"
                      />
                      <label>All Employees</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="Some Employees"
                      />
                      <label>Some Employees</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="Specific Employees"
                      />
                      <label>Specific Employees</label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="mr-4 px-4 py-2 bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Generate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {isModalOpen1 && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
              <div className="bg-white p-6 rounded-lg w-96 h-4/6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Publish Payslips for June - 2024
                  </h2>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Would you like to publish for all employees?
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="All Employees"
                      />
                      <label>Yes</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="Some Employees"
                      />
                      <label>No</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Would you like to publish with email notification??
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="All Employees"
                      />
                      <label>Yes</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="Some Employees"
                      />
                      <label>No</label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen1(false)}
                      className="mr-4 px-4 py-2 bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Publish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {isModalOpen2 && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
              <div className="bg-white p-6 rounded-lg w-96 h-4/6 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    UnPublish Payslips for June - 2024
                  </h2>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Would you like to un-publish for all employees?
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="All Employees"
                      />
                      <label>Yes</label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="employeeSelection"
                        className="mr-2"
                        value="Some Employees"
                      />
                      <label>No</label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen2(false)}
                      className="mr-4 px-4 py-2 bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      UnPublish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default Payslip;
