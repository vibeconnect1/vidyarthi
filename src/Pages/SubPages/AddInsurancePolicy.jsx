import React, { useState } from "react";

import boy from "/boy.png";
import girl from "/girl.png";
import lady from "/lady.png";
import oldlady from "/oldlady.png";
import oldman from "/oldman.png";
import { Link } from "react-router-dom";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";

const AddInsurancePolicy = () => {
  const [formData, setFormData] = useState({
    criticalDisease: false,
  });
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center md:text-xl font-bold my-2 p-2 bg-white rounded-md mx-10 text-black">
            Add Policy
          </h2>
          <div className="mx-10 my-5">
            <div className="rounded-lg w-full  p-8 flex flex-col mb-5 gap-5 bg-white">
              <div className="">
                <h2 className="md:text-lg my-2 font-medium">
                  Who would you like to insure ?
                </h2>
                <div className="grid md:grid-cols-6 gap-4">
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={boy} alt="boy" width={"30px"} />
                    <p>Self</p>
                  </div>
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={lady} alt="boy" width={"30px"} />
                    <p>Spouse</p>
                  </div>
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={oldlady} alt="boy" width={"30px"} />
                    <p>Mother</p>
                  </div>
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={oldman} alt="boy" width={"30px"} />
                    <p>Father</p>
                  </div>
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={girl} alt="boy" width={"30px"} />
                    <p>Daughter</p>
                  </div>
                  <div className="border border-gray-400 rounded-md flex flex-col py-2 justify-center items-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out hover:bg-green-300  ">
                    <img src={boy} alt="boy" width={"30px"} />
                    <p>Son</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-5 items-center">
                <div className="flex gap-4 items-center">
                  <img src={boy} alt="boy" width={"30px"} />
                  <p className="text-lg">Self :</p>
                </div>
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-b border-gray-400 p-2 outline-none w-full col-span-2"
                />
              </div>
              <div className="grid md:grid-cols-5 items-center">
                <div className="flex gap-4 items-center">
                  <img src={boy} alt="boy" width={"30px"} />
                  <p className="text-lg">Son :</p>
                </div>
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-b border-gray-400 p-2 outline-none col-span-2"
                />
              </div>
              <div>
                <p className="font-medium">
                  Any one of the above members having any critical disease?
                </p>
                <div className="flex gap-4 my-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="criticalDisease"
                      id="yes"
                      checked={formData.criticalDisease === true}
                      onChange={() =>
                        setFormData({ ...formData, criticalDisease: true })
                      }
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="no"
                      name="criticalDisease"
                      checked={formData.criticalDisease === false}
                      onChange={() =>
                        setFormData({ ...formData, criticalDisease: false })
                      }
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>
              {formData.criticalDisease && (
                <textarea
                  name=""
                  id=""
                  placeholder="Describe Disease"
                  className="border-b border-gray-400 p-2 outline-none"
                ></textarea>
              )}
              <div className="flex justify-center">
                <Link
                  to={"/school-management/insurance-policy-list"}
                  className="border-2 rounded-md border-black p-1 px-4 font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddInsurancePolicy;
