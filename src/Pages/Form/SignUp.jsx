import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-12 shadow-md rounded-md p-8 bg-white">
        <div className="flex flex-col justify-center mx-5">
          <div className="mb-4">
            <IoBookOutline size={40} className="text-violet-500" />
          </div>
          <h2 className="text-2xl font-semibold text-violet-600 text-left">
            Welcome To Vidyarthi
          </h2>
          <div>
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-700 "
            >
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-b border-gray-500 focus:outline-none w-full"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="border-b border-gray-500 focus:outline-none w-full"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
          </div>
          <div className="my-5">
            <button className="border border-gray-500 rounded-md px-5 py-2 w-full">
              Log In
            </button>
          </div>
          <div className="my-5 text-center">
            <h2>
              Already have an account?
              <Link to="/login" className="text-violet-600 ml-1">
                Sign in
              </Link>
            </h2>
          </div>
        </div>
        <div>
          <img src="./login.png" className="w-96 h-full rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
