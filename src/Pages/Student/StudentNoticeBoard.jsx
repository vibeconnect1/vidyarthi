import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentNoticeBoard() {
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5">
            <div className="col-span-3">
              <div className="shadow-custom-all-sides rounded-md">
                <div className="px-5 py-5 my-5 bg-white rounded-md">
                  <h2 className="text-xl font-semibold text-gray-800 mx-5 text-center">
                    Noticeboard
                  </h2>
                  <div className="grid grid-cols-1 py-5">
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Date :
                      </h2>
                      <p className="text-gray-500 text-base mt-1">
                        2 Sep, 2024
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-lg font-medium text-gray-500">
                        Description :
                      </h2>
                      <p>a board on a wall on which pieces of paper containing written information can be fixed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentNoticeBoard