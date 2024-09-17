import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

function EditTravelingAllowanceRequest() {
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <h2 className="text-center md:text-xl font-bold p-2 bg-white rounded-md my-3 mx-5 text-black">
          Edit Travel Allowance Request
          </h2>
          <form className="border border-gray-300 rounded-lg p-4 bg-white mx-5">
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="employeeId"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Employee ID"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="text"
                  id="employeeName"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Employee Name"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="expenseCategory"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="meals">Select Expense Category</option>
                  <option value="meals">Meals</option>
                  <option value="transportation">Transportation</option>
                  <option value="accommodation">Accommodation</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="date"
                  id="dateOfExpense"
                  placeholder="Date of Expense"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="amountSpent"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Amount Spent"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <select
                  id="approvalStatus"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="pending">Select Approval Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="denied">Denied</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="number"
                  id="reimbursementAmount"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Reimbursement Amount"
                />
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="reimbursementMethod"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="directDeposit">
                    Select Reimbursement Method
                  </option>
                  <option value="directDeposit">Direct Deposit</option>
                  <option value="check">Check</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <select
                  id="managerApproval"
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="yes">Select Manager Approval</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="grid gap-2 items-center w-full">
                <input
                  type="email"
                  id="reimbursementConfirmationEmail"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Reimbursement Confirmation Email"
                />
              </div>
              <div className="grid gap-2 items-center w-full">
                <input
                  type="file"
                  id="supportingDocuments"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-2 col-span-3 items-center w-full">
                <textarea
                  id="descriptionOfExpense"
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter Description of Expense"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center my-4">
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTravelingAllowanceRequest