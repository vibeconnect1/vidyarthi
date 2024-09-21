import React, { useState } from "react";
import HRMSAlert from "./HRMSAlert";
import Table from "../../ConfigurationFile/Table";
const AlertTasks = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const columns = [
    // {
    //   name: "view",
    //   cell: (row) => (
    //     <div className="flex items-center gap-4">
    //       <Link to={`/admin/hrms-tasks-details/${row.id}`}>
    //         <BsEye size={15} />
    //       </Link>
    //     </div>
    //   ),
    // },
    {
      name: "Employee Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Task Label",
      selector: (row) => row.label,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.to,
      sortable: true,
    },
    {
      name: "Task Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.date,
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
      Name: "Mittu",
      label: 1,
      type: "abc",
      to: "Employee1",
      date: "23/10/2024",
      status: "Upcoming",
    },
  ];

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="mt-5">
      <HRMSAlert/>
   
    <section className="flex ml-20 mt-5 mr-1">
      <div className="w-full flex m-3 flex-col overflow-hidden">
        <div className="flex justify-between my-5">
          <input
            type="text"
            placeholder="Search by name "
            className="border border-gray-400 w-96 placeholder:text-sm rounded-lg p-2"
            //   value={searchText}
            //   onChange={handleSearch}
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={handleOpenModal}>
           Filter
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
              <h2 className="text-xl mb-4">Add New Task</h2>
              <form>
              <div className="grid md:grid-cols-3 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    // type="text"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    // type="text"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input
                    type="date"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Employee Department</label>
                  <select
                    // type="date"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    // type="date"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2 items-center w-full">
               
                  <label className="block text-sm font-medium text-gray-700">Assigned to</label>
                  <select
                    // type="date"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
               </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default AlertTasks