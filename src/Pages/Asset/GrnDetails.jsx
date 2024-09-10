import React from "react";
import { IoMdPrint } from "react-icons/io";
import { MdFeed } from "react-icons/md";
import Table from "../../ConfigurationFile/Table";
import InstituteDetails from "../School management/InstituteDetails";
const GrnDetails = () => {
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
    <section className="flex">
      <InstituteDetails />
      <div className="flex flex-col overflow-hidden w-full">
        <h2 className="text-center text-xl font-bold p-2 mx-12 my-2 rounded-md text-black bg-white">
          Add Grn
        </h2>
        <div className="bg-white mx-12 rounded-md py-5">
          <div className="flex flex-col md:flex-row md:justify-between my-5 w-full">
            <h2 className="text-xl font-semibold mx-5">GRN DETAILS</h2>
            <div className="flex mr-5">
              <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md mx-3">
                <MdFeed />
                feeds
              </button>
              <button className="font-semibold border-2 border-black px-4 p-1 flex gap-2 items-center rounded-md">
                <IoMdPrint />
                Print
              </button>
            </div>
          </div>
          <div className="flex gap-3 item-center my-3 mx-5 flex-wrap">
            <p className="text-sm font-bold">Site Incharge Approval:</p>
            <button className="bg-green-400 px-2 py-1 rounded-md text-white text-sm">
              Approved
            </button>
            <p className="text-sm font-bold">FM Admin Head Approval:</p>
            <button className="bg-green-400 px-2 py-1 rounded-md text-white text-sm">
              Approved
            </button>
            <p className="text-sm font-bold">FM HOD Approval:</p>
            <button className="bg-green-400 px-2 py-1 rounded-md text-white text-sm">
              Approved
            </button>
            <p className="text-sm font-bold">Site Accounts Team Approval:</p>
            <button className="bg-orange-400 px-2 py-1 rounded-md text-white text-sm">
              Pending
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 item-center justify-around ">
            <p className="text-center">Balaji Memane - 30/05/2024</p>
            <p className="text-center ">Vikas Pakhrin - 30/05/2024</p>
            <p className="text-center ">Vijitsingh Thopte - 31/05/2024</p>
          </div>
        </div>
        <div className="flex flex-col my-5 mx-12 p-4 gap-4 rounded-md bg-white">
          <h2 className=" text-lg border-black font-semibold text-center">
            EON 1
          </h2>
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Phone </p>
              <p className="text-sm font-normal ">: 5566884455</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Fax </p>
              <p className="text-sm font-normal ">: NA</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Email</p>
              <p className="text-sm font-normal ">: NA</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>GST</p>
              <p className="text-sm font-normal ">: NA</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>PAN</p>
              <p className="text-sm font-normal ">: NA</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Address</p>
              <p className="text-sm font-normal ">
                : Eon Kharadi Infrastructur, Near Zensar IT Park, Kharadi Pune -
                411014
              </p>
            </div>
          </div>
          <h2 className="border-t text-lg py-5 border-black font-semibold text-center">
            GRN
          </h2>
          <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 items-center">
              <p>Invoice Number</p>
              <p className="text-sm font-normal ">: 3299/24-25</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Reference No.</p>
              <p className="text-sm font-normal ">:</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Invoice Date</p>
              <p className="text-sm font-normal ">: : 22-05-24</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Posting Date</p>
              <p className="text-sm font-normal ">: 29-05-24</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>ID</p>
              <p className="text-sm font-normal ">: 3427</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Retention Amount</p>
              <p className="text-sm font-normal ">: 0.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Supplier Name</p>
              <p className="text-sm font-normal ">Supplier Name</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>TDS Amount</p>
              <p className="text-sm font-normal ">: 0.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>PO Number</p>
              <p className="text-sm font-normal ">: 12214</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>PO Reference Number</p>
              <p className="text-sm font-normal ">: 4500002633</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>QC Amount</p>
              <p className="text-sm font-normal ">: 0.0</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>GRN Amount</p>
              <p className="text-sm font-normal ">: 8688.58</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Total Taxes</p>
              <p className="text-sm font-normal ">: 1563.94</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>PO Amount</p>
              <p className="text-sm font-normal ">:</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Payable Amount</p>
              <p className="text-sm font-normal ">: 10252.52</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Invoice Amount</p>
              <p className="text-sm font-normal ">: 10252.5</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Related To</p>
              <p className="text-sm font-normal ">: Exhaust Fan</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>GRN Amount</p>
              <p className="text-sm font-normal ">: 10252.5</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Physical Invoice sent to</p>
              <p className="text-sm font-normal ">:</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Physical Invoice received On</p>
              <p className="text-sm font-normal ">:</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Gross Amount</p>
              <p className="text-sm font-normal ">: 10252.519999999999</p>
            </div>
            <div className="grid grid-cols-2 items-center">
              <p>Notes</p>
              <p className="text-sm font-normal ">: 10252.519999999999</p>
            </div>
          </div>
        </div>
        <div className="mx-12">
          <Table columns={column} data={data} />
        </div>
        <div className="my-5 md:px-2 text-sm items-center font-medium grid gap-1 bg-white mx-12 py-3 rounded-md">
          <div className="flex justify-between items-center">
            <p>Other Expense:</p>
            <p className="text-sm font-bold "></p>
          </div>
          <div className="flex justify-between items-center">
            <p>Loading Expense:</p>
            <p className="text-sm font-bold"></p>
          </div>
          <div className="flex justify-between items-center">
            <p>Adjustment Amount</p>
            <p className="text-sm font-bold"></p>
          </div>
        </div>
        <div className="bg-white mx-12 rounded-md">
          <h2 className="text-md font-semibold my-3 mx-5">Attachments</h2>
          <div className="border-t py-5 mx-5 border-black">
            <p className="text-md font-semibold">Attachments</p>
            <p className="text-sm">No attachments</p>
          </div>
        </div>
        <div className="mx-12 rounded-md my-3">
          <h3 className="text-md font-semibold my-3">Debit Note Details</h3>
          <Table columns={columnDebitNote} data={dataDebitNote} />
        </div>
        <div className="mx-12 rounded-md my-3">
          <h3 className="text-md font-semibold my-3">Payment Details</h3>
          <Table columns={columnPayment} data={dataPayment} />
        </div>
        <div className="mx-12 rounded-md my-3">
          <h3 className="text-md font-semibold my-3">
            Retention Payment Details
          </h3>
          <Table columns={columnRetentionPayment} data={dataRetentionPayment} />
        </div>
        <div className="mx-12 rounded-md my-3">
          <h3 className="text-md font-semibold my-3">QC Payment Details</h3>
          <Table columns={columnQCPayment} data={dataQCPayment} />
        </div>
      </div>
    </section>
  );
};

export default GrnDetails;
