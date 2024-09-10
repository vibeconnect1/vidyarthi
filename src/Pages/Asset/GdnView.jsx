import React from "react";
import Table from "../../ConfigurationFile/Table";
import InstituteDetails from "../School management/InstituteDetails";

const GdnView = () => {
  const column = [
    { name: "Inventory", selector: (row) => row.Inventory, sortable: true },
    { name: "Quantity", selector: (row) => row.Quantity, sortable: true },
    { name: "Purpose", selector: (row) => row.Purpose, sortable: true },
    { name: "Reason", selector: (row) => row.Reason, sortable: true },
    { name: "Hand Over To", selector: (row) => row.HandOverTo, sortable: true },
  ];
  const data = [
    {
      id: 1,
      Inventory: "BOX FILE - A4 REGULAR SIZE",
      Quantity: "1",
      Purpose: "consuming",
      Reason: "Box file for safety suggestion form",
      HandOverTo: "NA",
    },
  ];
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2 className="text-center text-xl font-bold p-2 mx-12 my-2 rounded-md text-black bg-white">
          GDN Details
        </h2>
        <div className="bg-white mx-12 py-5 my-5 rounded-md">
          <div className="flex gap-3 item-center my-3 mx-5 flex-wrap">
            <p className="text-sm font-bold">Site incharge Approval:</p>
            <button className="bg-orange-400 px-2 py-1 rounded-md text-white text-sm">
              Pending
            </button>
            <p className="text-sm font-bold">store Incharge Approval:</p>
            <button className="bg-orange-400 px-2 py-1 rounded-md text-white text-sm">
              Pending
            </button>
          </div>
          <div className="border-2 border-gray-400 mx-5">
            <h2 className="text-xl font-semibold mx-5 my-5">GDN DETAILS</h2>
            <div className="border-2 border-gray-400 mx-5 my-5">
              <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols">
                <div className="grid grid-cols-6 items-center">
                  <p>GDN Date</p>
                  <p className="text-sm font-normal ">: 31/05/24</p>
                </div>
                <div className="grid grid-cols-6 items-center">
                  <p>Description</p>
                  <p className="text-sm font-normal ">: box file</p>
                </div>
              </div>
            </div>
            <div className="border my-5 mx-5 border-gray-200"></div>
          </div>
        </div>
        <div className="mx-12 rounded-md">
          <Table columns={column} data={data} isPagination={true} />
        </div>
      </div>
    </section>
  );
};

export default GdnView;
