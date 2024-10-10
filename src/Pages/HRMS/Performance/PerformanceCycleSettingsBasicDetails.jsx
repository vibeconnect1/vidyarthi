import React, { useState } from "react";

function PerformanceCycleSettingsBasicDetails() {
    const [goalManagementRadioButton, setGoalManagementRadioButton] =
    useState(false);

  const handleGoalManagement = (e) => {
    setGoalManagementRadioButton(e.target.value === "yes");
  };
  return (
    <div className="my-2 bg-white rounded-md py-5 px-5">
      <div className="">
        <h2 className="text-xl font-medium">Basic Details</h2>
      </div>
      <div className="space-y-5">
        <div>
          <input
            name="employee"
            className="border-b border-gray-500 focus:outline-none w-96 py-2 bg-white"
            placeholder="Enter Cycle Name"
          ></input>
        </div>
        <div>
          <label className="block text-base text-gray-900 mb-1">
            Would you like to activate goal management for this cycle?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="goalManagement"
                value="yes"
                className="mr-2"
                onChange={handleGoalManagement}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="goalManagement"
                value="no"
                className="mr-2"
                onChange={handleGoalManagement}
              />
              No
            </label>
          </div>
        </div>
        {goalManagementRadioButton && (
          <div>
            <label className="block text-base text-gray-900 mb-1">
              Will you be evaluating goals as part of your assessment?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="evaluatingGoals"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="evaluatingGoals"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        )}
        <div>
          <label className="block text-base text-gray-900 mb-1">
            Would you like to activate Final Recommendation?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="finalRecommendation"
                value="yes"
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="finalRecommendation"
                value="no"
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label className="block text-base text-gray-900 mb-1">
            Would you like to make comments mandatory?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="commentsMandatory"
                value="yes"
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="commentsMandatory"
                value="no"
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCycleSettingsBasicDetails;
