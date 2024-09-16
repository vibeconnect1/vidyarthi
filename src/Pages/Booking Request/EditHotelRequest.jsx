import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function EditHotelRequest() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
           Edit Hotel Request
          </h2>
          <form className="border border-gray-300 rounded-lg p-4 w-full mx-4 max-h-screen bg-white my-5">
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
                  id="destination"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Destination"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="checkInDate"
                  placeholder="Enter Check-in Date:"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="checkOutDate"
                  placeholder="Enter Check-out Date:"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="numberOfRooms"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Number of Rooms"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="roomType"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="single">Select Room Type</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="suite">Suite</option>
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
                  <option value="pending">Booking Status</option>
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
                  <option value="yes">Manager Approval </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="email"
                  id="bookingConfirmationEmail"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Booking Confirmation Email"
                />
              </div>
              <div className="grid gap-2 col-span-3 items-center w-full">
                <textarea
                  id="specialRequests"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Special Requests"
                ></textarea>
              </div>

              <div className="grid col-span-3 gap-2 items-center w-full">
                <textarea
                  id="hotelPreferences"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Hotel Preferences"
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

export default EditHotelRequest