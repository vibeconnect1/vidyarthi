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
import StudentDashboard from '../Pages/Student/StudentDashboard';
import StudentSidebar from '../Pages/Student/StudentSidebar';
import StudentAttendanceReport from '../Pages/Student/StudentAttendanceReport';
import StudentFeesInvoice from '../Pages/Student/StudentFeesInvoice';
import StudentFeesHistory from '../Pages/Student/StudentFeesHistory';
import StudentStudyMaterial from '../Pages/Student/StudentStudyMaterial';
import StudentHomeWork from '../Pages/Student/StudentHomeWork';
import StudentHomeworkSubmit from '../Pages/Student/StudentHomeworkSubmit';
import StudentNoticeBoard from '../Pages/Student/StudentNoticeBoard';
import AddAssignHomework from '../Pages/School management/AddAssignHomework';
import EditAssignHomework from '../Pages/School management/EditAssignHomework';
import AssignHomeworkDetails from '../Pages/School management/AssignHomeworkDetails';
import Noticeboard from '../Pages/School management/Noticeboard';
import AddNoticeboard from '../Pages/School management/AddNoticeboard';
import EditNoticeboard from '../Pages/School management/EditNoticeboard';
import NoticeboardDetails from '../Pages/School management/NoticeboardDetails';
import EventCommunication from '../Pages/Communication/EventCommunication';
import AddEvent from '../Pages/Communication/AddEvent';
import EventDetails from '../Pages/Communication/EventDetails';
import StudentEvent from '../Pages/Student/StudentEvent';
import Survey from '../Pages/Communication/Survey';
import AddSurvey from '../Pages/Communication/AddSurvey';
import EditSurvey from '../Pages/Communication/EditSurvey';
import SurveyDetails from '../Pages/Communication/SurveyDetails';
import Book from '../Pages/Library Management/Book';
import AddBook from '../Pages/Library Management/AddBook';
import EditBook from '../Pages/Library Management/EditBook';
import BookDetails from '../Pages/Library Management/BookDetails';
import LibraryCard from '../Pages/Library Management/LibraryCard';
import AddLibraryCard from '../Pages/Library Management/AddLibraryCard';
import EditLibraryCard from '../Pages/Library Management/EditLibraryCard';
import LibraryCardDetails from '../Pages/Library Management/LibraryCardDetails';
import StudentLiveClass from '../Pages/Student/StudentLiveClass';
import LiveClasses from '../Pages/School management/LiveClasses';
import AddLiveClasses from '../Pages/School management/AddLiveClasses';
import EditLiveClasses from '../Pages/School management/EditLiveClasses';
import LiveClassesDetails from '../Pages/School management/LiveClassesDetails';
import ExamTable from '../Pages/Examination/ExamTable';
import AddExamTimetable from '../Pages/Examination/AddExamTimetable';
import IssueBook from '../Pages/Library Management/IssueBook';
import AddIssueBook from '../Pages/Library Management/AddIssueBook';
import EditIssueBook from '../Pages/Library Management/EditIssueBook';
import IssueBookDetails from '../Pages/Library Management/IssueBookDetails';
import BookReturn from '../Pages/Library Management/BookReturn';
import AddBookReturn from '../Pages/Library Management/AddBookReturn';
import EditBookReturn from '../Pages/Library Management/EditBookReturn';
import BookReturnDetails from '../Pages/Library Management/BookReturnDetails';
import RequestBook from '../Pages/Library Management/RequestBook';
import AddRequestBook from '../Pages/Library Management/AddRequestBook';
import EditRequestBook from '../Pages/Library Management/EditRequestBook';
import RequestBookDetails from '../Pages/Library Management/RequestBookDetails';
import Vehicle from '../Pages/Transport Management/Vehicle';
import AddVehicle from '../Pages/Transport Management/AddVehicle';
import EditVehicle from '../Pages/Transport Management/EditVehicle';
import VehicleDetails from '../Pages/Transport Management/VehicleDetails';
import Driver from '../Pages/Transport Management/Driver';
import AddDriver from '../Pages/Transport Management/AddDriver';
import EditDriver from '../Pages/Transport Management/EditDriver';
import DriverDetails from '../Pages/Transport Management/DriverDetails';
import VehicleRoute from '../Pages/Transport Management/VehicleRoute';
import AddRoute from '../Pages/Transport Management/AddRoute';
import EditRoute from '../Pages/Transport Management/EditRoute';
import RouteDetails from '../Pages/Transport Management/RouteDetails';
import TransportAllocation from '../Pages/Transport Management/TransportAllocation';
import AddTransportAllocation from '../Pages/Transport Management/AddTransportAllocation';
import EditTransportAllocation from '../Pages/Transport Management/EditTransportAllocation';
import TransportAllocationDetails from '../Pages/Transport Management/TransportAllocationDetails';
import FeesPaymentDetails from '../Pages/Fees & Payment/FeesPaymentDetails';
import SalaryProcessing from '../Pages/Fees & Payment/SalaryProcessing';
import AddSalaryProcessing from '../Pages/Fees & Payment/AddSalaryProcessing';
import EditSalaryProcessing from '../Pages/Fees & Payment/EditSalaryProcessing';
import ExamTimeTableDetails from '../Pages/Examination/ExamTimeTableDetails';
import StudentExamTimetable from '../Pages/Student/StudentExamTimetable';
import StudentExamResult from '../Pages/Student/StudentExamResult';
import AddExamResult from '../Pages/Examination/AddExamResult';
import AccountingDashboard from '../Pages/Fees & Payment/AccountingDashboard';
import EditExamTimetable from '../Pages/Examination/EditExamTimetable';
import SalaryProcessingDetails from '../Pages/Fees & Payment/SalaryProcessingDetails';
import AddIncome from '../Pages/Fees & Payment/AddIncome';
import EditIncome from '../Pages/Fees & Payment/EditIncome';
import IncomeDetails from '../Pages/Fees & Payment/IncomeDetails';
import Expense from '../Pages/Fees & Payment/Expense';
import AddExpense from '../Pages/Fees & Payment/AddExpense';
import EditExpense from '../Pages/Fees & Payment/EditExpense';
import Notification from './Notification';
import StudentSubject from '../Pages/Student/StudentSubject';
import StudentIdCard from '../Pages/Student/StudentIdCard';
import StudentEventDetails from '../Pages/Student/StudentEventDetails';
import AddClassTimeTable from '../Pages/School management/AddClassTimeTable';
import StudentLiveClassDetails from '../Pages/Student/StudentLiveClassDetails';
import Canteen from '../Pages/Canteen Management/Canteen';
import AddCanteenProduct from '../Pages/Canteen Management/AddCanteenProduct';
import EditCanteenProduct from '../Pages/Canteen Management/EditCanteenProduct';
import CanteenProductDetails from '../Pages/Canteen Management/CanteenProductDetails';
import StudIdCard from '../Pages/School management/StudIdCard';
import StudentNoticeDetails from '../Pages/Student/StudentNoticeDetails';
import Asset from '../Pages/Asset/Asset';
import AddAssets from '../Pages/Asset/AddAssets';
import EditAssets from '../Pages/Asset/EditAssets';
import AssetDetails from '../Pages/Asset/AssetDetails';
import ScheduleDetails from '../Pages/Asset/ScheduleDetails';
import EditAssetAmc from '../Pages/Asset/EditAssetAmc';
import AssetAmcDetails from '../Pages/Asset/AssetAmcDetails';
import AddChecklist from '../Pages/Asset/AddChecklist';
import EditChecklist from '../Pages/Asset/EditChecklist';
import ChecklistAssociate from '../Pages/Asset/ChecklistAssociate';
import ClassTimeTableDetails from '../Pages/School management/ClassTimeTableDetails';
import RoutineTaskDetails from '../Pages/Asset/RoutineTaskDetails';
import AddPPMActivity from '../Pages/Asset/AddPPMActivity';
import PPMChecklistDetails from '../Pages/Asset/PPMChecklistDetails';
import AddInventory from '../Pages/Asset/AddInventory';
import EditInventory from '../Pages/Asset/EditInventory';
import InventoryDetails from '../Pages/Asset/InventoryDetails';
import AddGRN from '../Pages/Asset/AddGRN';
import GrnDetails from '../Pages/Asset/GrnDetails';
import AddGdn from '../Pages/Asset/AddGdn';
import GdnView from '../Pages/Asset/GdnView';
import LOIPOTable from '../Pages/Purchase/LOIPOTable';
import Ticket from '../Pages/Service Desk/Ticket';
import CreateTicket from '../Pages/Service Desk/CreateTicket';
import EditTicket from '../Pages/Service Desk/EditTicket';
import TicketDetails from '../Pages/Service Desk/TicketDetails';
import Meeting from '../Pages/Online Meeting/Meeting';
import CreateMeeting from '../Pages/Online Meeting/CreateMeeting';
import MeetingDetails from '../Pages/Online Meeting/MeetingDetails';
import Supplier from '../Pages/Supplier/Supplier';
import AddSupplier from '../Pages/Supplier/AddSupplier';
import EditSupplier from '../Pages/Supplier/EditSupplier';
import SupplierDetails from '../Pages/Supplier/SupplierDetails';
import Birthday from '../Pages/SubPages/Birthday';
import Passes from '../Pages/Visitor management/Passes';
import VisitorPage from '../Pages/Visitor management/VisitorPage';
import RVehicles from '../Pages/Visitor management/RVehicles';
import Staff from '../Pages/Visitor management/Staff';
import Patrolling from '../Pages/Visitor management/Patrolling';
import GoodsInOut from '../Pages/Visitor management/GoodsInOut';
import AddVisitor from '../Pages/Visitor management/AddVisitor';
import ExamResult from '../Pages/Examination/ExamResult';
import EditVisitor from '../Pages/Visitor management/EditVisitor';
import VisitorDetails from '../Pages/Visitor management/VisitorDetails';
import AddRVehicles from '../Pages/Visitor management/AddRVehicles';
import EditRVehicles from '../Pages/Visitor management/EditRVehicles';
import RVehicleDetails from '../Pages/Visitor management/RVehicleDetails';
import AddStaff from '../Pages/Visitor management/AddStaff';
import EditStaff from '../Pages/Visitor management/EditStaff';
import StaffDetails from '../Pages/Visitor management/StaffDetails';
import AddPatrolling from '../Pages/Visitor management/AddPatrolling';
import EditPatrolling from '../Pages/Visitor management/EditPatrolling';
import PatrollingDetails from '../Pages/Visitor management/PatrollingDetails';
import AddGoodsInOut from '../Pages/Visitor management/AddGoodsInOut';
import GoodsInOutDetails from '../Pages/Visitor management/GoodsInOutDetails';
import ProjectManagement from '../Pages/Project/ProjectManagement';
import ProjectDetails from '../Pages/Project/ProjectDetails';
import ServicePage from '../Pages/Soft Service/ServicePage';
import Services from '../Pages/Soft Service/Services';
import AddService from '../Pages/Soft Service/AddService';
import EditService from '../Pages/Soft Service/EditService';
import ServiceDetails from '../Pages/Soft Service/ServiceDetails';
import ServiceTask from '../Pages/Soft Service/ServiceTask';
import CheckListService from '../Pages/Soft Service/CheckListService';
import EditServiceCheckList from '../Pages/Soft Service/EditServiceCheckList';
import AddServiceCheckList from '../Pages/Soft Service/AddServiceCheckList';
import SoftServiceWidgets from '../Pages/Soft Service/SoftServiceWidgets';
import HotelRequest from '../Pages/Booking Request/HotelRequest';
import BookingRequest from '../Pages/Booking Request/BookingRequest';
import AddHotelRequest from '../Pages/Booking Request/AddHotelRequest';
import EditHotelRequest from '../Pages/Booking Request/EditHotelRequest';
import HotelRequestDetails from '../Pages/Booking Request/HotelRequestDetails';
import FlightRequest from '../Pages/Booking Request/FlightRequest';
import AddFlightRequest from '../Pages/Booking Request/AddFlightRequest';
import EditFlightRequest from '../Pages/Booking Request/EditFlightRequest';
import FlightRequestDetails from '../Pages/Booking Request/FlightRequestDetails';
import CabRequest from '../Pages/Booking Request/CabRequest';
import AddCabRequest from '../Pages/Booking Request/AddCabRequest';
import EditCabRequest from '../Pages/Booking Request/EditCabRequest';
import CabRequestDetails from '../Pages/Booking Request/CabRequestDetails';
import TransportationRequest from '../Pages/Booking Request/TransportationRequest';
import ExamCategories from '../Pages/Examination/ExamCategories';
import AdmitCards from '../Pages/Examination/AdmitCards';

const routes = [
    {
        path: '/',
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
        path: '/notification',
        element: <Notification />,
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
        path: '/school-management/add-class-time-table',
        element: < AddClassTimeTable/>,
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
        path: '/school-management/academic/add-assign-homework',
        element: < AddAssignHomework/>,
    },
    {
        path: '/school-management/academic/edit-assign-homework/:id',
        element: < EditAssignHomework/>,
    },
    {
        path: '/school-management/academic/assign-homework-details/:id',
        element: < AssignHomeworkDetails/>,
    },
    {
        path: '/school-management/academic/noticeboard',
        element: < Noticeboard/>,
    },
    {
        path: '/school-management/academic/add-noticeboard',
        element: < AddNoticeboard/>,
    },
    {
        path: '/school-management/academic/edit-noticeboard/:id',
        element: < EditNoticeboard/>,
    },
    {
        path: '/school-management/academic/noticeboard-details/:id',
        element: < NoticeboardDetails/>,
    },
    {
        path: '/school-management/academic/live-classes',
        element: <LiveClasses/>,
    },
    {
        path: '/school-management/academic/add-live-classes',
        element: <AddLiveClasses/>,
    },
    {
        path: '/school-management/academic/edit-live-classes/:id',
        element: <EditLiveClasses/>,
    },
    {
        path: '/school-management/academic/live-classes-details/:id',
        element: <LiveClassesDetails/>,
    },
    //staff
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
    // fees
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
        path: '/school-management/fees-payment/add-income',
        element: < AddIncome/>,
    },
    {
        path: '/school-management/fees-payment/edit-income/:id',
        element: < EditIncome/>,
    },
    {
        path: '/school-management/fees-payment/income-details/:id',
        element: < IncomeDetails/>,
    },
    {
        path: '/school-management/fees-payment/expense',
        element: < Expense/>,
    },
    {
        path: '/school-management/fees-payment/add-expense',
        element: < AddExpense/>,
    },
    {
        path: '/school-management/fees-payment/edit-expense/:id',
        element: < EditExpense/>,
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
    {
        path: '/school-management/fees-payment/fees-payment-detail/:id',
        element: < FeesPaymentDetails/>,
    },
    {
        path: '/school-management/fees-payment/salary-processing',
        element: < SalaryProcessing/>,
    },
    {
        path: '/school-management/fees-payment/add-salary-processing',
        element: < AddSalaryProcessing/>,
    },
    {
        path: '/school-management/fees-payment/edit-salary-processing/:id',
        element: < EditSalaryProcessing/>,
    },
    {
        path: '/school-management/fees-payment/salary-processing-details/:id',
        element: < SalaryProcessingDetails/>,
    },
    {
        path: '/school-management/fees-payment/accounting',
        element: < AccountingDashboard/>,
    },
    {
        path: '/school-management/stud-id-card',
        element: < StudIdCard/>,
    },
    {
        path: '/school-management/class-time-table-details/:id',
        element: < ClassTimeTableDetails/>,
    },
    
    // student section
    {
        path: '/student/student-dashboard',
        element: < StudentDashboard/>,
    },
    {
        path: '/student/student-sidebar',
        element: < StudentSidebar/>,
    },
    {
        path: '/student/student-attendance-report',
        element: < StudentAttendanceReport/>,
    },
    {
        path: '/student/student-fees-invoice',
        element: < StudentFeesInvoice/>,
    },
    {
        path: '/student/student-fees-history',
        element: < StudentFeesHistory/>,
    },
    {
        path: '/student/student-study-materials',
        element: < StudentStudyMaterial/>,
    },
    {
        path: '/student/student-study-materials',
        element: < StudentStudyMaterial/>,
    },
    {
        path: '/student/student-homework',
        element: < StudentHomeWork/>,
    },
    {
        path: '/student/student-homework-submit',
        element: < StudentHomeworkSubmit/>,
    },
    {
        path: '/student/student-noticeboard',
        element: < StudentNoticeBoard/>,
    },
    {
        path: '/student/student-event',
        element: < StudentEvent/>,
    },
    {
        path: '/student/student-live-classes',
        element: < StudentLiveClass/>,
    },
    {
        path: '/student/student-exam-timetable',
        element: < StudentExamTimetable/>,
    },
    {
        path: '/student/student-exam-result',
        element: < StudentExamResult/>,
    },
    {
        path: '/student/student-subject',
        element: < StudentSubject/>,
    },
    {
        path: '/student/student-id-card',
        element: < StudentIdCard/>,
    },
    {
        path: '/student/student-event-details/:id',
        element: < StudentEventDetails/>,
    },
    {
        path: '/student/student-live-class-details/:id',
        element: < StudentLiveClassDetails/>,
    },
    {
        path: '/student/student-notice-details',
        element: < StudentNoticeDetails/>,
    },
    // event
    {
        path: '/student/event',
        element: <EventCommunication/>,
    },
    {
        path: '/student/add-event',
        element: <AddEvent/>,
    },
    {
        path: '/student/event-details/:id',
        element: <EventDetails/>,
    },
    {
        path: '/student/survey',
        element: <Survey/>,
    },
    {
        path: '/student/add-survey',
        element: <AddSurvey/>,
    },
    {
        path: '/student/edit-survey/:id',
        element: <EditSurvey/>,
    },
    {
        path: '/student/survey-detail/:id',
        element: <SurveyDetails/>,
    },
    // Library
    {
        path: '/school-management/library/book',
        element: < Book/>,
    },
    {
        path: '/school-management/library/add-book',
        element: < AddBook/>,
    },
    {
        path: '/school-management/library/edit-book/:id',
        element: < EditBook/>,
    },
    {
        path: '/school-management/library/book-details/:id',
        element: < BookDetails/>,
    },
    {
        path: '/school-management/library/library-card',
        element: < LibraryCard/>,
    },
    {
        path: '/school-management/library/add-library-card',
        element: < AddLibraryCard/>,
    },
    {
        path: '/school-management/library/edit-library-card/:id',
        element: < EditLibraryCard/>,
    },
    {
        path: '/school-management/library/library-card-details/:id',
        element: < LibraryCardDetails/>,
    },
    {
        path: '/school-management/library/issue-book',
        element: < IssueBook/>,
    },
    {
        path: '/school-management/library/add-issue-book',
        element: < AddIssueBook/>,
    },
    {
        path: '/school-management/library/add-issue-book/:id',
        element: < EditIssueBook/>,
    },
    {
        path: '/school-management/library/issue-book-details/:id',
        element: < IssueBookDetails/>,
    },
    {
        path: '/school-management/library/book-return',
        element: < BookReturn/>,
    },
    {
        path: '/school-management/library/add-book-return',
        element: < AddBookReturn/>,
    },
    {
        path: '/school-management/library/edit-book-return/:id',
        element: < EditBookReturn/>,
    },
    {
        path: '/school-management/library/book-return-details/:id',
        element: < BookReturnDetails/>,
    },
    {
        path: '/school-management/library/request-book',
        element: < RequestBook/>,
    },
    {
        path: '/school-management/library/add-request-book',
        element: < AddRequestBook/>,
    },
    {
        path: '/school-management/library/edit-request-book/:id',
        element: < EditRequestBook/>,
    },
    {
        path: '/school-management/library/request-book-details/:id',
        element: < RequestBookDetails/>,
    },
    // exam timetable
    {
        path: '/school-management/exam-timetable',
        element: < ExamTable/>,
    },
    {
        path: '/school-management/add-exam-timetable',
        element: < AddExamTimetable/>,
    },
    {
        path: '/school-management/edit-exam-timetable/:id',
        element: < EditExamTimetable/>,
    },
    {
        path: '/school-management/exam-timetable-details/:id',
        element: < ExamTimeTableDetails/>,
    },
    {
        path: '/school-management/add-exam-result',
        element: < AddExamResult/>,
    },
    {
        path: '/school-management/exam-result',
        element: < ExamResult/>,
    },
    {
        path: '/school-management/exam-category',
        element: < ExamCategories/>,
    },
    {
        path: '/school-management/admit-cards',
        element: < AdmitCards/>,
    },
    
    // Transport management
    {
        path: '/school-management/transport/vehicle',
        element: < Vehicle/>,
    },
    {
        path: '/school-management/transport/add-vehicle',
        element: < AddVehicle/>,
    },
    {
        path: '/school-management/transport/edit-vehicle/:id',
        element: < EditVehicle/>,
    },
    {
        path: '/school-management/transport/vehicle-details/:id',
        element: < VehicleDetails/>,
    },
    {
        path: '/school-management/transport/driver',
        element: < Driver/>,
    },
    {
        path: '/school-management/transport/add-driver',
        element: < AddDriver/>,
    },
    {
        path: '/school-management/transport/edit-driver/:id',
        element: < EditDriver/>,
    },
    {
        path: '/school-management/transport/driver-details/:id',
        element: < DriverDetails/>,
    },
    {
        path: '/school-management/transport/vehicle-route',
        element: < VehicleRoute/>,
    },
    {
        path: '/school-management/transport/add-route',
        element: < AddRoute/>,
    },
    {
        path: '/school-management/transport/edit-route/:id',
        element: < EditRoute/>,
    },
    {
        path: '/school-management/transport/route-details/:id',
        element: <RouteDetails/>,
    },
    {
        path: '/school-management/transport/transport-allocation',
        element: <TransportAllocation/>,
    },
    {
        path: '/school-management/transport/add-transport-allocation',
        element: <AddTransportAllocation/>,
    },
    {
        path: '/school-management/transport/edit-transport-allocation/:id',
        element: <EditTransportAllocation/>,
    },
    {
        path: '/school-management/transport/transport-allocation-details/:id',
        element: <TransportAllocationDetails/>,
    },
    // canteen 
    {
        path: '/school-management/canteen',
        element: <Canteen/>,
    },
    {
        path: '/school-management/add-canteen-product',
        element: <AddCanteenProduct/>,
    },
    {
        path: '/school-management/edit-canteen-product/:id',
        element: <EditCanteenProduct/>,
    },
    {
        path: '/school-management/canteen-product-details/:id',
        element: <CanteenProductDetails/>,
    },
    // asset
    {
        path: '/school-management/asset',
        element: <Asset/>,
    },
    {
        path: '/school-management/add-assets',
        element: <AddAssets/>,
    },
    {
        path: '/school-management/edit-assets',
        element: <EditAssets/>,
    },
    {
        path: '/school-management/assets-details/:id',
        element: <AssetDetails/>,
    },
    {
        path: '/school-management/schedule-details/:id',
        element: <ScheduleDetails/>,
    },
    {
        path: '/school-management/edit-asset-amc/:id',
        element: <EditAssetAmc/>,
    },
    {
        path: '/school-management/asset-amc-details/:id',
        element: <AssetAmcDetails/>,
    },
    {
        path: '/school-management/add-check-list',
        element: <AddChecklist/>,
    },
    {
        path: '/school-management/edit-check-list/:id',
        element: <EditChecklist/>,
    },
    {
        path: '/school-management/check-list-associate/:id',
        element: <ChecklistAssociate/>,
    },
    {
        path: '/school-management/routine-task-details/:id',
        element: <RoutineTaskDetails/>,
    },
    {
        path: '/school-management/add-PPMActivity',
        element: <AddPPMActivity/>,
    },
    {
        path: '/school-management/ppm-checklist-details/:id',
        element: <PPMChecklistDetails/>,
    },
    {
        path: '/school-management/add-inventory',
        element: <AddInventory/>,
    },
    {
        path: '/school-management/edit-inventory/:id',
        element: <EditInventory/>,
    },
    {
        path: '/school-management/inventory-details/:id',
        element: <InventoryDetails/>,
    },
    {
        path: '/school-management/add-grn',
        element: <AddGRN/>,
    },
    {
        path: '/school-management/grn-details/:id',
        element: <GrnDetails/>,
    },
    {
        path: '/school-management/add-gdn',
        element: <AddGdn/>,
    },
    {
        path: '/school-management/gdn-view/:id',
        element: <GdnView/>,
    },
    {
        path: '/school-management/loipotable',
        element: <LOIPOTable/>,
    },
    // service desk
    {
        path: '/school-management/ticket',
        element: <Ticket/>,
    },
    {
        path: '/school-management/create-ticket',
        element: <CreateTicket/>,
    },
    {
        path: '/school-management/edit-ticket',
        element: <EditTicket/>,
    },
    {
        path: '/school-management/ticket-details/:id',
        element: <TicketDetails/>,
    },
    // online meeting
    {
        path: '/school-management/meeting',
        element: <Meeting/>,
    },
    {
        path: '/school-management/create-meeting',
        element: <CreateMeeting/>,
    },
    {
        path: '/school-management/meeting-details/:id',
        element: <MeetingDetails/>,
    },
    //Supplier
    {
        path: '/school-management/supplier',
        element: <Supplier/>,
    },
    {
        path: '/school-management/add-supplier',
        element: <AddSupplier/>,
    },
    {
        path: '/school-management/edit-supplier',
        element: <EditSupplier/>,
    },
    {
        path: '/school-management/supplier-details/:id',
        element: <SupplierDetails/>,
    },
    // birthday
    {
        path: '/school-management/birthday',
        element: <Birthday/>,
    },
    // visitor management
    {
        path: '/school-management/passes',
        element: <Passes/>,
    },
    {
        path: '/school-management/visitor-page',
        element: <VisitorPage/>,
    },
    {
        path: '/school-management/r-vehicle',
        element: <RVehicles/>,
    },
    {
        path: '/school-management/staff',
        element: <Staff/>,
    },
    {
        path: '/school-management/patrolling',
        element: <Patrolling/>,
    },
    {
        path: '/school-management/goods-in-out',
        element: <GoodsInOut/>,
    },
    {
        path: '/school-management/add-visitor',
        element: <AddVisitor/>,
    },
    {
        path: '/school-management/edit-visitor',
        element: <EditVisitor/>,
    },
    {
        path: '/school-management/visitor-details/:id',
        element: <VisitorDetails/>,
    },
    {
        path: '/school-management/add-r-vehicle',
        element: <AddRVehicles/>,
    },
    {
        path: '/school-management/edit-r-vehicle',
        element: <EditRVehicles/>,
    },
    {
        path: '/school-management/r-vehicle-details/:id',
        element: <RVehicleDetails/>,
    },
    {
        path: '/school-management/add-staff',
        element: <AddStaff/>,
    },
    {
        path: '/school-management/edit-staff/:id',
        element: <EditStaff/>,
    },
    {
        path: '/school-management/staff-details/:id',
        element: <StaffDetails/>,
    },
    {
        path: '/school-management/add-patrolling',
        element: <AddPatrolling/>,
    },
    {
        path: '/school-management/edit-patrolling',
        element: <EditPatrolling/>,
    },
    {
        path: '/school-management/patrolling-details/:id',
        element: <PatrollingDetails/>,
    },
    {
        path: '/school-management/add-good-in-out',
        element: <AddGoodsInOut/>,
    },
    {
        path: '/school-management/good-in-out-details/:id',
        element: <GoodsInOutDetails/>,
    },
    //project management
    {
        path: '/school-management/project-management',
        element: <ProjectManagement/>,
    },
    {
        path: '/school-management/project-details',
        element: <ProjectDetails/>,
    },
    // Soft Service
    {
        path: '/school-management/service-page',
        element: <ServicePage/>,
    }, 
    {
        path: '/school-management/service',
        element: <Services/>,
    }, 
    {
        path: '/school-management/service-add',
        element: <AddService/>,
    }, 
    {
        path: '/school-management/edit-service/:id',
        element: <EditService/>,
    },
    {
        path: '/school-management/service-details/:id',
        element: <ServiceDetails/>,
    }, 
    {
        path: '/school-management/service-task',
        element: <ServiceTask/>,
    },
    {
        path: '/school-management/checklist-service',
        element: <CheckListService/>,
    },
    {
        path: '/school-management/edit-checklist-service/:id',
        element: <EditServiceCheckList/>,
    },
    {
        path: '/school-management/add-check-list-service',
        element: <AddServiceCheckList/>,
    },
    {
        path: '/school-management/soft-service-widgets',
        element: <SoftServiceWidgets/>,
    },

    // Booking Request
    {
        path: '/school-management/booking-request',
        element: <BookingRequest/>,
    },

    {
        path: '/school-management/hotel-request',
        element: <HotelRequest/>,
    },
    {
        path: '/school-management/add-hotel-request',
        element: <AddHotelRequest/>,
    },
    {
        path: '/school-management/edit-hotel-request/:id',
        element: <EditHotelRequest/>,
    },
    {
        path: '/school-management/hotel-request-details/:id',
        element: <HotelRequestDetails/>,
    },
    {
        path: '/school-management/flight-request',
        element: <FlightRequest/>,
    },
    {
        path: '/school-management/add-flight-request',
        element: <AddFlightRequest/>,
    },
    {
        path: '/school-management/edit-flight-request/:id',
        element: <EditFlightRequest/>,
    },
    {
        path: '/school-management/flight-request-details/:id',
        element: <FlightRequestDetails/>,
    },
    {
        path: '/school-management/cab-request',
        element: <CabRequest/>,
    },
    {
        path: '/school-management/add-cab-request',
        element: <AddCabRequest/>,
    },
    {
        path: '/school-management/edit-cab-request/:id',
        element: <EditCabRequest/>,
    },
    {
        path: '/school-management/cab-request-details/:id',
        element: <CabRequestDetails/>,
    },
    {
        path: '/school-management/transportation-request',
        element: <TransportationRequest/>,
    },
];

export default routes;
