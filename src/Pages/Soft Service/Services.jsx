import React from "react";
import { MdOutlineWidgets } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section>
      <div className="flex justify-center w-full">
        <div className="sm:flex grid grid-cols-2 text-sm md:text-base sm:flex-row gap-5 font-medium p-2 sm:rounded-full rounded-md opacity-90 bg-white my-5">
          <NavLink
            to={"/school-management/service-page"}
            className={({ isActive }) =>
              `  md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Service
          </NavLink>
          <NavLink
            to={"/school-management/checklist-service"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Checklist
          </NavLink>
          <NavLink
            to={"/school-management/service-task"}
            className={({ isActive }) =>
              ` md:rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear ${
                isActive && "bg-white text-blue-500 shadow-custom-all-sides"
              }`
            }
          >
            Task
          </NavLink>
        </div>
        <Link
          to={"/school-management/soft-service-widgets"}
          className="lg:absolute right-0 mx-8 shadow-custom-all-sides p-1 rounded-full cursor-pointer  hover:text-blue-500 transition-all duration-300 bg-gray-200 "
        >
          <MdOutlineWidgets size={30} />
        </Link>
      </div>
    </section>
  );
};

export default Services;
