import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Passes from "./Passes";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const GoodsInOut = () => {
  const [page, setPage] = useState("Inwards");

  const InwardsColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/good-in-out-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Person Name",
      selector: (row) => row.person_Name,
      sortable: true,
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },
    {
      name: "Goods In Time",
      selector: (row) => row.goods_in_time,
      sortable: true,
    },
    {
      name: "Goods Out Time",
      selector: (row) => row.goods_out_time,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.created_On,
      sortable: true,
    },
  ];

  const inwardsData = [
    {
      id: 1,
      Type: "Delivery",
      person_Name: "Ramesh Kumar",
      vehicle_number: "AB123CD",
      goods_in_time: "08:00 AM",
      goods_out_time: "",
      created_On: "2024-09-01 10:00 AM",
    },
    {
      id: 2,
      Type: "Pickup",
      person_Name: "Sita Sharma",
      vehicle_number: "XY987ZT",
      goods_in_time: "09:00 AM",
      goods_out_time: "",
      created_On: "2024-09-02 11:00 AM",
    },
    {
      id: 3,
      Type: "Delivery",
      person_Name: "Arun Patel",
      vehicle_number: "KL456MN",
      goods_in_time: "07:00 AM",
      goods_out_time: "",
      created_On: "2024-09-03 12:00 PM",
    },
  ];

  const outwardsColumns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/good-in-out-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },

    {
      name: "Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Person Name",
      selector: (row) => row.person_Name,
      sortable: true,
    },
    {
      name: "Vehicle Number",
      selector: (row) => row.vehicle_number,
      sortable: true,
    },
    {
      name: "Goods In Time",
      selector: (row) => row.goods_in_time,
      sortable: true,
    },
    {
      name: "Goods Out Time",
      selector: (row) => row.goods_out_time,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.created_On,
      sortable: true,
    },
  ];

  const outwardsData = [
    {
      id: 1,
      Type: "Delivery",
      person_Name: "Ramesh Kumar",
      vehicle_number: "AB123CD",
      goods_in_time: "",
      goods_out_time: "09:00 AM",
      created_On: "2024-09-01 10:00 AM",
    },
    {
      id: 2,
      Type: "Pickup",
      person_Name: "Sita Sharma",
      vehicle_number: "XY987ZT",
      goods_in_time: "",
      goods_out_time: "011:00 AM",
      created_On: "2024-09-02 11:00 AM",
    },
  ];

  return (
    <div className="visitors-page">
      <section className="flex">
        <InstituteDetails />
        <div className=" w-full flex mx-3  flex-col overflow-hidden">
          <Passes />
          <div className="flex w-full  m-2">
            <div className="flex w-full md:flex-row flex-col space-x-4  border-b border-gray-400">
              <h2
                className={`p-2 ${
                  page === "Inwards"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Inwards")}
              >
                Inwards
              </h2>
              <h2
                className={`p-2 ${
                  page === "Outwards"
                    ? "text-blue-500 font-medium  shadow-custom-all-sides"
                    : "text-black"
                }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                onClick={() => setPage("Outwards")}
              >
                Outwards
              </h2>
            </div>
          </div>
          <div className="flex justify-between">
            {page === "Inwards" && (
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="my-3 flex-grow">
                    <input
                      type="text"
                      className="border border-black p-2 rounded-md placeholder:text-sm w-full"
                      placeholder="Search using Visitor name, Host, vehicle number"
                    />
                  </div>
                  <div className="ml-4">
                    <Link
                      to={"/school-management/add-good-in-out"}
                      className="font-semibold border border-gray-500 hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                    >
                      <PiPlusCircle size={20} />
                      Add
                    </Link>
                  </div>
                </div>
                <Table columns={InwardsColumns} data={inwardsData} />
              </div>
            )}
            {page === "Outwards" && (
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="my-3 flex-grow">
                    <input
                      type="text"
                      className="border border-black p-2 rounded-md placeholder:text-sm w-full"
                      placeholder="Search using Visitor name, Host, vehicle number"
                    />
                  </div>
                  <div className="ml-4">
                    <Link
                      to={"/school-management/add-good-in-out"}
                      className="font-semibold border border-gray-500 hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                    >
                      <PiPlusCircle size={20} />
                      Add
                    </Link>
                  </div>
                </div>
                <Table columns={outwardsColumns} data={outwardsData} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoodsInOut;
