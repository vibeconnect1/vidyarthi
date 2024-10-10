import React from "react";
import AdminHRMS from "../AdminHRMS";
import { IoIosArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
function EditTimeSheetRequest() {
  
  return (
    <div className=" w-full">
      <AdminHRMS />
      <div className="flex flex-col overflow-hidden w-full">
        <header className="text-black bg-white py-4 ml-20 border border-gray-400">
          <div className="flex gap-1 items-center">
            <h1 className="text-lg mx-5">Welcome, Rahul Yadav</h1>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-1 ml-24 mx-5">
        <div className="flex justify-start gap-1 bg-gray-500 rounded-md text-white py-1 px-3 w-fit my-5">
          <Link to={""}>
            <IoIosArrowBack size={30} />
          </Link>
          <h1 className="text-lg">Timesheet Requests</h1>
        </div>
        <div className="col-span-12 bg-white rounded-md px-5">
          <div className="flex justify-between">
            <h2 className="flex items-center text-gray-800 text-xl font-medium">
              Timesheet Requests
            </h2>
            <div>
              <select className="bg-white py-2 px-4 rounded-md w-full">
                <option value="September-2024">September-2024</option>
                <option value="August-2024">August-2024</option>
                <option value="July-2024">July-2024</option>
                <option value="June-2024">June-2024</option>
                <option value="May-2024">May-2024</option>
                <option value="April-2024">April-2024</option>
                <option value="March-2024">March-2024</option>
                <option value="February-2024">February-2024</option>
                <option value="January-2024">January-2024</option>
                <option value="December-2023">December-2023</option>
                <option value="November-2023">November-2023</option>
                <option value="October-2023">October-2023</option>
                <option value="September-2023">September-2023</option>
                <option value="August-2023">August-2023</option>
                <option value="July-2023">July-2023</option>
                <option value="June-2023">June-2023</option>
                <option value="May-2023">May-2023</option>
                <option value="April-2023">April-2023</option>
                <option value="March-2023">March-2023</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 my-5">
            <div className="col-span-4 bg-blue-100 w-full rounded-md">
              <div className="flex flex-col items-center justify-center py-5">
                <h2 className="text-black text-lg text-center">
                  Total Approved Timesheets
                </h2>
                <div className="flex flex-col items-center space-y-3 mt-4">
                  <div className="flex gap-5">
                    <button className="flex justify-center bg-white rounded-full h-10 w-10 items-center">
                      <FaCheck />
                    </button>
                    <span className="text-4xl text-black">0</span>
                  </div>
                </div>
                <button className="bg-blue-400 py-2 px-4 w-fit rounded-md text-white mt-5">
                  Download
                </button>
              </div>
            </div>
            <div className="col-span-4 bg-green-100 w-full rounded-md">
              <div className="flex flex-col items-center justify-center py-5">
                <h2 className="text-black text-lg text-center">
                  Timesheets Pending Approval
                </h2>
                <div className="flex flex-col items-center space-y-3 mt-4">
                  <div className="flex gap-5">
                    <button className="flex justify-center bg-white rounded-full h-10 w-10 items-center">
                    <MdOutlineAccessTime />
                    </button>
                    <span className="text-4xl text-black">0</span>
                  </div>
                </div>
                <button className="bg-green-400 py-2 px-4 w-fit rounded-md text-white mt-5">
                Approve / Reject
                </button>
              </div>
            </div>
            <div className="col-span-4 bg-yellow-100 w-full rounded-md">
              <div className="flex flex-col items-center justify-center py-5">
                <h2 className="text-lg text-center text-black">
                Timesheets Not Submitted
                </h2>
                <div className="flex flex-col items-center space-y-3 mt-4">
                  <div className="flex gap-5">
                    <button className="flex justify-center bg-white rounded-full h-10 w-10 items-center">
                    <IoDocumentTextOutline />
                    </button>
                    <span className="text-4xl text-black">0</span>
                  </div>
                </div>
                <button className="bg-yellow-500 py-2 px-4 w-fit rounded-md text-white mt-5">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTimeSheetRequest;
