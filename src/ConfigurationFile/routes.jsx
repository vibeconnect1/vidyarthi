// routes.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../Pages/Form/LoginForm';
import SignUp from '../Pages/Form/SignUp';
import ForgotPassword from '../Pages/Form/ForgotPassword';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Sidebar from '../Pages/Form/Sidebar';
import Schools from '../Pages/School management/Schools';
import InstituteForm from '../Pages/School management/InstituteForm';
import InstituteDetails from '../Pages/School management/InstituteDetails';
import SchoolDashboard from '../Pages/School management/SchoolDashboard';
import Students from '../Pages/School management/Students';
import StudentsForm from '../Pages/School management/StudentsForm';
import InstitutionHome from '../Pages/School management/InstitutionHome';
import AcademicDetails from '../Pages/School management/AcademicDetails';
import SubjectDetails from '../Pages/School management/SubjectDetails';

const routes = [
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/login',
        element: <LoginForm />,
    }, 
    {
        path: '/sign-up',
        element: <SignUp />,
    }, 
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    }, 
    {
        path: '/',
        element: <Sidebar />,
    },  
    {
        path: '/school-management',
        element: <Schools />,
    }, 
    {
        path: '/school-management/institute-form',
        element: <InstituteForm />,
    },  
    {
        path: '/school-management/school-dashboard',
        element: <SchoolDashboard />,
    },
    {
        path: '/school-management/school-students',
        element: <Students />,
    }, 
    {
        path: '/school-management/school-students-form',
        element: <StudentsForm />,
    }, 
    {
        path: '/school-management/school-Institution-home',
        element: < InstitutionHome/>,
    }, 
    {
        path: '/school-management/academic-details',
        element: < AcademicDetails/>,
    },  
    {
        path: '/school-management/subject-details',
        element: < SubjectDetails/>,
    },  
];

export default routes;
