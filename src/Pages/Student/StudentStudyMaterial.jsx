import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentStudyMaterial() {
  const [studyMaterials, setStudyMaterials] = useState([
    { id: 1, title: "Mathematics - Algebra", date: "12 Sep,2024" },
    { id: 2, title: "Science - Biology", date: "12 Sep,2024" },
  ]);
  const [studyMaterialsDetails, setStudyMaterialsDetails] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-gray-700 mx-5 my-5">
            Study Materials
          </h2>
          {studyMaterials.length === 0 ? (
            <p className="mx-5 text-red-500">There are no Study Materials</p>
          ) : (
            <div className="mx-5">
              <ul>
                {studyMaterials.map((material) => (
                  <li key={material.id} className="my-2">
                    <button
                      onClick={() =>
                        setStudyMaterialsDetails(!studyMaterialsDetails)
                      }
                      className="text-gray-600 hover:underline"
                    >
                      {material.title}
                    </button>
                    <span className="mx-3">{material.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-white mx-5 my-5 rounded-md">
            {studyMaterialsDetails && (
              <div className="grid grid-cols-2 py-5 space-y-2 space-x-5">
                <div className="flex gap-4 ml-5">
                  <h2 className="text-lg font-medium text-gray-500">Title</h2>
                  <p className="text-gray-500 text-base mt-1">
                    Mathematics - Algebra
                  </p>
                </div>
                <div className="flex gap-4">
                  <h2 className="text-lg font-medium text-gray-500">Date:</h2>
                  <p className="text-gray-500 text-base mt-1">12 sep,2024</p>
                </div>
                <div className="flex gap-4">
                  <h2 className="text-lg font-medium text-gray-500">
                    Attachment:
                  </h2>
                  <p className="text-gray-500 text-base mt-1">file</p>
                </div>
                <div className="flex gap-4">
                  <h2 className="text-lg font-medium text-gray-500">
                    Description:
                  </h2>
                  <p className="text-gray-500 text-base mt-1">Basic Algebra Question</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentStudyMaterial;
