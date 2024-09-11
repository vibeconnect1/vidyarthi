import React, { useState } from "react";
import ModalWrapper from "../Modal/ModalWrapper";
import Select from "react-select";

const ItemsModal = ({ onclose }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [requestDetails, setRequestDetails] = useState("");

  // Static items list for the select input
  const staticItems = [
    { value: 1, label: "Item 1" },
    { value: 2, label: "Item 2" },
    { value: 3, label: "Item 3" },
    { value: 4, label: "Item 4" },
  ];

  // Custom styles for the Select component to remove border
  const customStyles = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none", // Remove focus outline
    }),
  };

  // Handler for select change
  const handleSelectChange = (selectedOptions) => {
    setSelectedItems(selectedOptions);
  };

  // Handler for submit button
  const handleSubmit = () => {
    console.log("Selected Items:", selectedItems);
    console.log("Request Details:", requestDetails);
    onclose(); // Close the modal after submission
  };

  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center w-96">
        <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2 border-b border-gray-300 pb-2">
          Add Request
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <Select
              id="multiple-select"
              isMulti
              options={staticItems}
              styles={customStyles} 
              onChange={handleSelectChange}
              value={selectedItems}
              className="border-b border-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <textarea
              id="textarea"
              rows="4"
              className="border-b border-gray-500 focus:outline-none"
              placeholder="Enter request details..."
              value={requestDetails}
              onChange={(e) => setRequestDetails(e.target.value)}
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="custom-bg text-black py-2 rounded-md hover:bg-gray-400"
          >
            Request Approval
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ItemsModal;
