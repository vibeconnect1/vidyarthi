import React, { useState } from "react";
import { IoAddCircleOutline, IoClose, IoTimeOutline } from "react-icons/io5";
import { MdEdit, MdOutlineCurrencyRupee, MdOutlineEmail } from "react-icons/md";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import { CiCalendar, CiFlag1 } from "react-icons/ci";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { LuPieChart } from "react-icons/lu";
import { BsDatabaseDash } from "react-icons/bs";
import ReactApexChart from "react-apexcharts";
import { FaCheck } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import Switch from "../../ConfigurationFile/Switch";
function ProjectOverview() {
  const [overview, setOverview] = useState(false);
  const [budget, setBudget] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [createTask, setCreateTask] = useState("selfTask");
  const [repeat, setRepeat] = useState(false);
  const handleSwitchChange = (event) => {
    setRepeat(event.target.checked);
  };
  const EditModal = () => {
    setOverview(true);
  };
  const closeModal = () => {
    setOverview(false);
  };
  const CreateModal = () => {
    setCreateModal(true);
  };
  const closeCreateModal = () => {
    setCreateModal(false);
  };

  const workloadData = [
    {
      member: "Riya",
      task: "Design a Geeks UI Figma",
      sectionTitel :"New section",
      deadline: "30 Jul, 2024",
      workload: 50,
      profile: profile1,
    },
    {
      member: "Kavita",
      task: "Develop UI components",
      deadline: "15 Aug, 2024",
      workload: 75,
      profile: profile2,
    },
    {
      member: "Karan",
      task: "Write documentation",
      deadline: "22 Aug, 2024",
      workload: 30,
      profile: profile3,
    },
  ];

  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            formatter: function (val) {
              return parseInt(val) + "%";
            },
            color: "#111",
            fontSize: "36px",
            show: true,
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
        gradientToColors: ["#f59e0b"], // yellow-500 color
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: ["#8b5cf6"], // violet-500 color
    labels: ["Progress"], // This is just for completeness, won't be displayed
  };

  const series = [75];
  return (
    <div className="md:grid lg:grid-cols-3 mx-5 gap-5">
      <div className="col-span-1 lg:col-span-2 mb-10">
        <div className=" bg-white rounded-md py-4">
          <div className="flex justify-between px-5">
            <p className="text-lg font-semibold text-slate-800">
              Project Summary
            </p>
            <button
              className={`relative ${"hover:bg-gray-200 rounded-full p-3"}`}
              onClick={EditModal}
            >
              <MdEdit size={20} />
            </button>
            {overview && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-5 rounded-lg shadow-lg md:w-2/5 relative max-h[80%] overflow-y-auto">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <IoClose size={24} />
                  </button>
                  <div className="mx-5 my-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-500 text-center py-4">
                      Edit Project Summary
                    </h2>
                    <div className="grid lg:grid-cols-2 lg:gap-5">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                          Start Date
                        </label>
                        <input
                          type="date"
                          placeholder="Start Date"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                          End Date
                        </label>
                        <input
                          type="date"
                          placeholder="End Date"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2 lg:gap-5">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                          Estimate Time (hours)
                        </label>
                        <input
                          type="number"
                          placeholder="Estimate Time (hours)"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                          Cost
                        </label>
                        <input
                          type="number"
                          placeholder="Cost"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">
                          Description
                        </label>
                        <textarea
                          placeholder="Description"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded-md w-full"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-gray-400 mt-2 mb-5"></div>
          <div className="px-5 pb-5">
            <p className="text-base text-gray-500">
              Give a high-level overview of the product / project you re working
              on, its goals, etc..Elaborate on the target audience of your
              project/product, link out to additional resources. Vivamus pretium
              laoreet massa eu euismod. Nunc accumsan id odio sed luctus.
              Suspendisse a lacus sed ex consequat interdum quis non eros. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore
              nam fuga sapiente vel iste animiicta ab at placeat sint.
            </p>
          </div>
          <div className="border-b border-thin mt-3 flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <CiCalendar className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-semibold text-base">
                Start Date
              </p>
            </div>
            <p className="font-semibold text-sm text-gray-800">22 July 2024</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <CiCalendar className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-medium text-base">End Date</p>
            </div>
            <p className="font-semibold text-sm text-gray-800">22 Aug 2024</p>
          </div>
          <div className="border-b border-thin flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <IoTimeOutline className="mt-1 text-violet-800" size={20} />
              <p className="text-gray-500 font-medium text-base">
                Estimate Time
              </p>
            </div>
            <p className="font-semibold text-sm text-gray-800">30 Days</p>
          </div>
          {/* <div className="flex justify-between py-3 mx-5">
            <div className="flex gap-2">
              <MdOutlineCurrencyRupee
                className="mt-1 text-violet-800"
                size={20}
              />
              <p className="text-gray-500 font-medium text-base">Cost</p>
            </div>
            <p className="font-semibold text-base text-gray-800">₹ 50,000</p>
          </div> */}
        </div>
        {/* <div className="shadow-custom-all-sides rounded-md  my-5">
          <div className="flex justify-between mx-5 py-3">
            <h2 className="text-lg font-semibold  text-slate-800">Budget</h2>
            <button
              className={`relative ${"hover:bg-gray-200 rounded-full p-2"}`}
              onClick={() => setBudget(!budget)}
            >
              <MdEdit size={20} />
            </button>
            {budget && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z">
                <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative h-68 overflow-y-auto">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setBudget(false)}
                  >
                    <IoClose size={24} />
                  </button>
                  <div className="mx-5 my-5">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Budget
                    </h2>
                    <div className="grid grid-cols-1 my-2">
                      <div>
                        <label
                          htmlFor="total-budget"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Total Budget
                        </label>
                        <input
                          id="total-budget"
                          type="number"
                          placeholder="Enter total budget"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="total-spent"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Total Spent
                        </label>
                        <input
                          id="total-spent"
                          type="number"
                          placeholder="Enter total spent"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded-md w-full"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 border-t border-gray-300">
            <div className="flex justify-between gap-5 items-center p-5 px-10">
              <div>
                <h2 className="text-3xl font-semibold mb-2">₹ 50,000</h2>
                <p className="text-base text-gray-700 ml-2">Total Budget</p>
              </div>
              <div className="bg-violet-100 rounded-full p-3">
                <MdOutlineCurrencyRupee
                  className="items-center text-violet-400"
                  size={30}
                />
              </div>
            </div>
            <div className="flex justify-between gap-5 items-center p-5 px-10 border-l border-gray-300">
              <div>
                <h2 className="text-3xl font-semibold mb-2">₹ 40,000</h2>
                <p className="text-base text-gray-700 ml-2">Total Spent</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <FiShoppingCart
                  className="items-center text-blue-400"
                  size={30}
                />
              </div>
            </div>
            <div className="flex justify-between gap-5 items-center p-5 px-10 border-l border-t border-gray-300">
              <div>
                <h2 className="text-3xl font-semibold mb-2">₹ 10,000</h2>
                <p className="text-base text-gray-700 ml-2">Remaining</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <LuPieChart className="items-center text-green-400" size={30} />
              </div>
            </div>
            <div className="flex justify-between gap-5 items-center p-5 px-10 border-l border-t border-gray-300">
              <div>
                <h2 className="text-3xl font-semibold mb-2">₹ 0</h2>
                <p className="text-base text-gray-700 ml-2">Over Spent</p>
              </div>
              <div className="bg-red-100 rounded-full p-3">
                <BsDatabaseDash
                  className="items-center text-red-400"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-white rounded-md  my-5">
          <div className="flex md:flex-row flex-col justify-between py-3 mx-5">
            <h2 className="text-lg font-semibold pt-2 text-slate-800">
              Upcoming Deadlines
            </h2>
            <button
              onClick={CreateModal}
              className="border-2 border-gray-400 rounded-md p-1 px-5 flex gap-1 hover:bg-gray-200"
            >
              <IoAddCircleOutline className="mt-1" /> Add
            </button>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full bg-white border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Member
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Task
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Workload
                  </th>
                </tr>
              </thead>
              <tbody>
                {workloadData.map((data, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className="flex gap-2 px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <img
                        src={data.profile}
                        alt="Uploaded"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="my-1 font-medium text-gray-600 whitespace-nowrap">
                        {data.member}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-gray-500">
                      {data.task}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-gray-500">
                      {data.deadline}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between">
                          <div className="w-full">
                            <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-200 mt-2">
                              <div
                                style={{ width: `${data.workload}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-700"
                              ></div>
                            </div>
                          </div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 ml-2">
                            {data.workload}%
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="shadow-custom-all-sides rounded-md bg-violet-500 text-white">
          <h2 className="text-xl font-semibold mx-5 py-2">Launch Date</h2>
          <div className="flex justify-between mx-5 my-3 pb-8">
            <div className="">
              <div className="flex gap-5">
                <h2 className="text-4xl font-semibold">30 Days</h2>
              </div>
              <div className="flex gap-2 mt-2">
                <p className="text-base mx-1 my-1">22 July, 2024</p>
                <p className="text-base mx-1 my-1">22 Aug, 2024</p>
              </div>
              {/* <div className="flex gap-3">
                <h2 className=" mx-1 my-1">Delay Date :</h2>
                <h2 className="text-base mx-1 my-2">20 Aug, 2024</h2>
              </div> */}
            </div>
            <div className="text-6xl">
              <CiFlag1 />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <h2 className="text-lg font-semibold mx-5 py-3 text-slate-800">
            Overall Progress
          </h2>
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={350}
          />
        </div>
        {/* <div className="shadow-custom-all-sides rounded-md mb-5">
          <div className="flex justify-between mx-5 my-3 pt-5 pb-3">
            <h2 className="text-lg font-semibold mx-5 text-slate-800">
              Recent Activity
            </h2>
            <button className="text-violet-500">View All</button>
          </div>
          <div className="border-t border-gray-300 mb-4"></div>
          <div className="flex justify-between mx-8">
            <div className="flex gap-3">
              <div>
                <div className="bg-violet-100 rounded-full p-4 text-violet-600">
                  <FaCheck />
                </div>
                <div className=" border-l border-thin h-10 mx-6"></div>
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  Task Finished
                </h2>
                <p className="text-base text-gray-500">
                  Paula finished figma task
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">2 mins ago</p>
            </div>
          </div>
          <div className="border-l border-gray-400 mx-3"></div>
          <div className="flex justify-between mx-8">
            <div className="flex gap-3">
              <div>
                <div className="bg-violet-100 rounded-full p-4 text-violet-600">
                  <FiMessageSquare />
                </div>
                <div className=" border-l border-thin h-10 mx-6"></div>
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  New Comment
                </h2>
                <p className="text-base text-gray-500">
                  Georg commented on task.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </div>
          </div>
          <div className="flex justify-between mx-8">
            <div className="flex gap-3">
              <div className="flex items-center">
                <div>
                  <div className="bg-violet-100 rounded-full p-4 text-violet-600">
                    <GoAlert />
                  </div>
                  <div className=" border-l border-thin h-10 mx-6"></div>
                </div>
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  Task Overdue
                </h2>
                <p className="text-base text-gray-500">
                  Task
                  <a href="" className="text-violet-500">
                    status updatd for board
                  </a>
                  is overdue.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 text-nowrap">1 Day</p>
            </div>
          </div>
          <div className="flex justify-between mx-8 pb-8">
            <div className="flex gap-3">
              <div>
                <div className="bg-violet-100 rounded-full p-4 text-violet-600">
                  <MdOutlineEmail />
                </div>
                <div className="py-5"></div>
              </div>
              <div>
                <h2 className="text-base font-semibold text-gray-600">
                  Update Send to Client
                </h2>
                <p className="text-base text-gray-500">
                  Jitu send email to update design for client Geeks UI.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 text-nowrap">1 Days</p>
            </div>
          </div>
        </div> */}
      </div>
      {createModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-2/5 relative max-h-[90%] overflow-y-auto hide-scrollbar">
            <button
              onClick={closeCreateModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            <div className="mx-5 my-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Create Task
              </h2>
              <div className="flex gap-5 my-5">
                <button
                  className={`text-gray-600 border-2 p-1 px-5 rounded-md ${
                    createTask === "selfTask"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setCreateTask("selfTask")}
                >
                  Self Task
                </button>
                <button
                  className={`text-gray-600 border-2 p-1 px-5 rounded-md ${
                    createTask === "assignToOthers"
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => setCreateTask("assignToOthers")}
                >
                  Assign to Others
                </button>
              </div>
              <div className="border-t border-gray-300 mb-5"></div>

              {createTask === "selfTask" && (
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Task Topic"
                      className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                    />
                    <input
                      type="date"
                      placeholder="Due Date"
                      className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1">
                      <select
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        placeholder="Assign To"
                      >
                        <option value="">Select Assignee</option>
                        <option value="user1">Karan</option>
                        <option value="user2">Virat</option>
                        <option value="user3">Suraj</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <select
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        placeholder="Dependent Task"
                      >
                        <option value="">Select Dependent Task</option>
                        <option value="task1">Task 1</option>
                        <option value="task2">Task 2</option>
                        <option value="task3">Task 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                      <input
                        type="file"
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                      />
                      <textarea
                        placeholder="Description"
                        className="border-2 p-2 mb-2 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {createTask === "assignToOthers" && (
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Task Topic"
                      className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                    />
                    <input
                      type="date"
                      placeholder="Due Date"
                      className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1">
                      <select
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        placeholder="Assign To"
                      >
                        <option value="">Select Assignee</option>
                        <option value="user1">Karan</option>
                        <option value="user2">Virat</option>
                        <option value="user3">Suraj</option>
                      </select>
                    </div>
                    <div className="col-span-1">
                      <select
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        placeholder="Dependent Task"
                      >
                        <option value="">Select Dependent Task</option>
                        <option value="task1">Task 1</option>
                        <option value="task2">Task 2</option>
                        <option value="task3">Task 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                      <input
                        type="file"
                        className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                      />
                      <textarea
                        placeholder="Description"
                        className="border-2 p-2 mb-2 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div className="col-span-1">
                      <div className="flex gap-10">
                        <div className="flex gap-2">
                          <Switch />
                          <label>Urgent</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Switch
                            checked={repeat}
                            onChange={handleSwitchChange}
                            className="mr-2"
                          />
                          <label>Repeat</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {repeat && (
                    <div>
                      <div className="grid grid-cols-2 gap-5 mt-4">
                        <input
                          type="date"
                          placeholder="From Date"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                        <input
                          type="date"
                          placeholder="To Date"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                        <input
                          type="time"
                          placeholder="Time"
                          className="border-2 p-2 mb-4 border-gray-300 rounded-lg w-full"
                        />
                      </div>
                      <div className="mb-3">
                        <h2 className="font-medium text-gray-600">
                          Select Working Day
                        </h2>
                        <div className="flex gap-2 mt-2">
                          <button
                            type="submit"
                            className="px-2 text-sm py-1 border-2 border-gray-400 text-gray-800 rounded-md"
                          >
                            Mon
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm py-1 border-2 border-gray-400  text-gray-800 rounded-md"
                          >
                            Tue
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm border-2 border-gray-400  text-gray-800 rounded-md"
                          >
                            Wed
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm border-2 border-gray-400  text-gray-800 rounded-md"
                          >
                            Thu
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm border-2 border-gray-400  text-gray-800 rounded-md"
                          >
                            Fri
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm border-2 border-gray-400  text-gray-800 rounded-md"
                          >
                            Sat
                          </button>
                          <button
                            type="submit"
                            className="px-2 text-sm border-2 border-gray-400 text-gray-800 rounded-md"
                          >
                            Sun
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md w-full"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectOverview;
