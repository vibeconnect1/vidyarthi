import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { RiAttachment2, RiDeleteBin6Line } from "react-icons/ri";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import profile4 from "/profile4.jpg";
import profile6 from "/profile6.jpg";
import profile5 from "/profile5.jpg";
import { IoMdAdd } from "react-icons/io";
import { PiShareFatThin } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import Switch from "../../ConfigurationFile/Switch";
function ProjectTaskAll() {
  const [createModal, setCreateModal] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [filters, setFilters] = useState(false);
  const [createTask, setCreateTask] = useState("selfTask");
  const [allTaskModal, setAllTaskModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [assign, setAssign] = useState(false);
  const [dueDateModal, setDueDateModal] = useState(false);
  const [open, setOpen] = useState("Detail");
  const [checkList, setCheckList] = useState(false);
  const [dependency, setDependency] = useState(false);
  const [subTask, setSubTask] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isMyComment, setIsMyComment] = useState(true);
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [subTaskLevel, setSubTaskLevel] = useState(false);
  const [subTaskDependence, setSubTaskDependence] = useState(false);
  const [sections, setSections] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleSwitchChange = (event) => {
    setRepeat(event.target.checked);
  };
  const CreateModal = () => {
    setCreateModal(true);
  };
  const closeModal = () => {
    setCreateModal(false);
  };
  const toggleFilter = () => {
    setFilters(!filters);
  };
  const projectTasks = [
    {
      id: 1,
      tasks: "Design Wireframes",
      startDate: "20 july 2024",
      endDate: "23 july 2024",
      status: "In Review",
      progress: "80%",
      assignee: profile1,
    },
    {
      id: 2,
      tasks: "Prototype design",
      startDate: "10 july 2024",
      endDate: "10 july 2024",
      delayDate: "25 july 2024",
      status: "In Progress",
      progress: "60%",
      assignee: profile2,
    },
    {
      id: 3,
      tasks: "Content Writing",
      startDate: "20 july 2024",
      endDate: "30 july 2024",
      status: "cancel",
      progress: "20%",
      assignee: profile3,
    },
    {
      id: 4,
      tasks: "Frontend",
      startDate: "10 july 2024",
      endDate: "22 july 2024",
      status: "Completed",
      progress: "100%",
      assignee: profile2,
    },
    {
      id: 5,
      tasks: "Database",
      startDate: "1 july 2024",
      endDate: "20 july 2024",
      delayDate: "30 july 2024",
      status: "Over due",
      progress: "90%",
      assignee: profile1,
    },
    {
      id: 6,
      tasks: "Backend",
      startDate: "5 july 2024",
      endDate: "25 july 2024",
      status: "Re-Open",
      progress: "100%",
      assignee: profile2,
    },
  ];
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, isMine: isMyComment }]);
      setNewComment("");
    }
  };
  const handleSubmitChat = () => {
    if (newChat.trim()) {
      setChat([...chat, newChat]);
      setNewChat("");
    }
  };

  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };
  const completePercentage = 30;

  // subtask
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addSection = () => {
    if (inputText.trim() !== "") {
      setSections([...sections, { id: sections.length, text: inputText }]);
      setInputText("");
    }
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  return (
    <section className="flex">
      <div className="w-full flex flex-col overflow-hidden">
        <div className="grid-cols-1 gap-4">
          <div className="lg:col-span-7 md:col-span-2 col-span-1">
            <div className="shadow-custom-all-sides rounded-md">
              <div className="flex md:flex-row flex-col justify-between mx-5 pt-5">
                <h2 className="text-lg font-semibold text-slate-800 my-3 md:my-0">
                  Upcoming task by Assignee
                </h2>
                <div>
                  <div className="flex gap-2">
                    <div className="relative inline-block">
                      <button
                        className="font-semibold text-gray-500 border-2 border-gray-400 px-4 py-1 flex gap-2 items-center rounded-md"
                        onClick={toggleFilter}
                      >
                        <FiFilter /> Filter
                      </button>
                      {filters && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="p-4">
                            <label className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                name="completed"
                                className="mr-2"
                              />
                              Completed
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                name="inProgress"
                                className="mr-2"
                              />
                              In Progress
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                name="overDue"
                                className="mr-2"
                              />
                              Over Due
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                name="inReview"
                                className="mr-2"
                              />
                              In Review
                            </label>
                            <label className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                name="reOpen"
                                className="mr-2"
                              />
                              Re-Open
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                name="cancel"
                                className="mr-2"
                              />
                              Cancel
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      className=" font-semibold text-gray-500 border-2 border-gray-400 px-4 p-1 flex gap-2 items-center rounded-md"
                      onClick={CreateModal}
                    >
                      <IoAddCircleOutline /> Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white border-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Tasks
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Start Date
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        End Date
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Delay Date
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Assignee
                      </th>
                      <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectTasks.map((data, index) => {
                      // Define the styling for different statuses
                      const statusStyles = {
                        cancel: "bg-red-100 text-red-600",
                        "In Review": "bg-violet-100 text-violet-600",
                        "In Progress": "bg-blue-100 text-blue-600",
                        Completed: "bg-green-100 text-green-600",
                        "Over due": "bg-yellow-100 text-yellow-600",
                        "Re-Open": "bg-black text-white",
                      };

                      // Get the appropriate styles based on the status
                      const statusClass =
                        statusStyles[data.status] ||
                        "bg-gray-100 text-gray-600";

                      return (
                        <tr className="hover:bg-gray-100" key={index}>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            <button
                              onClick={() => setAllTaskModal(!allTaskModal)}
                            >
                              <BsEye className="mt-1" size={15} />
                            </button>
                          </td>
                          <td className="flex gap-2 px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                            <span className="my-1 font-medium text-gray-600">
                              {data.tasks}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            {data.startDate}
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            {data.endDate}
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            {data.delayDate}
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                            <span
                              className={` py-1 px-3 rounded-md text-sm font-normal ${statusClass}`}
                            >
                              {data.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            {data.progress}
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            <img
                              src={data.assignee}
                              alt="Uploaded"
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          </td>
                          <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                            <div className="flex gap-2">
                              <RiDeleteBin6Line className="mt-1" size={15} />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {createModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-2/5 relative max-h-[90%] overflow-y-auto hide-scrollbar">
              <button
                onClick={closeModal}
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
        {allTaskModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-5 rounded-lg shadow-lg w-2/5 relative h-3/4 overflow-y-auto hide-scrollbar">
              <button
                onClick={() => setAllTaskModal(!allTaskModal)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
              <h2 className="text-2xl font-semibold text-gray-700 text-start">
                Task Name
              </h2>
              <div className="flex justify-between">
                <div className="flex sm:flex-wrap flex-wrap gap-2 mt-2">
                  <img
                    src={profile1}
                    className="w-9 h-9 mt-1 rounded-full"
                    alt="Profile"
                  />
                  <img
                    src={profile2}
                    className="w-9 h-9 mt-1 rounded-full"
                    alt="Profile"
                  />
                  <img
                    src={profile3}
                    className="w-9 h-9 mt-1 rounded-full"
                    alt="Profile"
                  />
                  <button
                    className="border-2 border-gray-200 border-dashed w-9 h-9 
                rounded-full ml-2 mt-1 flex justify-center items-center
              hover:text-blue-400 hover:border-blue-400"
                    onClick={() => setAssign(!assign)}
                  >
                    <span>
                      <IoMdAdd />
                    </span>
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-red-100 text-red-400 p-1 px-3 rounded-md text-sm"
                    onClick={() => setStatusModal(!statusModal)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center w-full">
                  <p className="text-base font-semibold text-gray-800">
                    {completePercentage}%
                  </p>
                  <div className="relative bg-gray-200 rounded-full h-2 w-full">
                    <div
                      className="bg-red-500 h-full rounded-full"
                      style={{ width: `${completePercentage}%` }}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    className=" font-semibold text-gray-500 px-4 p-1  rounded-md whitespace-nowrap pt-2"
                    onClick={() => setDueDateModal(!dueDateModal)}
                  >
                    Due Date
                  </button>
                </div>
              </div>
              <div className="border-t border-inherit mt-3"></div>
              <div className="my-3">
                <div className="flex gap-3">
                  <button
                    className={`px-4 py-1 text-black rounded-md border-2 border-violet-100 ${
                      open === "Detail" ? "text-white bg-violet-700" : ""
                    }`}
                    onClick={() => setOpen("Detail")}
                  >
                    Details
                  </button>
                  <button
                    className={`px-4 py-1 text-black rounded-md border-2 border-violet-100 ${
                      open === "CheckList" ? "text-white bg-violet-700" : ""
                    }`}
                    onClick={() => setOpen("CheckList")}
                  >
                    CheckList
                  </button>
                  <button
                    className={`px-4 py-1 text-black rounded-md border-2 border-violet-100 ${
                      open === "SubTask" ? "text-white bg-violet-700" : ""
                    }`}
                    onClick={() => setOpen("SubTask")}
                  >
                    SubTask
                  </button>
                  <button
                    className={`px-4 py-1 text-black rounded-md border-2 border-violet-100 ${
                      open === "Comments" ? "text-white bg-violet-700" : ""
                    }`}
                    onClick={() => setOpen("Comments")}
                  >
                    Comments
                  </button>
                  <button
                    className={`px-4 py-1 text-black rounded-md border-2 border-violet-100 ${
                      open === "Chat" ? "text-white border-b bg-violet-700" : ""
                    }`}
                    onClick={() => setOpen("Chat")}
                  >
                    Chat
                  </button>
                </div>
                {open === "Detail" && (
                  <div className="my-5">
                    <div className="flex gap-5">
                      <h2 className="text-base text-gray-800">Start Date :</h2>
                      <p className="text-base text-gray-500">30 July 2024</p>
                    </div>
                    <div className="flex gap-5">
                      <h2 className="text-base text-gray-800">End Date :</h2>
                      <p className="text-base text-gray-500">10 Aug 2024</p>
                    </div>
                    <div className="flex gap-5">
                      <h2 className="text-base text-gray-800">Created By :</h2>
                      <p className="text-base text-gray-500">Rahul Gupta</p>
                    </div>
                    <div className="flex gap-5">
                      <h2 className="text-base text-gray-800">Due Date :</h2>
                      <p className="text-base text-gray-500">
                        10 Aug 2024 , 4:00pm
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <h2 className="text-base text-gray-800">Assign To :</h2>
                      <p className="text-base text-gray-500">
                        ravi@gmail.com , Karuna@gmail.com, Riya@gmail.com
                      </p>
                    </div>
                  </div>
                )}
                {open === "SubTask" && (
                  <div>
                    <div className="my-3">
                      <div className="flex gpa-5">
                        <p className="text-lg text-gray-800 font-medium">
                          Add SubTask
                        </p>
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="text"
                          value={inputText}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-l py-2 px-4 w-full"
                          placeholder="Enter text"
                        />
                        <button
                          onClick={addSection}
                          className="bg-blue-500 text-white py-2 px-4 rounded-r"
                        >
                          Add
                        </button>
                      </div>
                      {sections.map((section) => (
                        <div
                          key={section.id}
                          className="my-4 p-4 border rounded"
                        >
                          <p className="mt-2">{section.text}</p>
                          <div className="flex gap-5 my-2">
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setDueDateModal(!dueDateModal)}
                            >
                              Due Date
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setDueDateModal(!dueDateModal)}
                            >
                              status
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() =>
                                setSubTaskDependence(!subTaskDependence)
                              }
                            >
                              dependency
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setAssign(!assign)}
                            >
                              Assign to
                            </button>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="flex gap-5">
                              <p>Start Date:</p>
                              <p>:</p>
                            </div>
                            <div className="flex gap-5">
                              <p>End Date:</p>
                              <p>:</p>
                            </div>
                          </div>
                          {subTaskDependence && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                              <div className="relative bg-white p-5 rounded-md w-96">
                                <button
                                  className="absolute top-2 right-2 text-gray-500"
                                  onClick={() =>
                                    setSubTaskDependence(!subTaskDependence)
                                  }
                                >
                                  <IoClose size={24} />
                                </button>
                                <div className="flex gpa-5">
                                  <p className="text-lg text-gray-600 font-semibold">
                                    Add Dependency
                                  </p>
                                  <button
                                    className="border-2 border-gray-200 border-dashed w-8 h-8 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400"
                                    onClick={() => setDependency(!dependency)}
                                  >
                                    <span>
                                      <IoMdAdd />
                                    </span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Reward and Loyalty Program
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Skill Grow
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Create boards in Matboard
                                  </label>
                                </div>
                                {dependency && (
                                  <div className="flex items-center mt-2">
                                    <input
                                      type="text"
                                      placeholder="Add New Dependency"
                                      className="flex-1 border-2 border-gray-400 p-1 rounded-md text-gray-800"
                                    />
                                    <button className="ml-2 font-semibold text-white bg-green-500 px-4 p-1 rounded-md">
                                      Add
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          <div className="flex gap-2 mt-3">
                            <div className="flex items-center w-full">
                              <input
                                type="text"
                                value={inputText}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-l py-1 px-4 w-full"
                                placeholder="Enter text"
                              />
                              <button
                                onClick={addSection}
                                className="bg-blue-500 text-white py-1 px-4 rounded-r"
                              >
                                Add
                              </button>
                            </div>
                            <button
                              onClick={() => removeSection(section.id)}
                              className="bg-red-500 text-white py-1 px-3 rounded"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>
                      ))}
                      {subTask && (
                        <div className="mt-2 border-2 border-gray-300 rounded-md px-5 py-2">
                          <h2 className="text-lg font-semibold text-gray-700 text-start">
                            Task Name
                          </h2>
                          <div className="flex gap-5 my-2">
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setDueDateModal(!dueDateModal)}
                            >
                              Due Date
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setDueDateModal(!dueDateModal)}
                            >
                              status
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() =>
                                setSubTaskDependence(!subTaskDependence)
                              }
                            >
                              dependency
                            </button>
                            <button
                              className="border-2 border-gray-300 rounded-md text-sm p-1 px-4"
                              onClick={() => setAssign(!assign)}
                            >
                              Assign to
                            </button>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="flex gap-5">
                              <p>Start Date:</p>
                              <p>:</p>
                            </div>
                            <div className="flex gap-5">
                              <p>End Date:</p>
                              <p>:</p>
                            </div>
                          </div>
                          {subTaskDependence && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                              <div className="relative bg-white p-5 rounded-md w-96">
                                <button
                                  className="absolute top-2 right-2 text-gray-500"
                                  onClick={() =>
                                    setSubTaskDependence(!subTaskDependence)
                                  }
                                >
                                  <IoClose size={24} />
                                </button>
                                <div className="flex gpa-5">
                                  <p className="text-lg text-gray-600 font-semibold">
                                    Add Dependency
                                  </p>
                                  <button
                                    className="border-2 border-gray-200 border-dashed w-8 h-8 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400"
                                    onClick={() => setDependency(!dependency)}
                                  >
                                    <span>
                                      <IoMdAdd />
                                    </span>
                                  </button>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Reward and Loyalty Program
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Skill Grow
                                  </label>
                                </div>
                                <div className="flex">
                                  <input
                                    type="checkbox"
                                    name="completed"
                                    className="mr-2 font-3"
                                  />
                                  <label className="flex items-center text-gray-600 text-base">
                                    Create boards in Matboard
                                  </label>
                                </div>
                                {dependency && (
                                  <div className="flex items-center mt-2">
                                    <input
                                      type="text"
                                      placeholder="Add New Dependency"
                                      className="flex-1 border-2 border-gray-400 p-1 rounded-md text-gray-800"
                                    />
                                    <button className="ml-2 font-semibold text-white bg-green-500 px-4 p-1 rounded-md">
                                      Add
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {/* <div className="my-3">
                      <div className="flex gpa-5">
                        <p className="text-lg text-gray-600 font-semibold">
                          Add Dependency
                        </p>
                        <button
                          className="border-2 border-gray-200 border-dashed w-8 h-8 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400"
                          onClick={() => setDependency(!dependency)}
                        >
                          <span>
                            <IoMdAdd />
                          </span>
                        </button>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Reward and Loyalty Program
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Skill Grow
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Create boards in Matboard
                        </label>
                      </div>
                      {dependency && (
                        <div className="flex items-center mt-2">
                          <input
                            type="text"
                            placeholder="Add New Dependency"
                            className="flex-1 border-2 border-gray-400 p-1 rounded-md text-gray-800"
                          />
                          <button className="ml-2 font-semibold text-white bg-green-500 px-4 p-1 rounded-md">
                            Add
                          </button>
                        </div>
                      )}
                    </div> */}
                    {/* <div className=" my-3">
                      <p className="font-semibold text-base text-gray-800 border-b-2 border-gray-500">
                        Attachment
                      </p>
                      <div className="flex items-center mt-2">
                        <input
                          type="file"
                          placeholder="Add Attachment"
                          className="flex-1  p-1 rounded-md text-gray-800 "
                        />
                        <div className="flex ">
                          <button className="font-semibold text-black p-1 rounded-md flex items-center gap-1">
                            <FiDownload size={20} />
                          </button>
                          <button className="font-semibold text-black p-1 rounded-md flex items-center gap-1">
                            <MdDelete size={20} />
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                )}
                {open === "CheckList" && (
                  <div>
                    <div className="my-3">
                      <div className="flex gpa-5">
                        <p className="text-lg text-gray-800 font-medium">
                          Add CheckList
                        </p>
                        <button
                          className="border-2 border-gray-200 border-dashed w-8 h-8 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400"
                          onClick={() => setCheckList(!checkList)}
                        >
                          <span>
                            <IoMdAdd />
                          </span>
                        </button>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Login Page
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Create boards in Matboard
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Invite team to boards
                        </label>
                      </div>
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="completed"
                          className="mr-2 font-3"
                        />
                        <label className="flex items-center text-gray-600 text-base">
                          Identify three distinct aesthetic styles for boards
                        </label>
                      </div>
                      {checkList && (
                        <div className="flex items-center mt-2">
                          <input
                            type="text"
                            placeholder="Add New Dependency"
                            className="flex-1 border-2 border-gray-400 p-1 rounded-md text-gray-800"
                          />
                          <button className="ml-2 font-semibold text-white bg-green-500 px-4 p-1 rounded-md">
                            Add
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {open === "Comments" && (
                  <div className="my-5">
                    <div className="max-w-xl mx-auto border border-inherit rounded-md">
                      <div className="overflow-y-scroll h-48 bg-gray-50">
                        <p className="text-start mx-3 my-2">
                          <ul>
                            {comments.map((comment, index) => (
                              <li
                                key={index}
                                className={`mb-2 p-2 rounded-lg ${
                                  comment.isMine
                                    ? "bg-blue-100 text-left p-2  mr-auto w-32"
                                    : "bg-gray-100 text-left p-2 ml-auto w-32"
                                }`}
                              >
                                <span className="text-center">
                                  {comment.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="border border-gray-300 py-2 px-2 rounded-md my-2">
                      <div className="flex items-center ">
                        <input
                          type="text"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Add a comment"
                        />
                        <button
                          onClick={handleAddComment}
                          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 ml-2"
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                    {/* <div className="flex justify-start mb-4">
                <input
                  type="checkbox"
                  checked={isMyComment}
                  onChange={(e) => setIsMyComment(e.target.checked)}
                />
                <label className="ml-2">Is this your comment?</label>
              </div> */}
                  </div>
                )}
                {open === "Chat" && (
                  <div className="my-5">
                    <div className="">
                      <div className="h-48 overflow-y-auto border p-4 mb-4 bg-gray-50 rounded-lg">
                        <ul>
                          {chat.map((chats, index) => (
                            <li
                              key={index}
                              className={`mb-2 p-2 rounded-lg ${"bg-gray-100 text-left p-2 mr-auto w-32"}`}
                            >
                              <span className="text-center">{chats}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative flex items-center border border-gray-300 p-2 rounded-md">
                        <input
                          type="text"
                          value={newChat}
                          onChange={(e) => setNewChat(e.target.value)}
                          className="flex-1 pl-10 pr-12 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100"
                          placeholder="Type a message..."
                        />
                        <button
                          type="button"
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md shadow hover:bg-gray-300 focus:outline-none transition duration-300"
                          onClick={handleFileInputClick}
                        >
                          <RiAttachment2 />
                        </button>
                        <input
                          id="fileInput"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            // Handle file selection logic here
                          }}
                        />
                        <button
                          type="button"
                          className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                          onClick={handleSubmitChat}
                        >
                          <PiShareFatThin />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {assign && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white p-5 rounded-md w-96">
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setAssign(!assign)}
                  >
                    <IoClose size={24} />
                  </button>
                  <h2 className="text-gray-600 font-semibold text-lg">
                    Add Project Member
                  </h2>
                  <div className="flex sm:flex-wrap flex-wrap gap-2 mt-2">
                    <img
                      src={profile1}
                      className="w-9 h-9 mt-1 rounded-full"
                      alt="Profile"
                    />
                    <img
                      src={profile2}
                      className="w-9 h-9 mt-1 rounded-full"
                      alt="Profile"
                    />
                    <img
                      src={profile3}
                      className="w-9 h-9 mt-1 rounded-full"
                      alt="Profile"
                    />
                  </div>
                  <div>
                    <input
                      type="search"
                      placeholder="search user"
                      className="border-2 p-1 border-gray-300 rounded-lg  w-full my-5"
                    ></input>
                  </div>
                  <div className="overflow-y-scroll h-40">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile4}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Ravindar</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile1}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Ritu</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile2}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Riya Singh</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile5}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Neha</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile6}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Kunal</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile5}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Riya</h2>
                      </div>
                      <input
                        type="checkbox"
                        name="completed"
                        className="mr-2 font-3"
                      />
                    </div>
                  </div>
                  <div className="border-t border-inherit my-5"></div>
                  <button className="border-2 border-gray-300 rounded-md p-1 px-4 hover:bg-gray-300 hover:text-white">
                    Add
                  </button>
                </div>
              </div>
            )}
            {statusModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white p-5 rounded-md w-96">
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setStatusModal(!statusModal)}
                  >
                    <IoClose size={24} />
                  </button>
                  <div className="mt-4">
                    <label className="block text-xl text-gray-700 font-medium mb-2">
                      Select Status
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="open">Open</option>
                      <option value="wip">WIP</option>
                      <option value="reopen">Re-open</option>
                      <option value="complete">Complete</option>
                      <option value="review">Review </option>
                      <option value="pending">Pending</option>
                      <option value="close">Close</option>
                      <option value="progress">Progress</option>
                      <option value="cancel">Cancel</option>
                      <option value="dueDate">DueDate</option>
                    </select>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-md mr-2">
                      Save
                    </button>
                    <button
                      className="px-4 py-1 bg-red-500 text-white rounded-md "
                      onClick={() => setStatusModal(!statusModal)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {dueDateModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white p-5 rounded-md w-96">
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setDueDateModal(!dueDateModal)}
                  >
                    <IoClose size={24} />
                  </button>
                  <div className="mt-4">
                    <label className="block text-xl text-gray-700 font-medium mb-2">
                      Select Due Date
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-md mr-2">
                      Save
                    </button>
                    <button
                      className="px-4 py-1 bg-red-500 text-white rounded-md "
                      onClick={() => setDueDateModal(!dueDateModal)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectTaskAll;
