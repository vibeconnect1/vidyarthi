import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentFeesInvoice() {
  
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-gray-700 mx-5 my-5">
            Fees Invoice
          </h2>
          <p className="mx-5 text-red-500">there is no Pending Fees</p>
        </div>
      </div>
    </div>
  );
}

export default StudentFeesInvoice