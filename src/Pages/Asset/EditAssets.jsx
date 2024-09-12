import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Switch from "../../ConfigurationFile/Switch";
import { IoCloudUploadOutline } from "react-icons/io5";

function EditAssets() {
  const [meterApplicable, setMeterApplicable] = useState(false);
  const [subAsset, setSubAsset] = useState(false);
  const [warranty, setWarranty] = useState(false);
  return (
    <div>
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden mx-2 w-full">
          <div className="md:p-4 w-full flex overflow-hidden flex-col">
            <h2 className="text-center text-xl font-bold p-2 rounded-md text-black bg-white">
              Edit Asset
            </h2>
            <div className=" my-5 mb-10 p-5 px-10 rounded-lg bg-white">
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                Location Details
              </h2>
              <div className="flex sm:flex-row flex-col justify-around items-center">
                <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-2 w-full">
                  <div className="flex flex-col">
                    <select className="border-b border-gray-500 focus:outline-none">
                      <option value="">Select Building</option>
                      <option value="">East</option>
                      <option value="">West</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <select className="border-b border-gray-500 focus:outline-none">
                      <option value="">Select Floor</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <select className="border-b border-gray-500 focus:outline-none">
                      <option value="">Select Unit</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                  Asset Info
                </h2>
                <div className="flex sm:flex-row flex-col justify-around items-center">
                  <div className="grid md:grid-cols-3 item-start gap-x-4 gap-y-4 w-full">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Asset Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="OEM Name"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Model Number "
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Serial Number "
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Purchase Cost "
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Capacity"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Unit of measurement"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="">Select Group</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="">Select Sub Group</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <label htmlFor="" className="font-medium text-sm ">
                        Purchased Date:
                      </label>
                      <input
                        type="date"
                        className="border-b border-gray-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-4 items-center">
                      <p>Breakdown</p>
                      <Switch />
                      <p>In Use</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold">Critical:</p>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          id="yes"
                          name="critical"
                          className="checked:accent-black"
                        />
                        <label htmlFor="yes">Yes</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          id="no"
                          name="critical"
                          className="checked:accent-black"
                        />
                        <label htmlFor="no">No</label>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        onChange={() => setMeterApplicable(!meterApplicable)}
                      />
                      <label htmlFor="meterApplicable">Meter Applicable</label>
                    </div>
                    {meterApplicable && (
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">Asset Type:</p>
                        <div className="flex gap-2">
                          <input
                            type="radio"
                            id="parent"
                            name="meterOption"
                            value="parent"
                          />
                          <label htmlFor="parent">parent</label>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="radio"
                            id="sub"
                            name="meterOption"
                            value="sub"
                            onChange={() => setSubAsset(!subAsset)}
                          />
                          <label htmlFor="sub">Sub</label>
                        </div>
                      </div>
                    )}
                    {subAsset && (
                      <div>
                        <div className="flex flex-col">
                          <select className="border-b border-gray-500 focus:outline-none">
                            <option value="">Select Parent Asset</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="my-5">
                <p className="border-b border-black font-semibold">
                  Warranty Details
                </p>
                <div className="flex  flex-col gap-4 my-2  justify-between">
                  <div className="flex gap-4 my-2">
                    <p className="font-semibold">Under Warranty: </p>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="warranty"
                        onChange={() => setWarranty(!warranty)}
                        className="checked:accent-black"
                      />
                      <label htmlFor="inWarranty">Yes</label>
                    </div>
                    <div className="flex  gap-2">
                      <input
                        type="radio"
                        id="notInWarranty"
                        name="warranty"
                        className="checked:accent-black"
                      />
                      <label htmlFor="notInWarranty">No</label>
                    </div>
                  </div>
                  {warranty && (
                    <div className="flex md:flex-row flex-col md:items-center my-2 gap-5">
                      <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                        <label htmlFor="" className="font-medium text-sm">
                          Warranty Start Date :
                        </label>
                        <input
                          type="date"
                          name="warranty_start"
                          id="warranty_start"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                        <label htmlFor="" className="font-medium text-sm">
                          Expiry Date :
                        </label>
                        <input
                          type="date"
                          name="warranty_expiry"
                          id="warranty_expiry"
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                      </div>
                      <div className="md:flex grid grid-cols-2 items-center gap-2 ">
                        <label htmlFor="" className="font-medium text-sm">
                          Commissioning Date :
                        </label>
                        <input
                          type="date"
                          name="installation"
                          id=""
                          className="border p-1 px-4 border-gray-500 rounded-md"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="my-5">
                  <p className="border-b border-black font-semibold">
                    Supplier Contact Details
                  </p>
                  <div className=" flex md:items-center md:justify-between flex-col md:flex-row">
                    <div className="flex flex-col my-2">
                      <select className="border-b border-gray-500 focus:outline-none">
                        <option value="">Select Supplier</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="border-b text-center text-xl border-black mb-6 font-bold">
                Attachments
              </h2>
              <div className="grid grid-cols-4 gap-5">
                <div>
                  <p className="border-b border-black my-1 font-semibold">
                    Purchase Invoice
                  </p>
                  <div className="mt-5">
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                    >
                      <IoCloudUploadOutline size={30}/>
                      <p>Click To Upload</p>
                    </label>
                    <input type="file" className="hidden" id="file-upload" />
                  </div>
                </div>
                <div>
                  <p className="border-b border-black my-1 font-semibold">
                    Insurance Details
                  </p>
                  <div className="mt-5">
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                    >
                      <IoCloudUploadOutline size={30}/>
                      <p>Click To Upload</p>
                    </label>
                    <input type="file" className="hidden" id="file-upload" />
                  </div>
                </div>
                <div>
                  <p className="border-b border-black my-1 font-semibold">
                    Manuals
                  </p>
                  <div className="mt-5">
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                    >
                      <IoCloudUploadOutline size={30}/>
                      <p>Click To Upload</p>
                    </label>
                    <input type="file" className="hidden" id="file-upload" />
                  </div>
                </div>
                <div>
                  <p className="border-b border-black my-1 font-semibold">
                    Other Files
                  </p>
                  <div className="mt-5">
                    <label
                      htmlFor="file-upload"
                      className="border border-dashed border-gray-500 p-4 mb-4 h-40 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
                    >
                      <IoCloudUploadOutline size={30}/>
                      <p>Click To Upload</p>
                    </label>
                    <input type="file" className="hidden" id="file-upload" />
                  </div>
                </div>
              </div>
              <div className="sm:flex justify-center grid gap-2 my-5 ">
                <button className="bg-black text-white p-2 px-4 rounded-md font-medium">
                  Save & Show Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditAssets