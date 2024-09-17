import React, { useState } from "react";
import Select from "react-select";
import ModalWrapper from "./ModalWrapper";

const Item = [
  { value: "item1", label: "Item1" },
  { value: "item2", label: "item2" },
  { value: "item3", label: "item3" },
  // Add more emails or fetch dynamically
];

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

const AddVendorItemModal = ({ onclose }) => {
  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleChangeSelect = (selectedOption) => {
    setSelectedEmails(selectedOption);
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2">
          Add Request
        </h2>
        <div className="w-96 space-y-5 my-5">
          <div className="flex flex-col">
            <div className="flex-1">
              <Select
                isMulti
                onChange={handleChangeSelect}
                options={Item}
                className="border-b border-gray-500 focus:outline-none"
                placeholder="Select Item"
                styles={customStyles}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <textarea
              type="text"
              placeholder="Remark"
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>
          <button className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base w-full hover:bg-gray-200">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddVendorItemModal