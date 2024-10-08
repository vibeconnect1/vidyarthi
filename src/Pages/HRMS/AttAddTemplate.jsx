import React from 'react';

const AttAddTemplate = () => {
  return (
    <div className='flex ml-20'>


    <div className="container p-4 bg-white mx-5 my-9 rounded-md">
      <h1 className="text-xl font-bold mb-4">General Template Settings</h1>

      <div className="mb-4">
        <label className="block text-gray-700">Custom Label</label>
        <input 
          type="text" 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter custom label"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Timezone</label>
        <select 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>Asia/Kolkata (UTC +05:30)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Mode of Capturing Attendance</label>
        <select 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Handle Missing Check In/Out</label>
        <select 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>Consider as invalid record</option>
          <option>Other option</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Late Marks / Early Checkouts Applicable</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="lateEarly" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="lateEarly" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Overtime ("OT") Applicable</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="overtime" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="overtime" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Half Day Working Hours Exemption</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="halfDayExemption" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="halfDayExemption" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Include Weekly Off in LOP</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="weeklyOff" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="weeklyOff" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Include Holiday in LOP</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="holidayLOP" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="holidayLOP" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Minimum Minutes Per Day to Avoid Prefix Suffix Leave Deduction</label>
        <input 
          type="number" 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          defaultValue="30"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Comment Mandatory for Regularisation Request</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="commentMandatory" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="commentMandatory" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Levels of Approvals</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="levelsOfApprovals" className="form-radio" />
            <span className="ml-2">1 Level</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="levelsOfApprovals" className="form-radio" />
            <span className="ml-2">2 Levels</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Assign Approvers</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="assignApprovers" className="form-radio" />
            <span className="ml-2">Template Wise</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="assignApprovers" className="form-radio" />
            <span className="ml-2">Employee Wise</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Parallel Approvers</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input type="radio" name="parallelApprovers" className="form-radio" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input type="radio" name="parallelApprovers" className="form-radio" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Primary Approver</label>
        <select 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>Approver 1</option>
          <option>Approver 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Hierarchy for Absent/Half Days Treatment</label>
        <select 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>Hierarchy 1</option>
          <option>Hierarchy 2</option>
        </select>
      </div>

      <div className="mb-4">
        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div></div>
  );
};

export default AttAddTemplate