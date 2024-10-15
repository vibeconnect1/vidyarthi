import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa"; // Import from react-icons

export function FilterForm({ options, label, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const updatedSelections = new Set(selectedOptions);
    
    if (updatedSelections.has(option)) {
      updatedSelections.delete(option); // Remove option if already selected
    } else {
      updatedSelections.add(option); // Add option if not selected
    }
    
    setSelectedOptions(updatedSelections);
    onSelect(Array.from(updatedSelections)); // Call onSelect with an array of selected options
  };

  const handleSelectAll = () => {
    if (selectedOptions.size === options.length) {
      setSelectedOptions(new Set()); // Deselect all if already selected
      onSelect([]); // Call onSelect with an empty array
    } else {
      setSelectedOptions(new Set(options)); // Select all
      onSelect(options); // Call onSelect with all options
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={toggleDropdown}
        className="border-b border-gray-400 focus:outline-none w-full text-left flex items-center gap-2 justify-between text-gray-500"
      >
        {selectedOptions.size > 0 ? `${selectedOptions.size} selected` : label}
        <FaChevronDown className="text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute left-0 z-20 w-full mt-2 origin-top-right bg-white border border-gray-400 divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="p-2">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <ul className="max-h-80 overflow-y-auto py-1">
            <li
              onClick={handleSelectAll}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedOptions.size === options.length}
                readOnly // Readonly because it's handled by the click
                className="mr-2"
              />
              Select All
            </li>
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.has(option)}
                  onChange={() => handleOptionClick(option)} // Handle checkbox change
                  className="mr-2"
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
