import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdRefresh, IoMdStarOutline } from "react-icons/io";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { BsEye } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import { FaRegAddressCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
function PerformanceAssessmentViewAllSubmissions() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("competencyEvaluation");

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Submitted By",
      selector: (row) => row.submitted_by,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2" onClick={handleOpen}>
            <BsEye size={15} />
          </button>
          <button className="border p-2">
            <IoMdRefresh size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Salome Kulangara",
      submitted_by: "Salome Kul...",
      rating: "3.25",
      status: "Completed",
    },
  ];

  const reviewerRatingColumns = [
    {
      name: "Assessor Name",
      selector: (row) => row.assessor_name,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Assessor Weightage",
      selector: (row) => row.assessor_weightage,
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button>
            <BsEye size={15} />
          </button>
        </div>
      ),
    },
  ];
  const reviewerRatingData = [
    {
      id: 1,
      assessor_name: "Salome Kulan...",
      rating: "3.25",
      assessor_weightage: "100 %",
      submitted_on: "09-08-2024",
      status: "Completed",
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
            <h1 className="text-3xl font-bold">Tuzar | APC</h1>
          </div>
          <p className="mx-10 my-2">Assessment 1</p>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 ml-24">
        <div className="my-3 col-span-12 rounded-md bg-white">
          <div className="flex justify-between p-5 border-b border-gray-400 mx-2 py-3">
            <h2>Employee Assessment 1 Submission</h2>
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
        <div className="col-span-12 my-3 rounded-md ">
          {isOpen && (
            <div>
              <div className="bg-white rounded-md my-5">
                <div className="grid grid-cols-3">
                  <div className="flex p-5 gap-2 whitespace-nowrap">
                    <img
                      src="/profile1.jpg"
                      className="w-16 h-16 rounded-full"
                    ></img>
                    <h2 className="flex items-center">Salome Kulangara</h2>
                  </div>
                  <div className="space-y-2 my-5">
                    <div className="flex items-center gap-2">
                      <LiaUserCircle className="h-6 w-6" />
                      <p className="text-gray-600">
                        Designation: President of Indian National Congress
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <FaRegAddressCard className="h-6 w-6" />
                      <p className="text-gray-600">Department: Marketing</p>
                    </div>
                  </div>
                  <div className="space-y-2 my-5">
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="h-5 w-5" />
                      <p className="text-gray-600">Location:</p>
                    </div>
                    <div className="flex gap-2 ">
                      <LiaUserCircle className="h-6 w-6" />
                      <p className="text-gray-600 ">Supervisor:</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div className="flex w-full">
                  <div className=" flex gap-2 border-b border-gray-400 w-full my-3">
                    <h2
                      className={`p-1 ${
                        page === "competencyEvaluation" &&
                        `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                      } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                      onClick={() => setPage("competencyEvaluation")}
                    >
                      Competency Evaluation
                    </h2>
                    <h2
                      className={`p-1 ${
                        page === "reviewerRating" &&
                        "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                      } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                      onClick={() => setPage("reviewerRating")}
                    >
                      Reviewer Rating
                    </h2>
                  </div>
                </div>
                {page === "competencyEvaluation" && (
                  <div className="my-5 bg-white rounded-md p-5">
                    <h2 className="text-lg font-medium">Recruitment</h2>
                    <div>
                      <div className="flex justify-between">
                        <h2 className="text-gray-500">
                          Responsible for strategic planning
                        </h2>
                        <p>25%</p>
                      </div>
                      <div className="bg-gray-100 rounded-md p-5 my-5 space-y-5">
                        <h2 className="font-medium">
                          Self Rating | Salome Kulangara
                        </h2>
                        <div className="flex gap-10 items-center">
                          <p className="text-sm">Rating</p>
                          <span className="flex gap-1">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoMdStarOutline />
                          </span>
                        </div>
                        <p className="text-sm">Comment:</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="text-gray-500">
                        Stakeholder & vendor management
                      </h2>
                      <p>25%</p>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 my-5 space-y-5">
                      <h2 className="font-medium">
                      Self Rating | Salome Kulangara
                      </h2>
                      <div className="flex gap-10 items-center">
                        <p className="text-sm">Rating</p>
                        <span className="flex gap-1">
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </span>
                      </div>
                      <p className="text-sm">Comment:</p>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="text-gray-500">
                        Positive candidate experience
                      </h2>
                      <p>25%</p>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 my-5 space-y-5">
                      <h2 className="font-medium">
                        Self Rating | Salome Kulangara
                      </h2>
                      <div className="flex gap-10 items-center">
                        <p className="text-sm">Rating</p>
                        <span className="flex gap-1">
                          <IoStar />
                          <IoStar />
                          <IoStar />
                          <IoStar />
                        </span>
                      </div>
                      <p className="text-sm">Comment:</p>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="text-gray-500">Employee induction</h2>
                      <p>25%</p>
                    </div>
                    <div className="bg-gray-100 rounded-md p-5 my-5 space-y-5">
                      <h2 className="font-medium">
                        Self Rating | Salome Kulangara
                      </h2>
                      <div className="flex gap-10 items-center">
                        <p className="text-sm">Rating</p>
                        <span className="flex gap-1">
                          <IoStar />
                          <IoStar />
                          <IoMdStarOutline />
                          <IoMdStarOutline />
                        </span>
                      </div>
                      <p className="text-sm">Comment:</p>
                    </div>
                  </div>
                )}
                {page === "reviewerRating" && (
                  <div className="my-5">
                    <Table
                      columns={reviewerRatingColumns}
                      data={reviewerRatingData}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PerformanceAssessmentViewAllSubmissions;
