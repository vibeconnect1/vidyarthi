import React, { useRef, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import profile from "/profile.png";
const AddBirthdayModal = ({ onclose }) => {
    const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); 
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className=" z-10">
        <h1 className="font-semibold border-b border-gray-300 text-xl text-black">
          Create Birthday
        </h1>
        <div className="flex gap-4">
          <div className="flex justify-center">
            <div
              onClick={handleImageClick}
              className="cursor-pointer flex justify-center flex-col items-center"
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded"
                  className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                />
              ) : (
                <img
                  src={profile}
                  alt="Default"
                  className="border-4 border-gray-300 rounded-full w-40 h-40 object-cover"
                />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept="image/*"
              />
              <h2 className="font-medium text-black">Choose Image</h2>
            </div>
          </div>
          <div className="flex flex-col">
            <form action="" className="grid grid-cols-2 mt-2 gap-5 py-5">
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter First Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Last Name"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Contact Number"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email"
                  className="border-b border-gray-500 focus:outline-none"
                  required
                />
              </div>
            </form>
            <button className="bg-black p-2 px-4 text-white rounded-md my-5">
              Create
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddBirthdayModal;
