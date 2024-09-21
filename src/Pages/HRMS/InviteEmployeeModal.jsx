import React from 'react';

const InviteEmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Welcome Message</h3>
          <p className="mt-1 text-sm text-gray-500">You have been invited by Vibe connect to Activate your Account</p>
        </div>
        <div className="border-t border-gray-200"></div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">First Day Information</h3>
          <div className="mt-1 text-sm text-gray-500 space-y-5 my-5">
            <input type="date" placeholder='Arrival Time' className='border-b border-gray-500 focus:outline-none w-full'/>
            <input type="text" placeholder='Location' className='border-b border-gray-500 focus:outline-none w-full'/>
            <input type="text" placeholder='Contact Person' className='border-b border-gray-500 focus:outline-none w-full'/>
            <input type="text" placeholder='Instructions' className='border-b border-gray-500 focus:outline-none w-full'/>
          </div>
          &nbsp;
          <button
           
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            Send invite
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default InviteEmployeeModal