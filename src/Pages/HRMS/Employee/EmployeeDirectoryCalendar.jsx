import React from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import EmployeeDirectoryCalendarSetting from "./EmployeeDirectoryCalendarSetting";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardArrowRight,
} from "react-icons/md";
function EmployeeDirectoryCalendar() {
  const events = [
    { date: 30, title: "1 W. Anniversary", color: "bg-purple-200" },
    { date: 2, title: "Gandhi Jayanti", color: "bg-green-200" },
    { date: 13, title: "1 Birthday", color: "bg-blue-200" },
    { date: 24, title: "1 Birthday", color: "bg-blue-200" },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const renderCalendarDays = () => {
    const days = [];
    for (let i = 29; i <= 54; i++) {
      const date = i > 31 ? i - 31 : i;
      const isSaturday = (i - 29 + 7) % 7 === 6;
      const event = events.find((e) => e.date === date);

      days.push(
        <div
          key={i}
          className={`border p-2 h-24 ${isSaturday ? "bg-yellow-50" : ""}`}
        >
          <div className="text-right text-gray-500">{date}</div>
          {event && (
            <div className={`mt-1 p-1 text-xs rounded ${event.color}`}>
              {event.title}
            </div>
          )}
        </div>
      );
    }
    return days;
  };
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 border border-gray-400 pl-20">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Calendar</h1>
          </div>
          <p className="text-sm my-2 mx-3">
            Comprehensive Calendar View of Company-Wide Events
          </p>
        </header>
        <div className="grid grid-cols-12 gap-5 mx-5">
          <div className="col-span-4 my-3 rounded-md">
            <EmployeeDirectoryCalendarSetting />
          </div>
          <div className="col-span-8">
            <div className="flex justify-between my-3">
              <h2 className="font-medium text-gray-800 text-xl">
                October 2024
              </h2>
              <div className="flex gap-1">
                <span className="bg-gray-500 rounded-2xl h-8 w-8 flex justify-center items-center text-white">
                  <MdArrowBackIos />
                </span>
                <span className="bg-gray-500 rounded-2xl h-8 w-8 flex justify-center items-center text-white">
                  <MdArrowForwardIos />
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-7 gap-px bg-white rounded-md">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="bg-white p-2 text-center font-semibold"
                  >
                    {day}
                  </div>
                ))}
                {renderCalendarDays()}
              </div>
            </div>
            <div className="flex gap-x-8 space-y-3 flex-wrap">
              <div className="flex gap-2 items-center mt-3">
                <div className="bg-blue-400 rounded-full w-4 h-4"></div>
                <h2>Birthday</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-violet-400 rounded-full w-4 h-4"></div>
                <h2>Work Anniversary</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-green-400 rounded-full w-4 h-4"></div>
                <h2>Approved Leave / Holiday</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-800 rounded-full w-4 h-4"></div>
                <h2>Son Birthday</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-orange-400 rounded-full w-4 h-4"></div>
                <h2> Age Group</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-yellow-400 rounded-full w-4 h-4"></div>
                <h2> Grey Day</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-sky-400 rounded-full w-4 h-4"></div>
                <h2> Onboarding Task</h2>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-amber-700 rounded-full w-4 h-4"></div>
                <h2> Offboarding Task</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectoryCalendar;
