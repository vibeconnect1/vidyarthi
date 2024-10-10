import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
function PerformanceFinalRecommendationViewAll() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Overall Rating	",
      selector: (row) => row.overall_rating	,
      sortable: true,
    },
    {
        name: "Final Rating	",
        selector: (row) => row.final_rating		,
        sortable: true,
      },
      {
        name: "Submitted By",
        selector: (row) => row.submitted_by	,
        sortable: true,
      },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          {/* <button className="border p-2">
            <BsEye size={15} />
          </button> */}
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Salome Kulan...",
      overall_rating: "3.25",
      final_rating: "-",
      submitted_by: "-",
    },
  ];

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">
              Final Recommendation for Tuzar | APC
            </h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
        <div className="col-span-7 my-3 rounded-md bg-white">
          <div className="flex justify-between p-5 border-b border-gray-400 mx-2 py-3">
            <h2>Final Recommendations</h2>
            <div className="md:flex justify-end gap-2 mb-1">
              <div>
                <input
                  type="text"
                  placeholder="Search by Employee Name or Code"
                  className="border border-gray-500 py-2 px-2 text-black rounded-xl w-full  md:w-96"
                />
              </div>
              <button className="bg-white rounded-full h-10 w-10">
                <span className="flex justify-center items-center text-black">
                  <img src={filter} alt="filter-icon" />
                </span>
              </button>
            </div>
          </div>
          <div className="my-2">
            <Table columns={columns} data={data} selectableRows={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceFinalRecommendationViewAll;
