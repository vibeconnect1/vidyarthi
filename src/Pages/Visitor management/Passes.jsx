import React from "react";
import { NavLink } from "react-router-dom";
const Passes = () => {
  return (
    <div className="flex lg:flex-row my-2 flex-col gap-2 relative items-center justify-center w-full">
      <div className="sm:flex grid grid-cols-2 flex-wrap text-sm md:text-base sm:flex-row gap-5 font-medium p-2 xl:rounded-full rounded-md opacity-90 bg-white ">
        <NavLink
          to={"/school-management/visitor-page"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Visitor
        </NavLink>
        <NavLink
          to={"/school-management/r-vehicle"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          R Vehicles
        </NavLink>
        <NavLink
          to={"/school-management/staff"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Staff
        </NavLink>
        <NavLink
          to={"/school-management/patrolling"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Patrolling
        </NavLink>
        <NavLink
          to={"/school-management/goods-in-out"}
          className={({ isActive }) =>
            `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
              isActive && "bg-white text-blue-500 shadow-custom-all-sides"
            }`
          }
        >
          Goods In/Out
        </NavLink>
      </div>
    </div>
  );
};

export default Passes;
