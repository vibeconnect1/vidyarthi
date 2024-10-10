import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PerformanceSetting from "./PerformanceSetting";
import Chart from "react-apexcharts";
import Table from "../../../ConfigurationFile/Table";
import { FaUserPlus } from "react-icons/fa";
import { MdLock } from "react-icons/md";
function PerformanceAssessment() {
  const [Assessment] = useState({
    series: [100],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Assessment",
              },
            },
          },
        },
      },
      labels: ["Assessment"],
      legend: {
        show: false,
        position: "bottom",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Submitted By",
      selector: (row) => row.submitted_by,
      sortable: true,
    },
    {
      name: "Submitted On",
      selector: (row) => row.submitted_on,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Anuj Singh - 13... 1",
      submitted_by: "Rahul Gupta - 39352",
      submitted_on: "09-08-2024",
    },
  ];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-1 items-center">
                <Link to={""}>
                  <IoIosArrowBack size={30} />
                </Link>
                <h1 className="text-3xl font-bold">
                  Performance Management System
                </h1>
              </div>
              <p className="mx-10 my-2">
                Performance reviews and ratings for each employee under this
                Section
              </p>
            </div>
            <div className="mx-5">
              <select className="border-2 py-2 px-4 rounded-md w-full">
                <option>Select Performance Cycle</option>
                <option value="xyz">xyz</option>
                <option value="My Company Cycle">My Company Cycle</option>
                <option value="Quikchex PMS">Quikchex PMS</option>
                <option value="OKR Performance cycle">
                  OKR Performance cycle
                </option>
                <option value="Quarterly Review">Quarterly Review</option>
                <option value="Bi Annual Review Term 1 2023">
                  Bi Annual Review Term 1 2023
                </option>
                <option value="BI 2">BI 2</option>
                <option value="kjbajflnlanv">kjbajflnlanv</option>
                <option value="D - Demo">D - Demo</option>
                <option value="Sales temp 27836873y">
                  Sales temp 27836873y
                </option>
                <option value="Sales Monthly review">
                  Sales Monthly review
                </option>
              </select>
            </div>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-3 my-3 rounded-md ml-20">
          <div>
            <PerformanceSetting />
          </div>
        </div>
        <div className="col-span-9 rounded-md">
          <div className="flex justify-between my-3 col-span-12 border-b border-gray-400 py-3">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Assessment 1 (Unlocked)
            </h2>
            <div className="flex gap-2">
              <Link
                to={`/hrms/performance/performance-assign-assessor-assessment`}
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-1"
              >
                <FaUserPlus /> Assign Assessment Assessor
              </Link>
              <button className="bg-gray-400 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-1">
                <MdLock /> View Assessment Master
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className=" bg-white w-full rounded-md col-span-3 h-fit pb-5">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Assessment 1 Completion</h2>
              </div>
              <div className="flex justify-center">
                <Chart
                  options={Assessment.options}
                  series={Assessment.series}
                  type="donut"
                  width="300"
                />
              </div>
            </div>
            <div className="col-span-9">
              <div className="bg-white rounded-md p-5">
                <div className="flex justify-between">
                  <h2 className="flex items-center text-gray-800 text-xl font-medium">
                    Employee Assessment Master
                  </h2>
                  <div className="flex gap-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Search by Employee Name or Code"
                        className="border border-gray-500 py-1 px-2 text-black rounded-xl"
                      />
                    </div>
                    <div>
                      <Link
                        to={`/hrms/performance/performance-view-assessment-master`}
                        className="bg-gray-400 text-white font-semibold py-1 px-4 rounded flex items-center justify-center"
                      >
                        View Assessment Master
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <Table columns={columns} data={data} selectableRows={true} />
                </div>
                <div className="flex justify-center my-5">
                  <Link
                    to={`/hrms/performance/performance-assessment-view-all-submissions`}
                    className="border border-gray-400 text-gray-500 font-semibold py-1 px-4 rounded flex items-center justify-center"
                  >
                    View All Submissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceAssessment;
