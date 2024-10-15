import React from "react";
import AdminHRMS from "../AdminHRMS";
import { PiPlusCircle } from "react-icons/pi";
import SurveySidebar from "./SurveySidebar";
import {
  FaBell,
  FaEllipsisH,
  FaEye,
  FaPencilAlt,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
function GeneralSurvey() {
    const chartOptions = {
        chart: {
          type: "donut",
        },
        labels: ["Completion"],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "80%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '10px', // Customize the label font size
                  color: '#333', // Adjust the label color if needed
                  offsetY: -2,
                },
                value: {
                  show: true,
                  fontSize: '10px', // Customize the value font size
                  fontWeight: 600,
                  color: '#333', // Value text color
                  offsetY: -1,
                },
                total: {
                  show: true,
                  label: "Completion",
                  fontSize: '10px', // Total label font size
                  fontWeight: 400,
                  color: '#333', // Total label text color
                  formatter: () => "0%", // You can adjust this to dynamically show a value
                },
              },
            },
          },
        },
        colors: ["#D1D5DB"], // Tailwind gray-300 as donut color
        legend: {
          position: "bottom",
          show: false,
        },
    };
  const chartSeries = [100];
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Karan Singh</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-12 gap-5 mx-5 my-3">
        <div className="col-span-3 ml-20">
          <SurveySidebar />
        </div>
        <div className="col-span-9 my-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              General Survey
            </h2>
            <button className="bg-white text-gray-500 font-semibold py-2 px-4 rounded flex items-center whitespace-nowrap gap-2">
              <PiPlusCircle size={15} />
              <span>Initiate Survey</span>
            </button>
          </div>
          <div className="my-2 bg-white rounded-md p-5">
            <div className="flex flex-col md:flex-row rounded-lg">
              <div className="w-40 ">
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
              </div>
              <div className="flex-grow md:ml-4">
                <div className="flex items-center mb-2">
                  <img
                    src="/brain-2.png"
                    alt="Brain icon"
                    className="w-6 h-6 mr-2"
                  />
                  <h2 className="text-lg font-semibold">General Survey</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border-r border-gray-300 pr-4">
                    <p className="text-sm text-gray-500">Status:</p>
                    <p className="font-semibold text-green-500">Active</p>
                  </div>
                  <div className="border-r border-gray-300 pr-4">
                    <p className="text-sm text-gray-500">Date Initiated:</p>
                    <p className="font-semibold">01-04-2024</p>
                  </div>
                  <div className="border-r border-gray-300 pr-4">
                    <p className="text-sm text-gray-500">Total Survey Count:</p>
                    <p className="font-semibold">44</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Responses:</p>
                    <p className="font-semibold">0</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <Link to={`/hrms/survey/general-survey-view`} className="bg-gray-500 text-white px-3 py-1 rounded-md flex items-center mr-2">
                  <FaEye className="mr-1" />
                  View
                </Link>
                <button className="border border-gray-300 p-1 rounded-md mr-2">
                  <FaTimes />
                </button>
                <div className="relative">
                  <button className="border border-gray-300 p-1 rounded-md">
                    <FaEllipsisH />
                  </button>
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <FaPencilAlt className="inline-block mr-2" />
                      Edit Settings
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <FaBell className="inline-block mr-2" />
                      Send Reminder
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <FaTrashAlt className="inline-block mr-2" />
                      Delete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSurvey;
