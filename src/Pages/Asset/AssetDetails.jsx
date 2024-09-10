import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Switch from "../../ConfigurationFile/Switch";
import Assetinfo from "./Assetinfo";
import AMCDetails from "./AMCDetails";
import Readings from "./Readings";
import PPM from "./PPM";

function AssetDetails() {
    const[page, setPage] = useState("assetInfo")
  return (
    <div>
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="md:p-4 w-full flex md:mx-2 overflow-hidden flex-col">
            <div className="md:p-4 w-full my-2 flex md:mx-2 overflow-hidden flex-col">
              <div className="md:flex justify-center ">
                <div className="sm:flex grid grid-cols-2 flex-row gap-2 md:gap-10  font-medium p-2 rounded-md sm:rounded-full bg-gray-100">
                  <h2
                    className={`p-1 ${
                      page === "assetInfo" &&
                      "bg-white text-blue-500 shadow-custom-all-sides"
                    } rounded-full px-4 cursor-pointer text-center  transition-all duration-300 ease-linear`}
                    onClick={() => setPage("assetInfo")}
                  >
                    Asset Info
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "AMCDetails" &&
                      "bg-white text-blue-500 shadow-custom-all-sides"
                    } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("AMCDetails")}
                  >
                    AMC Details
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "readings" &&
                      "bg-white text-blue-500 shadow-custom-all-sides"
                    } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("readings")}
                  >
                    Readings
                  </h2>
                  <h2
                    className={`p-1 ${
                      page === "ppm" &&
                      "bg-white text-blue-500 shadow-custom-all-sides"
                    } rounded-full px-4 cursor-pointer text-center transition-all duration-300 ease-linear`}
                    onClick={() => setPage("ppm")}
                  >
                    PPM
                  </h2>
                </div>
              </div>
              {page === "assetInfo" && (
                <div>
                    <Assetinfo/>
                </div>
              )}
              {page === "AMCDetails" && (
                <div>
                    <AMCDetails/>
                </div>
              )}
              {page === "readings" && (
                <div>
                    <Readings/>
                </div>
              )}
              {page === "ppm" && (
                <div>
                    <PPM/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetails;
