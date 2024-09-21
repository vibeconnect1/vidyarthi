import React, { useState } from "react";
import PayslipDetailsList from "./PayslipDetailsList";
import { PiPlusCircle } from "react-icons/pi";
import FileInput from "../../ConfigurationFile/FileInput";
import Table from "../../ConfigurationFile/Table";

const PayrollForm16 = () => {
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      name: "Actions",

      cell: (row) => (
        <div className="flex items-center gap-4">

        </div>
      ),
    },
    {
      name: "Financial Year",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "No. Of Form 16 Uploaded",
      selector: (row) => row.Label,
      sortable: true,
    },
    
  
  ];

  const data = [
    {
      Label: " 1",
      Location: "2024",
      

    },

  ];

  return (
    <section className="flex ml-20">
     {/* <OrganisationSetting/> */}
     <PayslipDetailsList/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
      
        <div className=" flex justify-end my-5">
       
          <button onClick={() => setShowModal(true)}
           
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Bulk Upload
          </button>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Bulk Upload Employee Form 16 Documents</h2>
            <div className="grid md:grid-cols-1 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="regularizationReason">Select Financial Year *</label>
                    <select name="" id="" className="border p-2 border-black rounded-md"><option value="">2023-2024</option></select>              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="regularizationRequestStatus">Document name format *</label>
                <select name="" id="" className="border p-2 border-black rounded-md"><option value="">PAN</option></select>                    </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="startDate">Upload Documents *</label>
                  <FileInput/>              </div>
              <div className="grid gap-2 items-center w-full">
                <label htmlFor="endDate">Notify Employees by Email</label>
                <div className="flex gap-2">
                <input type="radio" /> Yes
                <input type="radio" /> No</div>
              </div>
             
            </div>
            <div className="flex justify-center gap-2">
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              // onClick={() => setShowModal(false)}
            >
              Upload
            </button></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PayrollForm16