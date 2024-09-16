import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
function ExamTimeTableDetails() {
  const columns = [
    { name: "Paper Code", selector: (row) => row.paperCode },
    { name: "Subject", selector: (row) => row.subject },
    { name: "Date", selector: (row) => row.date },
    { name: "Start Time", selector: (row) => row.startTime },
    { name: "End Time", selector: (row) => row.endTime },
  ];
  
  const data = [
    {
      id: 1,
      paperCode: "101",
      subject: "English",
      date: "2024-09-10",
      startTime: "09:00 Am",
      endTime: "11:00 Am",
    },
    {
      id: 2,
      paperCode: "102",
      subject: "Hindi",
      date: "2024-09-11",
      startTime: "09:00 Am",
      endTime: "11:00 Am",
    },
    {
      id: 3,
      paperCode: "103",
      subject: "Math",
      date: "2024-09-13",
      startTime: "09:00 Am",
      endTime: "11:00 Am",
    },
    {
      id: 4,
      paperCode: "104",
      subject: "Science",
      date: "2024-09-15",
      startTime: "09:00 Am",
      endTime: "11:00 Am",
    },
  ];
  

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full p-5">
          <div className="bg-white shadow-md rounded-md p-5">
            <div className="mb-5">
              <div className="flex gap-5">
                <h2 className="text-lg font-semibold text-gray-700">
                  Unit Test
                </h2>
                <h2 className="text-lg font-semibold text-gray-700">10th</h2>
              </div>
              <div className="flex space-x-4 mt-2">
                <p className="text-sm font-medium text-gray-600">Start Date:</p>
                <p className="text-sm text-gray-600">2024-09-10</p>
                <p className="text-sm font-medium text-gray-600">End Date:</p>
                <p className="text-sm text-gray-600">2024-09-15</p>
              </div>
            </div>
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamTimeTableDetails;
