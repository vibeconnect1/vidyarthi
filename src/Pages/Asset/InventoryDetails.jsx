import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import InstituteDetails from "../School management/InstituteDetails";

const InventoryDetails = () => {
  // Hardcoded inventory data
  const inventory = {
    id: 1,
    name: "Item Name",
    rate: "100",
    available_quantity: "50",
    group: "Electronics",
    sub_group: "Laptops",
    min_stock_level: "10",
    max_stock_level: "100",
    description: "This is a description of the item."
  };

  return (
    <section className="flex">
        <InstituteDetails/>
      <div className="flex flex-col w-full overflow-hidden">
        <h2 className="text-center text-xl font-bold p-2 my-2 mx-12 rounded-md text-black bg-white">
          Stock Details
        </h2>
        <div className="flex justify-end my-2">
          {/* <Link
            to={`/school-management/edit-inventory/${inventory.id}`}
            className="p-1 px-4 rounded-full justify-center flex items-center gap-2 border-2 border-black"
          >
            <BiEdit size={15} />
            Edit
          </Link> */}
        </div>
        <div className="md:mx-12 my-5 mb-10  p-5 px-10 rounded-lg bg-white">
          <div className="flex flex-col justify-around">
            <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-5 w-full">
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="name"
                  value={inventory.name}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="rate"
                  value={inventory.rate}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="available_quantity"
                  value={inventory.available_quantity}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="group"
                  value={inventory.group}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="sub_group"
                  value={inventory.sub_group}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="min_stock_level"
                  value={inventory.min_stock_level}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  readOnly
                  type="text"
                  name="max_stock_level"
                  value={inventory.max_stock_level}
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col my-2">
              <textarea
                readOnly
                name="description"
                value={inventory.description}
                className="border-b border-gray-500 focus:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryDetails;
