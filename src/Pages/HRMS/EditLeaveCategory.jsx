import React, { useState } from 'react';

function EditLeaveCategory() {
  const [form, setForm] = useState({
    leaveType: '',
    customLabel: '',
    abbreviationLabel: '',
    accrualPeriod: '',
    accrueInAdvance: false,
    carryoverLimit: 'No Carryover',
    negativeBalance: false,
    roundOffAccrual: false,
    intraCycleLapse: false,
    prorationMethod: '',
    allowWeeklyOff: false,
    canApplyLeave: false,
    applyFutureLeave: false,
    leaveEncashmentRollover: false,
    leaveEncashmentFNF: false,
    halfDayOption: false,
    includeHolidayPrefixSuffix: false,
    includeHolidayInLeave: false,
    includeWeeklyOffPrefixSuffix: false,
    includeWeeklyOffInLeave: false,
    paidLeave: false,
    submissionDaysLimit: '',
    occurrenceDaysLimit: '',
    minConsecutiveDays: '',
    maxConsecutiveDays: '',
    weeklyOffConsecutive: false,
    holidayConsecutive: false,
    documentRequired: false,
    dateRestriction: false,
    displayClosingBalance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h2 className="text-2xl mb-4">Edit Leave Category</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-3 ml-5">
        <div className="flex flex-col">
          <label>Type of Leave</label>
          <select
            name="leaveType"
            value={form.leaveType}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Label for this leave</label>
          <input
            type="text"
            name="customLabel"
            value={form.customLabel}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Abbreviation Label</label>
          <input
            type="text"
            name="abbreviationLabel"
            value={form.abbreviationLabel}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Leave Accrual Period</label>
          <select
            name="accrualPeriod"
            value={form.accrualPeriod}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="">Select</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Accrue leave in advance?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Carryover limits</label>
          <select
            name="carryoverLimit"
            value={form.carryoverLimit}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="No Carryover">No Carryover</option>
            {/* Add options here */}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Negative leave balance allowed?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Round-off leave accrual to nearest 0.5 unit?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Intra-cycle lapse applicable?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Pro-rate first month’s accrual for new joinees</label>
          <select
            name="prorationMethod"
            value={form.prorationMethod}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="">Select</option>
            <option value="Fixed cut-off day of the month">Fixed cut-off day of the month</option>
            <option value="Pro-ration by joining date in the calendar month">Pro-ration by joining date in the calendar month</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Allow application on Weekly offs and Holidays?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Can employee apply a leave for this category?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Can employee apply a future leave for this category?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Eligible for leave encashment during rollover?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Eligible for leave encashment/recovery during FNF?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Provide a half-day option for this type of leave?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Include Annual Holiday prefixed/suffixed with a leave in number of days taken?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Include Annual Holiday part of the leave request in number of days taken?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Include Weekly Off prefixed/suffixed with a leave in number of days taken?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Include Weekly Off part of the leave request in number of days taken?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Is this a paid Leave?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Number of days before which the leave application must be submitted (leave blank for no limit)</label>
          <input
            type="number"
            name="submissionDaysLimit"
            value={form.submissionDaysLimit}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Within how many days can the employee apply for leave from the date of occurrence? (leave blank for no limit)</label>
          <input
            type="number"
            name="occurrenceDaysLimit"
            value={form.occurrenceDaysLimit}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Minimum number of consecutive leave days allowed (leave blank for no limit)</label>
          <input
            type="number"
            name="minConsecutiveDays"
            value={form.minConsecutiveDays}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Maximum number of consecutive leave days allowed (leave blank for no limit)</label>
          <input
            type="number"
            name="maxConsecutiveDays"
            value={form.maxConsecutiveDays}
            onChange={handleChange}
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Are leaves separated by a weekly off considered consecutive?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Are leaves separated by a holiday considered consecutive?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Is there any document required to be uploaded for this category?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Is there a date restriction as to when the employee can apply?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Display closing balance in the employee's payslips?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="Yes"
                checked={form.includeWeeklyOffInLeave === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includeWeeklyOffInLeave"
                value="No"
                checked={form.includeWeeklyOffInLeave === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditLeaveCategory