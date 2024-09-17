import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function TravelingAllowanceRequestDetails() {
  const request = {
    employeeName: "Emily Brown",
    employeeId: "54321",
    expenseCategory: "Meals",
    dateOfExpense: "2024-06-30",
    descriptionOfExpense: "Dinner with clients",
    amountSpent: 50.75,
    supportingDocuments: ["Receipt - ABC123"],
    approvalStatus: "Approved",
    reimbursementAmount: 50.75,
    reimbursementMethod: "Direct Deposit",
    managerApproval: "Yes",
    reimbursementConfirmationEmail: "emily.brown@example.com",
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
            Traveling Allowance Details
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-5 p-8 mx-5 bg-white rounded-md">
            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Employee Name:</label>
              <p>{request.employeeName}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Employee ID:</label>
              <p>{request.employeeId}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Expense Category:</label>
              <p>{request.expenseCategory}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Date of Expense:</label>
              <p>{request.dateOfExpense}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Description of Expense:</label>
              <p>{request.descriptionOfExpense}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Amount Spent:</label>
              <p>${request.amountSpent.toFixed(2)}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Supporting Documents:</label>
              <ul>
                {request.supportingDocuments.map((document, index) => (
                  <li key={index}>{document}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Approval Status:</label>
              <p>{request.approvalStatus}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Reimbursement Amount:</label>
              <p>${request.reimbursementAmount.toFixed(2)}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Reimbursement Method:</label>
              <p>{request.reimbursementMethod}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">Manager Approval:</label>
              <p>{request.managerApproval}</p>
            </div>

            <div className="flex gap-2 items-center w-full">
              <label className="font-semibold">
                Reimbursement Confirmation Email:
              </label>
              <p>{request.reimbursementConfirmationEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelingAllowanceRequestDetails;
