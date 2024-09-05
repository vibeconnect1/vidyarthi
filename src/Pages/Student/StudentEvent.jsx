import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import { Link } from "react-router-dom";
import event from "/event.jpg";
function StudentEvent() {
  const [events, setEvents] = useState([
    {
      name: "TechSpark Summit",
      date: "4 Sep, 2024",
      description:
        "This name stands out by combining “Tech” to convey a focus on technology, and “Spark” to suggest innovation and inspiration. “Summit” implies a high-level gathering for tech professionals, offering valuable insights and networking opportunities.",
      img: "/event.jpg",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <h2 className="text-xl font-semibold text-gray-700">Events</h2>
            <div>
              <button
                className="border border-gray-500 rounded-md px-4 p-1 cursor-pointer"
              >
                Join
              </button>
            </div>
          </div>
          <div className="bg-white mx-5 rounded-md">
            {events.length === 0 ? (
              <p className="mx-5 text-red-500">No events available</p>
            ) : (
              <div className="mx-5">
                {events.map((event, index) => (
                  <div key={index} className="mb-4 py-5 space-y-2">
                    <h3 className="text-lg font-semibold">{event.name}</h3>
                    <p className="text-gray-600">Date: {event.date}</p>
                    <div>
                      <img
                        src={event.img}
                        alt={event.name}
                        className="w-full rounded-md my-2 h-60"
                      />
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                    <p className="text-sm text-gray-500 my-2">
                      {event.attachment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentEvent;
