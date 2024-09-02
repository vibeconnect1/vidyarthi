import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { IoIosArrowUp } from "react-icons/io";

function StudentDetails() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Student Details
          </h2>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
            <div className="flex justify-between">
              <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
                Student Details
              </h2>
              <button className="mx-5" onClick={() => toggleSection("student")}>
                <IoIosArrowUp
                  className={`transition-transform ${
                    openSection === "student" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {openSection === "student" && (
              <div className="grid grid-cols-3 gap-4 py-5">
                <div className="col-span-1 mx-5">
                  <img
                    src="https://via.placeholder.com/150" // Placeholder for the image
                    alt="Employee"
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        101
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        Rakesh
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        Sharma
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        Rajesh Sharma
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        Gita Sharma
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                        AF-1001
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    SR-1001
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    10th
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    A
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Red market house
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    2005-06-21
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    19
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Male
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Mumbai
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Maharashtra
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Indian
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Hindu
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    OBC
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    General
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Hindi
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    B+
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    1234-5678-9123
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    022-12345678
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    9876543210
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Rajesh Sharma
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    9876543210
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    rakesh.sharma@example.com
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Maharashtra
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    India
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    CBSE
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    9th
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    10th
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    March 2021
                  </label>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Local Address
                  </label>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Permanent Address
                  </label>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  School/College e Name
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
            <div className="flex justify-between">
              <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
                Father Details
              </h2>
              <button className="mx-5" onClick={() => toggleSection("father")}>
                <IoIosArrowUp
                  className={`transition-transform ${
                    openSection === "father" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {openSection === "father" && (
              <div className="grid grid-cols-3 gap-4 py-5">
                <div className="col-span-1 mx-5">
                  <img
                    src="https://via.placeholder.com/150" // Placeholder for the image
                    alt="Employee"
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      1234-5678-9123
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      ABCDE1234F
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      rajesh.sharma@example.com
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      M.Sc
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      9876543210
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      022-12345678
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Engineer
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  10,00,000
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  ABC Ltd.
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Manager
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  No
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  022-12345678
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  rajesh.office@example.com
                  </label>
                </div>
                <div className="flex flex-col col-span-3">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Father's Office Address
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
            <div className="flex justify-between">
              <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
                Mother Details
              </h2>
              <button className="mx-5" onClick={() => toggleSection("mother")}>
                <IoIosArrowUp
                  className={`transition-transform ${
                    openSection === "mother" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {openSection === "mother" && (
              <div className="grid grid-cols-3 gap-4 py-5">
                <div className="col-span-1 mx-5">
                  <img
                    src="https://via.placeholder.com/150" // Placeholder for the image
                    alt="Employee"
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      1234-5678-9123
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      ABCDE1234G
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      gita.sharma@example.com
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      B.Sc
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      9876543210
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      022-12345678
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Teacher
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  5,00,000
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  XYZ School
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Lecturer
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  No
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  022-12345678
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  gita.office@example.com
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
            <div className="flex justify-between">
              <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Guardian Details
              </h2>
              <button className="mx-5" onClick={() => toggleSection("guardian")}>
                <IoIosArrowUp
                  className={`transition-transform ${
                    openSection === "guardian" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {openSection === "guardian" && (
              <div className="grid grid-cols-3 gap-4 py-5">
                <div className="col-span-1 mx-5">
                  <img
                    src="https://via.placeholder.com/150" // Placeholder for the image
                    alt="Employee"
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      Uncle
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      Vinay
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      Singh
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      5678-1234-9123
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      ABC3E1234G
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                      mukesh.sharma@example.com
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  MBA
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  9876543210
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  022-87654321
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Businessman
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  12,00,000
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Sharma Enterprises
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Owner
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  No
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  022-87654321
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  vinay.office@example.com
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
            <div className="flex justify-between">
              <h2 className="border-b border-gray-500 text-xl font-medium  my-5 mx-5">
              Other Details
              </h2>
              <button className="mx-5" onClick={() => toggleSection("other")}>
                <IoIosArrowUp
                  className={`transition-transform ${
                    openSection === "other" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {openSection === "other" && (
              <div className="grid grid-cols-3 gap-4 py-5">
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Ritika Sharma
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Sister
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  2007-08-15
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  8th Grade
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  CBSE
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  Maharashtra
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  India
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  7th 
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  8th
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                  March 2021
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
