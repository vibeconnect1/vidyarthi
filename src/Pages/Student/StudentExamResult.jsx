import React from "react";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import StudentSidebar from "./StudentSidebar";

function StudentExamResult() {
    const columns = [
        { name: "Paper Code", selector: (row) => row.paperCode },
        { name: "Subject", selector: (row) => row.subject },
        { name: "Subject Type", selector: (row) => row.subjectType },
        { name: "Maximum Marks", selector: (row) => row.maximumMarks },
        { name: "Obtained Marks", selector: (row) => row.obtainedMarks },
        { name: "Grade", selector: (row) => row.grade },
    ];

    const data = [
        {
            paperCode: "101",
            subject: "English",
            subjectType: "Theory",
            maximumMarks: 100,
            obtainedMarks: 85,
            grade: "A",
        },
        {
            paperCode: "102",
            subject: "Hindi",
            subjectType: "Theory",
            maximumMarks: 100,
            obtainedMarks: 90,
            grade: "A",
        },
        {
            paperCode: "103",
            subject: "Math",
            subjectType: "Practical",
            maximumMarks: 100,
            obtainedMarks: 78,
            grade: "B",
        },
        {
            paperCode: "104",
            subject: "Science",
            subjectType: "Theory",
            maximumMarks: 100,
            obtainedMarks: 92,
            grade: "A",
        },
    ];
    const totalObtainedMarks = data.reduce((total, item) => total + item.obtainedMarks, 0);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="flex">
                <StudentSidebar/>
                <div className="flex flex-col w-full p-5">
                    <div className="bg-white shadow-md rounded-md p-5">
                        <div className="mb-5">
                            <div className="flex gap-5">
                                <h2 className="text-lg font-semibold text-gray-700 flex gap-2">
                                    Exam Type: <p className="text-lg font-medium text-gray-500">Unit Text</p>
                                </h2>
                                <p className="text-base font-medium text-gray-600 flex gap-5">Class: <p className="text-base font-medium text-gray-400">10th</p></p>
                            </div>
                            <div className="flex space-x-4 mt-2">
                                <p className="text-base font-medium text-gray-600 flex gap-5">Student Name: <p className="text-base font-medium text-gray-400">Karan Singh</p></p>
                            </div>
                        </div>
                        <Table columns={columns} data={data} pagination />
                        <div className="mt-2 flex justify-start">
                            <p className="text-lg font-semibold text-gray-700">
                                Total Obtained Marks: {totalObtainedMarks}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentExamResult;
