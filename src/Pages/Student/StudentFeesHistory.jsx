import React, { useState } from "react";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";
import Table from "../../ConfigurationFile/Table";
import { IoMdPrint } from "react-icons/io";
import FeesHistoryDetailModal from "./FeesHistoryDetailModal";

function StudentFeesHistory() {
    const [paymentHistoryModal, setPaymentHistoryModal] = useState(false)
    const columns = [
        {
          name: "Receipt Number",
          selector: (row) => row.receiptNumber,
        },
        {
          name: "Amount",
          selector: (row) => row.amount,
        },
        {
          name: "Payment Method",
          selector: (row) => row.paymentMethod,
        },
        {
          name: "Transaction Id",
          selector: (row) => row.transactionId,
        },
        {
            name: "Date",
            selector: (row) => row.date,
          },
          {
            name: "Print",
            selector: (row) => (
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => setPaymentHistoryModal(true)}
                  >
                    <IoMdPrint size={18} />
                  </button>
                </div>
              ),
          },
      ];
      const data = [
        {
            receiptNumber: "0001",
            amount: "₹ 64,000",
            paymentMethod: "Check",
            transactionId: "JKM12",
            date: "12, June, 2024",
        },
      ];
  
  return (
    <div>
      <Header />
      <div className="flex">
        <StudentSidebar />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-xl font-semibold text-gray-700 mx-5 my-5">
            Payment History
          </h2>
          <div className="mx-5 ">
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
        {
         paymentHistoryModal && <FeesHistoryDetailModal onclose={() => setPaymentHistoryModal(false)}/>   
        }
      </div>
    </div>
  );
}

export default StudentFeesHistory