import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PerformanceSetting from "./PerformanceSetting";
import Chart from "react-apexcharts";
import { BsEye } from "react-icons/bs";
import Table from "../../../ConfigurationFile/Table";
function PerformanceDashboard() {
  const [page, setPage] = useState("assessments");
  const [employee] = useState({
    series: [1, 65],
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
                label: "Total Employee",
              },
            },
          },
        },
      },
      labels: ["Assigned", "Not Assigned"],
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

  const employeeOptions = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false, // Disable the toolbar to remove icons
      },
    },
    colors: ["#3d5ee1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    series: [
      {
        name: "Employee",
        data: [0, 1, 0, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.65,
        opacityTo: 0.5,
      },
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        categories: ["0-1", "1-2", "2-3", "3-4"],
      },
    },
    grid: {
      show: false,
    },
  };

  const assessmentsColumns = [
    {
      name: "Period",
      selector: (row) => row.period,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Total Eligible Employees	",
      selector: (row) => row.total_eligible_employees,
      sortable: true,
    },
    {
      name: "Completed Employees",
      selector: (row) => row.completed_employees,
      sortable: true,
    },
    {
      name: "Pending Employees",
      selector: (row) => row.pending_employees,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link to={`/hrms/performance/performance-assessment/${row.id}`} className="border p-2">
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const assessmentsData = [
    {
      id: 1,
      period: "Assessment 1",
      status: "Unlocked",
      total_eligible_employees: "1",
      completed_employees: "1",
      pending_employees: "0",
    },
  ];
  const finalRecommendationColumns = [
    {
      name: "Period",
      selector: (row) => row.period,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Total Eligible Employees	",
      selector: (row) => row.total_eligible_employees,
      sortable: true,
    },
    {
      name: "Completed Employees",
      selector: (row) => row.completed_employees,
      sortable: true,
    },
    {
      name: "Pending Employees",
      selector: (row) => row.pending_employees,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <Link to={`/hrms/performance/performance-final-recommendation/${row.id}`} className="border p-2">
            <BsEye size={15} />
          </Link>
        </div>
      ),
    },
  ];
  const finalRecommendationData = [
    {
      id: 1,
      period: "Final Recommendation",
      status: "Locked",
      total_eligible_employees: "1",
      completed_employees: "0",
      pending_employees: "1",
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
        <div className="col-span-9 my-3 rounded-md">
          <div className="grid grid-cols-3 gap-5">
            <div className=" bg-white w-full rounded-md">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Cycle Assigned</h2>
              </div>
              <div>
                <Chart
                  options={employee.options}
                  series={employee.series}
                  type="donut"
                  width="300"
                />
              </div>
            </div>
            <div className=" bg-white w-full rounded-md">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Goal Progress Status</h2>
              </div>
              <div className="flex justify-center">
                <img src="/NoImg.jpg" className="w-60 h-40"></img>
              </div>
              <h2 className="text-center">No Available Data to display</h2>
            </div>
            <div className=" bg-white w-full rounded-md">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Employee Rating Scale</h2>
              </div>
              <div className="w-full h-full">
                <Chart
                  options={employeeOptions}
                  series={employeeOptions.series}
                  type="area"
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-md py-3 my-5">
            <div className="border-b my-3 px-3 pb-2">
              <h2 className="font-medium">Timeline</h2>
            </div>
            <div className="flex w-full">
              <div className=" flex gap-2 border-b w-full">
                <h2
                  className={`p-1 ${
                    page === "assessments" &&
                    `bg-white font-medium text-blue-500 shadow-custom-all-sides`
                  } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                  onClick={() => setPage("assessments")}
                >
                  Assessments
                </h2>
                <h2
                  className={`p-1 ${
                    page === "finalRecommendation" &&
                    "bg-white font-medium text-blue-500 shadow-custom-all-sides"
                  } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={() => setPage("finalRecommendation")}
                >
                  Final Recommendation
                </h2>
              </div>
            </div>
            {page === "assessments" && (
              <div className="my-2">
                <Table columns={assessmentsColumns} data={assessmentsData} />
              </div>
            )}
            {page === "finalRecommendation" && (
              <div className="my-2">
                <Table
                  columns={finalRecommendationColumns}
                  data={finalRecommendationData}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceDashboard;
