import React, { useState } from "react";
import GdnDetails from "./GdnDetails";
import GdnPending from "./GdnPending";

function GDN() {
  const [page, setPage] = useState("gdnDetails");
  return (
    <section className="flex">
      <div className="w-full flex  flex-col overflow-hidden">
        <div className="flex justify-center my-2">
          <div className="flex flex-row gap-5 text-sm font-semibold p-1 rounded-full bg-gray-400">
            <h2
              className={`p-1 ${
                page === "gdnDetails" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("gdnDetails")}
            >
              GDN
            </h2>
            <h2
              className={`p-1 ${
                page === "gdnPending" && "bg-white text-blue-500"
              } rounded-full px-4 cursor-pointer`}
              onClick={() => setPage("gdnPending")}
            >
              GDN Pending
            </h2>
          </div>
        </div>
         {page === "gdnDetails" && (
             <div>
            <GdnDetails />
          </div>
        )}
        
        {page === "gdnPending" && (
          <div>
            <GdnPending />
          </div>
        )}
      </div>
    </section>
  );
}

export default GDN