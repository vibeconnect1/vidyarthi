import React, { useState } from "react";
import ScheduledAudit from "./ScheduledAudit";
import ConductedAudit from "./ConductedAudit";
import AuditChecklist from "./AuditChecklist";


const OperationalAudit = () => {
  const [page, setPage] = useState("scheduled");
 
  return (
    <div className=" w-full my-2 flex  overflow-hidden flex-col">
      <div className="flex w-full">
        <div className=" flex gap-2 p-2 pb-0 border-b border-gray-500 w-full mx-5 my-5">
          <h2
            className={`p-1 ${
              page === "scheduled" &&
              `bg-white font-medium text-blue-500 shadow-custom-all-sides`
            } rounded-t-md px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
            onClick={() => setPage("scheduled")}
          >
            Scheduled
          </h2>
          <h2
            className={`p-1 ${
              page === "conducted" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("conducted")}
          >
            Conducted
          </h2>
          <h2
            className={`p-1 ${
              page === "checklists" &&
              "bg-white font-medium text-blue-500 shadow-custom-all-sides"
            } rounded-t-md px-4 cursor-pointer transition-all duration-300 ease-linear`}
            onClick={() => setPage("checklists")}
          >
            Checklists
          </h2>
        </div>
      </div>
      <div>
        {page === "scheduled" && <ScheduledAudit/> }
        {page === "conducted" && <ConductedAudit/> }
        {page === "checklists" && <AuditChecklist/> }
      </div>
    </div>
  );
};

export default OperationalAudit