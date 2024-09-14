import React from "react";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import profile4 from "/profile4.jpg";
import profile5 from "/profile5.jpg";
import profile6 from "/profile6.jpg";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function ProjectSummary() {
  const progressPercentage = 50; // Set the progress percentage here

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5 mx-5">
        <div className="col-span-1 mb-5">
          <div className="bg-white rounded-md py-5 px-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Project Description
              </h2>
              <p className="text-base text-slate-500 mt-2">
                Give a high-level overview of the product / project you're
                working on, its goals, etc.. Elaborate on the target audience of
                your project/product, link out to additional resources.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Target Audience
              </h2>
              <p className="text-base text-gray-500 mt-2 mb-4">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <div>
                <ul className="text-base text-gray-500 mt-2 mb-4">
                  <li>- Nulla tincidunt metus nec commodo volutpat.</li>
                  <li>- Aliquam erat volutpat.</li>
                  <li>- Vestibulum ante ipsum primis in faucibus orci luctus.</li>
                  <li>- Ultrices posuere cubilia curae.</li>
                  <li>- UI luctus et erat vel efficitur.</li>
                </ul>
              </div>
              <p className="text-base text-gray-500 mt-2 mb-6">
                Vivamus vehicula eros id pharetra viverra. In ac ipsum lacus.
                Phasellus facilisis libero eu dolor placerat, sed porttitor
                augue efficitur. Vestibulum tincidunt augue tempus, venenatis
                sem id, ultricies justo. Aliquam erat volutpat.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Competition
              </h2>
              <p className="text-base text-gray-500 mt-2">
                List your competitors here and recommendations on how to position
                your product against the competition & handle objections.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-md">
            <div className="px-5 py-3">
              <h2 className="text-gray-500 font-semibold">Assignee</h2>
              <div className="flex gap-3 py-3">
                <div>
                  <img src={profile1} className="w-12 h-12 rounded-full" alt="Profile" />
                </div>
                <div>
                  <h2 className="text-base font-semibold flex items-center">
                    Riya Yadav<span className="text-gray-500"> (Owner)</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="px-5 py-3">
              <p className="text-gray-500 font-semibold">Team</p>
              <div className="flex sm:flex-wrap flex-wrap gap-2 my-4">
                <img src={profile1} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                <img src={profile2} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                <img src={profile3} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                <img src={profile4} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                <img src={profile5} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                <img src={profile6} className="w-9 h-9 mt-1 rounded-full" alt="Profile" />
                {/* <div className="border-2 border-gray-200 border-dashed w-10 h-10 rounded-full ml-2 flex justify-center items-center hover:text-blue-400 hover:border-blue-400">
                  <span>
                    <IoMdAdd />
                  </span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md py-2 my-3">
            <div className="border-b border-thin mt-3 flex justify-between py-3 mx-5">
              <div className="flex gap-2">
                <CiCalendar className="mt-1 text-violet-800" size={20} />
                <p className="text-gray-500 font-semibold text-base">
                  Start Date
                </p>
              </div>
              <p className="font-semibold text-sm text-gray-800">
                22 July 2024
              </p>
            </div>
            <div className="border-b border-thin flex justify-between py-3 mx-5">
              <div className="flex gap-2">
                <CiCalendar className="mt-1 text-violet-800" size={20} />
                <p className="text-gray-500 font-medium text-base">End Date</p>
              </div>
              <p className="font-semibold text-sm text-gray-800">22 Aug 2024</p>
            </div>
            <div className="border-b border-thin flex justify-between py-3 mx-5">
              <div className="flex gap-2">
                <IoTimeOutline className="mt-1 text-violet-800" size={20} />
                <p className="text-gray-500 font-medium text-base">
                  Estimate Time
                </p>
              </div>
              <p className="font-semibold text-sm text-gray-800">30 Days</p>
            </div>
            {/* <div className="flex justify-between py-3 mx-5">
              <div className="flex gap-2">
                <MdOutlineCurrencyRupee
                  className="mt-1 text-violet-800"
                  size={20}
                />
                <p className="text-gray-500 font-medium text-base">Cost</p>
              </div>
              <p className="font-semibold text-base text-gray-800">₹ 50,000</p>
            </div> */}
          </div>
          <div className="bg-white rounded-md py-2 pb-6 my-3 h-36">
            <h2 className="text-lg font-semibold text-gray-800 mx-5">Progress</h2>
            <div className="flex flex-col items-center">
              <p className="text-base font-semibold text-gray-800 mb-2">{progressPercentage}%</p>
              <div className="relative bg-gray-200 rounded-full h-2 w-11/12">
                <div
                  className="bg-violet-500 h-full rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary