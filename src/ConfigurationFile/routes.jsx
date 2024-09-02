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
import ClassAndDivisionDetails from '../Pages/School management/ClassAndDivisionDetails';
import Teacher from '../Pages/Staff/Teacher';
import Employees from '../Pages/Staff/Employees';
import Applicant from '../Pages/School management/Applicant';
import Quotas from '../Pages/School management/Quotas';
import AddQuota from '../Pages/School management/AddQuota';
import CalendarAndTiming from '../Pages/School management/CalendarAndTiming';
import AddEmployees from '../Pages/Staff/AddEmployees';
import EmployeesDetails from '../Pages/Staff/EmployeesDetails';
import Role from '../Pages/Staff/Role';
import AddRole from '../Pages/Staff/AddRole';
import EditRole from '../Pages/Staff/EditRole';
import EditQuota from '../Pages/School management/EditQuota';
import AddApplicant from '../Pages/School management/AddApplicant';
import ApplicantDetails from '../Pages/School management/ApplicantDetails';
import StudentDetails from '../Pages/School management/StudentDetails';
import FeesType from '../Pages/Fees & Payment/FeesType';
import AddFeesType from '../Pages/Fees & Payment/AddFeesType';
import EditFeesType from '../Pages/Fees & Payment/EditFeesType';
import FeesDetails from '../Pages/Fees & Payment/FeesDetails';
import FeesIncome from '../Pages/Fees & Payment/FeesIncome';
import AddFeesPayment from '../Pages/Fees & Payment/AddFeesPayment';
import FeesPayment from '../Pages/Fees & Payment/FeesPayment';
import EditFeesPayment from '../Pages/Fees & Payment/EditFeesPayment';

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
        path: '/school-management/school-students-details/:id',
        element: <StudentDetails/>,
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
    {
        path: '/school-management/academic/class-division-details',
        element: < ClassAndDivisionDetails/>,
    },  
    {
        path: '/school-management/academic/teacher',
        element: < Teacher/>,
    }, 
    {
        path: '/school-management/academic/employees',
        element: < Employees/>,
    }, 
    {
        path: '/school-management/academic/applicant',
        element: < Applicant/>,
    }, 
    {
        path: '/school-management/academic/add-applicant',
        element: < AddApplicant/>,
    }, 
    {
        path: '/school-management/academic/applicant-details/:id',
        element: < ApplicantDetails/>,
    }, 
    {
        path: '/school-management/academic/Quotas',
        element: < Quotas/>,
    }, 
    {
        path: '/school-management/academic/add-quota',
        element: < AddQuota/>,
    },
    {
        path: '/school-management/academic/edit-quota/:id',
        element: < EditQuota/>,
    },
    {
        path: '/school-management/academic/calendar',
        element: < CalendarAndTiming/>,
    },
    {
        path: '/school-management/staff/add-employees',
        element: < AddEmployees/>,
    },
    {
        path: '/school-management/staff/employees-details/:id',
        element: < EmployeesDetails/>,
    },
    {
        path: '/school-management/staff/Role',
        element: < Role/>,
    },
    {
        path: '/school-management/staff/add-role',
        element: < AddRole/>,
    },
    {
        path: '/school-management/staff/edit-role/:id',
        element: < EditRole/>,
    },
    {
        path: '/school-management/fees-payment/feesType',
        element: < FeesType/>,
    },
    {
        path: '/school-management/fees-payment/add-feesType',
        element: < AddFeesType/>,
    },
    {
        path: '/school-management/fees-payment/edit-feesType/:id',
        element: < EditFeesType/>,
    },
    {
        path: '/school-management/fees-payment/feesType-details/:id',
        element: < FeesDetails/>,
    },
    {
        path: '/school-management/fees-payment/income',
        element: < FeesIncome/>,
    },
    {
        path: '/school-management/fees-payment/fees-payment',
        element: < FeesPayment/>,
    },
    {
        path: '/school-management/fees-payment/add-fees-payment',
        element: < AddFeesPayment/>,
    },
    {
        path: '/school-management/fees-payment/edit-fees-payment/:id',
        element: < EditFeesPayment/>,
    },
];

export default routes;
