import React from "react";
import Table from "../../../ConfigurationFile/Table";
import { Link } from "react-router-dom";

function PerformanceCycleSettingsReviewPeriod() {
  const column = [
    {
      name: "Submission Period",
      selector: (row) => row.submission_period,
    },
    {
      name: "Submission Period Date Range",
      selector: (row) => row.submission_period_date_range,
      sortable: true,
    },
    {
      name: "weightage",
      selector: (row) => (<div className="bg-sky-100 p-2 rounded-md">
        {row.weightage}
      </div>),
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      submission_period: "Year Period 1",
      submission_period_date_range: "01-04-2024 to 31-03-2025",
      weightage: "100%",
    },
  ];
  return (
    <div className="my-2 bg-white rounded-md py-5 px-5">
      <div className="">
        <h2 className="text-xl font-medium">Review Period</h2>
      </div>
      <div className="mt-5 mb-10">
        <label className="text-gray-900">
          When does your review cycle start? *
        </label>
        <div className="flex gap-5">
          <select
            id=""
            name=""
            disabled
            className="border-b border-gray-500 focus:outline-none w-40 py-2"
          >
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option selected="selected" value="Apr">
              Apr
            </option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>

          <select
            id=""
            name=""
            disabled
            className="border-b border-gray-500 focus:outline-none w-40 py-2"
          >
            <option selected="selected" value="2024">
              2024
            </option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div className="border-t py-8 mt-5">
        <h2>
          Please define your performance appraisal schedule
          <Link className="text-blue-500 mx-2">Instructions</Link>
        </h2>
      </div>
      <div className="my-5">
        <label className="text-gray-900">
          Please select frequency of evaluation submission?
        </label>
        <div className="flex gap-5">
          <select
            id=""
            name=""
            disabled
            className="border-b border-gray-500 focus:outline-none w-60 py-2"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half Yearly">Half Yearly</option>
            <option selected="selected" value="Annually">
              Annually
            </option>
          </select>
        </div>
      </div>
      <div className="my-8">
        <h2>Evaluation Plan Submission</h2>
        <Table columns={column} data={data} />
      </div>
    </div>
  );
}

export default PerformanceCycleSettingsReviewPeriod;
 