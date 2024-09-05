import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-12 shadow-md rounded-md p-8 bg-white">
        <div className="flex flex-col justify-center mx-5">
          <div className="mb-4">
            <IoBookOutline size={40} className="text-violet-500" />
          </div>
          <h2 className="text-2xl font-semibold text-violet-600 text-left">
            Forgot Your Password?
          </h2>
          <p className="text-gray-600 my-3">
            Enter your registered email address below to receive a password reset link.
          </p>
          <div className="flex flex-col my-3">
            <label htmlFor="email" className="text-base font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border-b border-gray-500 focus:outline-none focus:border-violet-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="my-3">
            <button className="bg-violet-500 text-white rounded-md px-5 py-2 w-full hover:bg-violet-600">
              Send Reset Link
            </button>
          </div>
          <div className="my-2 text-center">
            <h2>
              Remembered your password?{" "}
              <Link to="/login" className="text-violet-600 hover:underline">
                Back to login
              </Link>
            </h2>
          </div>
        </div>
        <div>
          <img src="./login.png" className="w-96 h-full rounded-md" alt="Forgot Password" />
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword