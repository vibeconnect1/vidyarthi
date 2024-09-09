import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import { FiDownload } from "react-icons/fi"; // Import download icon

function StudentNoticeDetails() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="p-6 bg-white rounded-md shadow-md mx-5 my-5">
            <h2 className="text-2xl font-bold mb-5">Notice Details</h2>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="text-lg font-semibold">
                <p className="flex items-center gap-2">
                  <span className="font-medium text-gray-600">Subject:</span>
                  <span className="text-black">Holiday</span>
                </p>
              </div>
              <span className="text-gray-500 text-sm">September 6, 2024</span>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The school will be closed on September 6th for a national holiday. Please refer to the attached document for more details.
              </p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Attachments
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FiDownload /> Download Notice.pdf
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentNoticeDetails;
