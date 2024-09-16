import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

const HotelRequestDetails = () => {
  const request = {
    employeeName: "John Doe",
    employeeId: "12345",
    destination: "New York",
    checkInDate: "2024-06-20",
    checkOutDate: "2024-06-25",
    numberOfRooms: "1",
    roomType: "Double",
    specialRequests: "Non-smoking room",
    hotelPreferences:
      "Brand: Marriott, Location: Downtown, Amenities: Pool, Gym",
    bookingConfirmationNumber: "ABC123",
    bookingStatus: "Confirmed",
    managerApproval: "Yes",
    bookingConfirmationEmail: "john.doe@example.com",
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md text-black mx-5 my-3">
            Hotel Request Details
          </h2>
          <div className="border border-gray-300 rounded-lg p-4 mx-5 bg-white">
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Employee Name:</label>
                <p>{request.employeeName}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Employee ID:</label>
                <p>{request.employeeId}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Destination:</label>
                <p>{request.destination}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Check-in Date:</label>
                <p>{request.checkInDate}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Check-out Date:</label>
                <p>{request.checkOutDate}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Number of Rooms:</label>
                <p>{request.numberOfRooms}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Room Type:</label>
                <p>{request.roomType}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Special Requests:</label>
                <p>{request.specialRequests}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Hotel Preferences:</label>
                <p>{request.hotelPreferences}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">
                  Booking Confirmation Number:
                </label>
                <p>{request.bookingConfirmationNumber}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">Booking Status:</label>
                <p>{request.bookingStatus}</p>
              </div>

              <div className="flex items-center gap-2 w-full">
                <label className="font-semibold">
                  Manager Approval (If Required):
                </label>
                <p>{request.managerApproval}</p>
              </div>

              <div className="flex items-center gap-2 w-full mb-10">
                <label className="font-semibold">
                  Booking Confirmation Email:
                </label>
                <p>{request.bookingConfirmationEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRequestDetails;
