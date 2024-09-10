import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import GRN from "./GRN";
import GDN from "./GDN";

const Inventory = () => {
  const [page, setPage] = useState("stocks");
  
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/inventory-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-inventory/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
    {
      name: "Available Quantity",
      selector: (row) => row.available_quantity,
      sortable: true,
    },
    { name: "Rate", selector: (row) => row.rate, sortable: true },
    { name: "Group", selector: (row) => row.group_name, sortable: true },
    { name: "Sub Group", selector: (row) => row.sub_group_name, sortable: true },
    { name: "Min Order Level", selector: (row) => row.min_stock, sortable: true },
    { name: "Max Order Level", selector: (row) => row.max_stock, sortable: true },
    { name: "Added On", selector: (row) => row.created_at, sortable: true },
  ];

  const data = [
    {
      id: 1,
      name: "Widget A",
      description: "High-quality widget",
      available_quantity: 150,
      rate: 10.5,
      group_name: "Electronics",
      sub_group_name: "Gadgets",
      min_stock: 50,
      max_stock: 300,
      created_at: "2024-09-05",
    },
    {
      id: 2,
      name: "Widget B",
      description: "Durable widget",
      available_quantity: 75,
      rate: 8.75,
      group_name: "Mechanical",
      sub_group_name: "Tools",
      min_stock: 30,
      max_stock: 200,
      created_at: "2024-09-06",
    },
    {
      id: 3,
      name: "Gizmo X",
      description: "Advanced gizmo",
      available_quantity: 20,
      rate: 45.0,
      group_name: "Electronics",
      sub_group_name: "Innovations",
      min_stock: 10,
      max_stock: 100,
      created_at: "2024-09-07",
    },
  ];
  
  return (
    <section
      className="flex"
    >
      <div className="p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
        <div className=" w-full my-2 flex  overflow-hidden flex-col">
          <div className="flex w-full">
            <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-400 w-full">
              <h2
                className={`p-1 ${
                  page === "stocks" &&
                  `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setPage("stocks")}
              >
                Stocks
              </h2>
              <h2
                className={`p-1 ${
                  page === "grn" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("grn")}
              >
                GRN
              </h2>
              <h2
                className={`p-1 ${
                  page === "gdn" &&
                  "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("gdn")}
              >
                GDN
              </h2>
            </div>
          </div>
          <div>
          </div>
        </div>

        {page === "stocks" && (
          <>
            <div className="flex md:flex-row flex-col justify-between items-center my-2 gap-2  ">
              <input
                type="text"
                placeholder="Search By Stock name"
                className="border-2 p-2 md:w-96 border-gray-300 rounded-lg placeholder:text-sm"
              />
              <div className="md:flex grid grid-cols-2 sm:flex-row my-2 flex-col gap-2">
                <Link
                  to={"/school-management/add-inventory"}
                  className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
                >
                  <IoAddCircleOutline size={20} />
                  Add
                </Link>
              </div>
            </div>
            <Table columns={columns} data={data} />
          </>
        )}
        {page === "grn" && <GRN />}
        {page === "gdn" && <GDN />}
      </div>
    </section>
  );
};

export default Inventory