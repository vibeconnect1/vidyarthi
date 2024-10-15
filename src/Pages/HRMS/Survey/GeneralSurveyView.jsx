import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import SurveySidebar from "./SurveySidebar";
import {
  FaExclamationCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
function GeneralSurveyView() {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: ["%"],
    dataLabels: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "10px", // Customize the label font size
              color: "#333", // Adjust the label color if needed
              offsetY: 5, // Adjust this to position it
            },
            value: {
              show: false,
              fontSize: "10px", // Customize the value font size
              fontWeight: 600,
              color: "#333", // Value text color
              offsetY: 10,
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
  const [activeSlide, setActiveSlide] = useState(0);

  const barChartOptions = {
    chart: { type: "bar" },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "55%", endingShape: "rounded" },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: ["May-24", "Jun-24", "Jul-24", "Aug-24", "Sep-24", "Oct-24"],
    },
    yaxis: { title: { text: "Count" } },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };
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
      <div className="grid grid-cols-12 gap-5  my-3">
        <div className="col-span-3 ml-24">
          <SurveySidebar />
        </div>
        <div className="col-span-9 my-5">
          <div className="my-2  rounded-md">
            <div className="w-full max-w-6xl mx-auto p-4">
              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h3 className="flex items-center text-xl font-bold mb-2 md:mb-0">
                  <img
                    src="/customer-satisfaction.png"
                    alt="Customer Satisfaction"
                    className="w-8 h-8 mr-2"
                  />
                  General Survey Analysis
                </h3>
                <div className="flex items-center">
                  <p className="text-lg mr-4 flex items-center">
                    NPS=
                    <span className="text-green-600 font-semibold">
                      % Promoter
                    </span>
                    -
                    <span className="text-red-600 font-semibold">
                      % Detractor
                    </span>
                    <button className="ml-3 text-blue-500 hover:text-blue-700">
                      <FaExclamationCircle />
                    </button>
                  </p>
                  <button className="p-2 bg-gray-400  rounded-full mr-2 hover:bg-gray-300 transition-colors">
                    <FaChevronLeft className="text-white" />
                  </button>
                  <button className="p-2 bg-gray-400 text-white rounded-full hover:bg-gray-300 transition-colors">
                    <FaChevronRight className="" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-3">
                    <h2 className="flex justify-center w-full bg-gray-200 rounded-md">
                      Overall NPS
                    </h2>
                  </div>
                  <div className="col-span-9 w-full bg-gray-200 rounded-md">
                    <div className="grid grid-cols-12">
                      <div className="col-span-6 py-5">
                        <div className="border-r border-gray-400 pr-4">
                          <div className="flex gap-1 w-fit">
                            <div className="w-fit">
                              <Chart
                                options={chartOptions}
                                series={chartSeries}
                                type="donut"
                                width="120px"
                              />
                            </div>
                            <div>
                              <h2>Detractor</h2>
                              <p>Responses count:</p>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  1
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-red-300 w-5 my-5"></div>
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  2
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-red-300 w-5 my-5"></div>
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  3
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-red-300 w-5 my-5"></div>
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  4
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-red-300 w-5 my-5"></div>
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  5
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-red-300 w-5 my-5"></div>
                            <div className="bg-red-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-red-500">
                                <img src="/emoji.png" className="h-4 w-4"></img>
                                <h2 className="text-center text-xs font-medium">
                                  6
                                </h2>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 py-5">
                        <div className="border-r border-gray-400 pr-4">
                          <div className="flex">
                            <div>
                              <Chart
                                options={chartOptions}
                                series={chartSeries}
                                type="donut"
                                width="120px"
                              />
                            </div>
                            <div>
                              <h2>Passive</h2>
                              <p>Responses Count:</p>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="bg-yellow-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-yellow-500">
                                <img
                                  src="/emoji2.png"
                                  className="h-4 w-4"
                                ></img>
                                <h2 className="text-center text-xs font-medium">
                                  7
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-yellow-300 w-5 my-5"></div>
                            <div className="bg-yellow-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-yellow-500">
                                <img
                                  src="/emoji2.png"
                                  className="h-4 w-4"
                                ></img>
                                <h2 className="text-center text-xs font-medium">
                                  8
                                </h2>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 py-5">
                        <div className="border-r border-gray-400 pr-4">
                          <div className="flex gap-1">
                            <div>
                              <Chart
                                options={chartOptions}
                                series={chartSeries}
                                type="donut"
                                width="120px"
                              />
                            </div>
                            <div>
                              <h2>Promoter</h2>
                              <p>Responses Count:</p>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <div className="bg-green-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-green-500">
                                <img
                                  src="/emoji3.png"
                                  className="h-4 w-4"
                                ></img>
                                <h2 className="text-center text-xs font-medium">
                                  9
                                </h2>
                              </span>
                            </div>
                            <div className="border-t-2 border-dashed border-green-300 w-5 my-5"></div>
                            <div className="bg-green-100 w-fit px-3 py-2 rounded-md h-fit">
                              <span className="text-green-500">
                                <img
                                  src="/emoji3.png"
                                  className="h-4 w-4"
                                ></img>
                                <h2 className="text-center text-xs font-medium">
                                  10
                                </h2>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4">
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-white rounded-lg shadow p-4">
                          <h3 className="text-lg font-semibold mb-2">
                            No. of Surveys
                          </h3>
                          <ReactApexChart
                            options={barChartOptions}
                            series={[
                              { name: "Surveys", data: [0, 0, 0, 0, 0, 0] },
                            ]}
                            type="bar"
                            height={200}
                          />
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                          <h3 className="text-lg font-semibold mb-2">
                            Overall NPS%
                          </h3>
                          <ReactApexChart
                            options={{
                              ...barChartOptions,
                              colors: ["#59508d"],
                            }}
                            series={[{ name: "NPS", data: [0, 0, 0, 0, 0, 0] }]}
                            type="bar"
                            height={200}
                          />
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">
                              Average NPS of each category
                            </h3>
                            <div className="flex">
                              <button
                                onClick={() =>
                                  setActiveSlide((prev) => (prev - 1 + 3) % 3)
                                }
                                className="mr-2"
                              >
                                <FaChevronLeft />
                              </button>
                              <button
                                onClick={() =>
                                  setActiveSlide((prev) => (prev + 1) % 3)
                                }
                              >
                                <FaChevronRight />
                              </button>
                            </div>
                          </div>
                          <div className="h-48 flex items-center justify-center">
                            <p className="text-gray-500">
                              Category {activeSlide + 1} NPS Data
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSurveyView;
