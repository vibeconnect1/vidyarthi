import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Assets from "./Assets";
import AssetAmc from "./AssetAmc";
import Meter from "./Meter";
import CheckList from "./CheckList";
import RoutineTask from "./RoutineTask";
import PPMActivity from "./PPMActivity";
import PPMTask from "./PPMTask";
import Inventory from "./Inventory";


function Asset() {
  const [asset, setAsset] = useState("assets");

  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="flex justify-around mx-5 my-3 text-base font-medium text-gray-500 p-2 bg-white rounded-md shadow-xl">
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "assets" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("assets")}
            >
              Assets
            </h2>
          </div>

          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "amc" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("amc")}
            >
              Amc
            </h2>
          </div>

          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "meter" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("meter")}
            >
              Meter
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "checkList" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("checkList")}
            >
              CheckList
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "routineTask" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("routineTask")}
            >
              Routine Task
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "ppm" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("ppm")}
            >
              PPM Checklist
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "ppmTask" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("ppmTask")}
            >
              PPM Activity
            </h2>
          </div>
          <div>
            <h2
              className={`p-3 text-slate-800 cursor-pointer ${
                asset === "stocks" ? "text-violet-700" : ""
              }`}
              onClick={() => setAsset("stocks")}
            >
              Stock Items
            </h2>
          </div>
        </div>
        <div className="mx-5">
          {asset === "assets" && (
            <div>
              <Assets/>
            </div>
          )}
          {asset === "amc" && (
            <div>
              <AssetAmc/>
            </div>
          )}
          {asset === "meter" && (
            <div>
              <Meter/>
            </div>
          )}
          {asset === "checkList" && (
            <div>
              <CheckList/>
            </div>
          )}
          {asset === "routineTask" && (
            <div>
              <RoutineTask/>
            </div>
          )}
          {asset === "ppm" && (
            <div>
              <PPMActivity/>
            </div>
          )}
          {asset === "ppmTask" && (
            <div>
              <PPMTask/>
            </div>
          )}
          {asset === "stocks" && (
            <div>
              <Inventory/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Asset