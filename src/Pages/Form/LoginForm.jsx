import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function LoginForm() {
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
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-base font-medium text-gray-700">
              User Id
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="flex flex-col my-3">
            <label className="text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-md text-gray-700"
            />
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="w-full px-3 py-2 mt-1 border rounded-md text-gray-700"
              />
              <p className="whitespace-nowrap ">Remember me</p>
            </div>
            <Link to={`/forgot-password`} className="hover:text-violet-500">Forgot password</Link>
          </div>
          <div className="my-3">
            <button className="border border-gray-500 rounded-md px-5 py-2 w-full">
              Log In
            </button>
          </div>
          <div className="my-2 text-center">
            <h2>
              Not registered yet?{" "}
              <Link to="/sign-up" className="text-violet-600">
                Create an account
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

export default LoginForm;
