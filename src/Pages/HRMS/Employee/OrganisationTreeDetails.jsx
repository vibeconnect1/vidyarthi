import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import profile3 from "/profile3.jpg";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile4 from "/profile4.jpg";
import profile5 from "/profile5.jpg";
import finance from "/finance.png";
import success from "/success.png";
import mobile from "/mobile.png";
import email from "/email.png";
import branch from "/branch.png";
import user from "/user.png";
function OrganisationTreeDetails() {
  const [employeeDetails, setEmployeeDetails] = useState(false);
  
  const handleClick = (id) => {
    setEmployeeDetails(id);
  };

  const employees = [
    {
      id: 1,
      name: "Rajan Kumar",
      profileImage: profile3, 
      position: "MP",
      reportingTo: "Mukesh",
    },
    {
      id: 2,
      name: "Varun",
      profileImage: profile4, 
      position: "Assistant Manager",
      reportingTo: "Vishal",
    },
    {
      id: 3,
      name: "Neha",
      profileImage: profile1, 
      position: "Manager HR &...",
      reportingTo: "Karan",
    },
    {
      id: 4,
      name: "Shivani Yadav",
      profileImage: profile5, 
      position: "Manager",
      reportingTo: "Rajesh",
    },
    {
      id: 5,
      name: "Kavita",
      profileImage: profile2, 
      position: "MP",
      reportingTo: "Neha",
    },
  ];

  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col ">
        <div className="">
          <header className="text-black bg-white  py-4 ml-20 border border-gray-400">
            <h1 className="text-3xl pl-5 font-bold">Organisation Tree</h1>
            <p className="pl-5">
              Organisation splits among employees are presented under this
              section.
            </p>
          </header>
          <div className="grid grid-cols-12 gap-5 mx-5">
            <div className="col-span-9 bg-white my-3 rounded-md">
              <div className="flex gap-2 ml-24 my-5">
                <img src={finance} className="h-12 w-12 rounded-full"></img>
                <h2 className="text-sm font-medium flex items-center">
                  Finance
                </h2>
              </div>
              <div class="grid grid-cols-3 divide-x-2 divide-gray-200 ml-24 my-5 bg-gray-100 rounded-md mx-5">
                <div className="flex gap-3 py-6 px-10 rounded-md">
                  <div className="flex items-center">
                    <img
                      src={profile3}
                      className="h-14 w-14 rounded-full"
                    ></img>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Ankit Gaurav</h2>
                    <p className="text-gray-500">Finance Head</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <h2 className="text-gray-500 ">Head of Department</h2>
                </div>
                <div className="flex items-center justify-center">
                  <h2 className="text-gray-500">
                    Reporting to : Vinayak Kapdoskar
                  </h2>
                </div>
              </div>
              <div className="ml-24">
                <h2 className="text-gray-600 font-medium">Team Members</h2>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-gray-200 ml-24 my-5 mx-5 gap-5">
                {employees.map((employee) => (
                  <div
                    key={employee.id}
                    className={`flex gap-3 py-6 px-10 rounded-md cursor-pointer ${
                      employeeDetails === employee.id ? "bg-blue-100" : ""
                    }`}
                    onClick={() => handleClick(employee.id)}
                  >
                    <div className="flex items-center">
                      <img
                        src={employee.profileImage}
                        className="h-16 w-16 rounded-full"
                        alt={`${employee.name}'s profile`}
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-medium">{employee.name}</h2>
                      <p className="text-gray-500 text-sm">
                        {employee.position}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Reporting to: {employee.reportingTo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 bg-white my-3 py-5 px-5 rounded-md">
              <h2 className="font-medium text-gray-500 text-lg">
                Employee Details
              </h2>
              <div className="border-t border-gray-500 my-2 ">
                {!employeeDetails ? (
                  <div className="flex justify-center items-center flex-col pt-5">
                    <img src={success}></img>
                    <p className="text-center my-5">
                      Select employee from the list to get employee details.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-3 border-t border-gray-300 py-3">
                      <div className="flex items-center">
                        <img
                          src={profile3}
                          className="h-14 w-14 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium">Rajan Kumar</h2>
                        <p className="text-gray-500">MP</p>
                        <p className="text-gray-500">125677</p>
                      </div>
                    </div>
                    <div className="flex gap-3 border-t border-gray-300 py-2">
                      <div className="flex items-center">
                        <img
                          src={profile3}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">
                          Reporting Supervisor
                        </h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Mukesh
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={mobile}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Mobile No.</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          8979922321
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={email}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Email ID</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Rajan@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={branch}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">
                          Branch Location
                        </h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          Mumbai; Maharashtra
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 py-2">
                      <div className="flex items-center">
                        <img
                          src={user}
                          className="h-10 w-10 rounded-full"
                        ></img>
                      </div>
                      <div>
                        <h2 className="text-gray-500 text-sm">Designation</h2>
                        <p className="text-sm font-medium text-gray-600 mt-1">
                          MP
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationTreeDetails;
