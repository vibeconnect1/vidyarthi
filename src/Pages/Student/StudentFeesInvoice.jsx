import React, { useState, useEffect } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

const sampleInvoices = [
  {
    invoiceNumber: "INV001",
    date: "2024-09-01",
    dueDate: "2024-09-15",
    amount: "$150.00",
    status: "Paid"
  },
  {
    invoiceNumber: "INV002",
    date: "2024-08-15",
    dueDate: "2024-09-01",
    amount: "$200.00",
    status: "Pending"
  },
  {
    invoiceNumber: "INV003",
    date: "2024-07-10",
    dueDate: "2024-07-25",
    amount: "$250.00",
    status: "Paid"
  },
];

function StudentFeesInvoice() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setInvoices(sampleInvoices);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <StudentSidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Fees Invoice</h2>
          {invoices.length === 0 ? (
            <p className="text-lg text-red-600">There are no invoices available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {invoices.map((invoice) => (
                <div
                  key={invoice.invoiceNumber}
                  className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Invoice Number: {invoice.invoiceNumber}
                    </h3>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        invoice.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Date:</strong> {invoice.date}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Due Date:</strong> {invoice.dueDate}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Amount:</strong> {invoice.amount}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default StudentFeesInvoice;
