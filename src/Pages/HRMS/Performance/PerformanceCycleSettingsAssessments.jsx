import React, { useState } from "react";
import Table from "../../../ConfigurationFile/Table";

function PerformanceCycleSettingsAssessments() {
  const column = [
    {
      name: "Rating",
      selector: (row) => row.rating,
    },
    {
      name: "Label for Goal Evaluation",
      selector: (row) => row.label_for_goal_evaluation,
      sortable: true,
    },
    {
      name: "Label for Competency Evaluation",
      selector: (row) => row.label_for_competency_evaluation,
      sortable: true,
    },
    {
      name: "Label for Final Recommendation",
      selector: (row) => row.label_for_final_recommendation,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      rating: "1",
      label_for_goal_evaluation: "Below Average",
      label_for_competency_evaluation: "Below Average",
      label_for_final_recommendation: "Below Average",
    },
  ];

  const [permissions, setPermissions] = useState({
    Assessee: {
      viewName: "Yes",
      viewRatings: "Yes",
      viewComments: "Yes",
      viewRecommendations: "Yes",
    },
    "Reporting Supervisor": {
      viewName: "Yes",
      viewRatings: "Yes",
      viewComments: "Yes",
      viewRecommendations: "Yes",
    },
  });

  const handlePermissionChange = (actor, permission, value) => {
    setPermissions((prev) => ({
      ...prev,
      [actor]: {
        ...prev[actor],
        [permission]: value,
      },
    }));
  };

  const actors = ["Assessee", "Reporting Supervisor"];
  const permissionTypes = [
    { key: "viewName", label: "Can View Other Assessor's Name?" },
    { key: "viewRatings", label: "Can View Other Assessor's Ratings?" },
    { key: "viewComments", label: "Can View Other Assessor's Comments?" },
    { key: "viewRecommendations", label: "Can View Final Recommendations?" },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [hikeAmount, setHikeAmount] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value !== "Salary hike in %") {
      setHikeAmount(""); // Reset input if not salary hike
    }
  };

  const [finalRatingRadioButton, setFinalRatingRadioButton] = useState(false);
  const handleFinalRating = (e) => {
    setFinalRatingRadioButton(e.target.value === "yes");
  };

  const [bonusAmount, setBonusAmount] = useState(false);
  const handleBonusAmount = (e) => {
    setBonusAmount(e.target.value === "yes");
  };
  return (
    <div className="my-2 bg-white rounded-md py-5 px-5">
      <div className="">
        <h2 className="text-xl font-medium">Assessments</h2>
      </div>
      <div className="space-y-5">
        <div>
          <label className="block text-base text-gray-900 mb-1">
            How many levels do you require in your rating scale
          </label>
          <select
            id="ratingScale"
            name="rating Scale"
            disabled
            className="border-b border-gray-500 focus:outline-none w-1/2 py-2"
          >
            <option value="3">3</option>
            <option selected="selected" value="4">
              4
            </option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label className="block text-base text-gray-900 mb-1">
            Do you want to allow 0 rating?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="rating"
                value="yes"
                className="mr-2"
                disabled
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="no"
                className="mr-2"
                disabled
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label className="block text-base text-gray-900 mb-1">
            Do you want to allow half-point rating?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="halfPoint"
                value="yes"
                className="mr-2"
                disabled
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="halfPoint"
                value="no"
                className="mr-2"
                disabled
              />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-medium">Define Rating Description.</h2>
        <Table columns={column} data={data} />
      </div>
      <div className="">
        <h1 className=" font-medium mb-4">
          Please define the permissions of all actors an assessment
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-600">
            <thead>
              <tr>
                <th className="text-left p-2 bg-gray-100 border">Actor</th>
                {permissionTypes.map(({ label }) => (
                  <th
                    key={label}
                    className="text-left p-2 bg-gray-100 border text-gray-500"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {actors.map((actor) => (
                <tr key={actor}>
                  <td className="p-2 bg-gray-200 border">{actor}</td>
                  {permissionTypes.map(({ key }) => (
                    <td key={key} className="p-2 border">
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={permissions[actor][key]}
                        onChange={(e) =>
                          handlePermissionChange(actor, key, e.target.value)
                        }
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-5 my-5">
        <div>
          <select
            className="border-b border-gray-500 focus:outline-none w-1/2 py-2 bg-white"
            name=""
          >
            <option>
              What parameters would you like to add in the Final Recommendation?
            </option>
            <option> Revised CTC</option>
            <option> Variable Allowance</option>
            <option> Designation Change</option>
          </select>
        </div>
        <div>
          <select
            className="border-b border-gray-500 focus:outline-none w-1/2 py-2 bg-white"
            onChange={handleChange}
            value={selectedOption}
          >
            <option value="">
              What way can the final appraiser enter the revised CTC?
            </option>
            <option value="Fixed Amount">Fixed Amount</option>
            <option value="Salary hike in %">Salary hike in %</option>
          </select>

          {selectedOption === "Salary hike in %" && (
            <div className="mt-4">
              <select
                className="border-b border-gray-500 focus:outline-none w-1/2 py-2 bg-white"
                name=""
              >
                <option value="Select all">Select all</option>
                <option value="Performance Incentives" selected>
                  Performance Incentives
                </option>
                <option value="Annual Performance Bonus" selected>
                  Annual Performance Bonus
                </option>
                <option value="Part-timer" selected>
                  Part-timer
                </option>
                <option value="Variable Allowance dummy" selected>
                  Variable Allowance dummy
                </option>
                <option value="Variable allowance dummy" selected>
                  Variable allowance dummy
                </option>
                <option value="Trews">Trews</option>
                <option value="Test123">Test123</option>
                <option value="VV">VV</option>
              </select>
            </div>
          )}
        </div>
        <div>
          <label className="block text-base text-gray-900 mb-3">
            Do you want to link HR policy suggested % with final rating of the
            employee?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="rating"
                value="yes"
                className="mr-2"
                onChange={handleFinalRating}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="no"
                className="mr-2"
                onChange={handleFinalRating}
              />
              No
            </label>
          </div>
        </div>
        {finalRatingRadioButton && (
          <div>
            <label className="block text-base text-gray-900 mb-1">
              Please enter the HR Policy suggested CTC (% / amount) change
              values for the given rating.
            </label>
            <div className="grid grid-cols-2 gap-5 my-5">
              <h2>Rating range</h2>
              <h2>Recommended CTC</h2>
              <div className="border-b border-black col-span-2"></div>
              <input
                type="text"
                placeholder="Between 0-1"
                disabled
                className="border-b border-gray-500 focus:outline-none py-2 bg-white w-full"
              ></input>
              <input
                type="text"
                placeholder="0"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 "
              ></input>
              <input
                type="text"
                placeholder="Between 1-2"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 bg-white"
              ></input>
              <input
                type="text"
                placeholder="0"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 bg-white"
              ></input>
            </div>
          </div>
        )}
        {selectedOption === "Salary hike in %" && (
          <div className="mt-4">
            <select
              className="border-b border-gray-500 focus:outline-none w-1/2 py-2 bg-white"
              name=""
            >
              <option value="Select all">Select all</option>
              <option value="Performance Incentives" selected>
                Performance Incentives
              </option>
              <option value="Annual Performance Bonus" selected>
                Annual Performance Bonus
              </option>
              <option value="Part-timer" selected>
                Part-timer
              </option>
              <option value="Variable Allowance dummy" selected>
                Variable Allowance dummy
              </option>
              <option value="Variable allowance dummy" selected>
                Variable allowance dummy
              </option>
              <option value="Trews">Trews</option>
              <option value="Test123">Test123</option>
              <option value="VV">VV</option>
            </select>
          </div>
        )}
        <div>
          <label className="block text-base text-gray-900 mb-3">
            Do you want to link HR Policy Suggested Performance Linked Bonus
            Amount for the given rating?
          </label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="bonus"
                value="yes"
                className="mr-2"
                onChange={handleBonusAmount}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="bonus"
                value="no"
                className="mr-2"
                onChange={handleBonusAmount}
              />
              No
            </label>
          </div>
        </div>
        {bonusAmount && (
          <div>
            <label className="block text-base text-gray-900 mb-1">
              Please enter the HR Policy Suggested CTC/Performance Bonus
              information values for the given rating
            </label>
            <div className="grid grid-cols-2 gap-5 my-5">
              <h2>Rating range</h2>
              <h2>Recommended CTC</h2>
              <div className="border-b border-black col-span-2"></div>
              <input
                type="text"
                placeholder="Between 0-1"
                disabled
                className="border-b border-gray-500 focus:outline-none py-2 bg-white w-full"
              ></input>
              <input
                type="text"
                placeholder="0"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 "
              ></input>
              <input
                type="text"
                placeholder="Between 1-2"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 bg-white"
              ></input>
              <input
                type="text"
                placeholder="0"
                disabled
                className="border-b border-gray-500 focus:outline-none w-full py-2 bg-white"
              ></input>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PerformanceCycleSettingsAssessments;
