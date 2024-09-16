// import React, { useState } from "react";

// const ExamResult = () => {
//   const [exams, setExams] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newExam, setNewExam] = useState({
//     class: "",
//     subject: "",
//     examDate: "",
//     startTime: "",
//     duration: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExam({ ...newExam, [name]: value });
//   };

//   const handleAddExam = () => {
//     setExams([...exams, newExam]);
//     setNewExam({
//       class: "",
//       subject: "",
//       examDate: "",
//       startTime: "",
//       duration: "",
//     });
//     setShowModal(false);
//   };

//   const handleDeleteExam = (index) => {
//     const updatedExams = exams.filter((_, i) => i !== index);
//     setExams(updatedExams);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Exam Scheduling</h1>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//           onClick={() => setShowModal(true)}
//         >
//           + Create New Exam
//         </button>
//       </div>

//       {/* Exam Table */}
//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="border p-2">Class</th>
//             <th className="border p-2">Subject</th>
//             <th className="border p-2">Exam Date</th>
//             <th className="border p-2">Start Time</th>
//             <th className="border p-2">Duration</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {exams.length > 0 ? (
//             exams.map((exam, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{exam.class}</td>
//                 <td className="border p-2">{exam.subject}</td>
//                 <td className="border p-2">{exam.examDate}</td>
//                 <td className="border p-2">{exam.startTime}</td>
//                 <td className="border p-2">{exam.duration}</td>
//                 <td className="border p-2">
//                   <button
//                     className="text-red-500 hover:underline ml-2"
//                     onClick={() => handleDeleteExam(index)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td className="border p-2 text-center" colSpan="6">
//                 No exams scheduled.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Modal for adding new exam */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h2 className="text-xl font-bold mb-4">Create New Exam</h2>

//             <div className="mb-4">
//               <label className="block text-gray-700">Class</label>
//               <input
//                 type="text"
//                 name="class"
//                 value={newExam.class}
//                 onChange={handleInputChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={newExam.subject}
//                 onChange={handleInputChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Exam Date</label>
//               <input
//                 type="date"
//                 name="examDate"
//                 value={newExam.examDate}
//                 onChange={handleInputChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Start Time</label>
//               <input
//                 type="time"
//                 name="startTime"
//                 value={newExam.startTime}
//                 onChange={handleInputChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700">Duration (in hours)</label>
//               <input
//                 type="number"
//                 name="duration"
//                 value={newExam.duration}
//                 onChange={handleInputChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>

//             <div className="flex justify-end">
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={handleAddExam}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExamResult

//11
import React, { useState } from "react";

const ExamResult = () => {
  // Sample data
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: "John Doe",
      rollNumber: "101",
      subject: "Math",
      currentMarks: 85,
      requestedMarks: 90,
      status: "Pending",
      comments: "",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      rollNumber: "102",
      subject: "Science",
      currentMarks: 72,
      requestedMarks: 80,
      status: "Reviewed",
      comments: "No change in marks.",
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    rollNumber: "",
    subject: "",
    currentMarks: "",
    requestedMarks: "",
  });

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitRequest = () => {
    // Logic to submit new request
    console.log("Submitting new re-evaluation request:", newRequest);
    setRequests([
      ...requests,
      {
        id: requests.length + 1,
        ...newRequest,
        status: "Pending",
        comments: "",
      },
    ]);
    setNewRequest({
      rollNumber: "",
      subject: "",
      currentMarks: "",
      requestedMarks: "",
    });
  };

  const handleUpdateRequest = (id, status, comments) => {
    // Logic to update request status and comments
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status, comments } : request
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Re-evaluation Requests</h1>

      {/* Re-evaluation Request Form */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Submit Re-evaluation Request</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="rollNumber"
            value={newRequest.rollNumber}
            onChange={handleRequestChange}
            placeholder="Roll Number"
            className="border rounded px-4 py-2"
          />
          <input
            type="text"
            name="subject"
            value={newRequest.subject}
            onChange={handleRequestChange}
            placeholder="Subject"
            className="border rounded px-4 py-2"
          />
          <input
            type="number"
            name="currentMarks"
            value={newRequest.currentMarks}
            onChange={handleRequestChange}
            placeholder="Current Marks"
            className="border rounded px-4 py-2"
          />
          <input
            type="number"
            name="requestedMarks"
            value={newRequest.requestedMarks}
            onChange={handleRequestChange}
            placeholder="Requested Marks"
            className="border rounded px-4 py-2"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmitRequest}
        >
          Submit Request
        </button>
      </div>

      {/* Requests Management */}
      <h2 className="text-xl font-bold mb-4">Manage Re-evaluation Requests</h2>
      <table className="table-auto w-full mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Roll Number</th>
            <th className="px-4 py-2 border">Student Name</th>
            <th className="px-4 py-2 border">Subject</th>
            <th className="px-4 py-2 border">Current Marks</th>
            <th className="px-4 py-2 border">Requested Marks</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Comments</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td className="border px-4 py-2">{request.rollNumber}</td>
              <td className="border px-4 py-2">{request.studentName}</td>
              <td className="border px-4 py-2">{request.subject}</td>
              <td className="border px-4 py-2">{request.currentMarks}</td>
              <td className="border px-4 py-2">{request.requestedMarks}</td>
              <td className="border px-4 py-2">{request.status}</td>
              <td className="border px-4 py-2">{request.comments}</td>
              <td className="border px-4 py-2">
                {request.status === "Pending" ? (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => handleUpdateRequest(request.id, "Reviewed", "Marks updated after re-evaluation.")}
                  >
                    Review
                  </button>
                ) : (
                  <span>Reviewed</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamResult
