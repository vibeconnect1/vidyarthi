import React, { useState } from "react";
import AdminHRMS from "../AdminHRMS";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import qa from "/qa.png";
import { GrHelpBook } from "react-icons/gr";
function EditExitInterviewRequests() {
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <Link to={""}>
              <IoIosArrowBack size={30} />
            </Link>
            <h1 className="text-3xl font-bold">Exit Interview Form</h1>
          </div>
          <p className="text-sm my-1 mx-3">
            Interview requests for resignation applied and exit the organisation
          </p>
        </header>
        <div className="grid grid-cols-12 gap-5 my-3 pr-2 ml-24">
          <div className="col-span-12">
            <h2 className="text-lg font-medium whitespace-nowrap">
              Exit interview Form
            </h2>
          </div>
          <div className="col-span-9 my-5 bg-white rounded-md p-5">
            <div className="py-5">
              <div className="flex gap-5">
                <h2 className="font-medium">Status :</h2>
                <p className="text-yellow-500">Approved</p>
              </div>
              <div className="flex gap-5">
                <h2 className="font-medium">Submitted on:</h2>
                <p className="text-yellow-500">13-Feb-2021</p>
              </div>
              <div className="flex gap-5">
                <h2 className="font-medium">Submitted by:</h2>
                <p className="text-yellow-500">Karan Singh</p>
              </div>
              <div className="flex gap-5">
                <h2 className="font-medium">Instructions:</h2>
                <p className="text-black">
                  We are looking forward to your feedback on how we can make
                  this place a better place for our employees
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-5">
              <div className="flex gap-5">
                <img src={qa}></img>
                <h2 className="text-lg font-medium flex items-center">
                  Question & Answers
                </h2>
              </div>
              <div className="w-full py-5">
                <div>
                  <h2>Q1. What motivated you to join this company ?</h2>
                  <textarea
                    placeholder="What motivated you to join this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>Q2. How was your journey at this company ?</h2>
                  <textarea
                    placeholder="How was your journey at this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q3. What is it that you enjoyed the most at this company?
                  </h2>
                  <textarea
                    placeholder="What is it that you enjoyed the most at this company?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q4. Do you think you added value to the journey of this
                    company ?
                  </h2>
                  <div className="flex my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        value="yes"
                        name="question4"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        value="No"
                        name="question4"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <textarea
                    placeholder="Do you think you added value to the journey of this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q5. Were you satisfied with your role at this company ?
                  </h2>
                  <textarea
                    placeholder="Were you satisfied with your role at this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q6. What is the one thing that you would like to change at
                    this company ?
                  </h2>
                  <textarea
                    placeholder="What is the one thing that you would like to change at this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q7. What was the trigger for you to leave this company ?
                  </h2>
                  <textarea
                    placeholder="What was the trigger for you to leave this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div>
                  <h2>
                    Q8. Would you refer your friends, relatives , colleagues to
                    this company ?
                  </h2>
                  <div className="flex my-2">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        value="yes"
                        name="question4"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-blue-600"
                        value="No"
                        name="question4"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <textarea
                    placeholder="Q8. Would you refer your friends, relatives , colleagues to this company ?"
                    rows={2}
                    className="border-b border-gray-500 focus:outline-none my-3 w-full bg-gray-100"
                    readOnly
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="border border-gray-500 rounded-md p-1 px-5">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="my-4 mr-2 w-full">
              <div className="flex flex-col mt-4 mr-2 bg-white rounded-md text-wrap  gap-4 my-2 py-5 pl-5 pr-2">
                <div className="flex  gap-4 font-medium">
                  <GrHelpBook size={20} />
                  <h2>Help Center</h2>
                </div>
                <div className=" ">
                  <p className="text-red-500 my-2">Exit Interview Guidelines:</p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>By answering these questions, you will help us:</li>
                    <li>Gain valuable insights</li>
                    <li>Assess your overall experience as an employee of the company and</li>
                    <li>Identify areas of improvement.</li>
                    <li>You can simply answer all the questions and click on "Submit"</li>
                    <li>Your feedback is valuable to us!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditExitInterviewRequests;
