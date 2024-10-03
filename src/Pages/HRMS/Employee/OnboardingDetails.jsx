import React, { useEffect, useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import profile from "/profile1.jpg";
import ReactApexChart from "react-apexcharts";
import { BsEye } from "react-icons/bs";
import profileFile from "/profile_file.png";
import survey from "/survey.png";
import { BiDotsHorizontalRounded, BiMenuAltLeft } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import company_video from "/company_video.png";
import letter from "/letter.png";
import { FaDownload, FaInfoCircle } from "react-icons/fa";
import success from "/success.png";
function OnboardingDetails() {
  const [addCheckList, setAddCheckList] = useState(false);
  const [checklistDetails, setCheckListDetails] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [resource, setResource] = useState(false);
  // State to hold tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task field
  const addTask = () => {
    setTasks([...tasks, ""]); // Add a new empty task
  };

  // Function to remove a task field by index
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); // Update the state with the new tasks array
  };

  // Function to handle task input changes
  const handleTaskChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index] = value; // Update the specific task
    setTasks(newTasks); // Update the state
  };

  const ApexOptions = {
    chart: {
      height: 250,
      type: "radialBar",
    },
    series: [40],
    colors: ["#4ade80"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "13px",
          },
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
            offsetY: 5,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#4ade80"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Profile Completion"],
  };

  const progress = 50;

  const [resignation, setResignation] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setResignation(!resignation);
  };

  const [offerLetter, setOfferLetter] = useState(false);
  const [appraisalLetter1, setAppraisalLetter1] = useState(false);
  const [appraisalLetter2, setAppraisalLetter2] = useState(false);


  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Onboarding Summary</h1>
          </div>
          <p className="mx-5">A dashboard for new onboarded employees.</p>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5 ml-20">
          <div className="col-span-4 ml-5">
            <div className="bg-white rounded-md p-3 my-3 mx-2">
              <div className="flex gap-3 my-3">
                <img src={profile} className="h-14 w-14 rounded-full"></img>
                <h2 className="text-lg text-gray-800 flex items-center">
                  Riya Singh
                </h2>
              </div>
              <div className="my-5 space-y-1">
                <span className="flex gap-2">
                  <h2 className="font-medium">Designation: </h2>
                  <p>Software Developer</p>
                </span>
                <span className="flex gap-2">
                  <h2 className="font-medium">Branch Location: </h2>
                  <p>Delhi; Delhi NCR; Delhi</p>
                </span>
                <span className="flex gap-2">
                  <h2 className="font-medium">Joining Date: </h2>
                  <p>01-04-2019</p>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md p-3 my-3 mx-2">
              <div className="donut-chart">
                <ReactApexChart
                  options={ApexOptions}
                  series={[40]}
                  type="radialBar"
                  height={250}
                />
              </div>
              <div className="my-5 space-y-1">
                <span className="flex gap-2">
                  <h2 className="font-medium">Profile: </h2>
                  <p>Onboarding Completion</p>
                </span>
                <span className="flex gap-2">
                  <h2 className="font-medium">Added On: </h2>
                  <p>01-06-2020</p>
                </span>
                <span className="flex gap-2">
                  <h2 className="font-medium">Invite Sent On: </h2>
                  <p>01-10-2024</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-8 my-3 rounded-md">
            <div className="my-2">
              <h2 className="flex items-center text-gray-800 text-xl font-medium">
                Onboarding Forms/ Survey
              </h2>
            </div>
            <div className="bg-white rounded-md py-5 px-5">
              <div className="flex flex-wrap gap-5">
                <div className="bg-gray-100 rounded-md w-60 h-48 space-y-5 py-3">
                  <span className="flex justify-center">
                    <img
                      src={profileFile}
                      className="w-16 h-16 rounded-full"
                    ></img>
                  </span>
                  <h2 className="font-medium text-center">Employee Profile</h2>
                  <div className="flex justify-center">
                    <Link
                      to={`/hrms/employee-directory/personal`}
                      className="flex justify-center bg-white shadow-2xl p-2 w-10 rounded-full"
                    >
                      <BsEye />
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md w-60 h-48 space-y-5 py-3">
                  <span className="flex justify-center">
                    <img src={survey} className="w-16 h-16 rounded-full"></img>
                  </span>
                  <h2 className="font-medium text-center">Onboarding Survey</h2>
                  <div className="flex justify-center">
                    <button className="flex justify-center bg-gray-400 p-1 px-5 rounded-md text-white">
                      Pending
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t my-5 py-5">
                <div className="flex gap-2 my-2 items-center">
                  <span>
                    <BiMenuAltLeft size={20} />
                  </span>
                  <h2 className="text-lg font-medium">Checklist</h2>
                </div>
                <div className="bg-gray-100 rounded-md w-60 h-48 space-y-5 py-3">
                  <div className="flex justify-center">
                    <button
                      className="my-2"
                      onClick={() => setAddCheckList(!addCheckList)}
                    >
                      <GoPlusCircle className="w-16 h-16 rounded-full text-gray-400" />
                    </button>
                  </div>
                  <h2 className="font-medium text-center">Add Checklist</h2>
                </div>
              </div>
              <div className="border-t my-5 py-5">
                <div className="flex gap-2 my-2 items-center">
                  <span>
                    <BiMenuAltLeft size={20} />
                  </span>
                  <h2 className="text-lg font-medium">Induction Resources</h2>
                </div>
                <div className="bg-gray-100 rounded-md w-60 h-48 space-y-5 py-3">
                  <div className="flex justify-center">
                    <button
                      className="my-2"
                      onClick={() => setResource(!resource)}
                    >
                      <GoPlusCircle className="w-16 h-16 rounded-full text-gray-400" />
                    </button>
                  </div>
                  <h2 className="font-medium text-center">Add Resource</h2>
                </div>
              </div>
              <div className="border-t my-5 py-5">
                <div className="flex justify-between">
                  <div className="flex gap-2 my-2 items-center">
                    <span>
                      <BiMenuAltLeft size={20} />
                    </span>
                    <h2 className="text-lg font-medium">Letters</h2>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-60 bg-gray-200 rounded-full h-4 my-3 relative">
                      <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-300 relative"
                        style={{ width: `${progress}%` }}
                      >
                        <span className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold">
                          {progress}%
                        </span>
                      </div>
                    </div>
                    <p className="mt-1">Completed: 2/4</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5 my-2">
                  <div className="bg-gray-100 rounded-md w-60 h-60 space-y-5 py-3 col-span-4">
                    <div className="flex justify-center">
                      <Link to={'/hrms/letter-template-creation'}
                        className="my-2"
                        onClick={() => setResource(!resource)}
                      >
                        <GoPlusCircle className="w-16 h-16 rounded-full text-gray-400" />
                      </Link>
                    </div>
                    <h2 className="font-medium text-center">Add Letters</h2>
                  </div>
                  <div className="bg-gray-100 rounded-md w-60 h-60 space-y-5 col-span-4">
                    <div className="flex justify-end px-2">
                      <button className="flex j" onClick={toggleDropdown}>
                        <BiDotsHorizontalRounded size={20} />
                        {resignation && (
                          <div className="relative">
                            <div className="absolute right-0  mt-4 w-28 bg-white rounded-md shadow-lg z-10">
                              <ul className="py-1">
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Remove
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="my-2">
                        <img
                          src={letter}
                          className="w-16 h-16 rounded-full text-gray-400"
                        />
                      </div>
                    </div>
                    <h2 className="font-medium text-center">Resignation</h2>
                    <div className="flex justify-center">
                      <button className="flex justify-center border border-yellow-400  py-1 px-5 rounded-md text-yellow-500 items-center gap-1">
                        <FaInfoCircle /> Approved
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-md w-60 h-60 space-y-5 col-span-4">
                    <div className="flex justify-end px-2">
                      <button
                        className="flex j"
                        onClick={() => setOfferLetter(!offerLetter)}
                      >
                        <BiDotsHorizontalRounded size={20} />
                        {offerLetter && (
                          <div className="relative">
                            <div className="absolute right-0  mt-4 w-28 bg-white rounded-md shadow-lg z-10">
                              <ul className="py-1">
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Remove
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="my-2">
                        <img
                          src={letter}
                          className="w-16 h-16 rounded-full text-gray-400"
                        />
                      </div>
                    </div>
                    <h2 className="font-medium text-center">Offer letter</h2>
                    <div className="flex justify-center">
                      <button className="flex justify-center border border-yellow-400  py-1 px-5 rounded-md text-yellow-500 items-center gap-1">
                        <FaInfoCircle /> Approved
                      </button>
                    </div>
                  </div>
                  <div className="bg-green-200 rounded-md w-60 h-60 space-y-5 col-span-4">
                    <div className="flex justify-end px-2">
                      <button
                        className="flex j"
                        onClick={() => setAppraisalLetter1(!appraisalLetter1)}
                      >
                        <BiDotsHorizontalRounded size={20} />
                        {appraisalLetter1 && (
                          <div className="relative">
                            <div className="absolute right-0  mt-4 w-40 bg-white rounded-md shadow-lg z-10">
                              <ul className="py-1">
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Remove
                                </li>
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Publish Letter
                                </li>
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Mail Letter
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex justify-center">
                        <div className="my-2">
                          <img
                            src={success}
                            className="w-16 h-16 rounded-full text-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-medium text-center">
                      Appraisal Letter (A...)
                    </h2>
                    <div className="flex justify-center gap-2">
                      <button className="border border-red-400 text-red-500 rounded-md p-2 ">
                        <FaDownload />
                      </button>
                      <button className="border border-green-400  py-1 px-5 rounded-md text-green-500 items-center gap-1">
                        Completed
                      </button>
                    </div>
                  </div>
                  <div className="bg-green-200 rounded-md w-60 h-60 space-y-5 col-span-4">
                    <div className="flex justify-end px-2">
                      <button
                        className="flex j"
                        onClick={() => setAppraisalLetter2(!appraisalLetter2)}
                      >
                        <BiDotsHorizontalRounded size={20} />
                        {appraisalLetter2 && (
                          <div className="relative">
                            <div className="absolute right-0  mt-4 w-40 bg-white rounded-md shadow-lg z-10">
                              <ul className="py-1">
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Remove
                                </li>
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Publish Letter
                                </li>
                                <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                                  Mail Letter
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex justify-center">
                        <div className="my-2">
                          <img
                            src={success}
                            className="w-16 h-16 rounded-full text-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-medium text-center">
                      Appraisal Letter (A...)
                    </h2>
                    <div className="flex justify-center gap-2">
                      <button className="border border-red-400 text-red-500 rounded-md p-2 ">
                        <FaDownload />
                      </button>
                      <button className="border border-green-400  py-1 px-5 rounded-md text-green-500 items-center gap-1">
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addCheckList && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-72 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setAddCheckList(!addCheckList)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Select Method to Add Tasks
              </h2>
            </div>
            <div className="px-5 py-5">
              <label className="block font-medium text-gray-600 text-base my-3">
                Please select how you want to Add Tasks:
              </label>
              <div>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="name"
                    className="mr-1"
                    onClick={() => setCheckListDetails(!checklistDetails)}
                  />
                  Select Checklist
                </label>
                <label className="text-gray-700">
                  <input
                    type="radio"
                    name="name"
                    className="mr-1"
                    onClick={() => setTaskModal(!taskModal)}
                  />
                  Select Tasks
                </label>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setAddCheckList(!addCheckList)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {resource && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-72 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setResource(!resource)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Add Resource
              </h2>
            </div>
            <div className="px-5 py-3">
              <p>Select Resources:</p>
              <div className="flex items-center gap-4 my-3">
                <div>
                  <input type="checkbox"></input>
                </div>
                <div>
                  <img
                    src={company_video}
                    className="h-14 w-14 rounded-full bg-gray-100"
                  ></img>
                </div>
                <div>
                  <h2 className="font-medium text-lg">Induction</h2>
                  <h2>Acknowledgement Required</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setResource(!resource)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {checklistDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-60 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setCheckListDetails(!checklistDetails)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Add Checklist
              </h2>
            </div>
            <div className="px-5 py-5">
              <select
                name=""
                className="border-b border-gray-500 focus:outline-none w-full my-3"
              >
                <option value="">
                  Please select Onboarding Checklist Template:
                </option>
                <option value="">Select a template</option>
                <option value="">Onboarding Checklist Template</option>
              </select>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setCheckListDetails(!checklistDetails)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {taskModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/3 h-3/5 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() => setTaskModal(!taskModal)}
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                Add New Tasks
              </h2>
            </div>
            <div className="px-5 py-5">
              <h2 className="text-gray-600 font-medium text-lg">
                Please select tasks:
              </h2>
              <div className="flex gap-5 justify-around my-3">
                <p className="text-center">Task *</p>
                <p className="text-center">Assigned To *</p>
                <p className="text-center">Due Date (Upto 180 days) *</p>
              </div>
            </div>
            <div className="border-b border-t">
              <div className="flex gap-5 justify-between mx-5">
                <select
                  name=""
                  className="border-b border-gray-500 focus:outline-none w-60 my-3"
                >
                  <option value="">Select Task</option>
                  <option value="">Get Employee Referral</option>
                  <option value="">Create Email ID</option>
                  <option value="">Create workspace for the Joinee</option>
                  <option value="">Create the Sales Strategy </option>
                  <option value="">Provide Laptop</option>
                  <option value="">Release Welcome Kit</option>
                  <option value="">Arrange Safety Drive in Factory</option>
                  <option value="">onboarding</option>
                  <option value="">Retrieve data</option>
                  <option value="">Test dummy </option>
                  <option value="">Test</option>
                </select>
                <input
                  type="text"
                  className="border-b border-gray-500 focus:outline-none w-60 my-3"
                  placeholder="Enter Employee Name"
                />
                <div className="flex gap-3 mr-5">
                  <input
                    type="text"
                    className="border-b border-gray-500 focus:outline-none w-full my-3"
                    placeholder="Enter Days"
                  ></input>
                  <select
                    name=""
                    className="border-b border-gray-500 focus:outline-none w-full my-3"
                  >
                    <option value="">Before</option>
                    <option value="">On</option>
                    <option value="">After</option>
                  </select>
                  <select
                    name=""
                    className="border-b border-gray-500 focus:outline-none w-full my-3"
                  >
                    <option value="">Joining Date</option>
                    <option value="">Confirmation Due Date</option>
                  </select>
                </div>
              </div>
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center my-2 ">
                  <div className="flex gap-5 justify-between  px-5">
                    <select
                      name=""
                      className="border-b border-gray-500 focus:outline-none w-60 my-3"
                    >
                      <option value="">Select Task</option>
                      <option value="">Get Employee Referral</option>
                      <option value="">Create Email ID</option>
                      <option value="">Create workspace for the Joinee</option>
                      <option value="">Create the Sales Strategy </option>
                      <option value="">Provide Laptop</option>
                      <option value="">Release Welcome Kit</option>
                      <option value="">Arrange Safety Drive in Factory</option>
                      <option value="">onboarding</option>
                      <option value="">Retrieve data</option>
                      <option value="">Test dummy </option>
                      <option value="">Test</option>
                    </select>
                    <input
                      type="text"
                      className="border-b border-gray-500 focus:outline-none w-60 my-3"
                      placeholder="Enter Employee Name"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        className="border-b border-gray-500 focus:outline-none w-full my-3"
                        placeholder="Enter Days"
                      ></input>
                      <select
                        name=""
                        className="border-b border-gray-500 focus:outline-none w-full my-3"
                      >
                        <option value="">Before</option>
                        <option value="">On</option>
                        <option value="">After</option>
                      </select>
                      <select
                        name=""
                        className="border-b border-gray-500 focus:outline-none w-full my-3"
                      >
                        <option value="">Joining Date</option>
                        <option value="">Confirmation Due Date</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="text-red-500 mr-2"
                    onClick={() => removeTask(index)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ))}
            </div>
            <div className="mx-5">
              <button
                className="border-b border-red-500 text-red-500"
                onClick={addTask}
              >
                + Add Task
              </button>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="px-4 py-1 border border-gray-500 text-gray-500 rounded hover:bg-gray-100"
                onClick={() => setTaskModal(!taskModal)}
              >
                Cancel
              </button>
              <button className="px-4 py-1 bg-gray-500  rounded hover:bg-gray-600 text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OnboardingDetails;
