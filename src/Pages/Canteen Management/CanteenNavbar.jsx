import React from "react";
import { NavLink } from "react-router-dom";

const CanteenNavbar = () => {
  return (
    <section>
      <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 text-sm md:text-base sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-white my-5">
          <NavLink
            to={"/canteen/canteen-info"}
            className={({ isActive }) =>
              `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Canteen
          </NavLink>
          <NavLink
            to={"/canteen/canteen-status-setup"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Status Setup
          </NavLink>
          <NavLink
            to={"/canteen/canteen-category"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Categories Setup
          </NavLink>
          <NavLink
            to={"/canteen/canteen-sub-category"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Sub Categories Setup
          </NavLink>
          <NavLink
            to={"/canteen/canteen-menu"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Canteen Menu
          </NavLink>
          <NavLink
            to={"/canteen/booking"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Canteen Bookings
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default CanteenNavbar