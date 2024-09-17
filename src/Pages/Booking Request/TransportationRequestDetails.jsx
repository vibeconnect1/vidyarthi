import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function TransportationRequestDetails() {
  const request = {
    employeeName: "Alice Johnson",
    employeeId: "98765",
    destination: "Conference Center, Downtown",
    date: "2024-08-15",
    time: "09:00 AM",
    specialRequirements: "VIP Transport, Black SUV",
    driverContactInformation: "John Doe, Phone: 555-6789",
    vehicleDetails: "Mercedes-Benz GLS, License Plate: XYZ-456",
    bookingConfirmationNumber: "DEF456GHI",
    bookingStatus: "Confirmed",
    managerApproval: "Yes",
    confirmationEmail: "alice.johnson@example.com",
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
            Transport Request Details
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-5 bg-white p-8 mx-5 rounded-md">
            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Employee Name:</label>
              <p>{request.employeeName}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Employee ID:</label>
              <p>{request.employeeId}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Destination:</label>
              <p>{request.destination}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Date:</label>
              <p>{request.date}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Time:</label>
              <p>{request.time}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Special Requirements:</label>
              <p>{request.specialRequirements}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Driver/Contact Information:
              </label>
              <p>{request.driverContactInformation}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Vehicle Details:</label>
              <p>{request.vehicleDetails}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Booking Confirmation Number:
              </label>
              <p>{request.bookingConfirmationNumber}</p>
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
              <label className="font-semibold">Confirmation Email:</label>
              <p>{request.confirmationEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportationRequestDetails;
