import React, { useState } from "react";
import ModalWrapper from "../../Modal/ModalWrapper";
import { PiPlusCircle } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";

const EditOnboardingChecklistTemplatesModal = ({ onClose }) => {
  const [tasks, setTasks] = useState([
    {
      task: "Retrieve Data",
      assignedTo: "Vinayak Kapodskar",
      days: 7,
      beforeAfter: "Before",
      dateType: "Joining Date",
    },
    {
      task: "Onboarding",
      assignedTo: "Vinayak Kapodskar",
      days: 0,
      beforeAfter: "Before",
      dateType: "Joining Date",
    },
    {
      task: "Create Email ID",
      assignedTo: "Vinayak Kapodskar",
      days: 10,
      beforeAfter: "Before",
      dateType: "Joining Date",
    },
  ]);

  // Handle adding new task
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        task: "",
        assignedTo: "",
        days: "",
        beforeAfter: "Before",
        dateType: "Joining Date",
      },
    ]);
  };

  // Handle removing a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Handle task change
  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold text-center text-xl">Onboarding Task</h1>
        <div className="p-6">
          <div className="flex flex-col gap-2 w-96 my-5">
            <input
              type="email"
              name=""
              id=""
              placeholder="Checklist Label"
              disabled
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <p className="mb-2 font-semibold">Please select tasks:</p>
          <div className="w-full mb-4">
            <div className="grid grid-cols-5 gap-4 items-center mb-2 font-semibold">
              <div>
                Task <span className="text-red-500">*</span>
              </div>
              <div>
                Assigned To <span className="text-red-500">*</span>
              </div>
              <div>Due Date (Upto 180 days) *</div>
            </div>
            <div className="border-b border-t border-gray-500 py-5">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 items-center mb-4"
                >
                  {/* Task Selection */}
                  <select
                    value={task.task}
                    onChange={(e) =>
                      handleTaskChange(index, "task", e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded-md"
                    disabled
                  >
                    <option value="Retrieve Data">Retrieve Data</option>
                    <option value="Onboarding">Onboarding</option>
                    <option value="Create Email ID">Create Email ID</option>
                  </select>

                  {/* Assigned To */}
                  <select
                    value={task.assignedTo}
                    onChange={(e) =>
                      handleTaskChange(index, "assignedTo", e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded-md"
                  >
                    <option value="Retrieve Data">Reporting Supervisor</option>
                    <option value="Onboarding">Level Up Supervisor</option>
                    <option value="Create Email ID">Head of Department</option>
                  </select>

                  {/* Days */}
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={task.days}
                      onChange={(e) =>
                        handleTaskChange(index, "days", e.target.value)
                      }
                      className="w-14 border border-gray-300 p-2 rounded-md text-center"
                      disabled
                    />
                    <select
                      value={task.beforeAfter}
                      onChange={(e) =>
                        handleTaskChange(index, "beforeAfter", e.target.value)
                      }
                      className="ml-2 w-32 border border-gray-300 p-2 rounded-md"
                      disabled
                    >
                      <option value="Before">Before</option>
                      <option value="After">After</option>
                    </select>
                  </div>

                  {/* Joining Date */}
                  <select
                    value={task.dateType}
                    onChange={(e) =>
                      handleTaskChange(index, "dateType", e.target.value)
                    }
                    className="border border-gray-300 p-2 rounded-md"
                    disabled
                  >
                    <option value="Joining Date">Joining Date</option>
                  </select>

                  {/* Delete Task */}
                  <button
                    onClick={() => removeTask(index)}
                    className="text-red-500 hover:text-red-700"
                    disabled
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              ))}
            </div>
            {/* Add Task */}
            <button
              onClick={addTask}
              className="text-blue-500 hover:text-blue-700 border-b border-blue-500 my-3"
              disabled
            >
              + Add Task
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-black p-2 px-4 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditOnboardingChecklistTemplatesModal;
