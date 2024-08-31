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
import AddStudyMaterials from '../Pages/School management/AddStudyMaterials';
import EditStudyMaterials from '../Pages/School management/EditStudyMaterials';
import StudyMaterialsDetails from '../Pages/School management/StudyMaterialsDetails';
import SongAndPrayer from '../Pages/School management/SongAndPrayer';
import AddSongAndPrayer from '../Pages/School management/AddSongAndPrayer';
import AddInstitutionHome from '../Pages/School management/AddInstitutionHome';
import ParentRecommendation from '../Pages/School management/ParentRecommendation';
import AddParentRecommendation from '../Pages/School management/AddParentRecommendation';
import GeneralRules from '../Pages/School management/GeneralRules';
import AddGeneralRules from '../Pages/School management/AddGeneralRules';
import CSR from '../Pages/School management/CSR';
import AddCSR from '../Pages/School management/AddCSR';
import Discipline from '../Pages/School management/Discipline';
import AddDiscipline from '../Pages/School management/AddDiscipline';
import PathToSuccess from '../Pages/School management/PathToSuccess';
import AddPathToSuccess from '../Pages/School management/AddPathToSuccess';

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
        path: '/school-management/school-add-Institution-home',
        element: < AddInstitutionHome/>,
    }, 
    {
        path: '/school-management/school-song-and-prayer',
        element: < SongAndPrayer/>,
    }, 
    {
        path: '/school-management/school-add-song-and-prayer',
        element: < AddSongAndPrayer/>,
    }, 
    {
        path: '/school-management/academic-details',
        element: < AcademicDetails/>,
    },  
    {
        path: '/school-management/subject-details',
        element: < SubjectDetails/>,
    },
    {
        path: '/school-management/academic-add-study-materials',
        element: < AddStudyMaterials/>,
    },  
    {
        path: '/school-management/academic-edit-study-materials',
        element: < EditStudyMaterials/>,
    }, 
    {
        path: '/school-management/academic-study-materials-details',
        element: < StudyMaterialsDetails/>,
    }, 
    {
        path: '/school-management/academic-parent-recommendation',
        element: < ParentRecommendation/>,
    }, 
    {
        path: '/school-management/academic-add-parent-recommendation',
        element: < AddParentRecommendation/>,
    },  
    {
        path: '/school-management/academic/general-rules',
        element: < GeneralRules/>,
    },  
    {
        path: '/school-management/academic/add-general-rules',
        element: < AddGeneralRules/>,
    },  
    {
        path: '/school-management/academic/csr',
        element: < CSR/>,
    },
    {
        path: '/school-management/academic/add-csr',
        element: < AddCSR/>,
    }, 
    {
        path: '/school-management/academic/discipline-code',
        element: < Discipline/>,
    },
    {
        path: '/school-management/academic/add-discipline',
        element: < AddDiscipline/>,
    },
    {
        path: '/school-management/academic/path-to-success',
        element: < PathToSuccess/>,
    },  
    {
        path: '/school-management/academic/add-path-to-success',
        element: < AddPathToSuccess/>,
    },  

];

export default routes;
