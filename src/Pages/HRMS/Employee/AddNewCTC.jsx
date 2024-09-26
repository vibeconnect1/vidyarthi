import React, { useState } from "react";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import AddNewCTCGeneralInfo from "./AddNewCTCGeneralInfo";
import TaxStatutory from "./TaxStatutory";
import CTCComponents from "./CTCComponents";

function AddNewCTC() {
  const [page, setPage] = useState("general");
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <EditEmployeeDirectoryPage />
      <div className="mx-24 my-5">
        <div className=" flex gap-2 p-2 pb-0 border-b-2 border-gray-300 w-full">
          <h2
            className={`p-1 ${
              page === "general" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("general")}
          >
            General Info
          </h2>
          <h2
            className={`p-1 ${
              page === "taxStatutory" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("taxStatutory")}
          >
            Tax and Statutory Settings
          </h2>
          <h2
            className={`p-1 ${
              page === "ctc" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("ctc")}
          >
            CTC Components
          </h2>
        </div>
        {page === "general" && (
          <div>
            <AddNewCTCGeneralInfo/>
          </div>
        )}
        {page === "taxStatutory" && <TaxStatutory/>}
        {page === "ctc" && <CTCComponents/>}
      </div>
    </div>
  );
}

export default AddNewCTC;
