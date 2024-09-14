// import React from "react";

// const ExamResult = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {/* Header */}
//       <header className="mb-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-gray-800">Exam Dashboard</h1>
//           <div className="space-x-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//               Manage Schedules
//             </button>
//             <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
//               Manage Results
//             </button>
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
//               Generate Reports
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Tiles Section */}
//       <section className="grid grid-cols-3 gap-6 mb-6">
//         {/* Upcoming Exams Tile */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-700">Upcoming Exams</h2>
//           <p className="text-4xl font-bold text-indigo-500 my-4">5</p>
//           <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
//             View All Exams
//           </button>
//         </div>

//         {/* Results Pending Tile */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-700">Results Pending</h2>
//           <p className="text-4xl font-bold text-red-500 my-4">3</p>
//           <div className="w-full bg-gray-200 h-2 rounded-full my-4">
//             <div className="bg-red-500 h-2 rounded-full" style={{ width: "50%" }}></div>
//           </div>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-md">
//             Publish Results
//           </button>
//         </div>

//         {/* Recent Exams Tile */}
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-700">Recent Exams</h2>
//           <ul className="my-4 space-y-2">
//             <li className="text-gray-600">Math Midterm - Class 8</li>
//             <li className="text-gray-600">Science Final - Class 9</li>
//           </ul>
//           <button className="bg-green-500 text-white px-4 py-2 rounded-md">
//             View Recent Results
//           </button>
//         </div>
//       </section>

//       {/* Graph Section */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Student Performance Trends</h2>
//         <div className="h-64">
//           {/* Insert Graph Component Here */}
//         </div>
//       </section>

//       {/* Recent Results Table */}
//       <section className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Results</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left text-gray-500">Exam Name</th>
//               <th className="px-4 py-2 text-left text-gray-500">Class</th>
//               <th className="px-4 py-2 text-left text-gray-500">Date</th>
//               <th className="px-4 py-2 text-left text-gray-500">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border px-4 py-2">Math Midterm</td>
//               <td className="border px-4 py-2">Class 8</td>
//               <td className="border px-4 py-2">2024-09-10</td>
//               <td className="border px-4 py-2">Published</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default ExamResult

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import Select from "react-select";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";

// const classOptions = [
//   { value: "class8", label: "Class 8" },
//   { value: "class9", label: "Class 9" },
//   { value: "class10", label: "Class 10" },
// ];

// const subjectOptions = [
//   { value: "math", label: "Math" },
//   { value: "science", label: "Science" },
//   { value: "history", label: "History" },
// ];

// const ExamResult = () => {
//   const [examName, setExamName] = useState("");
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [examDate, setExamDate] = useState(null);
//   const [examTime, setExamTime] = useState(null);
//   const [examDuration, setExamDuration] = useState("");

//   const [exams, setExams] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newExam = {
//       examName,
//       class: selectedClass.label,
//       subject: selectedSubject.label,
//       date: format(examDate, "yyyy-MM-dd"),
//       time: examTime,
//       duration: examDuration,
//     };
//     setExams([...exams, newExam]);
//     resetForm();
//   };

//   const resetForm = () => {
//     setExamName("");
//     setSelectedClass(null);
//     setSelectedSubject(null);
//     setExamDate(null);
//     setExamTime(null);
//     setExamDuration("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Exam Schedule Management</h1>
//       </header>

//       {/* Form Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add/Edit Exam Schedule</h2>
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-2 gap-6">
//           {/* Exam Name */}
//           <div className="col-span-2">
//             <label className="block text-gray-700 mb-2">Exam Name</label>
//             <input
//               type="text"
//               value={examName}
//               onChange={(e) => setExamName(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter exam name"
//               required
//             />
//           </div>

//           {/* Class Dropdown */}
//           <div>
//             <label className="block text-gray-700 mb-2">Class</label>
//             <Select
//               options={classOptions}
//               value={selectedClass}
//               onChange={setSelectedClass}
//               placeholder="Select Class"
//               className="w-full"
//               required
//             />
//           </div>

//           {/* Subject Dropdown */}
//           <div>
//             <label className="block text-gray-700 mb-2">Subject</label>
//             <Select
//               options={subjectOptions}
//               value={selectedSubject}
//               onChange={setSelectedSubject}
//               placeholder="Select Subject"
//               className="w-full"
//               required
//             />
//           </div>

//           {/* Exam Date */}
//           <div>
//             <label className="block text-gray-700 mb-2">Exam Date</label>
//             <DatePicker
//               selected={examDate}
//               onChange={(date) => setExamDate(date)}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholderText="Select date"
//               dateFormat="yyyy-MM-dd"
//               required
//             />
//           </div>

//           {/* Exam Time */}
//           <div>
//             <label className="block text-gray-700 mb-2">Exam Time</label>
//             <input
//               type="time"
//               value={examTime}
//               onChange={(e) => setExamTime(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg"
//               required
//             />
//           </div>

//           {/* Exam Duration */}
//           <div className="col-span-2">
//             <label className="block text-gray-700 mb-2">Duration (hours)</label>
//             <input
//               type="number"
//               value={examDuration}
//               onChange={(e) => setExamDuration(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter duration"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-2 flex justify-end">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg"
//             >
//               Add Exam
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* Exam Table Section */}
//       <section className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scheduled Exams</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left text-gray-600">Exam Name</th>
//               <th className="px-4 py-2 text-left text-gray-600">Class</th>
//               <th className="px-4 py-2 text-left text-gray-600">Subject</th>
//               <th className="px-4 py-2 text-left text-gray-600">Date</th>
//               <th className="px-4 py-2 text-left text-gray-600">Time</th>
//               <th className="px-4 py-2 text-left text-gray-600">Duration</th>
//             </tr>
//           </thead>
//           <tbody>
//             {exams.length > 0 ? (
//               exams.map((exam, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{exam.examName}</td>
//                   <td className="border px-4 py-2">{exam.class}</td>
//                   <td className="border px-4 py-2">{exam.subject}</td>
//                   <td className="border px-4 py-2">{exam.date}</td>
//                   <td className="border px-4 py-2">{exam.time}</td>
//                   <td className="border px-4 py-2">{exam.duration} hours</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="border px-4 py-2 text-center" colSpan="6">
//                   No exams scheduled
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default ExamResult


// import React, { useState } from "react";
// import Select from "react-select";

// const examTypeOptions = [
//   { value: "midterm", label: "Mid-term" },
//   { value: "final", label: "Final" },
//   { value: "practical", label: "Practical" },
//   { value: "quiz", label: "Quiz" },
// ];

// const ExamResult = () => {
//   const [selectedExamType, setSelectedExamType] = useState(null);
//   const [examDuration, setExamDuration] = useState("");
//   const [numberOfPapers, setNumberOfPapers] = useState("");

//   const handleSave = (e) => {
//     e.preventDefault();
//     const newExamType = {
//       examType: selectedExamType?.label,
//       duration: examDuration,
//       papers: numberOfPapers,
//     };

//     console.log("Saved Exam Type: ", newExamType);

//     // Reset form fields after saving
//     resetForm();
//   };

//   const resetForm = () => {
//     setSelectedExamType(null);
//     setExamDuration("");
//     setNumberOfPapers("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Add Exam Type</h1>
//       </header>

//       {/* Form Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Define New Exam Type</h2>
//         <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-2 gap-6">
//           {/* Exam Type Dropdown */}
//           <div className="col-span-2">
//             <label className="block text-gray-700 mb-2">Exam Type</label>
//             <Select
//               options={examTypeOptions}
//               value={selectedExamType}
//               onChange={setSelectedExamType}
//               placeholder="Select Exam Type"
//               className="w-full"
//               required
//             />
//           </div>

//           {/* Exam Duration */}
//           <div className="col-span-1">
//             <label className="block text-gray-700 mb-2">Exam Duration (hours)</label>
//             <input
//               type="number"
//               value={examDuration}
//               onChange={(e) => setExamDuration(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter duration"
//               required
//             />
//           </div>

//           {/* Number of Papers */}
//           <div className="col-span-1">
//             <label className="block text-gray-700 mb-2">Number of Papers</label>
//             <input
//               type="number"
//               value={numberOfPapers}
//               onChange={(e) => setNumberOfPapers(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg"
//               placeholder="Enter number of papers"
//               required
//             />
//           </div>

//           {/* Save Button */}
//           <div className="col-span-2 flex justify-end">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg"
//             >
//               Save Exam Type
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ExamResult

// import React, { useState } from "react";

// const exams = [
//   { id: 1, name: "Mathematics Mid-term", date: "2024-09-20", registered: false },
//   { id: 2, name: "Science Final", date: "2024-10-10", registered: true },
//   { id: 3, name: "English Practical", date: "2024-09-25", registered: false },
// ];

// const ExamResult = () => {
//   const [examList, setExamList] = useState(exams);

//   const handleRegister = (id) => {
//     setExamList((prevExams) =>
//       prevExams.map((exam) =>
//         exam.id === id ? { ...exam, registered: !exam.registered } : exam
//       )
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Student Exam Registration</h1>
//       </header>

//       {/* List of Exams */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Exams</h2>
//         <table className="w-full bg-white rounded-lg shadow-lg">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2 text-left text-gray-600">Exam Name</th>
//               <th className="px-4 py-2 text-left text-gray-600">Date</th>
//               <th className="px-4 py-2 text-left text-gray-600">Status</th>
//               <th className="px-4 py-2 text-center text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {examList.map((exam) => (
//               <tr key={exam.id} className="border-b">
//                 {/* Exam Name */}
//                 <td className="px-4 py-3">{exam.name}</td>

//                 {/* Exam Date */}
//                 <td className="px-4 py-3">{exam.date}</td>

//                 {/* Registration Status */}
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       exam.registered ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
//                     }`}
//                   >
//                     {exam.registered ? "Registered" : "Not Registered"}
//                   </span>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-4 py-3 text-center">
//                   <button
//                     onClick={() => handleRegister(exam.id)}
//                     className={`px-4 py-2 rounded-lg text-white ${
//                       exam.registered ? "bg-red-500" : "bg-blue-500"
//                     }`}
//                   >
//                     {exam.registered ? "Unregister" : "Register"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default ExamResult

// 

// 

import React, { useState } from 'react';

const students = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

const subjects = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Science" },
  { id: 3, name: "English" },
];

const ExamResult = () => {
  const [results, setResults] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = subjects.reduce((subAcc, subject) => {
        subAcc[subject.id] = { marks: '', remarks: '' };
        return subAcc;
      }, {});
      return acc;
    }, {})
  );

  const handleInputChange = (studentId, subjectId, field, value) => {
    setResults(prevResults => ({
      ...prevResults,
      [studentId]: {
        ...prevResults[studentId],
        [subjectId]: {
          ...prevResults[studentId][subjectId],
          [field]: value
        }
      }
    }));
  };

  const handleSave = () => {
    // Logic to save results, e.g., API call
    console.log('Results saved:', results);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Student Result Entry</h1>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Enter Exam Results</h2>

        <table className="w-full bg-white rounded-lg shadow-lg border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Student</th>
              {subjects.map(subject => (
                <th key={subject.id} className="px-4 py-2 text-left text-gray-600">{subject.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-b">
                <td className="px-4 py-2 font-medium text-gray-800">{student.name}</td>
                {subjects.map(subject => (
                  <td key={subject.id} className="px-4 py-2">
                    <input
                      type="number"
                      placeholder="Marks"
                      value={results[student.id][subject.id].marks}
                      onChange={(e) => handleInputChange(student.id, subject.id, 'marks', e.target.value)}
                      className="w-20 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                    />
                    <input
                      type="text"
                      placeholder="Remarks"
                      value={results[student.id][subject.id].remarks}
                      onChange={(e) => handleInputChange(student.id, subject.id, 'remarks', e.target.value)}
                      className="w-40 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500 ml-2"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleSave}
          className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Save Results
        </button>
      </section>
    </div>
  );
};

export default ExamResult