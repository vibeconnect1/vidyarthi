import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const SeatBookingDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-center text-black bg-white py-2 mx-10 rounded-md my-3">
          Booking Deatails
          </h2>
          <div className="flex flex-col items-center mx-10 bg-white rounded-md p-8">
            <h1 className="text-2xl font-bold text-center">
            Test Meeting Room
            </h1>
            <div className=" flex justify-end w-full">
              <p className="text-end bg-green-400 rounded-md text-white font-medium p-2">
                Confirmed
              </p>
            </div>
            <div className="grid grid-cols-3 w-full gap-5 my-5">
              <p className="text-xl font-medium">Booking ID :</p>
              <p className="text-xl font-medium">Booked By :</p>
              <p className="text-xl font-medium">Scheduled Date :</p>
              <p className="text-xl font-medium">Selected Slot :</p>
              <p className="text-xl font-medium">Booked On :</p>
              <p className="text-xl font-medium">Comment :</p>
              <p className="text-xl font-medium">GST :</p>
              <p className="text-xl font-medium">Payment Mode :</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatBookingDetails