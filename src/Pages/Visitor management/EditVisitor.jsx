import React, { useState, useRef } from "react";
import image from "/profile.png";
import { FaTrash } from "react-icons/fa";
import InstituteDetails from "../School management/InstituteDetails";

const EditVisitor = () => {
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

//   const getHeadingText = () => {
//     switch (behalf) {
//       case "Visitor":
//         return "NEW VISITOR";
//       case "Delivery":
//         return "DELIVERY & SUPPORT STAFF";
//       case "Cab":
//         return "CAB";
//       default:
//         return "CREATE VISITOR";
//     }
//   };

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
            Edit Visitor
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

            <div className="flex flex-col gap-6 my-5">
              {/* Visitor Type Section */}
              <div className="flex items-center">
                <label className="mr-4 font-semibold">Visitor Type:</label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="guest"
                      name="attendance"
                      value="guest"
                      className="mr-2"
                    />
                    <label htmlFor="guest" className="">
                      Guest
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="staff"
                      name="attendance"
                      value="staff"
                      className="mr-2"
                    />
                    <label htmlFor="staff" className="">
                      Support Staff
                    </label>
                  </div>
                </div>
              </div>
              {/* Visiting Frequency Section */}
              <div className="flex items-center">
                <label className="mr-4 font-semibold">
                  Visiting Frequency:
                </label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="once"
                      name="frequency"
                      value="once"
                      className="mr-2"
                    />
                    <label htmlFor="once" className="">
                      Once
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="frequently"
                      name="frequency"
                      value="frequently"
                      className="mr-2"
                    />
                    <label htmlFor="frequently" className="">
                      Frequently
                    </label>
                  </div>
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
                <select className="border-b border-gray-500 focus:outline-none">
                  <option value="">Select Person to meet</option>
                  <option value=""></option>
                </select>
              </div>
              {behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <input
                    type="text"
                    id="visitorName"
                    className="border-b border-gray-500 focus:outline-none"
                    placeholder="Enter Visitor Name"
                  />
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <input
                    type="number"
                    id="additionalVisitor"
                    className="border-b border-gray-500 focus:outline-none"
                    placeholder="Enter Pass number"
                  />
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <input
                    type="text"
                    id="comingFrom"
                    className="border-b border-gray-500 focus:outline-none"
                    placeholder="Coming from"
                  />
                </div>
              )}

              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="vehicleNumber"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Vehicle Number"
                />
              </div>

              {behalf !== "Visitor" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <input
                    type="text"
                    id="notes"
                    className="border-b border-gray-500 focus:outline-none"
                    placeholder="Enter Notes"
                  />
                </div>
              )}

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="expectedDate"
                  placeholder=" Expected Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="expectedTime"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>

              {behalf !== "Delivery" && behalf !== "Cab" && (
                <div className="grid gap-2 items-center w-full">
                  <select
                    id="purpose"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="Meeting">Select Visit Purpose</option>
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
                  <select
                    id="category"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="Courier">Select Category</option>
                    <option value="Courier">Courier</option>
                    <option value="R&M">R&M</option>
                    <option value="Bank Services">Bank Services</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                </div>
              )}

              {behalf !== "Delivery" && behalf !== "Visitor" && (
                <div className="grid gap-2 items-center w-full">
                  <select
                    id="service"
                    className="border-b border-gray-500 focus:outline-none"
                  >
                    <option value="Ola">Select Service Provider</option>
                    <option value="Ola">Ola</option>
                    <option value="Uber">Uber</option>
                    <option value="Meru">Meru</option>
                    <option value="Kali Peeli">Kali Peeli</option>
                  </select>
                </div>
              )}
              <span>
                <input type="checkbox" />
                &nbsp;<label htmlFor="">Skip Host Approval</label>
                &nbsp;&nbsp;&nbsp;
                <input type="checkbox" />
                &nbsp;&nbsp;<label htmlFor="">Goods Inwards</label>
              </span>
            </div>
            <h2 className="border-b border-gray-500 my-5 text-xl font-medium">
              Add Additional Visitor
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {visitors.map((visitor, index) => (
                <div key={index}>
                  <div className="grid gap-2 items-center w-full">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="border-b border-gray-500 focus:outline-none"
                      value={visitor.name}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="grid gap-2 items-center w-full">
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      className="border-b border-gray-500 focus:outline-none"
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

export default EditVisitor