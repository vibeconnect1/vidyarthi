import React from "react";
import InstituteDetails from "./InstituteDetails";

function ClassTimeTableDetails() {
  const timetableData = [
    {
      period: "Assembly",
      time: "9:05 - 9:20 am",
      day1: "",
      teacherDay1: "",
      day2: "",
      teacherDay2: "",
      day3: "",
      teacherDay3: "",
      day4: "",
      teacherDay4: "",
      day5: "",
      teacherDay5: "",
    },
    {
      period: "1st Period",
      time: "9:20 - 9:55 am",
      day1: "Math",
      teacherDay1: "Mr. Smith",
      day2: "Science",
      teacherDay2: "Ms. Johnson",
      day3: "English",
      teacherDay3: "Mr. Brown",
      day4: "History",
      teacherDay4: "Mr. Clark",
      day5: "Art",
      teacherDay5: "Ms. Green",
    },
    {
      period: "2nd Period",
      time: "9:55 - 10:30 am",
      day1: "Science",
      teacherDay1: "Ms. Johnson",
      day2: "English",
      teacherDay2: "Mr. Brown",
      day3: "Math",
      teacherDay3: "Mr. Smith",
      day4: "Geography",
      teacherDay4: "Mrs. Adams",
      day5: "PE",
      teacherDay5: "Mr. Parker",
    },
    {
      period: "3rd Period",
      time: "10:30 - 11:05 am",
      day1: "History",
      teacherDay1: "Mr. Clark",
      day2: "Geography",
      teacherDay2: "Mrs. Adams",
      day3: "Art",
      teacherDay3: "Ms. Green",
      day4: "PE",
      teacherDay4: "Mr. Parker",
      day5: "Math",
      teacherDay5: "Mr. Smith",
    },
    {
      period: "Breakfast",
      time: "11:05 - 11:25 am",
      day1: "",
      teacherDay1: "",
      day2: "",
      teacherDay2: "",
      day3: "",
      teacherDay3: "",
      day4: "",
      teacherDay4: "",
      day5: "",
      teacherDay5: "",
    },
    {
      period: "4th Period",
      time: "11:25 - 12:00 pm",
      day1: "Physics",
      teacherDay1: "Mr. Lee",
      day2: "Chemistry",
      teacherDay2: "Ms. Thompson",
      day3: "Biology",
      teacherDay3: "Dr. White",
      day4: "Math",
      teacherDay4: "Mr. Smith",
      day5: "English",
      teacherDay5: "Mr. Brown",
    },
    {
      period: "5th Period",
      time: "12:00 - 12:35 pm",
      day1: "Math",
      teacherDay1: "Mr. Smith",
      day2: "History",
      teacherDay2: "Mr. Clark",
      day3: "English",
      teacherDay3: "Mr. Brown",
      day4: "Science",
      teacherDay4: "Ms. Johnson",
      day5: "Art",
      teacherDay5: "Ms. Green",
    },
    {
      period: "Lunch",
      time: "12:35 - 1:10 pm",
      day1: "",
      teacherDay1: "",
      day2: "",
      teacherDay2: "",
      day3: "",
      teacherDay3: "",
      day4: "",
      teacherDay4: "",
      day5: "",
      teacherDay5: "",
    },
    {
      period: "6th Period",
      time: "1:10 - 1:35 pm",
      day1: "PE",
      teacherDay1: "Mr. Parker",
      day2: "Art",
      teacherDay2: "Ms. Green",
      day3: "Science",
      teacherDay3: "Ms. Johnson",
      day4: "English",
      teacherDay4: "Mr. Brown",
      day5: "Physics",
      teacherDay5: "Mr. Lee",
    },
    {
      period: "7th Period",
      time: "1:35 - 2:05 pm",
      day1: "English",
      teacherDay1: "Mr. Brown",
      day2: "Math",
      teacherDay2: "Mr. Smith",
      day3: "Geography",
      teacherDay3: "Mrs. Adams",
      day4: "Art",
      teacherDay4: "Ms. Green",
      day5: "PE",
      teacherDay5: "Mr. Parker",
    },
  ];

  return (
    <div className="flex">
      <InstituteDetails />
      <div className="flex flex-col w-full">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Class TimeTable
        </h2>
        <div className="overflow-x-auto max-w-full bg-white mx-10 px-3 py-5">
          <div className="flex gap-3 my-3">
            <div className="flex items-center">
              <div className="text-gray-700 font-semibold text-lg mr-2">
                Class:
              </div>
              <div className="text-gray-900 text-lg">3th</div>
            </div>
            <div className="flex items-center">
              <div className="text-gray-700 font-semibold text-lg mr-2">
                Division:
              </div>
              <div className="text-gray-900 text-lg">A</div>
            </div>
          </div>
          <table className="min-w-full table-auto border-collapse border border-gray-400">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 p-2 text-left">Period</th>
                <th className="border border-gray-400 p-2 text-left">Time</th>
                <th className="border border-gray-400 p-2 text-left">Day 1</th>
                <th className="border border-gray-400 p-2 text-left">
                  Teacher
                </th>
                <th className="border border-gray-400 p-2 text-left">Day 2</th>
                <th className="border border-gray-400 p-2 text-left">
                  Teacher
                </th>
                <th className="border border-gray-400 p-2 text-left">Day 3</th>
                <th className="border border-gray-400 p-2 text-left">
                  Teacher
                </th>
                <th className="border border-gray-400 p-2 text-left">Day 4</th>
                <th className="border border-gray-400 p-2 text-left">
                  Teacher
                </th>
                <th className="border border-gray-400 p-2 text-left">Day 5</th>
                <th className="border border-gray-400 p-2 text-left">
                  Teacher
                </th>
              </tr>
            </thead>
            <tbody>
              {timetableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2">{row.period}</td>
                  <td className="border border-gray-400 p-2">{row.time}</td>
                  <td className="border border-gray-400 p-2">{row.day1}</td>
                  <td className="border border-gray-400 p-2">
                    {row.teacherDay1}
                  </td>
                  <td className="border border-gray-400 p-2">{row.day2}</td>
                  <td className="border border-gray-400 p-2">
                    {row.teacherDay2}
                  </td>
                  <td className="border border-gray-400 p-2">{row.day3}</td>
                  <td className="border border-gray-400 p-2">
                    {row.teacherDay3}
                  </td>
                  <td className="border border-gray-400 p-2">{row.day4}</td>
                  <td className="border border-gray-400 p-2">
                    {row.teacherDay4}
                  </td>
                  <td className="border border-gray-400 p-2">{row.day5}</td>
                  <td className="border border-gray-400 p-2">
                    {row.teacherDay5}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClassTimeTableDetails;
