import React, { useState } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { ImFileText2 } from "react-icons/im";
import { AiOutlineBell } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdSettings, MdAnnouncement, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import AdminHRMS from "./AdminHRMS";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const HRMSDashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
document.title= `HRMS Vibe Connect`
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };

  const departmentDistributionData = {
    labels: ["Unassigned", "Trainer"],
    datasets: [
      {
        data: [1, 2],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      position: "bottom",
    },
  };

  const employeeHeadCountData = {
    labels: ["Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24"],
    datasets: [
      {
        label: "Active",
        backgroundColor: "#36A2EB",
        data: [10, 12, 14, 16, 18, 20],
      },
      {
        label: "On-Hold",
        backgroundColor: "#FFCE56",
        data: [1, 1, 1, 1, 1, 1],
      },
      {
        label: "In-Active",
        backgroundColor: "#FF6384",
        data: [1, 1, 1, 1, 1, 1],
      },
    ],
  };

  const ctcPayoutData = {
    labels: ["Dec 23", "Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24"],
    datasets: [
      {
        label: "CTC",
        borderColor: "#36A2EB",
        data: [2, 2.5, 3, 3.5, 4, 4.5],
        fill: false,
      },
      {
        label: "Net Salary",
        borderColor: "#FFCE56",
        data: [1.5, 1.7, 1.9, 2.1, 2.3, 2.5],
        fill: false,
      },
    ],
  };

  return (
    <section className="flex ">
      <AdminHRMS />
      {/* <div className="flex-1 flex flex-col"> */}
      <div className="p-2 w-full flex  overflow-hidden flex-col">
        <div className="bg-white flex justify-items-end  p-4 shadow-md absolute overflow-y-auto top-0 left-0 right-0">
          <h1 className="text-2xl font-bold pl-20 top-0 left-0 right-0">
            Welcome, Mittu Panda
          </h1>
          <div
            className="bg-white mt-1 text-black text-center font-semibold absolute right-32 border-r-4"
            style={{ width: "130px", height: "30px", borderRadius: "5%" }}
          >
            Vibe CopilotAI
          </div>
          &nbsp;
          {/* <div
            className="bg-blue-500 text-white border border-r-2 mr-2 rounded-full absolute right-2 "
            onClick={toggleExpand1}
            style={{ cursor: "pointer", padding: "10px", borderRadius: "50%" }}
          >
            <BiUser size={18} />
          </div>
          <div
            className="bg-blue-500 text-white border border-r-2 rounded-full absolute right-20 "
            // onClick={toggleExpand1}
            style={{ cursor: "pointer", padding: "10px", borderRadius: "50%" }}
          >
            <AiOutlineBell size={18} />
          </div> */}
        </div>

        <div className="mt-20 overflow-y-auto absolute top-1 left-20">
          <Link
            to={"/dashboard"}
            className="text-blue-400 mx-10 underline font-medium"
          >
            Home{">"}
          </Link>
          <div className="flex justify-between ">
            <div
              className="bg-white p-6 rounded-lg shadow-custom-all-sides m-4 z-10 "
              style={{ width: "380px", height: "360px" }}
            >
              <h3 className=" font-semibold">Department Distribution</h3>
              <Doughnut
                data={departmentDistributionData}
                options={{ options }}
              />
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-custom-all-sides m-4 z-10"
              style={{ width: "380px", height: "350px" }}
            >
              <h3 className=" font-semibold mb-4">Employee Head Count</h3>
              <Bar
                data={employeeHeadCountData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-custom-all-sides m-4 z-10"
              style={{ width: "380px", height: "350px" }}
            >
              <h3 className=" font-semibold mb-4">
                CTC Payout (Last 6 months)
              </h3>
              <Line
                data={ctcPayoutData}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col overflow-hidden mt-10">
            <div className="flex justify-start gap-4 my-5 flex-wrap ml-5">
              <div className="shadow-xl rounded-full border-4 border-gray-400 w-60 px-6 flex flex-col items-center">
                <p className="font-semibold md:text-lg">Pending Requests</p>
                <p className="text-center font-semibold md:text-lg">2</p>
              </div>
              <div className="shadow-xl rounded-full border-4 border-green-400 w-60  px-6 flex flex-col items-center ml-5">
                <p className="font-semibold md:text-lg">Process Alerts</p>
                <p className="text-center font-semibold md:text-lg">1</p>
              </div>
              <div className="shadow-xl rounded-full border-4 border-red-400 w-60 px-6 flex flex-col items-center ml-5">
                <p className="font-semibold md:text-lg">Today's Events</p>
                <p className="text-center font-semibold md:text-lg">0</p>
              </div>
              <div className="shadow-xl rounded-full border-4 border-orange-400 w-60 px-6 flex flex-col items-center ml-5">
                <p className="font-semibold md:text-lg">Setup Issues</p>
                <p className="text-center font-semibold md:text-lg">1</p>
              </div>
              <div className=" flex justify-end w-full ">
                <p className="font-semibold m-5 bg-gray-100 p-2 rounded-full text-right">
                  Today's Birthdays / Work Anniversaries (0)
                </p>
              </div>

              <div className="flex flex-col ">
                <div className="font-medium mt-10 ml-5">
                  <h1 className="text-xl flex items-center gap-2">Announcement <IoReload /> </h1>
                </div>
                <div className="font-medium text-2xl mb-10 mt-10 ml-5">
                  <h1 className="text-xl flex items-center gap-2">Employee Feeds <IoReload /></h1>
                </div>
              </div>
            </div>
          </div>

          {expanded && (
            <div className="absolute bottom-2 right-10 mt-10 w-48 bg-white rounded-lg shadow-lg z-30">
              <ul className="py-1">
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  <MdSettings size={20} className="mr-2" />
                  Settings
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  <MdAnnouncement size={20} className="mr-2" />
                  Announcement
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  <MdPostAdd size={20} className="mr-2" />
                  Post
                </li>
              </ul>
            </div>
          )}
          {expanded1 && (
            <div className="absolute right-0 top-0 w-48 bg-white rounded-lg shadow-custom-all-sides m-2 z-20">
              <ul className="py-1">
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  {/* <MdSettings size={20} className="mr-2" /> */}
                  Switch to Employee
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  {/* <MdAnnouncement size={20} className="mr-2" /> */}
                  Notification setting
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  {/* <MdPostAdd size={20} className="mr-2" /> */}
                  Help Center
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  {/* <MdPostAdd size={20} className="mr-2" /> */}
                  Submit a ticket
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center">
                  {/* <MdPostAdd size={20} className="mr-2" /> */}
                  Sign Out
                </li>
              </ul>
            </div>
          )}

          <div className="absolute bottom-3 right-4 mb-3">
            <div
              className="bg-blue-500 text-white border border-r-2 rounded-full"
              onClick={toggleExpand}
              style={{
                cursor: "pointer",
                padding: "10px",
                borderRadius: "50%",
              }}
            >
              <FaPlus size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRMSDashboard