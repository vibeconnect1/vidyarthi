import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddColumnModal = ({ isOpen, onClose, setOpen, handleAddColumn }) => {
  const [columnName, setColumnName] = useState("");
  const themeColor = useSelector((state) => state.theme.color);

  const handleChange = (e) => {
    setColumnName(e.target.value);
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setColumnName("");
  };

  const handleSubmit = () => {
    handleAddColumn(columnName);
    closeModal();
  };

  return (
    <div
      className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={closeModal}
      ></div>
      <div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <input
          type="text"
          value={columnName}
          onChange={handleChange}
          placeholder="Column Name"
          className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
        />
        <button
          style={{ background: themeColor }}
          className="w-full mt-3 rounded-md h-9 text-white font-medium"
          onClick={handleSubmit}
        >
          Submit Column
        </button>
      </div>
    </div>
  );
};

export default AddColumnModal;