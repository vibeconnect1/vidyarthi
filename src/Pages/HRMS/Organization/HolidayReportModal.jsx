import React from "react";
import ModalWrapper from "../../Modal/ModalWrapper";
import { Link } from "react-router-dom";
import success from "/success.png";

const HolidayReportModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-2 z-10 w-60">
        <div className="flex justify-center">
          <img src={success} className="w-16 h-16 rounded-full" alt="Success Icon" />
        </div>
        <h1 className="font-semibold text-center text-2xl text-green-500">Successful</h1>
        <div>
          {/* Styling the p tag for better readability and spacing */}
          <p className="text-base text-gray-700 mb-2 text-center">
            Your report generation has started. You can view the progress in the
            ‘Report Generation’ tab. To access it, please
          </p>
          <Link to={``} className="text-blue-500 flex justify-center">click here</Link>
        </div>
        <button
          onClick={onClose}
          className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base mt-4"
        >
          Done
        </button>
      </div>
    </ModalWrapper>
  );
};

export default HolidayReportModal;
