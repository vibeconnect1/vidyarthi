import React from "react";
import { MdOutlineWidgets } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const BookingRequest = () => {
  return (
    <section>
      <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 text-sm md:text-base sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-white my-5">
          <NavLink
            to={"/school-management/hotel-request"}
            className={({ isActive }) =>
              `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Hotel Request
          </NavLink>
          <NavLink
            to={"/school-management/flight-request"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Flight Request
          </NavLink>
          <NavLink
            to={"/school-management/cab-request"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Cab/Bus Request
          </NavLink>
          <NavLink
            to={"/school-management/transportation-request"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Transportation Request
          </NavLink>
          <NavLink
            to={"/school-management/traveling-allowance-request"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Traveling Allowance Request
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BookingRequest