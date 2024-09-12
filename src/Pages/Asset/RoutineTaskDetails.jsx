import React from "react";
import InstituteDetails from "../School management/InstituteDetails";

const RoutineTaskDetails = () => {
  const asset_name = "Dell XPS 15";
  const created_at = "2023-09-10";
  const checklist_name = "Monthly Hardware Check";

  const taskDetails = [
    {
      id: 1,
      question_name: "Is the device charging properly?",
      value: "Yes",
    },
    {
      id: 2,
      question_name: "Any visible damage on the screen?",
      value: "No",
    },
    {
      id: 3,
      question_name: "Is the keyboard functioning well?",
      value: "Yes",
    },
  ];

  return (
    <div className="flex">
      <InstituteDetails />
      <div className="flex flex-col w-full overflow-hidden mx-5">
        <div className="flex flex-col justify-center items-center p-2">
          <div className="flex justify-between bg-gray-400 rounded p-2 w-full mx-20 text-white">
            <div className="grid grid-cols-2">
              <p className="font-medium">Asset Name :</p>
              <p>{asset_name}</p>
            </div>
            <p>{created_at}</p>
            <div className="grid grid-cols-2">
              <p className="font-medium">Checklist Name :</p>
              <p>{checklist_name}</p>
            </div>
          </div>

          <div className="w-full my-2">
            {taskDetails.map((task) => (
              <div key={task.id}>
                <div className="my-4 flex flex-col bg-gray-100 shadow-custom-all-sides p-2 rounded-md gap-2">
                  <div className="flex gap-4 items-center">
                    <p className="font-medium">Question :</p>
                    <p>{task.question_name}</p>
                  </div>
                  <div className="flex gap-4 items-center bg-green-200 p-2 rounded-md">
                    <p className="font-medium">Answer :</p>
                    <p>{task.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineTaskDetails;
