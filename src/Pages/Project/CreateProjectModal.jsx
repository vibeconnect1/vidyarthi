import React, { useRef, useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";

const CreateProjectModal = ({ onClose }) => {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  const [isSecondInputVisible, setIsSecondInputVisible] = useState(true);
  const [emails, setEmails] = useState([
    { value: "email1@example.com", label: "email1@example.com" },
    { value: "email2@example.com", label: "email2@example.com" },
  ]);
  const [emailsOutsider, setEmailsOutsider] = useState([
    { value: "outsider1@example.com", label: "outsider1@example.com" },
    { value: "outsider2@example.com", label: "outsider2@example.com" },
  ]);

  const handleChangeSelect = (selectedOption) => {
    console.log("Selected people: ", selectedOption);
  };

  const handleChangeSelectOutsider = (selectedOption) => {
    console.log("Selected outsiders: ", selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: 'left',
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "none",
    }),
  };

  return (
    <ModalWrapper onclose={onClose}>
      <div className="mx-4 flex flex-col justify-between items-center gap-10">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl border-b border-gray-300 w-full pb-2">
          New board name
        </h2>
        <div>
          <div className="">
            <input
              spellCheck="true"
              placeholder="Add Board Name"
              className="border-b border-gray-500 focus:outline-none w-full"
            />
            <div className="relative flex flex-col gap-1 my-5">
              <DatePicker
                ref={datePickerRef}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border-b border-gray-500 focus:outline-none appearance-none w-full text-gray-400"
                aria-label="Set Project Timeline"
                placeholderText="Select a date"
              />
              <MdOutlineDateRange
                onClick={handleIconClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
            <div className="flex gap-4  w-[35rem] my-5">
              {isSecondInputVisible && (
                <>
                  <div className="flex-1">
                    <Select
                      isMulti
                      onChange={handleChangeSelect}
                      options={emails}
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="Add people by email"
                      styles={customStyles}
                    />
                  </div>
                  <div className="flex-1">
                    <Select
                      isMulti
                      onChange={handleChangeSelectOutsider}
                      options={emailsOutsider}
                      className="border-b border-gray-500 focus:outline-none"
                      placeholder="Add Outsider people by email"
                      styles={customStyles}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Describe Project"
                className="border-b border-gray-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="mt-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4 mb-4 h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Click To Upload</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
            </div>
            <div className="flex justify-center w-full my-4">
              <button className="w-full p-2  rounded-md font-medium  bg-opacity-30 bg-black text-white">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CreateProjectModal;
