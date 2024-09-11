import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import ItemsModal from "./ItemsModal";

const TicketDetails = () => {
    const [itemModal, setItemModal] = useState(false);
  const ItemColumn = [
    { name: "Name", selector: (row) => row.item_name, sortable: true },
    { name: "Rate", selector: (row) => row.rate, sortable: true },
  ];
  const itemData = [
    {
      item_name: "Laptop",
      rate: "₹1200",
    },
    {
      item_name: "Mobile Phone",
      rate: "₹800",
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-end m-1 gap-2 mx-12 my-2">
            <button
            onClick={() => setItemModal(true)}
              className="border-2 border-black  flex gap-2 p-1 rounded-md items-center px-4"
            >
              <MdAddCircleOutline />
              Add Items
            </button>
            <Link
              to={`/school-management/edit-ticket`}
              className="border-2 border-black flex gap-2 p-1 rounded-md items-center px-4 "
            >
              <BiEdit size={20} />
              Edit
            </Link>
          </div>
          <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md text-black mx-12 my-3">
            Ticket Details
          </h2>
          <div className="bg-white mx-12 rounded-md my-2">
            <div className="p-8 flex flex-col gap-5">
              <div className="w-full border border-gray-500 rounded-md py-1">
                <p className="font-semibold text-center">Test 1</p>
              </div>
              <div className="grid grid-cols-3 gap-y-5 gap-x-10">
                <div className="grid grid-cols-2 gap-2 items-center w-full">
                  <p className="font-semibold ">Site Owner :</p>
                  <p></p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Ticket No.:</p>
                  <p>10660</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Status :</p>
                  <p>Pending</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Site :</p>
                  <p>Nyati Unitree</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Issue Type :</p>
                  <p>Complaint</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Assigned To :</p>
                  <p>Akshay Nyati</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Building Name :</p>
                  <p>East Building</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Category :</p>
                  <p>Plumbing</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Priority :</p>
                  <p> P1</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Floor Name :</p>
                  <p>5th Floor</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Sub category :</p>
                  <p></p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Related To :</p>
                  <p></p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Unit :</p>
                  <p>room 5</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Total time :</p>
                  <p>12 days ago</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Created By :</p>
                  <p>Akshay Nyati</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Created On :</p>
                  <p> 8/29/2024, 9:28:47 AM</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Updated On :</p>
                  <p>8/29/2024, 9:29:23 AM</p>
                </div>
                <div className="grid grid-cols-2  items-center w-full">
                  <p className="font-semibold ">Rating :</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col flex-wrap gap-2 bg-white mx-12 py-5 my-2 rounded-md">
              <h2 className="text-center  text-black font-semibold mt-5 text-lg p-2 px-4 ">
                Additional Info
              </h2>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Description :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md">Test 2</p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Impact :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Root Cause :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md "></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Corrective Action :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Proactive/Reactive :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md">Reactive</p>
              </div>
              <div className="px-4 flex flex-col gap-1 justify-center">
                <p className="font-medium">Correction :</p>
                <p className="text-wrap bg-gray-200 p-2 rounded-md"></p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md mx-12 my-2">
            <h2 className="text-black font-semibold my-1 text-lg p-2 px-4">
              Approval Requests
            </h2>
            <Table columns={ItemColumn} data={itemData} />
          </div>
          <div className="bg-white mx-12 my-2 rounded-md">
            <h2 className="text-black font-semibold my-1 text-lg p-2 px-4 ">
              Attachments
            </h2>
            <div className="flex sm:flex-row flex-col items-center ">
              <div className="flex justify-start p-4">
                {/* <a href="" target="_blank" className="inline-block w-40">
                  <img
                    src=""
                    alt={`Attachment`}
                    className="w-40 h-40 object-cover rounded-md"
                  />
                </a> */}
              </div>
            </div>
          </div>
          <div className="bg-white mx-12 my-2 rounded-md">
            <h2 className=" text-black font-semibold my-1 text-lg p-2 px-4 ">
              Logs
            </h2>
            <div className="md:flex  justify-center ">
              <ol className="relative  border-gray-200 w-full">
                <li className="mb-6 sm:mb-10 md:ms-6">
                  <div className="items-center justify-between p-4  border border-gray-200 rounded-lg shadow-sm sm:flex mr-8  dark:border-gray-600">
                    <time className="mb-1 text-xs font-normal text-gray-900 sm:order-last sm:mb-0">
                      12 sep, 2024
                    </time>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                        Priority :
                        <a
                          href="#"
                          className="font-semibold text-gray-900 dark:text-gray hover:underline"
                        >
                          abc
                        </a>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                        Comment :
                        <a
                          href="#"
                          className="font-semibold text-gray-900 dark:text-gray hover:underline"
                        >
                          axb
                        </a>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray mb-5">
                        Status:
                        <a
                          href="#"
                          className="font-semibold text-gray-900 dark:text-gray hover:underline"
                        >
                          pending
                        </a>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-medium text-black">Log By:</p>
                        <p className="font-medium text-black">abc</p>
                      </div>
                      {/* <div
                                className="flex justify-start p-4"
                              >
                                <a
                                  href=''
                                  target="_blank"
                                >
                                  <img
                                    src={domainPrefix + doc.document}
                                    alt={`Attachment ${index}`}
                                    className="w-40 h-40 object-cover rounded-md"
                                  />
                                </a>
                        </div> */}
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white mx-12 my-2 rounded-md">
            <h2 className="text-black font-semibold my-1 text-lg p-2 px-4 ">
              Escalations
            </h2>
            {/* <div className="px-4 mb-10">
              {ticketinfo.escalations &&
                ticketinfo.escalations.map((esclate) => (
                  <div
                    className="md:flex rounded-md justify-between border p-4 border-black mb-5"
                    key={esclate.id}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-2 gap-x-5 items-center">
                        <p className="font-semibold">Esclation Level :</p>
                        <p>{esclate.level}</p>
                      </div>
                      <div className="grid grid-cols-2 items-center">
                        <p className="font-semibold">Esclated To :</p>
                        <p>{esclate.esc_to}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-sm mt-5 sm:mt-0 font-semibold text-gray-500">
                        {dateFormat(esclate.esc_on)}
                      </p>
                    </div>
                  </div>
                ))}
            </div> */}
          </div>
        </div>
        {itemModal && (
          <ItemsModal onclose={() => setItemModal(false)} />
        )}
      </div>
    </section>
  );
};

export default TicketDetails;
