import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function AddCabRequest() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
            Cab Request
          </h2>
          <form className="border border-gray-300 rounded-lg p-4 bg-white mx-5">
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="employeeId"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Employee ID"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="employeeName"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Employee Name"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="pickupLocation"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Pickup Location"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="dropoffLocation"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Drop-off Location"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="date"
                  placeholder="Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="time"
                  id="time"
                  placeholder="Time"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="numberOfPassengers"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Number of Passengers"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="transportationType"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="cab">Select Transportation Type</option>
                  <option value="cab">Cab</option>
                  <option value="shuttle">Shuttle</option>
                  <option value="bus">Bus</option>
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="bookingConfirmationNumber"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Booking Confirmation Number"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="bookingStatus"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="pending">Select Booking Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="managerApproval"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="yes">Manager Approval (If Required)</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="email"
                  id="confirmationEmail"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Confirmation Email"
                />
              </div>
              <div className="grid gap-2 col-span-3 items-center w-full">
                <textarea
                  id="specialRequirements"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Special Requirements"
                ></textarea>
              </div>

              <div className="grid gap-2 col-span-3 items-center w-full">
                <textarea
                  id="driverContactInfo"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Driver/Contact Information"
                ></textarea>
              </div>

              <div className="grid col-span-3 gap-2 items-center w-full">
                <textarea
                  id="vehicleDetails"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Vehicle Details"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCabRequest;
