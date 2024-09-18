import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import DocumentPro from "./DocumentPro";
import DocumentCommon from "./DocumentCommon";

const DocumentMain = () => {
  const [page, setPage] = useState("Personal");

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className=" w-full flex mx-3 flex-col overflow-hidden">
          <div className="flex justify-center my-2 w-full">
            <div className="sm:flex grid grid-cols-2 sm:flex-row gap-5 font-medium p-1 sm:rounded-full rounded-md bg-gray-300">
              <h2
                className={`p-1 ${
                  page === "Personal" &&
                  "bg-white text-blue-500 "
                } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                onClick={() => setPage("Personal")}
              >
                Personal
              </h2>
              <h2
                className={`p-1 ${
                  page === "Common" &&
                  "bg-white text-blue-500 shadow-custom-all-sides"
                } rounded-full px-4 cursor-pointer transition-all duration-300 ease-linear`}
                onClick={() => setPage("Common")}
              >
                Common
              </h2>
            </div>
          </div>
          {page === "Personal" && (
          <>
            <DocumentPro />
          </>
        )}
        {page === "Common" && <DocumentCommon />}
        </div>
      </div>
    </section>
  );
};

export default DocumentMain;
