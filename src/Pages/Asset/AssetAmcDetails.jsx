import React from "react";
import InstituteDetails from "../School management/InstituteDetails";

const AssetAmcDetails = () => {
  const amc = {
    asset_name: "Generator",
    vendor: "Sai Engineering",
    start_date: "2023-01-01",
    end_date: "2024-01-01",
    frequency: "Quarterly",
    created_at: "2022-12-01",
    updated_at: "2023-06-01",
  };

  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <h2 className="text-center text-xl font-bold p-2 rounded-md my-3 mx-5 bg-white text-black">
          AMC Details
        </h2>
        <div className="my-2 mb-10 p-2 px-5 rounded-md md:mx-20 bg-white">
          <div className="flex justify-center m-5">
            <h1 className="p-2 border-2 border-black md:px-28 text-xl rounded-md font-semibold">
              {amc.asset_name}
            </h1>
          </div>
          <div className="p-5 grid md:grid-cols-3 gap-5 bg-gray-100 rounded-md font-medium">
            <div className="grid grid-cols-2">
              <p>Vendor :</p>
              <p className="text-sm">{amc.vendor}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Start Date :</p>
              <p className="text-sm">{amc.start_date}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>End Date :</p>
              <p className="text-sm">{amc.end_date}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Frequency :</p>
              <p className="text-sm">{amc.frequency}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Created On :</p>
              <p className="text-sm">{amc.created_at}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Updated On :</p>
              <p className="text-sm">{amc.updated_at}</p>
            </div>
          </div>
          <h1 className="border-b border-black font-semibold my-5">
            Attachments
          </h1>
          <div className="flex gap-4 flex-wrap my-4 items-center text-center">
            <p className="text-center w-full">No Attachments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetAmcDetails;
