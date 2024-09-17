import React from "react";
import { BsEye } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";

const OutBound = () => {
  const column = [
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`/school-management/outBound-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
    { name: "ID", selector: (row) => row.id, sortable: true },
    {
      name: "Sender Name",
      selector: (row) => row.senderName,
      sortable: true,
    },
    { name: "Recipient", selector: (row) => row.recipient, sortable: true },
    { name: "Unit", selector: (row) => row.unit, sortable: true },
    {
      name: "Entity",
      selector: (row) => row.entity,
      sortable: true,
    },
    {
      name: "Courier Vendor",
      selector: (row) => row.courierVendor,
      sortable: true,
    },
    {
      name: "AWB Number",
      selector: (row) => row.AWB,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },

    {
      name: "Sending Date",
      selector: (row) => row.sendingDate,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      action: <BsEye />,
      courierVendor: "Courier",
      senderName: "sender A",
      recipient: "recipient 1",
      unit: "unit 1",
      AWB: "AWB 1",
      entity: "entity1",
      type: "fac1",
      sendingDate: "date",
    },
  ];

  return (
    <div className="my-5 mx-5">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Sender name"
          className="border-2 p-2 w-96 border-gray-300 rounded-lg"
        />

        <Link
          to={"/school-management/create-outbound"}
          className="bg-black  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-5"
        >
          <IoAddCircleOutline size={20} />
          Add
        </Link>
      </div>
      <Table columns={column} data={data} />
    </div>
  );
};

export default OutBound;
