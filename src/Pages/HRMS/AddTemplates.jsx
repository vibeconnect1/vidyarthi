import React, { useState } from 'react';
import LeaveSetting from './Leave/LeaveSetting';

const AddTemplates = () => {
  // State variables to manage form inputs
  const [leaveCategories, setLeaveCategories] = useState({
    paidLeave: false,
    lwp: false,
  });
  const [approvalLevels, setApprovalLevels] = useState(1);
  const [approverSelection, setApproverSelection] = useState('template');
  const [parallelApprovers, setParallelApprovers] = useState(false);
  const [primaryApprover, setPrimaryApprover] = useState('');
  const [mandatoryComments, setMandatoryComments] = useState(false);
  const [clubbingRestrictions, setClubbingRestrictions] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can console.log or perform further actions with form data
    console.log({
      leaveCategories,
      approvalLevels,
      approverSelection,
      parallelApprovers,
      primaryApprover,
      mandatoryComments,
      clubbingRestrictions,
    });
  };

  return (
    <div className='flex justify-center gap-4'>
      {/* <div className='col-span-12 lg:col-span-3'>
        <LeaveSetting />
      </div> */}
      <div className="col-span-12 lg:col-span-9 mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Custom Label Policy Configuration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Custom Label */}
          <div className="mb-4">
            <label className="block font-medium">Label for this Policy *</label>
            <input
              type="text"
              className="mt-1 block w-full border p-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter custom label"
            />
          </div>

          {/* Leave Categories */}
          <div className="mb-4">
            <label className="block font-medium">What leave categories are applicable in this leave template?</label>
            <div className="mt-2">
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 "
                  checked={leaveCategories.paidLeave}
                  onChange={(e) => setLeaveCategories({ ...leaveCategories, paidLeave: e.target.checked })}
                />
                <span className="ml-2">Paid Leave</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={leaveCategories.lwp}
                  onChange={(e) => setLeaveCategories({ ...leaveCategories, lwp: e.target.checked })}
                />
                <span className="ml-2">LWP</span>
              </label>
            </div>
          </div>

          {/* Approval Levels */}
          <div className="mb-4">
            <label className="block font-medium">How many levels of approvals do you want to add?</label>
            <select
              className="block w-full mt-1 border p-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              value={approvalLevels}
              onChange={(e) => setApprovalLevels(parseInt(e.target.value))}
            >
              <option value={1}>1 Level</option>
              <option value={2}>2 Levels</option>
            </select>
          </div>

          {/* Approver Selection */}
          <div className="mb-4">
            <label className="block font-medium">How would you like to add approvers?</label>
            <select
              className="block w-full mt-1 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              value={approverSelection}
              onChange={(e) => setApproverSelection(e.target.value)}
            >
              <option value="template">Template Wise</option>
              <option value="employee">Employee Wise</option>
            </select>
          </div>

          {/* Parallel Approvers */}
          <div className="mb-4">
            <label className="block font-medium">Do you want parallel approvers?</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="yes"
                  checked={parallelApprovers}
                  onChange={() => setParallelApprovers(true)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="no"
                  checked={!parallelApprovers}
                  onChange={() => setParallelApprovers(false)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Primary Approver */}
          <div className="mb-4 col-span-2">
            <label className="block font-medium">Please Select An Employee For Primary Approver *</label>
            <input
              type="text"
              className="mt-1 block p-1 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              value={primaryApprover}
              onChange={(e) => setPrimaryApprover(e.target.value)}
              placeholder="Select an employee"
            />
          </div>

          {/* Mandatory Comments */}
          <div className="mb-4">
            <label className="block font-medium">Would you like to make comment mandatory while applying or cancellation of leave application?</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="yes"
                  checked={mandatoryComments}
                  onChange={() => setMandatoryComments(true)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="no"
                  checked={!mandatoryComments}
                  onChange={() => setMandatoryComments(false)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Clubbing Restrictions */}
          <div className="mb-4">
            <label className="block font-medium">Would you like to add clubbing restrictions?</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="yes"
                  checked={clubbingRestrictions}
                  onChange={() => setClubbingRestrictions(true)}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-blue-600"
                  value="no"
                  checked={!clubbingRestrictions}
                  onChange={() => setClubbingRestrictions(false)}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
        </form>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Save Policy
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddTemplates