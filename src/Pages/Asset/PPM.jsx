import React, { useState } from "react";
import Schedule from "./Schedule";
import Logs from "./Logs";

function PPM() {
    const [ppm, setPpm] = useState("schedule");

    return (
        <div className="flex justify-center items-center my-10">
            <div className="w-full my-2">
                <div className="flex flex-wrap gap-5 mt-3 mx-5 border-b border-gray-600">
                    <div
                        className={`p-3 cursor-pointer ${
                            ppm === "schedule"
                                ? "border-b border-black text-black-600 font-semibold"
                                : "border-transparent text-slate-800"
                        }`}
                        onClick={() => setPpm("schedule")}
                    >
                        Schedule
                    </div>
                    <div
                        className={`p-3 cursor-pointer ${
                            ppm === "logs"
                                ? "border-b border-black text-black-600 font-semibold"
                                : "border-transparent text-slate-800"
                        }`}
                        onClick={() => setPpm("logs")}
                    >
                        Logs
                    </div>
                </div>

                {ppm === "schedule" && (
                    <div>
                        <Schedule/>
                    </div>
                )}
                {ppm === "logs" && (
                    <div>
                        <Logs/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PPM;
