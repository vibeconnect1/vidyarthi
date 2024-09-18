import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const BookDocAppointment = () => {
  const [consultFor, setConsultFor] = useState("self");
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center md:text-xl font-bold my-3 p-2 rounded-md text-black bg-white mx-10">
            Book Doctor Appointment
          </h2>
          <div className="mx-10">
            <div className=" bg-white rounded-lg w-full mb-5 flex flex-col gap-5 p-8">
              <div className="grid grid-cols-4 items-center">
                <p className="font-semibold">For :</p>
                <div className="flex gap-5">
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      consultFor === "self" && "bg-black text-white"
                    }`}
                    onClick={() => setConsultFor("self")}
                  >
                    Self
                  </p>
                  <p
                    className={`border-2 p-1 px-6 border-black font-medium rounded-full cursor-pointer ${
                      consultFor === "others" && "bg-black text-white"
                    }`}
                    onClick={() => setConsultFor("others")}
                  >
                    Others
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5 mx-5">
                <div className="grid  items-center w-full">
                  {consultFor === "Self" ? (
                    <input
                      readOnly
                      type="text"
                      className="border-b text-gray-700 border-gray-400 p-2 outline-none"
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-b  border-gray-400 p-2 outline-none"
                      placeholder="Enter Patient Name"
                    />
                  )}
                </div>

                <div className="grid items-center w-full">
                  <select
                    className="border-b  border-gray-400 p-2 outline-none"
                    placeholder="Enter Patient Name"
                  >
                    {consultFor === "Self" ? (
                      <option value="Self">Self</option>
                    ) : (
                      <>
                        {" "}
                        <option value="" disabled selected>
                          Select Relationship an option
                        </option>
                        <option value="Mother">Mother</option>
                        <option value="Father">Father</option>
                        <option value="Son">Son</option>
                        <option value="Daughter">Daughter</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Friend">Friend</option>
                        <option value="Other">Other</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="grid   items-center w-full">
                  <input
                    type="text"
                    className="border-b border-gray-400 p-2 outline-none"
                    placeholder="Enter Patient's Age"
                  />
                </div>
                <div className="grid  items-center w-full">
                  <select className="border-b border-gray-400 p-2 outline-none">
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="grid  items-center w-full">
                  <select className="border-b border-gray-400 p-2 outline-none">
                    <option value="" disabled selected>
                      Select Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="grid  items-center w-full">
                  <select className="border-b border-gray-400 p-2 outline-none">
                    <option value="" disabled selected>
                      Select Marital Status
                    </option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                  </select>
                </div>
                <div className="grid items-center w-full">
                  <input
                    type="date"
                    placeholder="Date"
                    className="border-b border-gray-400 p-2 outline-none"
                  />
                </div>
                <div className="grid gap-2  items-center w-full">
                  <input
                    className="border-b border-gray-400 p-2 outline-none"
                    placeholder="Enter mobile no."
                  />
                </div>
                <div className="grid gap-2  items-center w-full">
                  <label htmlFor="preference" className="font-semibold">
                    Preference
                  </label>
                  <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id="online"
                        name="preferences"
                        value="Online"
                        style={{ height: "20px" }}
                      />
                      <label htmlFor="online">Online</label>
                    </div>

                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        id="offline"
                        name="preferences"
                        value="Offline"
                        style={{ height: "20px" }}
                      />
                      <label htmlFor="offline">Offline</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 mx-5"></div>
              <div className="grid gap-2  items-center  mx-5">
                <textarea
                  name="reason"
                  className="border-b text-gray-700 border-gray-400 p-2 outline-none"
                  placeholder="Enter reason for appointment"
                ></textarea>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <select
                    id="file-type"
                    className="border-b border-gray-400 p-2 outline-none"
                  >
                    <option value="">Select Upload Report</option>
                    <option value="Blood">Blood Report</option>
                    <option value="CT">CT Scan</option>
                    <option value="CBC">CBC Report</option>
                    <option value="Ultrasonic">Ultrasonic Report</option>
                    <option value="Urine Report">Urine Report</option>
                    <option value="Daibetes">Daibetes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="file"
                    className="border-b border-gray-400 p-2 outline-none"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-black border border-gray-500  py-1 px-4 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center my-4">
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-700 font-medium  py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDocAppointment;
