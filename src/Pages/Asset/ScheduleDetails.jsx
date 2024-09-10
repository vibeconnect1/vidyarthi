import React from "react";

const ScheduleDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="flex justify-between bg-gray-400 rounded p-2 w-full mx-20 text-white">
        <div className="grid grid-cols-2">
          <p className="font-medium">Asset Name :</p>
          <p>Chiller 320TR</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="font-medium"></p>
          <p>09 Sept 2024, 12:37 pm</p>
        </div>
        <p></p>
        <div className="grid grid-cols-2">
          <p className="font-medium">Checklist Name :</p>
          <p>Daily Plumbing checklist 2</p>
        </div>
      </div>
      <div className="w-full my-2">
        <div>
            <div className="my-4 flex flex-col bg-gray-100 shadow-custom-all-sides p-2 rounded-md gap-2">
              <div className="flex gap-4 items-center">
                <p className="font-medium">Question :</p>
                <p>Main gate Nyati LOGO</p>
              </div>
              <div className="flex gap-4 items-center bg-green-200 p-2 rounded-md">
                <p className="font-medium">Answer :</p>
                <p>1</p>
              </div>
            </div>
        </div>
        <div>
            <div className="my-4 flex flex-col bg-gray-100 shadow-custom-all-sides p-2 rounded-md gap-2">
              <div className="flex gap-4 items-center">
                <p className="font-medium">Question :</p>
                <p>PPM Q23</p>
              </div>
              <div className="flex gap-4 items-center bg-green-200 p-2 rounded-md">
                <p className="font-medium">Answer :</p>
                <p>2</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
