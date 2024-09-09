import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
  return (
    <div className="h-screen w-48 bg-white flex flex-col">
      <nav className="flex flex-col space-y-2 p-4">
        <NavLink 
          to="/student/student-dashboard" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Student Profile
        </NavLink>
        <NavLink 
          to="/student/student-subject" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Subjects
        </NavLink>
        <NavLink 
          to="/student/student-id-card" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Id Card
        </NavLink>
        <NavLink 
          to="/student/student-attendance-report" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Attendance
        </NavLink>
        <NavLink 
          to="/student/student-fees-invoice" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Fees Invoice
        </NavLink>
        <NavLink 
          to="/student/student-fees-history" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Fees History
        </NavLink>
        <NavLink 
          to="/student/student-study-materials" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Study Materials
        </NavLink>
        <NavLink 
          to="/student/student-homework" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Home Work
        </NavLink>
        <NavLink 
          to="/student/student-noticeboard" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Noticeboard
        </NavLink>
        <NavLink 
          to="/student/student-event" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Event
        </NavLink>
        <NavLink 
          to="/student/student-live-classes" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Live Classes
        </NavLink>
        <NavLink 
          to="/student/student-exam-timetable" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Exam Timetable
        </NavLink>
        <NavLink 
          to="/student/student-exam-result" 
          className={({ isActive }) => 
            isActive ? 'text-black p-2 rounded-md custom-bg' : 'p-2 text-gray-800 hover:my-custom-class hover:text-black rounded-md'
          }
        >
          Exam Result
        </NavLink>
      </nav>
    </div>
  );
};

export default StudentSidebar