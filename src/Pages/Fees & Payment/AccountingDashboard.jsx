// import React, { useState } from 'react';

// const AccountingDashboard = () => {
//   const [studentName, setStudentName] = useState('');
//   const [classLevel, setClassLevel] = useState('');
//   const [feeType, setFeeType] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentDate, setPaymentDate] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notes, setNotes] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic, such as saving the data
//     console.log({
//       studentName,
//       classLevel,
//       feeType,
//       amount,
//       paymentDate,
//       paymentMethod,
//       notes,
//     });

//     // Clear the form
//     setStudentName('');
//     setClassLevel('');
//     setFeeType('');
//     setAmount('');
//     setPaymentDate('');
//     setPaymentMethod('');
//     setNotes('');
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-semibold mb-6">Fees Form</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
//         <div>
//           <label className="block font-medium mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             placeholder="Enter student's name"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Class Level</label>
//           <input
//             type="text"
//             value={classLevel}
//             onChange={(e) => setClassLevel(e.target.value)}
//             placeholder="Enter class level"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Fee Type</label>
//           <select
//             value={feeType}
//             onChange={(e) => setFeeType(e.target.value)}
//             className="border p-2 w-full"
//           >
//             <option value="">Select fee type</option>
//             <option value="Tuition">Tuition</option>
//             <option value="Library">Library</option>
//             <option value="Sports">Sports</option>
//             <option value="Laboratory">Laboratory</option>
//             <option value="Transport">Transport</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Payment Date</label>
//           <input
//             type="date"
//             value={paymentDate}
//             onChange={(e) => setPaymentDate(e.target.value)}
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Payment Method</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="border p-2 w-full"
//           >
//             <option value="">Select payment method</option>
//             <option value="Cash">Cash</option>
//             <option value="Credit Card">Credit Card</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="Cheque">Cheque</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Notes</label>
//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             placeholder="Any additional notes"
//             className="border p-2 w-full"
//           ></textarea>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };


// export default AccountingDashboard;



// import React, { useState } from 'react';

// const AccountingDashboard = () => {
//   const [studentName, setStudentName] = useState('');
//   const [classLevel, setClassLevel] = useState('');
//   const [feeType, setFeeType] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentDate, setPaymentDate] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [notes, setNotes] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create the payment details object
//     const paymentInfo = {
//       studentName,
//       classLevel,
//       feeType,
//       amount,
//       paymentDate,
//       paymentMethod,
//       notes,
//     };

//     // Add the payment details to the array
//     setPaymentDetails([...paymentDetails, paymentInfo]);
//     setSubmitted(true);

//     // Clear the form
//     setStudentName('');
//     setClassLevel('');
//     setFeeType('');
//     setAmount('');
//     setPaymentDate('');
//     setPaymentMethod('');
//     setNotes('');
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-semibold mb-6">Fees Form</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
//         <div>
//           <label className="block font-medium mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             placeholder="Enter student's name"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Class Level</label>
//           <input
//             type="text"
//             value={classLevel}
//             onChange={(e) => setClassLevel(e.target.value)}
//             placeholder="Enter class level"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Fee Type</label>
//           <select
//             value={feeType}
//             onChange={(e) => setFeeType(e.target.value)}
//             className="border p-2 w-full"
//           >
//             <option value="">Select fee type</option>
//             <option value="Tuition">Tuition</option>
//             <option value="Library">Library</option>
//             <option value="Sports">Sports</option>
//             <option value="Laboratory">Laboratory</option>
//             <option value="Transport">Transport</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount"
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Payment Date</label>
//           <input
//             type="date"
//             value={paymentDate}
//             onChange={(e) => setPaymentDate(e.target.value)}
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Payment Method</label>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             className="border p-2 w-full"
//           >
//             <option value="">Select payment method</option>
//             <option value="Cash">Cash</option>
//             <option value="Credit Card">Credit Card</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//             <option value="Cheque">Cheque</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-medium mb-2">Notes</label>
//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             placeholder="Any additional notes"
//             className="border p-2 w-full"
//           ></textarea>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>

//       {submitted && paymentDetails.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-medium mb-4">Payment Details</h2>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border">Student Name</th>
//                 <th className="py-2 px-4 border">Class Level</th>
//                 <th className="py-2 px-4 border">Fee Type</th>
//                 <th className="py-2 px-4 border">Amount</th>
//                 <th className="py-2 px-4 border">Payment Date</th>
//                 <th className="py-2 px-4 border">Payment Method</th>
//                 <th className="py-2 px-4 border">Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paymentDetails.map((detail, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 border">{detail.studentName}</td>
//                   <td className="py-2 px-4 border">{detail.classLevel}</td>
//                   <td className="py-2 px-4 border">{detail.feeType}</td>
//                   <td className="py-2 px-4 border">${detail.amount}</td>
//                   <td className="py-2 px-4 border">{detail.paymentDate}</td>
//                   <td className="py-2 px-4 border">{detail.paymentMethod}</td>
//                   <td className="py-2 px-4 border">{detail.notes}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccountingDashboard;


import React, { useState } from 'react';

const AccountingDashboard   = () => {
  const [staffName, setStaffName] = useState('');
  const [designation, setDesignation] = useState('');
  const [salaryMonth, setSalaryMonth] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the payment details object
    const paymentInfo = {
      staffName,
      designation,
      salaryMonth,
      amount,
      paymentDate,
      paymentMethod,
      notes,
    };

    // Add the payment details to the array
    setPaymentDetails([...paymentDetails, paymentInfo]);
    setSubmitted(true);

    // Clear the form
    setStaffName('');
    setDesignation('');
    setSalaryMonth('');
    setAmount('');
    setPaymentDate('');
    setPaymentMethod('');
    setNotes('');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Staff Payment Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block font-medium mb-2">Staff Name</label>
          <input
            type="text"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            placeholder="Enter staff's name"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter staff's designation"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Salary Month</label>
          <input
            type="month"
            value={salaryMonth}
            onChange={(e) => setSalaryMonth(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Payment Date</label>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Select payment method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-2">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional notes"
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {submitted && paymentDetails.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">Payment Details</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Staff Name</th>
                <th className="py-2 px-4 border">Designation</th>
                <th className="py-2 px-4 border">Salary Month</th>
                <th className="py-2 px-4 border">Amount</th>
                <th className="py-2 px-4 border">Payment Date</th>
                <th className="py-2 px-4 border">Payment Method</th>
                <th className="py-2 px-4 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {paymentDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{detail.staffName}</td>
                  <td className="py-2 px-4 border">{detail.designation}</td>
                  <td className="py-2 px-4 border">{detail.salaryMonth}</td>
                  <td className="py-2 px-4 border">${detail.amount}</td>
                  <td className="py-2 px-4 border">{detail.paymentDate}</td>
                  <td className="py-2 px-4 border">{detail.paymentMethod}</td>
                  <td className="py-2 px-4 border">{detail.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountingDashboard;



