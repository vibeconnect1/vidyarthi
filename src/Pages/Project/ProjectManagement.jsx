import React, { useState } from "react";
import marketing from "/digitalMarketing.jpg";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import CreateProjectModal from "./CreateProjectModal";
import EditTimelineModal from "./EditTimelineModal";
import ProjectDeleteModal from "./ProjectDeleteModal";

function ProjectManagement() {
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
  const approved = [
    {
      id: 1,
      img: marketing,
      projectName: "Web Development",
      projectDesc:
        "Web application design is an important stage when building a web application...",
      dueDate: "12 Aug, 2024",
      createdBy: "Rahul Singh",
      assignTo: "karan@gmail.com",
    },
    {
      id: 2,
      img: marketing,
      projectName: "Marketing Strategy",
      projectDesc:
        "Development of a new marketing strategy to increase brand awareness and sales...",
      dueDate: "22 Aug, 2024",
      createdBy: "Rahul Singh",
      assignTo: "karan@gmail.com",
    },
    {
      id: 3,
      img: marketing,
      projectName: "Business Project",
      projectDesc:
        "Business strategy development focusing on improving brand positioning...",
      dueDate: "30 Aug, 2024",
      createdBy: "Rahul Singh",
      assignTo: "karan@gmail.com",
    },
  ];
  return (
    <section className="min-h-screen">
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex flex-col overflow-hidden">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Project</p>
            <button
              className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
              onClick={() => setCreateModal(true)}
            >
              <IoAddCircleOutline size={20} /> Add Project
            </button>
          </div>
          <div className="p-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {approved.map((item) => (
                <Link
                  to={`/school-management/project-details`}
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
                >
                  <img
                    src={item.img}
                    className="h-40 w-full object-cover rounded-t-lg"
                    alt={item.projectName}
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-lg font-semibold text-gray-800">
                      {item.projectName}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {item.projectDesc}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-800">
                        Created by:{" "}
                        <span className="font-normal">{item.createdBy}</span>
                      </p>
                      <p className="text-sm font-medium text-gray-800 mt-2">
                        Assign To:{" "}
                        <span className="font-normal">{item.assignTo}</span>
                      </p>
                      <p className="flex items-center text-sm font-medium text-gray-800 mt-2">
                        Project Timeline:
                        <span className="ml-2 font-normal">{item.dueDate}</span>
                        <button
                          onClick={() => setEditModal(true)}
                        >
                        <FaPencilAlt
                          className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                          size={16}
                        />
                        </button>
                      </p>
                    </div>
                    <FaTrashAlt
                      className="mt-4 self-end text-red-400 hover:text-red-600 cursor-pointer transition-colors duration-200"
                      size={18}
                      onClick={() => setDeleteModal(true)}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {createModal && <CreateProjectModal onClose={() => setCreateModal(false)} />}
      {editModal && <EditTimelineModal onClose={() => setEditModal(false)} />}
      {deleteModal && <ProjectDeleteModal onClose={() => setDeleteModal(false)} />}
    </section>
  );
}

export default ProjectManagement;
