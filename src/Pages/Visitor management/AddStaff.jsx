import React, { useRef, useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { IoCloudUploadOutline } from "react-icons/io5";
import image from "/profile.png";

const AddStaff = () => {
  const [behalf, setbehalf] = useState("Visitor");
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full mx-5">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-4 text-black">
            Add Staff
          </h2>
          <form className="border border-gray-300 rounded-lg py-5 px-5 w-full bg-white mb-5">
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
            <div className="grid md:grid-cols-3 gap-5 py-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter Mobile Number"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  id="unit"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Unit</option>
                  {/* Add options for units */}
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="workType"
                  placeholder="Enter Work Type"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  id="unit"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Supplier</option>
                  {/* Add options for units */}
                </select>
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="validFrom"
                  placeholder="Valid From"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="validTill"
                  placeholder="Valid Till"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="mt-5 col-span-3">
                <label
                  htmlFor="file-upload"
                  className="border border-dashed border-gray-500 p-4 mb-4 h-32 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                >
                  <IoCloudUploadOutline size={30} />
                  <p>Click To Upload</p>
                </label>
                <input type="file" className="hidden" id="file-upload" />
              </div>
            </div>
            <h2 className="border-b border-gray-500 my-5 text-lg font-medium">
              Working Schedule
            </h2>
            <div className="mt-4">
              <table class="w-full ">
                <thead>
                  <tr>
                    <th class="px-4 py-2"></th>
                    <th class="px-4 py-2">Select Days</th>
                    <th class="px-4 py-2">Start Time</th>
                    <th class="px-4 py-2">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Monday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Tuesday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Wednesday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Thursday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Friday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Saturday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td class="border px-4 py-2 text-center">Sunday</td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                    <td class="border px-4 py-2 text-center">
                      <input
                        type="time"
                        className="border border-gray-400 p-2 rounded-md"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
