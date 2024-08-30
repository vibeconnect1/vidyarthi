import React from "react";
import Sidebar from "../Form/Sidebar";
import Header from "../Form/Header";

function Dashboard() {
  return (
    <section className="flex">
      <Sidebar/>
      <div>
        <Header/>
        <h2>Dashboard</h2>
        <div className="flex gap-5">
          <div className="shadow-lg rounded-md"></div>
          <div className="shadow-lg rounded-md"></div>
          <div className="shadow-lg rounded-md"></div>
          <div className="shadow-lg rounded-md"></div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
