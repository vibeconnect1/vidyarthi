import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const SurveyDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">
              Survey Details
            </p>
          </div>
          <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-5 bg-white">
            <div className="my-2 md:px-5 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
              <div className="grid grid-cols-2 items-center">
                <p>Title:</p>
                <p className="text-sm font-normal">TechSpark Summit</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Date:</p>
                <p className="text-sm font-normal ">5 Sep,2024</p>
              </div>
              <div className="grid grid-cols-2 items-center">
                <p>Number of Responses:</p>
                <p className="text-sm font-normal ">120</p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:px-5">
              <p className="font-medium mb-1">Description:</p>
              <p className="text-sm font-normal ">
                This name stands out by combining “Tech” to convey a focus on
                technology, and “Spark” to suggest innovation and inspiration.
                “Summit” implies a high-level gathering for tech professionals,
                offering valuable insights and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails