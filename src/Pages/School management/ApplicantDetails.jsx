import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function ApplicantDetails() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-2xl font-medium text-gray-800 mx-5 mt-5">
          Applicant Details
          </h2>
          <div className="p-5 bg-white mx-5 my-5 rounded-md">
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
                    2005-02-15
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Rakesh Singh
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    Engineer
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                    1234567890
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                Neha Singh
                </label>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                Doctor
                </label>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                0987654321
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
                India
                </label>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                Rakesh Singh
                </label>
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                1122334455
                </label>
              </div>
              <div className="flex flex-col col-span-3">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                Greenwood High School
                </label>
              </div>
              <div className="flex flex-col col-span-3">
                <label className="block text-gray-500 text-xl font-medium mb-2 border-b border-gray-500  mx-2">
                Jp Road Andheri
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetails