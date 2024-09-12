import React, { useState, useRef } from "react";
import image from "/profile.png";
import { FaTrash } from "react-icons/fa";
import InstituteDetails from "../School management/InstituteDetails";

const AddVisitor = () => {
  const [behalf, setbehalf] = useState("Visitor");
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [visitors, setVisitors] = useState([{ name: "", mobile: "" }]);

  const handleAddVisitor = (event) => {
    event.preventDefault();
    setVisitors([...visitors, { name: "", mobile: "" }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newVisitors = [...visitors];
    newVisitors[index][name] = value;
    setVisitors(newVisitors);
  };

  const handleRemoveVisitor = (index) => {
    const newVisitors = [...visitors];
    newVisitors.splice(index, 1);
    setVisitors(newVisitors);
  };

  const getHeadingText = () => {
    switch (behalf) {
      case "Visitor":
        return "NEW VISITOR";
      case "Delivery":
        return "DELIVERY & SUPPORT STAFF";
      case "Cab":
        return "CAB";
      default:
        return "CREATE VISITOR";
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <div className="flex">
      <InstituteDetails />
      <div className="flex flex-col overflow-hidden w-full mx-5">
        <div>
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-2 text-black w-full">
            {getHeadingText()}
          </h2>
          <form className="border border-gray-300 rounded-lg p-4 w-full bg-white my-5">
            <br />
            {behalf !== "Cab" && behalf !== "Delivery" && (
              <div
                onClick={handleImageClick}
                className="cursor-pointer flex justify-center items-center my-4"
              >
                {imageFile ? (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded"
                    className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                  />
                ) : (
                  <img
                    src={image}
                    alt="Default"
                    className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                  />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            )}

            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="guest"
                  name="attendance"
                  value="guest"
                />
                <label htmlFor="guest" className="font-semibold ml-2">
                  Guest
                </label>
                <div className="flex items-center ml-16">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio" id="once" name="frequency" value="once" />
                  <label htmlFor="once" className="font-semibold ml-2">
                    Once
                  </label>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  id="staff"
                  name="attendance"
                  value="staff"
                />
                <label htmlFor="staff" className="font-semibold ml-2">
                  Support Staff
                </label>
                <div className="flex items-center ml-6">
                  <input
                    type="radio"
                    id="frequently"
                    name="frequency"
                    value="frequently"
                  />
                  <label htmlFor="frequently" className="font-semibold ml-2">
                    Frequently
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <input
                    type="number"
                    id="mobileNumber"
                    className="border-b border-gray-500 focus:outline-none"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              )}

              <div className="grid gap-2 items-center w-full">
                <label htmlFor="">Host</label>
                <select className="border-b border-gray-500 focus:outline-none">
                  <option value="">Select Person to meet</option>
                  <option value="">b</option>
                </select>
              </div>
              {behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="visitorName" className="font-semibold">
                    Visitor Name:
                  </label>
                  <input
                    type="text"
                    id="visitorName"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Enter Visitor Name"
                  />
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="additionalVisitor" className="font-semibold">
                    Pass Number
                  </label>
                  <input
                    type="number"
                    id="additionalVisitor"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Enter Pass number"
                  />
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="comingFrom" className="font-semibold">
                    Coming from:
                  </label>
                  <input
                    type="text"
                    id="comingFrom"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Enter Origin"
                  />
                </div>
              )}

              <div className="grid gap-2 items-center w-full">
                <label htmlFor="vehicleNumber" className="font-semibold">
                  Vehicle Number:
                </label>
                <input
                  type="text"
                  id="vehicleNumber"
                  className="border border-gray-400 p-2 rounded-md"
                  placeholder="Enter Vehicle Number"
                />
              </div>

              {behalf !== "Visitor" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="notes" className="font-semibold">
                    Notes:
                  </label>
                  <input
                    type="text"
                    id="notes"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Enter Notes"
                  />
                </div>
              )}

              <div className="grid gap-2 items-center w-full">
                <label htmlFor="expectedDate" className="font-semibold">
                  Expected Date:
                </label>
                <input
                  type="date"
                  id="expectedDate"
                  className="border border-gray-400 p-2 rounded-md"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <label htmlFor="expectedTime" className="font-semibold">
                  Expected Time:
                </label>
                <input
                  type="time"
                  id="expectedTime"
                  className="border border-gray-400 p-2 rounded-md"
                />
              </div>

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="purpose" className="font-semibold">
                    Visit Purpose:
                  </label>
                  <select
                    id="purpose"
                    className="border border-gray-400 p-2 rounded-md"
                  >
                    <option value="Meeting">Meeting</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Personal">Personal</option>
                    <option value="Fitout Staff">Fitout Staff</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {behalf !== "Visitor" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="purpose" className="font-semibold">
                    Category
                  </label>
                  <select
                    id="category"
                    className="border border-gray-400 p-2 rounded-md"
                  >
                    <option value="Courier">Courier</option>
                    <option value="R&M">R&M</option>
                    <option value="Bank Services">Bank Services</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Visitor" && (
                <div className="grid gap-2 items-center w-full">
                  <label htmlFor="purpose" className="font-semibold">
                    Service Provider
                  </label>
                  <select
                    id="service"
                    className="border border-gray-400 p-2 rounded-md"
                  >
                    <option value="Ola">Ola</option>
                    <option value="Uber">Uber</option>
                    <option value="Meru">Meru</option>
                    <option value="Kali Peeli">Kali Peeli</option>
                  </select>
                </div>
              )}

              {visitors.map((visitor, index) => (
                <div key={index}>
                  <div className="grid gap-2 items-center w-full">
                    <label htmlFor="" className="font-semibold">
                      Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="border border-gray-400 p-2 rounded-md"
                      value={visitor.name}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="grid gap-2 items-center w-full">
                    <label htmlFor="" className="font-semibold">
                      Mobile:
                    </label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      className="border border-gray-400 p-2 rounded-md"
                      value={visitor.mobile}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <button onClick={() => handleRemoveVisitor(index)}>
                      <FaTrash />
                    </button>
                    &nbsp;
                  </div>
                </div>
              ))}

              <span>
                <input type="checkbox" />
                &nbsp;<label htmlFor="">Skip Host Approval</label>
                &nbsp;&nbsp;&nbsp;
                <input type="checkbox" />
                &nbsp;&nbsp;<label htmlFor="">Goods Inwards</label>
              </span>
            </div>
            <div>
              <button
                onClick={handleAddVisitor}
                className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
              >
                Add Additional Visitor
              </button>
            </div>

            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVisitor;
