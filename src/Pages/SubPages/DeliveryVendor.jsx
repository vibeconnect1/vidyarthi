import React, { useState } from "react";
import Table from "../../ConfigurationFile/Table";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import DeliveryVendorModal from "../Modal/DeliveryVendorModal";
import EditDeliveryVendorModal from "../Modal/EditDeliveryVendorModal";

const  DeliveryVendor = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <button onClick={() => setEditModal(true)}><BiEdit size={15} /></button>
      ),
      sortable: true,
    },
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "Website Link",
      selector: (row) => row.websitelink,
      sortable: true,
    },
    { name: "SPOC Person", selector: (row) => row.SPOC, sortable: true },
    { name: "Contact Number", selector: (row) => row.contact, sortable: true },
    {
      name: "Agreement Start Date",
      selector: (row) => row.ASD,
      sortable: true,
    },
    {
      name: "Agreement End Date",
      selector: (row) => row.AED,
      sortable: true,
    },
    {
      name: "Active/Inactive",
      selector: (row) => row.status,
      sortable: true,
    },

    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <BiEdit />,
      name: "fac1",
      websitelink: "A",
      SPOC: "person1",
      contact: "12345",
      ASD: "bookable",
      AED: "date",
      status: "time",
      createdOn: "confirmed",
    },
    {
      id: 2,
      action: <BiEdit />,
      name: "person2",
      websitelink: "A",
      SPOC: "person1",
      contact: "12345",
      ASD: "bookable",
      AED: "date",
      status: "time",
      createdOn: "confirmed",
    },
  ];

  return (
    <div className="my-5 mx-5">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By name"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
        />

        <button
          onClick={() => setAddModal(true)}
          className="bg-black  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
        >
          <IoAddCircleOutline size={20} />
          Add
        </button>
      </div>
      <Table
        columns={column}
        data={data}
      />
      
      {addModal && (
        <DeliveryVendorModal onclose={() => setAddModal(false)} />
      )}
      {editModal && (
        <EditDeliveryVendorModal  onclose={() => setEditModal(false)} />
      )}
    </div>
  );
};

export default DeliveryVendor