const CustomTrigger = ({ children, isOpen }) => {
    return (
      <div className="flex justify-between items-center">
        <span>{children}</span>
        <button className="focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM4.293 9.293a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L6.414 9l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    );
  };
 
export default CustomTrigger