import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import { IoMdAdd } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { PiShareFatThin } from "react-icons/pi";
function TaskReview() {
  const [reviewTaskModal, setReviewTaskModal] = useState(false);
  const [assign, setAssign] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
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
      tasks: "Web Development",
      startDate: "20 july 2024",
      endDate: "28 july 2024",
      status: "In Review",
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
  const completePercentage = 95;
  return (
    <section className="flex">
      <div className="w-full flex flex-col overflow-hidden">
        <div className="mx-2">
          <div className="shadow-custom-all-sides rounded-md mb-4">
            <div className="flex justify-between pt-5 mx-5">
              <h2 className="text-lg font-semibold text-slate-800 my-3 md:my-0">
                In Review Task
              </h2>
            </div>
            <div className="overflow-x-auto p-4">
              <table className="w-full bg-white border-gray-200 p-4">
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
                    };

                    // Get the appropriate styles based on the status
                    const statusClass =
                      statusStyles[data.status] || "bg-gray-100 text-gray-600";

                    return (
                      <tr className="hover:bg-gray-100 " key={index}>
                        <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap">
                          <button
                            onClick={() => setReviewTaskModal(!reviewTaskModal)}
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
                        <td className="px-6 py-4 border-b border-gray-200 text-gray-500 whitespace-nowrap"></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {reviewTaskModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-5 rounded-lg shadow-lg w-2/5 relative h-3/4 overflow-y-auto hide-scrollbar">
              <button
                onClick={() => setReviewTaskModal(!reviewTaskModal)}
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
                    className="bg-violet-100 text-violet-400 p-1 px-3 rounded-md text-sm"
                    onClick={() => setStatusModal(!statusModal)}
                  >
                    In Review
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
                      className="bg-violet-500 h-full rounded-full"
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
                        <button
                          className="border-2 border-gray-200 border-dashed w-8 h-8 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400"
                          onClick={() => setSubTask(!subTask)}
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
                      {subTask && (
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
                    <div className="my-3">
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
                    <div className=" my-3">
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
                    </div>
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
                  <div className="overflow-y-scroll h-32">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                          src={profile3}
                          className="w-9 h-9 mt-1 rounded-full"
                          alt="Profile"
                        />
                        <h2 className="flex items-center">Rohan</h2>
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
                        <h2 className="flex items-center">Riya</h2>
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
                        <h2 className="flex items-center">Naharika</h2>
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

export default TaskReview