import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const PermitDetails = () => {
  const column = [
    { name: "Inventory", selector: (row) => row.Inventory, sortable: true },
    {
      name: "Expected Quantity",
      selector: (row) => row.ExpectedQuantity,
      sortable: true,
    },
    {
      name: "Received Quantity	",
      selector: (row) => row.ReceivedQuantity,
      sortable: true,
    },
    { name: "Unit", selector: (row) => row.Unit, sortable: true },
    { name: "Rate", selector: (row) => row.Rate, sortable: true },
    {
      name: "Approved Qty",
      selector: (row) => row.ApprovedQty,
      sortable: true,
    },
    {
      name: "Rejected Qty",
      selector: (row) => row.RejectedQty,
      sortable: true,
    },
    { name: "CGST Rate", selector: (row) => row.CGSTRate, sortable: true },
    { name: "CGST Amount", selector: (row) => row.CGSTAmount, sortable: true },
    { name: "SGST Rate", selector: (row) => row.SGSTRate, sortable: true },
    { name: "SGST Amount", selector: (row) => row.SGSTAmount, sortable: true },
    { name: "IGST Rate", selector: (row) => row.IGSTRate, sortable: true },
    { name: "IGST Amount", selector: (row) => row.IGSTAmount, sortable: true },
    { name: "TCS Rate", selector: (row) => row.TCSRate, sortable: true },
    { name: "TCS Amount", selector: (row) => row.TCSAmount, sortable: true },
    { name: "Total Taxes", selector: (row) => row.TotalTaxes, sortable: true },
    {
      name: "Total Amount",
      selector: (row) => row.TotalAmount,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      Inventory: "EXHAUST FANS",
      ExpectedQuantity: "2.0",
      ReceivedQuantity: "2",
      Unit: "31/05/24",
      Rate: "4344.29	",
      ApprovedQty: "2.0",
      RejectedQty: "0.0",
      CGSTRate: "9.0",
      CGSTAmount: "781.97",
      SGSTRate: "9.0",
      SGSTAmount: "781.97",
      IGSTRate: "NA",
      IGSTAmount: "0.0",
      TCSRate: "0.0",
      TCSAmount: "0.0",
      TotalTaxes: "1563.94",
      TotalAmount: "8688.58",
    },
  ];
  const columnDebitNote = [
    { name: "ID", selector: (row) => row.ID, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    { name: "Description", selector: (row) => row.Description, sortable: true },
    { name: "Approved", selector: (row) => row.Approved, sortable: true },
    { name: "Approved On", selector: (row) => row.ApprovedOn, sortable: true },
    { name: "Approved By", selector: (row) => row.ApprovedBy, sortable: true },
    { name: "Created On", selector: (row) => row.CreatedOn, sortable: true },
    { name: "Created By", selector: (row) => row.CreatedBy, sortable: true },
    { name: "Attachment", selector: (row) => row.QCAmount, sortable: true },
  ];
  const dataDebitNote = [
    {
      id: 1,
      ID: "",
      Amount: "",
      Description: "",
      Approved: "",
      ApprovedOn: "",
      ApprovedBy: "",
      CreatedOn: "",
      CreatedBy: "",
      Attachment: "",
    },
  ];
  const columnPayment = [
    { name: "Action", selector: (row) => row.Action, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataPayment = [
    {
      id: 1,
      Action: "",
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  const columnRetentionPayment = [
    { name: "Action", selector: (row) => row.Action, sortable: true },
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataRetentionPayment = [
    {
      id: 1,
      Action: "",
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  const columnQCPayment = [
    { name: "Amount", selector: (row) => row.Amount, sortable: true },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.TransactionNumber,
      sortable: true,
    },
    { name: "Status	", selector: (row) => row.Status, sortable: true },
    {
      name: "Payment Date",
      selector: (row) => row.PaymentDate,
      sortable: true,
    },
    { name: "Note", selector: (row) => row.Note, sortable: true },
    {
      name: "Date of Entry",
      selector: (row) => row.DateofEntry,
      sortable: true,
    },
    { name: "Actions", selector: (row) => row.Actions, sortable: true },
  ];
  const dataQCPayment = [
    {
      id: 1,
      Amount: "",
      PaymentMode: "",
      TransactionNumber: "",
      Status: "",
      PaymentDate: "",
      Note: "",
      DateofEntry: "",
      Actions: "",
    },
  ];
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col w-full overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 rounded-md mx-10 bg-white my-3">
            PermitList DETAILS
          </h2>
          <div className="">
            <div className="flex gap-3 item-center my-3 mx-10 flex-wrap">
              <p className="text-sm font-bold">Safety Officer Approval:</p>
              <button className="bg-orange-400 px-2 py-1 rounded-md text-white text-sm">
                pending
              </button>
              <p className="text-sm font-bold">
                Site Technical-in-Charge Approval:
              </p>
              <button className="bg-green-400 px-2 py-1 rounded-md text-white text-sm">
                Approved
              </button>
            </div>
            <div className="border-2 flex flex-col my-5 mx-10 p-4 gap-4 rounded-md bg-white">
              <h2 className=" text-lg border-black font-semibold text-center">
                Permit Details
              </h2>
              <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
                <div className="grid grid-cols-2 items-center">
                  <p>Permit ID</p>
                  <p className="text-sm font-normal ">: 309</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Permit Type</p>
                  <p className="text-sm font-normal ">: Cold Work</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Requested Date & Time</p>
                  <p className="text-sm font-normal ">: 03/06/2024 10:36 AM</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Issued Date & Time</p>
                  <p className="text-sm font-normal ">: 03/06/2024</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Vendor</p>
                  <p className="text-sm font-normal ">
                    : Soledify Systems Private Limited
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Extension Status</p>
                  <p className="text-sm font-normal ">: No</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Permit Expiry Date</p>
                  <p className="text-sm font-normal ">: 03/06/2024 6:00 PM</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Permit Status</p>
                  <p className="text-sm font-normal ">: Draft</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Permit For</p>
                  <p className="text-sm font-normal ">
                    : cable laying work & Earthing work
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Location</p>
                  <p className="text-sm font-normal ">
                    : Site - PBP Viman Nagar / Building - COMMON / Wing - NA /
                    Floor - NA / Area - NA / Room - NA
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Comment</p>
                  <p className="text-sm font-normal ">
                    : use proper PPE during the work
                  </p>
                </div>
              </div>
              <h2 className="border-t text-lg py-5 border-black font-semibold text-center">
                REQUESTOR’S INFORMATION
              </h2>
              <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
                <div className="grid grid-cols-2 items-center">
                  <p>Created By</p>
                  <p className="text-sm font-normal ">: Awishkar Borkar</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Department</p>
                  <p className="text-sm font-normal ">: TECHNICAL</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Contact Number</p>
                  <p className="text-sm font-normal ">: 7620619199</p>
                </div>
              </div>

              <h2 className="border-t text-lg py-5 border-black font-semibold text-center">
                ACTIVITY DETAILS
              </h2>
              <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
                <div className="grid grid-cols-2 items-center">
                  <p>Activity</p>
                  <p className="text-sm font-normal ">: Cable Laying Work</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Sub Activity</p>
                  <p className="text-sm font-normal ">
                    : Carrying All materials such as Ladder & tools etc.
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Category of Hazard</p>
                  <p className="text-sm font-normal ">
                    : Slips & Trips (while carrying material)
                  </p>
                </div>

                <div className="grid grid-cols-2 items-center"></div>
                <div className="col-span-2 grid grid-cols-1">
                  <div className="grid grid-cols-2 items-center">
                    <p>Physical Injury</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Safety Equipment Required</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Use Safety Shoes (EN-345/ IS-15298)</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Safety Helmet (IS-2925:1984)</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Reflective Jacket (EN-20471:2013)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 items-center">
                  <p>Activity</p>
                  <p className="text-sm font-normal ">: Cable Laying Work</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Sub Activity</p>
                  <p className="text-sm font-normal ">
                    : Carrying All materials such as Ladder & tools etc.
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Category of Hazard</p>
                  <p className="text-sm font-normal ">
                    : Slips & Trips (while carrying material)
                  </p>
                </div>

                <div className="col-span-2 grid grid-cols-1">
                  <div className="grid grid-cols-2 items-center">
                    <p>Physical Injury</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Safety Equipment Required</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Use Safety Shoes (EN-345/ IS-15298)</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Safety Helmet (IS-2925:1984)</p>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <p className="pl-4">Reflective Jacket (EN-20471:2013)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-md font-semibold mx-10 my-2">Attachments</h2>
            <div className="mx-10 bg-white rounded-md py-2 px-10">
              <p className="text-md font-semibold">Attachments</p>
              <p className="text-sm">No attachments</p>
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-md font-semibold mx-10 my-2">Comment log</h2>
            <div className="mx-10 bg-white rounded-md py-2 px-10">
              <button>Add Comment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermitDetails;
