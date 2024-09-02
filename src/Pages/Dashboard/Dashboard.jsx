import React from "react";
import Sidebar from "../Form/Sidebar";
import Header from "../Form/Header";

function Dashboard() {
  return (
    <section>
      <Header/>
      <div className="flex">
        <Sidebar />
        <div className="w-full flex flex-col overflow-hidden">
          <div className="pt-5 p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="flex gap-5">
              <div className="shadow-lg rounded-md w-full h-32 bg-white"></div>
              <div className="shadow-lg rounded-md w-full h-32 bg-white"></div>
              <div className="shadow-lg rounded-md w-full h-32 bg-white"></div>
              <div className="shadow-lg rounded-md w-full h-32 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
