import React, { useState } from "react";
import CanteenNavbar from "./CanteenNavbar";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import image from "/profile.png";
function CanteenInfo() {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <CanteenNavbar />
          <div className="mx-5">
            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 mt-4 font-bold">
                BASIC DETAILS
              </h3>

              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <p className="font-bold">Canteen Name:</p>
                  <p>Haven Cafe</p>
                </div>
                <div>
                  <p className="font-bold">Address:</p>
                  <p>Andheri, Mumbai</p>
                </div>
                <div>
                  <p className="font-bold">Cuisines:</p>
                  <p>Thai, Mughalai, Chinese, Continental</p>
                </div>
                <div>
                  <p className="font-bold">Delivery Time:</p>
                  <p>30 Mins</p>
                </div>
                <div>
                  <p className="font-bold">Cost for Two:</p>
                  <p>₹300</p>
                </div>
              </div>
            </div>

            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
                Canteen DETAILS
              </h3>

              <div class="overflow-x-auto">
                <table class="table-auto">
                  <thead>
                    <tr>
                      <th class="px-4 py-2"></th>
                      <th class="px-4 py-2">Operational Days</th>
                      <th class="px-4 py-2">Start Time</th>
                      <th class="px-4 py-2">End Time</th>
                      <th class="px-4 py-2">Break Start Time</th>
                      <th class="px-4 py-2">Break End Time</th>
                      <th class="px-4 py-2">Booking Allowed</th>
                      <th class="px-4 py-2">Order Allowed</th>
                      <th class="px-4 py-2">Last Booking & Order Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Monday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>

                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Tuesday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Wednesday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Thursday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Friday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Saturday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2">Sunday</td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2">
                        <input type="time" />
                      </td>

                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="checkbox" />
                      </td>
                      <td class="border px-4 py-2 text-center">
                        <input type="time" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
                OTHER INFO
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">Phone Number: 7239000000</p>
                  {/* <p>7239000000</p> */}
                </div>
                <div>
                  <p className="font-bold">Booking Allowed: Yes</p>
                  {/* <p>Yes</p> */}
                </div>
                <div>
                  <p className="font-bold">Cancel Before Schedule: 30min</p>
                </div>
                <div>
                  <p className="font-bold">Closing Message:</p>
                </div>
              </div>
            </div>

            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
                COVER
              </h3>
              <img src={image} alt="" className="w-64 h-64" />
            </div>
            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
                MENU
              </h3>
              <img src={image} alt="" className="w-64 h-64" />
            </div>
            <div className="w-full my-5 p-5 shadow-lg rounded-lg bg-white">
              <h3 className="border-b text-center text-xl border-black mb-6 font-bold">
                GALLERY
              </h3>
              <img src={image} alt="" className="w-64 h-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CanteenInfo;
