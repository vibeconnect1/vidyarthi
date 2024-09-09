import React from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentSubject() {
  const subjects = [
    "Foundation of Information Technology",
    "English",
    "Hindi 2nd Language",
    "Marathi 3rd Language",
    "Mathematics",
    "Environmental Studies",
    "Art Education",
  ];

  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-5 mx-5">
            <div className="col-span-3">
              <div className="shadow-custom-all-sides rounded-md">
                <div className="px-5 py-5 my-5 bg-white rounded-md h-screen">
                  <h2 className="text-2xl font-semibold text-gray-800 text-left mb-8">
                    Subjects For Academic Year 2024-25
                  </h2>
                  <div className="border-t border-gray-500 my-5">
                    <ul className="grid grid-cols-2 py-5">
                      {subjects.map((subject, index) => (
                        <li className="text-lg text-gray-600 py-1" key={index}>
                          {index + 1}. {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-b border-gray-500  pt-3 pb-5">
                    <h2 className="text-lg font-medium text-slate-700 underline">
                      Notes
                    </h2>
                    <ul className="space-y-2 my-3">
                      <li className="text-base text-gray-600">
                        1. Subject Selection is not applicable.
                      </li>
                      <li className="text-base text-gray-600">
                        2. Subject Selection option is given in certain grades
                        only.
                      </li>
                      <li className="text-base text-gray-600">
                        3. In case of any queries related to Subject Selection,
                        kindly raise the service request, or contact the School
                        Relationship Team.
                      </li>
                    </ul>
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

export default StudentSubject;
