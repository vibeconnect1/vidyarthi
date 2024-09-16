import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function FlightRequestDetails() {
  const request = {
    employeeName: "Jane Smith",
    employeeId: "54321",
    departureCity: "New York",
    arrivalCity: "London",
    departureDate: "2024-07-10",
    returnDate: "2024-07-20",
    preferredAirlines: ["British Airways", "Delta Airlines"],
    class: "Business",
    passengerNames: ["Jane Smith"],
    passportInformation: "Passport No: ABC12345, Expiry: 2026-05-15",
    ticketConfirmationNumber: "XYZ789",
    bookingStatus: "Confirmed",
    managerApproval: "Yes",
    bookingConfirmationEmail: "jane.smith@example.com",
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
            Flight Request Details
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-5 bg-white mx-5 my-5 p-8">
            <div className="flex gap-2">
              <p className="font-semibold">Employee Name:</p>
              <p>{request.employeeName}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Employee ID:</label>
              <p>{request.employeeId}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Departure City:</label>
              <p>{request.departureCity}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Arrival City:</label>
              <p>{request.arrivalCity}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Departure Date:</label>
              <p>{request.departureDate}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Return Date:</label>
              <p>{request.returnDate}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold whitespace-normal">
                Preferred Airlines:
              </label>
              <p>Delta Airlines</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Class:</label>
              <p>{request.class}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Passenger Name(s):</label>
              <p> Karan Singh</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Passport Information:</label>
              <p>{request.passportInformation}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Ticket Confirmation Number:
              </label>
              <p>{request.ticketConfirmationNumber}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Booking Status:</label>
              <p>{request.bookingStatus}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Manager Approval (If Required):
              </label>
              <p>{request.managerApproval}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Booking Confirmation Email:
              </label>
              <p>{request.bookingConfirmationEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightRequestDetails;
