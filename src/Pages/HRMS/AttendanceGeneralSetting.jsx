import React from "react";
import { GrHelpBook } from "react-icons/gr";
import AttendanceDetailsList from "./AttendanceDetailsList";

const AttendanceGeneralSetting = () => {
  const listItemStyle = {
    listStyleType: "disc",
    color: "black",
    fontSize: "14px",
    fontWeight: 500,
  };
  return (
    <div className="flex  gap-5 ml-20">
      <AttendanceDetailsList />
      <div className="w-full">
        <div className="mt-5 ">
          <h1 className="font-semibold">General Setting</h1>
          <br />
          <label className="font-medium">
            Can Employees select Regularization Reason? &nbsp;
            <div className="flex gap-3">
              <label>
                <input type="radio" name="choice" value="yes" /> &nbsp;Yes
              </label>
              <br />
              <label>
                <input type="radio" name="choice" value="no" /> &nbsp;No
              </label>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <label className="font-medium">
            Allow employees to submit regularization request for a future date
            &nbsp;
            <div className="flex gap-3">
              <label>
                <input type="radio" name="choice" value="yes" /> &nbsp;Yes
              </label>
              <br />
              <label>
                <input type="radio" name="choice" value="no" /> &nbsp;No
              </label>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <label className="font-medium">
            Is Roster Applicable?
            <div className="flex gap-3">
              <label>
                <input type="radio" name="choice" value="yes" /> &nbsp;Yes
              </label>
              <br />
              <label>
                <input type="radio" name="choice" value="no" /> &nbsp;No
              </label>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <label className="font-medium">
            Would you like to show Approve/Reject button in the email
            notification for the approver?
            <div className="flex gap-3">
              <label>
                <input type="radio" name="choice" value="yes" />
                &nbsp; Yes
              </label>
              <br />
              <label>
                <input type="radio" name="choice" value="no" /> &nbsp;No
              </label>
            </div>
          </label>
        </div>
      </div>

      <div className="my-4 mx-2 w-fit">
        <div className="flex flex-col bg-gray-50 rounded-md text-wrap  gap-4 my-2 py-2 pl-5 pr-2 w-[18rem]">
          <div className="flex  gap-4 font-medium">
            <GrHelpBook size={20} />
            <h2>Help Center</h2>
          </div>
          <div className="">
            {/* <p className="font-medium">Help Center</p> */}
            <ul style={listItemStyle} className="flex flex-col gap-2">
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Attendance settings allows you to configure attendance
                    policies in the form of templates based on different
                    departments, profiles, locations, etc.{" "}
                  </li>{" "}
                </ul>
              </li>
              <li>
                <ul style={listItemStyle}>
                  <li>
                    Within the attendance templates you can choose the mode of
                    capturing the attendance like web check-in, biometrics,
                    timesheet, mobile application.{" "}
                  </li>
                </ul>
              </li>
              {/* <li>
                  <ul style={listItemStyle}>
                    <li>
                   Based on configuration Gratuity will be calculated automatically for eligible employee at the time of F&F, you can view and pay the calculated value in Settlement and Recovery step while running payroll.
                    </li>
                  </ul>
                </li> */}

              <li>
                <p>
                  {/* <a href="#" className="text-blue-400">
                      Click Here{" "}
                    </a> */}
                  You can automate the attendance process by automatically
                  capturing late marks, half-days, overtime and leave deductions
                  based on the template settings. You can also configure
                  attendance regularization limit and reason.
                </p>
              </li>
              <li>
                <p>
                  In the web check-in you can restrict capturing attendance
                  through static IP. Similarly, in mobile applications you can
                  restrict capturing attendance through geo-fencing.{" "}
                </p>
              </li>
              <li>
                <p>
                  Attendance module is integrated with leave and payroll module
                  and hence will sync data from the attendance module and derive
                  data like LOP calculations for running payroll.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceGeneralSetting