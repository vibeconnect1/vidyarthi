import React, { useState } from "react";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import Table from "../../ConfigurationFile/Table";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const DoctorAppointment = () => {
  const [page, setPage] = useState("upcoming");
  const upcomingColumns = [
    {
      name: "Patient Name",
      selector: (row) => row.patient_Name,
      sortable: true,
    },
    {
      name: "Doctor",
      selector: (row) => row.doctor,
      sortable: true,
    },

    {
      name: "Appointment Date",
      selector: (row) => row.appointment_date,
      sortable: true,
    },
    {
      name: "Appointment Time",
      selector: (row) => row.appointment_time,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="text-red-500">
          <IoClose size={20} />
        </div>
      ),
    },
  ];
  const upcomingData = [
    {
      patient_Name: "Aarav Gupta",
      doctor: "Dr. Rajesh Kumar",
      appointment_date: "2024-09-20",
      appointment_time: "10:30 AM",
      reason: "Consultation",
    },
    {
      patient_Name: "Ananya Sharma",
      doctor: "Dr. Priya Mehta",
      appointment_date: "2024-09-21",
      appointment_time: "1:00 PM",
      reason: "Follow-up",
    },
    {
      patient_Name: "Rohan Singh",
      doctor: "Dr. Arvind Patel",
      appointment_date: "2024-09-22",
      appointment_time: "3:45 PM",
      reason: "Routine Checkup",
    },
  ];

  const completedColumns = [
    {
      name: "Patient Name",
      selector: (row) => row.patient_name,
      sortable: true,
    },
    {
      name: "Doctor",
      selector: (row) => row.doctor,
      sortable: true,
    },

    {
      name: "Appointment Date",
      selector: (row) => row.appointment_date,
      sortable: true,
    },
    {
      name: "Appointment Time",
      selector: (row) => row.appointment_time,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Prescription",
      cell: (row) => (
        <div className="">
          <FaPrescriptionBottleMedical size={20} />
        </div>
      ),
    },
  ];
  const completedData = [
    {
      patient_name: "Aarav Gupta",
      doctor: "Dr. Rajesh Kumar",
      appointment_date: "2024-09-20",
      appointment_time: "10:30 AM",
      reason: "Consultation",
    },
    {
      patient_name: "Ananya Sharma",
      doctor: "Dr. Priya Mehta",
      appointment_date: "2024-09-21",
      appointment_time: "1:00 PM",
      reason: "Follow-up",
    },
    {
      patient_name: "Rohan Singh",
      doctor: "Dr. Arvind Patel",
      appointment_date: "2024-09-22",
      appointment_time: "3:45 PM",
      reason: "Routine Checkup",
    },
  ];

  const cancelledColumns = [
    {
      name: "Patient Name",
      selector: (row) => row.patientName,
      sortable: true,
    },
    {
      name: "Doctor",
      selector: (row) => row.doctor,
      sortable: true,
    },
    {
      name: "Appointment Date",
      selector: (row) => row.appointment_date,
      sortable: true,
    },
    {
      name: "Appointment Time",
      selector: (row) => row.appointment_time,
      sortable: true,
    },
    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
    },
    {
      name: "Cancellation Reason",
      selector: (row) => row.cancellation_reason,
      sortable: true,
    },
  ];
  const cancelledData = [
    {
      patientName: "Sanya Verma",
      doctor: "Dr. Preeti Sharma",
      appointment_date: "2024-09-18",
      appointment_time: "11:00 AM",
      reason: "Consultation",
      cancellation_reason: "Personal reasons",
    },
    {
      patientName: "Kabir Das",
      doctor: "Dr. Nikhil Yadav",
      appointment_date: "2024-09-19",
      appointment_time: "2:30 PM",
      reason: "Second opinion",
      cancellation_reason: "Schedule conflict",
    },
    {
      patientName: "Neha Kapoor",
      doctor: "Dr. Aishwarya Iyer",
      appointment_date: "2024-09-20",
      appointment_time: "4:00 PM",
      reason: "Dental checkup",
      cancellation_reason: "Health issue",
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className=" w-full flex flex-col overflow-hidden mx-5">
          <div className="flex md:flex-row flex-col gap-5  justify-between mt-10 my-2 border-b border-gray-400">
            <div className="flex gap-4  ">
              <h2
                className={`cursor-pointer transition-all duration-200 ${
                  page === "upcoming"
                    ? "border-black border-b-2 font-medium"
                    : ""
                }`}
                onClick={() => setPage("upcoming")}
              >
                Upcoming
              </h2>
              <h2
                className={`cursor-pointer transition-all duration-200 ${
                  page === "completed"
                    ? "border-black border-b-2 font-medium"
                    : ""
                }`}
                onClick={() => setPage("completed")}
              >
                Completed
              </h2>
              <h2
                className={`cursor-pointer transition-all duration-200 ${
                  page === "cancelled"
                    ? "border-black border-b-2 font-medium"
                    : ""
                }`}
                onClick={() => setPage("cancelled")}
              >
                Cancelled
              </h2>
            </div>
            <Link
              to={"/school-management/book-doctor-appointment"}
              className=" bg-gray-400  rounded-lg flex font-semibold items-center gap-2 text-white p-2 my-1"
            >
              <PiPlusCircle size={20} />
              Book an Appointment
            </Link>
          </div>
          {page === "upcoming" && <Table columns={upcomingColumns} data={upcomingData} />}
          {page === "completed" && (
            <Table columns={completedColumns} data={completedData} />
          )}
          {page === "cancelled" && (
            <Table responsive columns={cancelledColumns} data={cancelledData} />
          )}
        </div>

        {/* {cancelModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-20">
          <div
            style={{ background: themeColor }}
            className="bg-white overflow-auto max-h-[70%] w-[30rem] p-4 px-8 flex flex-col rounded-md gap-5"
          >
            <div className="col-md-12">
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                }}
              >
                <h2 className="text-xl font-medium text-white my-2">
                  Cancel Consultation
                </h2>
              </div>

              <div className="flex flex-col gap-2 ">
                <span className="font-medium text-white">
                  Reason for Cancelling Consultation
                </span>

                <textarea
                  className="border border-gray-400 rounded-md p-2"
                  spellCheck={true}
                  rows={6}
                  placeholder="Enter reason"
                  value={cancellationReason}
                  onChange={(e) => setCancellationReason(e.target.value)}
                ></textarea>
              </div>

              <div
                className="mt-2 gap-2"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  className="bg-green-400 text-white  p-1 px-2 rounded-md"
                  onClick={() => Cancel_Consultation()}
                >
                  <span>Done</span>
                </button>
                <button
                  className="bg-red-400 text-white p-1 px-2 rounded-md"
                  onClick={() => setCancelModal(false)}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
      </div>
    </section>
  );
};

export default DoctorAppointment;
