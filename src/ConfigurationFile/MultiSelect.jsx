import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp, FaSortDown } from "react-icons/fa";

const MultiSelect = ({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
  handleSelect,
  disabled,
  setOptions,
  searchOptions,
  compTitle = "Click Here to Select Component",
}) => {
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  //   const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options.map((option) => option.value));
    }
  };

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    if (searchValue.trim() === "") {
      setOptions(searchOptions);
    } else {
      const filteredResults = searchOptions.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setOptions(filteredResults);
    }
  };
  return (
    <div className="mb-2" ref={dropdownRef}>
      <label className="block font-semibold">{title}</label>
      <div className="mb-2  relative">
        <button
          className={`w-full px-3 py-2 border flex items-center gap-2 justify-center border-gray-300 rounded-md ${
            disabled && "bg-gray-100"
          } `}
          onClick={toggleDropdown}
          disabled={disabled}
        >
          {selectedOptions.length === 0
            ? compTitle
            : `${selectedOptions.length} Selected`}
          {!isDropdownVisible ? <FaCaretDown /> : <FaCaretUp />}
        </button>
        {isDropdownVisible && (
          <div className="absolute z-10 w-full border rounded shadow p-2 mt-2 bg-white max-h-60 overflow-y-auto">
            <input
              type="text"
              name=""
              value={searchText}
              onChange={handleSearch}
              id=""
              className="border-b w-full  p-1 outline-none"
              placeholder="Search"
            />
            <div className="mb-2">
              <button
                className={`p-1 border-b mt-1 w-full text-left flex items-center gap-2 ${
                  selectedOptions.length === options.length
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={handleSelectAll}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4"
                  checked={selectedOptions.length === options.length}
                  // onChange={() => handleSelect(option.value)}
                  onChange={handleSelectAll}
                />
                Select all
              </button>
            </div>
            {options.map((option) => (
              <div key={option.value} className="mb-2">
                <label className="inline-flex items-center hover:bg-blue-500 w-full p-1 hover:text-white border-b">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4"
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
