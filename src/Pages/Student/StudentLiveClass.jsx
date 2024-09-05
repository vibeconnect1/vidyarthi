import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import Table from "../../ConfigurationFile/Table";

function StudentLiveClass() {
  const columns = [
    {
      name: "Topic",
      selector: (row) => row.topic,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
    },
    {
      name: "Date & Time",
      selector: (row) => row.dateTime,
    },
    {
      name: "Meeting Id",
      selector: (row) => row.meetingId,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Teacher",
      selector: (row) => row.teacher,
    },
    {
      name: "Join Link",
      selector: (row) => row.joinLink,
    },
  ];

  const data = [
    {
      topic: "Mathematics Review",
      duration: "45 minutes",
      dateTime: "2024-09-03 10:00 AM",
      meetingId: "123-456-789",
      password: "abc123",
      subject: "Mathematics",
      teacher: "Rahul Singh",
      joinLink: "https://example.com/meeting/123-456-789",
    },
    {
      topic: "Science Experiment",
      duration: "60 minutes",
      dateTime: "2024-09-04 11:00 AM",
      meetingId: "987-654-321",
      password: "def456",
      subject: "Science",
      teacher: "Vs Pavan",
      joinLink: "https://example.com/meeting/987-654-321",
    },
    {
      topic: "History Discussion",
      duration: "50 minutes",
      dateTime: "2024-09-05 09:30 AM",
      meetingId: "456-789-123",
      password: "ghi789",
      subject: "History",
      teacher: "Rk Singh",
      joinLink: "https://example.com/meeting/456-789-123",
    },
  ];
  

  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-gray-700 mx-5 my-5">
            Live Classes
          </h2>
          <div className="mx-5 ">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLiveClass;
