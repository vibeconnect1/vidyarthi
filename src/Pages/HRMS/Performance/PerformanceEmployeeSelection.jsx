import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PerformanceSetting from "./PerformanceSetting";
import Chart from "react-apexcharts";
import { BsEye } from "react-icons/bs";
import Table from "../../../ConfigurationFile/Table";
import filter from "/filter.png";
import { FaChevronDown } from "react-icons/fa";
import { PiPlusCircle } from "react-icons/pi";
function PerformanceEmployeeSelection() {
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
                label: "Total",
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

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "flat",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["A1"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      max: 100,
    },
    grid: {
      borderColor: "#f1f1f1",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ["#1e3a8a"], // Dark blue color
    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Eligibility",
      data: [100],
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Eligible Assessment",
      selector: (row) => row.eligible_assessment,
      sortable: true,
    },
    {
      name: "Final Recommendation",
      selector: (row) => row.final_recommendation,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center">
          <button className="border p-2">
            <PiPlusCircle size={15} />
          </button>
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Anuj Singh - 13... 1",
      eligible_assessment: "",
      final_recommendation: "",
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
                <h2 className="font-medium">Active Employees</h2>
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
                <h2 className="font-medium">Goal Period Eligibility</h2>
              </div>
              <div className="flex justify-center">
                <img src="/NoImg.jpg" className="w-60 h-40"></img>
              </div>
              <h2 className="text-center">No Available Data to display</h2>
            </div>
            <div className=" bg-white w-full rounded-md">
              <div className="border-b my-3 px-3 pb-2">
                <h2 className="font-medium">Assesment Eligibility</h2>
              </div>
              <div className="w-full h-64">
                <Chart
                  options={chartOptions}
                  series={series}
                  type="bar"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div className="py-3 my-5">
            <div className="flex justify-between">
              <h2 className="flex items-center text-gray-800 text-xl font-medium">
                Employee Selection
              </h2>
              <div className="flex gap-2">
                <div>
                  <input
                    type="text"
                    placeholder="Search by Employee Name or Code"
                    className="border border-gray-500 py-2 px-2 text-black rounded-xl"
                  />
                </div>
                <button className="bg-white rounded-full h-10 w-10">
                  <span className="flex justify-center items-center text-black">
                    <img src={filter} alt="filter-icon" />
                  </span>
                </button>
                <div>
                  <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center justify-center space-x-2 w-full">
                    <span>Actions</span>
                    <FaChevronDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="my-3">
              <Table columns={columns} data={data} selectableRows={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceEmployeeSelection;
