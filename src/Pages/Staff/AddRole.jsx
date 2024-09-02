import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function AddRole() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
            Add Role
          </h2>
          <div className="mx-5 bg-white rounded-md my-5 px-5 py-5">
            <div className="grid grid-cols-3 gap-10 my-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="designation"
                  placeholder="Add Role"
                  className="border-b border-gray-500 focus:outline-none placeholder-gray-700"
                />
              </div>
            </div>
            <div className="border border-gray-500 my-3"></div>
            <h2 className="text-xl font-medium text-gray-600  mb-5">Permissions</h2>
            <div className="grid grid-cols-3">
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                 <p>Manage Inquiries</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Admissions</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Student</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Delete student</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Add/Remove Admin</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Role</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Add/Remove Staff</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Student Promotion</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Transfer Student</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Certificate</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Class & Section</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Delete Class & Section</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Subjects</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Timetable</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Student Attendance</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Staff Attendance</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Student Leaves</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage staff Leaves</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Study Materials</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Homework</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Live Class</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Library</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Transport</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Noticeboard</p>
              </div><div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Events</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Exam</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Expenses</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Income</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Invoices</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Delete Invoices</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Payments</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>View Staff Payments</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Fees Type</p>
              </div>
              <div className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name=""
                />
                <p>Manage Hostel</p>
              </div>
            </div>
            <div className="border border-gray-500 my-3"></div>
            <div className="flex justify-center mt-5">
              <button className="bg-gray-500 text-white px-5 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRole;
