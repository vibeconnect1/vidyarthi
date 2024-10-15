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
import AddTransportationRequest from '../Pages/Booking Request/AddTransportationRequest';
import EditTransportationRequest from '../Pages/Booking Request/EditTransportationRequest';
import TransportationRequestDetails from '../Pages/Booking Request/TransportationRequestDetails';
import TravelingAllowanceRequest from '../Pages/Booking Request/TravelingAllowanceRequest';
import AddTravelingAllowanceRequest from '../Pages/Booking Request/AddTravelingAllowanceRequest';
import EditTravelingAllowanceRequest from '../Pages/Booking Request/EditTravelingAllowanceRequest';
import TravelingAllowanceRequestDetails from '../Pages/Booking Request/TravelingAllowanceRequestDetails';
import Audit from '../Pages/SubPages/Audit';
import AddScheduleAudit from '../Pages/SubPages/AddScheduleAudit';
import EditScheduleAudit from '../Pages/SubPages/EditScheduleAudit';
import ScheduleAuditDetails from '../Pages/SubPages/ScheduleAuditDetails';
import ConductedAuditDetails from '../Pages/SubPages/ConductedAuditDetails';
import EditConductedAuditDetails from '../Pages/SubPages/EditConductedAuditDetails';
import AddAuditChecklist from '../Pages/SubPages/AddAuditChecklist';
import AuditChecklistDetails from '../Pages/SubPages/AuditChecklistDetails';
import AddScheduleVendorAudit from '../Pages/SubPages/AddScheduleVendorAudit';
import EditScheduleVendorAudit from '../Pages/SubPages/EditScheduleVendorAudit';
import ScheduleVendorAuditDetails from '../Pages/SubPages/ScheduleVendorAuditDetails';
import Permit from '../Pages/SubPages/Permit';
import AddNewPermit from '../Pages/SubPages/AddNewPermit';
import EditPermit from '../Pages/SubPages/EditPermit';
import PermitDetails from '../Pages/SubPages/PermitDetails';
import PermitPendingApprovalDetails from '../Pages/SubPages/PermitPendingApprovalDetails';
import Incidents from '../Pages/SubPages/Incidents';
import AddIncidents from '../Pages/SubPages/AddIncidents';
import EditIncidents from '../Pages/SubPages/EditIncidents';
import IncidentsDetails from '../Pages/SubPages/IncidentsDetails';
import MailRoom from '../Pages/SubPages/MailRoom';
import CreateInbound from '../Pages/SubPages/CreateInbound';
import InBoundDetails from '../Pages/SubPages/InBoundDetails';
import CreateOutbound from '../Pages/SubPages/CreateOutbound';
import OutBoundDetails from '../Pages/SubPages/OutBoundDetails';
import BusinessCard from '../Pages/SubPages/BusinessCard';
import WorkSpaceBooking from '../Pages/SubPages/WorkSpaceBooking';
import FacilityBooking from '../Pages/SubPages/FacilityBooking';
import BookingDetails from '../Pages/SubPages/BookingDetails';
import AddSeatBooking from '../Pages/SubPages/AddSeatBooking';
import SeatBookingDetails from '../Pages/SubPages/SeatBookingDetails';
import DoctorAppointment from '../Pages/SubPages/DoctorAppointment';
import BookDocAppointment from '../Pages/SubPages/BookDocAppointment';
import Insurance from '../Pages/SubPages/Insurance';
import AddInsurancePolicy from '../Pages/SubPages/AddInsurancePolicy';
import InsurancePolicyList from '../Pages/SubPages/InsurancePolicyList';
import InsurancePolicyDetails from '../Pages/SubPages/InsurancePolicyDetails';
import Parkings from '../Pages/SubPages/Parkings';
import AddParking from '../Pages/SubPages/AddParking';
import StudentOnlineFees from '../Pages/Student/StudentOnlineFees';
import ParkingDetails from '../Pages/SubPages/ParkingDetails';
import DocumentMain from '../Pages/SubPages/DocumentMain';
import HRMSDashboard from '../Pages/HRMS/HRMSDashboard';
import PendingRequest from '../Pages/HRMS/PendingRequest';
import RegularizationRequest from '../Pages/HRMS/RegularizationRequest';
import EmployeeDirectory from '../Pages/HRMS/EmployeeDirectory';
import AddEmployee from '../Pages/HRMS/AddEmployee';
import SetupIssues from '../Pages/HRMS/SetupIssues';
import RegularizationReason from '../Pages/HRMS/Attendance/RegularizationReason';
import AttendanceTemplate from '../Pages/HRMS/Attendance/AttendanceTemplate';
import AttAddTemplate from '../Pages/HRMS/AttAddTemplate';
import AttendanceTemplateAssign from '../Pages/HRMS/Attendance/AttendanceTemplateAssign';
import GeneralSettings from '../Pages/HRMS/GeneralSettings';
import AddLeaveCategory from '../Pages/HRMS/AddLeaveCategory';
import EditLeaveCategory from '../Pages/HRMS/EditLeaveCategory';
import Templates from '../Pages/HRMS/Templates';
import AddTemplates from '../Pages/HRMS/AddTemplates';
import EditTemplates from '../Pages/HRMS/EditTemplates';
import TemplateAssignment from '../Pages/HRMS/TemplateAssignment';
import ProcessAlert from '../Pages/HRMS/ProcessAlert';
import Payslip from '../Pages/HRMS/Payslip';
import PayslipDetailsPage from '../Pages/HRMS/PayslipDetailsPage';
import PayslipDetails1 from '../Pages/HRMS/PayslipDetails1';
import PayslipDetails2 from '../Pages/HRMS/PayslipDetails2';
import PayslipDetails3 from '../Pages/HRMS/PayslipDetails3';
import PayslipDetails4 from '../Pages/HRMS/PayslipDetails4';
import PayrollForm16 from '../Pages/HRMS/PayrollForm16';
import AlertTasks from '../Pages/HRMS/AlertTasks';
import BasicInformation from '../Pages/HRMS/Organization/BasicInformation';
import AddressInformation from '../Pages/HRMS/Organization/AddressInformation';
import GeographicalSetting from '../Pages/HRMS/Organization/GeographicalSetting';
import Location from '../Pages/HRMS/Organization/Location';
import Department from '../Pages/HRMS/Organization/Department';
import HolidayCalendar from '../Pages/HRMS/Organization/HolidayCalendar';
import CanteenInfo from '../Pages/Canteen Management/CanteenInfo';
import CanteenStatusSetup from '../Pages/Canteen Management/CanteenStatusSetup';
import CanteenCategory from '../Pages/Canteen Management/CanteenCategory';
import CanteenSubCategory from '../Pages/Canteen Management/CanteenSubCategory';
import CanteenBookingItem from '../Pages/Canteen Management/CanteenBookingItem';
import PersonalInformation from '../Pages/HRMS/Organization/PersonalInformation';
import EmployeeInformation from '../Pages/HRMS/Organization/EmployeeInformation';
import OtherInformation from '../Pages/HRMS/Organization/OtherInformation';
import EmployeeDocument from '../Pages/HRMS/Organization/EmployeeDocument';
import BankAccounts from '../Pages/HRMS/Organization/BankAccounts';
import CalendarSettings from '../Pages/HRMS/Organization/CalendarSettings';
import ManageAdministrators from '../Pages/HRMS/Organization/ManageAdministrators';
import ThirdPartyUsers from '../Pages/HRMS/Organization/ThirdPartyUsers';
import EmployeePermissions from '../Pages/HRMS/Organization/EmployeePermissions';
import EmployeeNewsFeedPermissions from '../Pages/HRMS/Organization/EmployeeNewsFeedPermissions';
import CompanyPolicyDocuments from '../Pages/HRMS/Organization/CompanyPolicyDocuments';
import LetterTemplates from '../Pages/HRMS/Organization/LetterTemplates';
import AddLetterTemplates from '../Pages/HRMS/Organization/AddLetterTemplates';
import EditLetterTemplates from '../Pages/HRMS/Organization/EditLetterTemplates';
import OldLetterTemplates from '../Pages/HRMS/Organization/OldLetterTemplates';
import OnboardingGeneralSetting from '../Pages/HRMS/Organization/OnboardingGeneralSetting';
import FirstDayInformationTemplates from '../Pages/HRMS/Organization/FirstDayInformationTemplates';
import CompanyInduction from '../Pages/HRMS/Organization/CompanyInduction';
import InductionTemplates from '../Pages/HRMS/Organization/InductionTemplates';
import OnboardingCategories from '../Pages/HRMS/Organization/OnboardingCategories';
import OnboardingTasks from '../Pages/HRMS/Organization/OnboardingTasks';
import OnboardingChecklistTemplates from '../Pages/HRMS/Organization/OnboardingChecklistTemplates';
import WelcomeMessage from '../Pages/HRMS/Organization/WelcomeMessage';
import EmployeeDirectoryPage from '../Pages/HRMS/Employee/EmployeeDirectoryPage';
import EditEmployeeDirectoryPage from '../Pages/HRMS/Employee/EditEmployeeDirectoryPage';
import InitiateSeparation from '../Pages/HRMS/Employee/InitiateSeparation';
import AttendanceDetails from '../Pages/School management/AttendanceDetails';
import PersonalEmployeeDirectory from '../Pages/HRMS/Employee/PersonalEmployeeDirectory';
import EmploymentDirectory from '../Pages/HRMS/Employee/EmploymentDirectory';
import StatutoryDirectory from '../Pages/HRMS/Employee/StatutoryDirectory';
import SalaryDirectory from '../Pages/HRMS/Employee/SalaryDirectory';
import AddNewCTC from '../Pages/HRMS/Employee/AddNewCTC';
import EmployeeDirectoryTax from '../Pages/HRMS/Employee/EmployeeDirectoryTax';
import Deductions80C from '../Pages/HRMS/Employee/Deductions80C';
import ExemptionsDeductionsTax from '../Pages/HRMS/Employee/ExemptionsDeductionsTax';
import RentInformationTax from '../Pages/HRMS/Employee/RentInformationTax';
import PerquisitesInformationTax from '../Pages/HRMS/Employee/PerquisitesInformationTax';
import OtherIncomeInfoTax from '../Pages/HRMS/Employee/OtherIncomeInfoTax';
import HousingLoanInfoTax from '../Pages/HRMS/Employee/HousingLoanInfoTax';
import EmployeeDirectoryDocuments from '../Pages/HRMS/Employee/EmployeeDirectoryDocuments';
import EmployeeDirectoryOtherDetails from '../Pages/HRMS/Employee/EmployeeDirectoryOtherDetails';
import EmployeeDirectoryOffboarding from '../Pages/HRMS/Employee/EmployeeDirectoryOffboarding';
import EmployeeDirectoryTransaction from '../Pages/HRMS/Employee/EmployeeDirectoryTransaction';
import EmployeeDirectoryTransactionCheck from '../Pages/HRMS/Employee/EmployeeDirectoryTransactionCheck';
import EmployeeDirectoryChangeLogs from '../Pages/HRMS/Employee/EmployeeDirectoryChangeLogs';
import OrganisationTree from '../Pages/HRMS/Employee/OrganisationTree';
import OrganisationTreeDetails from '../Pages/HRMS/Employee/OrganisationTreeDetails';
import OrganisationTreeSettings from '../Pages/HRMS/Employee/OrganisationTreeSettings';
import DataChangeRequests from '../Pages/HRMS/Employee/DataChangeRequests';
import EditDataChangeRequests from '../Pages/HRMS/Employee/EditDataChangeRequests';
import CTCBasketRequests from '../Pages/HRMS/Employee/CTCBasketRequests';
import InvestmentApprovals from '../Pages/HRMS/Employee/InvestmentApprovals';
import InvestmentUnder80C from '../Pages/HRMS/Employee/InvestmentUnder80C';
import InvestmentUnder80Others from '../Pages/HRMS/Employee/InvestmentUnder80Others';
import RentInformation from '../Pages/HRMS/Employee/RentInformation';
import Exemption10LTA from '../Pages/HRMS/Employee/Exemption10LTA';
import OtherIncome from '../Pages/HRMS/Employee/OtherIncome';
import HousingLoan from '../Pages/HRMS/Employee/HousingLoan';
import Onboarding from '../Pages/HRMS/Employee/Onboarding';
import OnboardingDetails from '../Pages/HRMS/Employee/OnboardingDetails';
import LetterTemplateCreation from '../Pages/HRMS/Employee/LetterTemplateCreation';
import PendingContractRenewal from '../Pages/HRMS/Employee/PendingContractRenewal';
import SeparationRequest from '../Pages/HRMS/Employee/SeparationRequest';
import SeparationApplications from '../Pages/HRMS/Employee/SeparationApplications';
import ExitInterviewRequests from '../Pages/HRMS/Employee/ExitInterviewRequests';
import EditExitInterviewRequests from '../Pages/HRMS/Employee/EditExitInterviewRequests';
import GeneratedLetter from '../Pages/HRMS/Employee/GeneratedLetter';
import EmployeeDirectoryCalendar from '../Pages/HRMS/Employee/EmployeeDirectoryCalendar';
import AttendanceRecords from '../Pages/HRMS/Attendance/AttendanceRecords';
import RegularizationRequests from '../Pages/HRMS/Attendance/RegularizationRequests';
import AttendanceAudit from '../Pages/HRMS/Attendance/AttendanceAudit';
import AttendanceProcess from '../Pages/HRMS/Attendance/AttendanceProcess';
import RunningAttendanceProcess from '../Pages/HRMS/Attendance/RunningAttendanceProcess';
import AttendanceGeneralSetting from '../Pages/HRMS/Attendance/AttendanceGeneralSetting';
import DeviceRegistrationRequest from '../Pages/HRMS/Attendance/DeviceRegistrationRequest';
import AttendanceValidations from '../Pages/HRMS/Attendance/AttendanceValidations';
import AttendanceLogs from '../Pages/HRMS/Attendance/AttendanceLogs';
import ExpenseReports from '../Pages/HRMS/Expenses/ExpenseReports';
import AdvanceExpenseReports from '../Pages/HRMS/Expenses/AdvanceExpenseReports';
import ExpenseProcessHistory from '../Pages/HRMS/Expenses/ExpenseProcessHistory';
import ProcessExpense from '../Pages/HRMS/Expenses/ProcessExpense';
import AdvanceExpenseProcessHistory from '../Pages/HRMS/Expenses/AdvanceExpenseProcessHistory';
import ExpenseCategories from '../Pages/HRMS/Expenses/ExpenseCategories';
import ExpenseTemplates from '../Pages/HRMS/Expenses/ExpenseTemplates';
import ExpenseTemplateAssignments from '../Pages/HRMS/Expenses/ExpenseTemplateAssignments';
import ExpenseGeneralSettings from '../Pages/HRMS/Expenses/ExpenseGeneralSettings';
import TimeSheetRequest from '../Pages/HRMS/Timesheet/TimeSheetRequest';
import EditTimeSheetRequest from '../Pages/HRMS/Timesheet/EditTimeSheetRequest';
import TimesheetRecords from '../Pages/HRMS/Timesheet/TimesheetRecords';
import TimesheetGeneralSettings from '../Pages/HRMS/Timesheet/TimesheetGeneralSettings';
import TimesheetClients from '../Pages/HRMS/Timesheet/TimesheetClients';
import TimesheetProject from '../Pages/HRMS/Timesheet/TimesheetProject';
import TimesheetTask from '../Pages/HRMS/Timesheet/TimesheetTask';
import TimesheetCustomFields from '../Pages/HRMS/Timesheet/TimesheetCustomFields';
import TimesheetTemplates from '../Pages/HRMS/Timesheet/TimesheetTemplates';
import TimesheetAssignment from '../Pages/HRMS/Timesheet/TimesheetAssignment';
import LeaveApplication from '../Pages/HRMS/Leave/LeaveApplication';
import CompOffEarnings from '../Pages/HRMS/Leave/CompOffEarnings';
import LeaveBalances from '../Pages/HRMS/Leave/LeaveBalances';
import Rollovers from '../Pages/HRMS/Leave/Rollovers';
import LeaveGeneralSettings from '../Pages/HRMS/Leave/LeaveGeneralSettings';
import LeaveCategories from '../Pages/HRMS/Leave/LeaveCategories';
import LeavePoliciesTemplates from '../Pages/HRMS/Leave/LeavePoliciesTemplates';
import LeaveTemplateAssignment from '../Pages/HRMS/Leave/LeaveTemplateAssignment';
import PerformanceDashboard from '../Pages/HRMS/Performance/PerformanceDashboard';
import PerformanceEmployeeReview from '../Pages/HRMS/Performance/PerformanceEmployeeReview';
import PerformanceEmployeeSelection from '../Pages/HRMS/Performance/PerformanceEmployeeSelection';
import PerformanceCycleSettings from '../Pages/HRMS/Performance/PerformanceCycleSettings';
import StudentClassTimeTable from '../Pages/Student/StudentClassTimeTable';
import PerformanceAssessment from '../Pages/HRMS/Performance/PerformanceAssessment';
import PerformanceFinalRecommendation from '../Pages/HRMS/Performance/PerformanceFinalRecommendation';
import PerformanceEmployeeReviewDetailsSummary from '../Pages/HRMS/Performance/PerformanceEmployeeReviewDetailsSummary';
import PerformanceEmployeeReviewDetailsSubmissions from '../Pages/HRMS/Performance/PerformanceEmployeeReviewDetailsSubmissions';
import PerformanceEmployeeReviewDetailsAssessments from '../Pages/HRMS/Performance/PerformanceEmployeeReviewDetailsAssessments';
import PerformanceAssignAssessorAssessment from '../Pages/HRMS/Performance/PerformanceAssignAssessorAssessment';
import PerformanceViewAssessmentMaster from '../Pages/HRMS/Performance/PerformanceViewAssessmentMaster';
import PerformanceAssessmentViewAllSubmissions from '../Pages/HRMS/Performance/PerformanceAssessmentViewAllSubmissions';
import PerformanceAssignFinalRecommendation from '../Pages/HRMS/Performance/PerformanceAssignFinalRecommendation';
import PerformanceFinalRecommendationViewAll from '../Pages/HRMS/Performance/PerformanceFinalRecommendationViewAll';
import GoalCategoryCompetencyBank from '../Pages/HRMS/Performance/GoalCategoryCompetencyBank';
import PerformanceEvaluationTemplate from '../Pages/HRMS/Performance/PerformanceEvaluationTemplate';
import PerformanceCycle from '../Pages/HRMS/Performance/PerformanceCycle';
import GeneralSurvey from '../Pages/HRMS/Survey/GeneralSurvey';
import GeneralSurveyView from '../Pages/HRMS/Survey/GeneralSurveyView';
import OnboardingSurvey from '../Pages/HRMS/Survey/OnboardingSurvey';
import ExitInterviews from '../Pages/HRMS/Survey/ExitInterviews';
import QuestionBankGeneralSurvey from '../Pages/HRMS/Survey/QuestionBankGeneralSurvey';
import QuestionBankOnboardingSurvey from '../Pages/HRMS/Survey/QuestionBankOnboardingSurvey';
import QuestionBankExitInterviews from '../Pages/HRMS/Survey/QuestionBankExitInterviews';
import GeneralSurveySetting from '../Pages/HRMS/Survey/GeneralSurveySetting';
import OnboardingSurveySetting from '../Pages/HRMS/Survey/OnboardingSurveySetting';
import ExitInterviewsSetting from '../Pages/HRMS/Survey/ExitInterviewsSetting';
import FlexiBenefits from '../Pages/HRMS/Flexi/FlexiBenefits';
import FlexiEmployeeBalance from '../Pages/HRMS/Flexi/FlexiEmployeeBalance';
import GeneralSettingsFlexi from '../Pages/HRMS/Flexi/GeneralSettingsFlexi';
import FlexiBenefitCategories from '../Pages/HRMS/Flexi/FlexiBenefitCategories';
import AddFlexiBenefitCategories from '../Pages/HRMS/Flexi/AddFlexiBenefitCategories';
import EditFlexiBenefitCategory from '../Pages/HRMS/Flexi/EditFlexiBenefitCategory';
import FlexiBenefitSupervisorAssignment from '../Pages/HRMS/Flexi/FlexiBenefitSupervisorAssignment';
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
    {
        path: '/school-management/attendance-details/:id',
        element: < AttendanceDetails/>,
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
    {
        path: '/student/student-online-fees',
        element: < StudentOnlineFees/>,
    },
    {
        path: '/student/student-class-time-table',
        element: < StudentClassTimeTable/>,
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
        path: '/canteen/canteen-info',
        element: <CanteenInfo/>,
    }, 
    {
        path: '/canteen/canteen-status-setup',
        element: <CanteenStatusSetup/>,
    }, 
    {
        path: '/canteen/canteen-category',
        element: <CanteenCategory/>,
    }, 
    {
        path: '/canteen/canteen-sub-category',
        element: <CanteenSubCategory/>,
    }, 
    {
        path: '/canteen/canteen-menu',
        element: <Canteen/>,
    },
    {
        path: '/canteen/add-canteen-product',
        element: <AddCanteenProduct/>,
    },
    {
        path: '/canteen/edit-canteen-product/:id',
        element: <EditCanteenProduct/>,
    },
    {
        path: '/canteen/canteen-product-details/:id',
        element: <CanteenProductDetails/>,
    },
    {
        path: '/canteen/booking',
        element: <CanteenBookingItem/>,
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
    {
        path: '/school-management/add-transportation-request',
        element: <AddTransportationRequest/>,
    },
    {
        path: '/school-management/edit-transportation-request/:id',
        element: <EditTransportationRequest/>,
    },
    {
        path: '/school-management/transportation-request-details/:id',
        element: <TransportationRequestDetails/>,
    },
    {
        path: '/school-management/traveling-allowance-request',
        element: <TravelingAllowanceRequest/>,
    },
    {
        path: '/school-management/add-traveling-allowance-request',
        element: <AddTravelingAllowanceRequest/>,
    },
    {
        path: '/school-management/edit-traveling-allowance-request/:id',
        element: <EditTravelingAllowanceRequest/>,
    },
    {
        path: '/school-management/traveling-allowance-request-details/:id',
        element: <TravelingAllowanceRequestDetails/>,
    },
    // Audit
    {
        path: '/school-management/audit',
        element: <Audit/>,
    },
    {
        path: '/school-management/add-schedule-audit',
        element: <AddScheduleAudit/>,

    },
    {
        path: '/school-management/edit-schedule-audit/:id',
        element: <EditScheduleAudit/>,

    },
    {
        path: '/school-management/schedule-audit-details/:id',
        element: <ScheduleAuditDetails/>,
    },
    {
        path: '/school-management/conducted-audit-details/:id',
        element: <ConductedAuditDetails/>,
    },
    {
        path: '/school-management/edit-conducted-audit-details',
        element: <EditConductedAuditDetails/>,
    },
    {
        path: '/school-management/add-audit-checklist',
        element: <AddAuditChecklist/>,
    },
    {
        path: '/school-management/audit-checklist-details/:id',
        element: <AuditChecklistDetails/>,
    },
    {
        path: '/school-management/add-schedule-vendor-audit',
        element: <AddScheduleVendorAudit/>,
    },
    {
        path: '/school-management/edit-schedule-vendor-audit/:id',
        element: <EditScheduleVendorAudit/>,
    },
    {
        path: '/school-management/schedule-vendor-audit-details/:id',
        element: <ScheduleVendorAuditDetails/>,
    },
    //Permit
    {
        path: '/school-management/Permit',
        element: <Permit/>,
    },
    {
        path: '/school-management/add-new-permit',
        element: <AddNewPermit/>,
    },
    {
        path: '/school-management/edit-permit/:id',
        element: <EditPermit/>,
    },
    {
        path: '/school-management/permit-details/:id',
        element: <PermitDetails/>,
    },
    {
        path: '/school-management/permit-pending-approval-details/:id',
        element: <PermitPendingApprovalDetails/>,
    },
    //
    {
        path: '/school-management/incidents',
        element: <Incidents/>,
    },
    {
        path: '/school-management/add-incidents',
        element: <AddIncidents/>,
    },
    {
        path: '/school-management/edit-incidents/:id',
        element: <EditIncidents/>,
    },
    {
        path: '/school-management/incidents-details/:id',
        element: <IncidentsDetails/>,
    },
    // Mail Room
    {
        path: '/school-management/mail-room',
        element: <MailRoom/>,
    },
    {
        path: '/school-management/create-inbound',
        element: <CreateInbound/>,
    },
    {
        path: '/school-management/inbound-details/:id',
        element: <InBoundDetails/>,
    },
    {
        path: '/school-management/create-outbound',
        element: <CreateOutbound/>,
    },
    {
        path: '/school-management/outBound-details/:id',
        element: <OutBoundDetails/>,
    },
    // BusinessCard
    {
        path: '/school-management/business-card',
        element: <BusinessCard/>,
    },
    // Work Space Booking
    {
        path: '/school-management/work-space-booking',
        element: <WorkSpaceBooking/>,
    },
    {
        path: '/school-management/work-space-booking/facility-booking',
        element: <FacilityBooking/>,
    },
    {
        path: '/school-management/work-space-booking/booking-details/:id',
        element: <BookingDetails/>,
    },
    {
        path: '/school-management/work-space-booking/add-seat-booking',
        element: <AddSeatBooking/>,
    },
    {
        path: '/school-management/work-space-booking/seat-booking-details/:id',
        element: <SeatBookingDetails/>,
    },
    // DoctorAppointment
    {
        path: '/school-management/doctor-appointment',
        element: <DoctorAppointment/>,
    },
    {
        path: '/school-management/book-doctor-appointment',
        element: <BookDocAppointment/>,
    },
    //Insurance
    {
        path: '/school-management/insurance',
        element: <Insurance/>,
    },
    {
        path: '/school-management/add-insurance-policy',
        element: <AddInsurancePolicy/>,
    },
    {
        path: '/school-management/insurance-policy-list',
        element: <InsurancePolicyList/>,
    },
    {
        path: '/school-management/insurance-policy-details',
        element: <InsurancePolicyDetails/>,
    },
    //Parkings
    {
        path: '/school-management/parkings',
        element: <Parkings/>,
    },
    {
        path: '/school-management/add-parking',
        element: <AddParking/>,
    },
    {
        path: '/school-management/parking-details/:id',
        element: <ParkingDetails/>,
    },
    // Document pro
    {
        path: '/school-management/document-main',
        element: <DocumentMain/>,
    },
    // HRMS
    {
        path: '/hrms/hrms-Dashboard',
        element: <HRMSDashboard/>,
    },
    {
        path: '/hrms/alerts/pending-request',
        element: <PendingRequest/>,
    }, 
    {
        path: '/hrms/alerts/regularization-request',
        element: <RegularizationRequest/>,
    }, 
    {
        path: '/hrms/alerts/employee-directory',
        element: <EmployeeDirectory/>,
    }, 
    {
        path: '/hrms/alerts/add-employee',
        element: <AddEmployee/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues',
        element: <SetupIssues/>,
    },  
    {
        path: '/hrms/alerts/setup-issues/att-add-template',
        element: <AttAddTemplate/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/general-settings',
        element: <GeneralSettings/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/add-leave-categories',
        element: <AddLeaveCategory/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/edit-leave-categories/:id',
        element: <EditLeaveCategory/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/templates',
        element: <Templates/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/add-templates',
        element: <AddTemplates/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/edit-templates/:id',
        element: <EditTemplates/>,
    }, 
    {
        path: '/hrms/alerts/setup-issues/template-assignment',
        element: <TemplateAssignment/>,
    }, 
    {
        path: '/hrms/alerts/process-alert',
        element: <ProcessAlert/>,
    }, 
    {
        path: '/hrms/alerts/payslip',
        element: <Payslip/>,
    },
    {
        path: '/hrms/alerts/payslip-details-page/:id',
        element: <PayslipDetailsPage/>,
    }, 
    {
        path: '/hrms/alerts/payslip-details1',
        element: <PayslipDetails1/>,
    }, 
    {
        path: '/hrms/alerts/payslip-details2',
        element: <PayslipDetails2/>,
    }, 
    {
        path: '/hrms/alerts/payslip-details3',
        element: <PayslipDetails3/>,
    }, 
    {
        path: '/hrms/alerts/payslip-details4',
        element: <PayslipDetails4/>,
    }, 
    {
        path: '/hrms/alerts/payroll-form16',
        element: <PayrollForm16/>,
    }, 
    {
        path: '/hrms/alerts/alert-tasks',
        element: <AlertTasks/>,
    }, 
    // hrms organization
    {
        path: '/hrms/organization/basic-information',
        element: <BasicInformation/>,
    }, 
    {
        path: '/hrms/organization/address-information',
        element: <AddressInformation/>,
    }, 
    {
        path: '/hrms/organization/geographical-setting',
        element: <GeographicalSetting/>,
    }, 
    {
        path: '/hrms/organization/location',
        element: <Location/>,
    }, 
    {
        path: '/hrms/organization/department',
        element: <Department/>,
    }, 
    {
        path: '/hrms/organization/holiday-calendar',
        element: <HolidayCalendar/>,
    }, 
    {
        path: '/hrms/organization/personal-information',
        element: <PersonalInformation/>,
    }, 
    {
        path: '/hrms/organization/employee-information',
        element: <EmployeeInformation/>,
    }, 
    {
        path: '/hrms/organization/other-information',
        element: <OtherInformation/>,
    }, 
    {
        path: '/hrms/organization/employee-document',
        element: <EmployeeDocument/>,
    }, 
    {
        path: '/hrms/organization/bank-accounts',
        element: <BankAccounts/>,
    }, 
    {
        path: '/hrms/organization/calendar-settings',
        element: <CalendarSettings/>,
    }, 
    {
        path: '/hrms/organization/manage-administrators',
        element: <ManageAdministrators/>,
    }, 
    {
        path: '/hrms/organization/third-party-users',
        element: <ThirdPartyUsers/>,
    }, 
    {
        path: '/hrms/organization/employee-permissions',
        element: <EmployeePermissions/>,
    }, 
    {
        path: '/hrms/organization/employee-news-feed-permissions',
        element: <EmployeeNewsFeedPermissions/>,
    },
    {
        path: '/hrms/organization/company-policy-documents',
        element: <CompanyPolicyDocuments/>,
    }, 
    {
        path: '/hrms/organization/letter-templates',
        element: <LetterTemplates/>,
    }, 
    {
        path: '/hrms/organization/add-letter-templates',
        element: <AddLetterTemplates/>,
    }, 
    {
        path: '/hrms/organization/edit-letter-templates/:id',
        element: <EditLetterTemplates/>,
    }, 
    {
        path: '/hrms/organization/old-letter-templates',
        element: <OldLetterTemplates/>,
    }, 
    {
        path: '/hrms/organization/onboarding-general-setting',
        element: <OnboardingGeneralSetting/>,
    }, 
    {
        path: '/hrms/organization/first-day-information-templates',
        element: <FirstDayInformationTemplates/>,
    }, 
    {
        path: '/hrms/organization/company-induction',
        element: <CompanyInduction/>,
    }, 
    {
        path: '/hrms/organization/induction-templates',
        element: <InductionTemplates/>,
    }, 
    {
        path: '/hrms/organization/onboarding-categories',
        element: <OnboardingCategories/>,
    }, 
    {
        path: '/hrms/organization/onboarding-tasks',
        element: <OnboardingTasks/>,
    }, 
    {
        path: '/hrms/organization/onboarding-checklist-templates',
        element: <OnboardingChecklistTemplates/>,
    }, 
    {
        path: '/hrms/organization/welcome-message',
        element: <WelcomeMessage/>,
    },
    {
        path: '/hrms/organization/employee-directory-page',
        element: <EmployeeDirectoryPage/>,
    },
    {
        path: '/hrms/organization/edit-employee-directory-page',
        element: <EditEmployeeDirectoryPage/>,
    },
    {
        path: '/hrms/organization/initiate-separation',
        element: <InitiateSeparation/>,
    },
    {
        path: '/hrms/employee-directory/personal',
        element: <PersonalEmployeeDirectory/>,
    }, 
    {
        path: '/hrms/employee-directory/employment',
        element: <EmploymentDirectory/>,
    }, 
    {
        path: '/hrms/employee-directory/statutory',
        element: <StatutoryDirectory/>,
    }, 
    {
        path: '/hrms/employee-directory/salary',
        element: <SalaryDirectory/>,
    }, 
    {
        path: '/hrms/employee-directory/salary/add-new-ctc',
        element: <AddNewCTC/>,
    }, 
    {
        path: '/hrms/employee-directory/employee-directory-tax',
        element: <EmployeeDirectoryTax/>,
    }, 
    {
        path: '/hrms/employee-directory/tax/deductions-80C',
        element: <Deductions80C/>,
    }, 
    {
        path: '/hrms/employee-directory/tax/exemptions-deductions-tax',
        element: <ExemptionsDeductionsTax/>,
    }, 
    {
        path: '/hrms/employee-directory/tax/rent-information-tax',
        element: <RentInformationTax/>,
    }, 
    {
        path: '/hrms/employee-directory/tax/perquisites-information-tax',
        element: <PerquisitesInformationTax/>,
    }, 
    {
        path: '/hrms/employee-directory/tax/other-income-info-tax',
        element: <OtherIncomeInfoTax/>,
    },
    {
        path: '/hrms/employee-directory/tax/housing-loan-info-tax',
        element: <HousingLoanInfoTax/>,
    }, 
    {
        path: '/hrms/employee-directory/document',
        element: <EmployeeDirectoryDocuments/>,
    }, 
    {
        path: '/hrms/employee-directory/other-details',
        element: <EmployeeDirectoryOtherDetails/>,
    }, 
    {
        path: '/hrms/employee-directory/off-boarding',
        element: <EmployeeDirectoryOffboarding/>,
    }, 
    {
        path: '/hrms/employee-directory/transaction',
        element: <EmployeeDirectoryTransaction/>,
    }, 
    {
        path: '/hrms/employee-directory/transaction-check',
        element: <EmployeeDirectoryTransactionCheck/>,
    }, 
    {
        path: '/hrms/employee-directory/change-log',
        element: <EmployeeDirectoryChangeLogs/>,
    }, 
    {
        path: '/hrms/organisation-tree',
        element: <OrganisationTree/>,
    }, 
    {
        path: '/hrms/organisation-tree-details',
        element: <OrganisationTreeDetails/>,
    }, 
    {
        path: '/hrms/organisation-tree-details/setting',
        element: <OrganisationTreeSettings/>,
    }, 
    {
        path: '/hrms/employee-transactions/data-change-request',
        element: <DataChangeRequests/>,
    }, 
    {
        path: '/hrms/employee-transactions/edit-data-change-request/:id',
        element: <EditDataChangeRequests/>,
    },
    {
        path: '/hrms/employee-transactions/ctc-basket-requests',
        element: <CTCBasketRequests/>,
    }, 
    {
        path: '/hrms/investment-approvals',
        element: <InvestmentApprovals/>,
    }, 
    {
        path: '/hrms/investment-approvals/investment-under-80C',
        element: <InvestmentUnder80C/>,
    }, 
    {
        path: '/hrms/investment-approvals/investment-under80-other',
        element: <InvestmentUnder80Others/>,
    }, 
    {
        path: '/hrms/investment-approvals/rent-information',
        element: <RentInformation/>,
    }, 
    {
        path: '/hrms/investment-approvals/exemption10LTA',
        element: <Exemption10LTA/>,
    }, 
    {
        path: '/hrms/investment-approvals/other-income',
        element: <OtherIncome/>,
    }, 
    {
        path: '/hrms/investment-approvals/housing-loan',
        element: <HousingLoan/>,
    }, 
    {
        path: '/hrms/employee-directory/onboarding',
        element: <Onboarding/>,
    }, 
    {
        path: '/hrms/employee-directory/onboarding-details/:id',
        element: <OnboardingDetails/>,
    }, 
    {
        path: '/hrms/letter-template-creation',
        element: <LetterTemplateCreation/>,
    }, 
    {
        path: '/hrms/employee-directory/pending-contract-renewal',
        element: <PendingContractRenewal/>,
    }, 
    {
        path: '/hrms/employee-directory/separation-request',
        element: <SeparationRequest/>,
    }, 
    {
        path: '/hrms/employee-directory/separation-applications/:id',
        element: <SeparationApplications/>,
    }, 
    {
        path: '/hrms/employee-directory/exit-interview-requests',
        element: <ExitInterviewRequests/>,
    }, 
    {
        path: '/hrms/employee-directory/edit-exit-interview-requests/:id',
        element: <EditExitInterviewRequests/>,
    },
    {
        path: '/hrms/employee-directory/generated-letter',
        element: <GeneratedLetter/>,
    }, 
    {
        path: '/hrms/employee-directory/calendar',
        element: <EmployeeDirectoryCalendar/>,
    }, 
    //Attendance
    {
        path: '/hrms/attendance/attendance-records',
        element: <AttendanceRecords/>,
    }, 
    {
        path: '/hrms/attendance/regularization-requests',
        element: <RegularizationRequests/>,
    }, 
    {
        path: '/hrms/attendance/attendance-audit',
        element: <AttendanceAudit/>,
    }, 
    {
        path: '/hrms/attendance/attendance-process',
        element: <AttendanceProcess/>,
    },
    {
        path: '/hrms/attendance/attendance-process/running-attendance-process',
        element: <RunningAttendanceProcess/>,
    },
    {
        path: '/hrms/attendance/setting/attendance-general-setting',
        element: <AttendanceGeneralSetting/>,
    },
    {
        path: '/hrms/attendance/setting/regularization-reason',
        element: <RegularizationReason/>,
    }, 
    {
        path: '/hrms/attendance/setting/attendance-template',
        element: <AttendanceTemplate/>,
    }, 
    {
        path: '/hrms/attendance/setting/attendance-template-assign',
        element: <AttendanceTemplateAssign/>,
    },
    {
        path: '/hrms/attendance/device-registration-request',
        element: <DeviceRegistrationRequest/>,
    },
    {
        path: '/hrms/attendance/attendance-validations',
        element: <AttendanceValidations/>,
    },
    {
        path: '/hrms/attendance/attendance-logs',
        element: <AttendanceLogs/>,
    },
    //Expense 
    {
        path: '/hrms/expense/expense-reports',
        element: <ExpenseReports/>,
    },
    {
        path: '/hrms/expense/advance-expense-reports',
        element: <AdvanceExpenseReports/>,
    },
    {
        path: '/hrms/expense/expense-process-history',
        element: <ExpenseProcessHistory/>,
    },
    {
        path: '/hrms/expense/expense-process-history/process-expense',
        element: <ProcessExpense/>,
    },
    {
        path: '/hrms/expense/advance-expense-process-history',
        element: <AdvanceExpenseProcessHistory/>,
    },
    {
        path: '/hrms/expense/expense-categories',
        element: <ExpenseCategories/>,
    },
    {
        path: '/hrms/expense/expense-templates',
        element: <ExpenseTemplates/>,
    },
    {
        path: '/hrms/expense/expense-template-assignments',
        element: <ExpenseTemplateAssignments/>,
    },
    {
        path: '/hrms/expense/expense-general-settings',
        element: <ExpenseGeneralSettings/>,
    },
    //TimeSheetRequests
    {
        path: '/hrms/time-sheet/time-sheet-requests',
        element: <TimeSheetRequest/>,
    },
    {
        path: '/hrms/time-sheet/edit-time-sheet-requests/:id',
        element: <EditTimeSheetRequest/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-records',
        element: <TimesheetRecords/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-general-settings',
        element: <TimesheetGeneralSettings/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-clients',
        element: <TimesheetClients/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-project',
        element: <TimesheetProject/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-task',
        element: <TimesheetTask/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-custom-fields',
        element: <TimesheetCustomFields/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-templates',
        element: <TimesheetTemplates/>,
    },
    {
        path: '/hrms/time-sheet/time-sheet-assignment',
        element: <TimesheetAssignment/>,
    },
    //Leave
    {
        path: '/hrms/leave/leave-application',
        element: <LeaveApplication/>,
    },
    {
        path: '/hrms/leave/comp-off-earnings',
        element: <CompOffEarnings/>,
    },
    {
        path: '/hrms/leave/leave-balances',
        element: <LeaveBalances/>,
    },
    {
        path: '/hrms/leave/roll-overs',
        element: <Rollovers/>,
    },
    {
        path: '/hrms/leave/settings/leave-general-settings',
        element: <LeaveGeneralSettings/>,
    },
    {
        path: '/hrms/leave/settings/leave-categories',
        element: <LeaveCategories/>,
    },
    {
        path: '/hrms/leave/settings/leave-policies-templates',
        element: <LeavePoliciesTemplates/>,
    }, 
    {
        path: '/hrms/leave/settings/leave-template-assignment',
        element: <LeaveTemplateAssignment/>,
    }, 
    //Performance
    {
        path: '/hrms/performance/performance-dashboard',
        element: <PerformanceDashboard/>,
    }, 
    {
        path: '/hrms/performance/performance-employee-review',
        element: <PerformanceEmployeeReview/>,
    }, 
    {
        path: '/hrms/performance/performance-employee-selection',
        element: <PerformanceEmployeeSelection/>,
    }, 
    {
        path: '/hrms/performance/performance-cycle-settings',
        element: <PerformanceCycleSettings/>,
    }, 
    {
        path: '/hrms/performance/performance-assessment/:id',
        element: <PerformanceAssessment/>,
    }, 
    {
        path: '/hrms/performance/performance-final-recommendation/:id',
        element: <PerformanceFinalRecommendation/>,
    }, 
    {
        path: '/hrms/performance/performance-employee-review/details-summary/:id',
        element: <PerformanceEmployeeReviewDetailsSummary/>,
    },
    {
        path: '/hrms/performance/performance-employee-review/details-submissions',
        element: <PerformanceEmployeeReviewDetailsSubmissions/>,
    }, 
    {
        path: '/hrms/performance/performance-employee-review/details-assessments',
        element: <PerformanceEmployeeReviewDetailsAssessments/>,
    }, 
    {
        path: '/hrms/performance/performance-employee-review/details-assessments',
        element: <PerformanceEmployeeReviewDetailsAssessments/>,
    }, 
    {
        path: '/hrms/performance/performance-assign-assessor-assessment',
        element: <PerformanceAssignAssessorAssessment/>,
    }, 
    {
        path: '/hrms/performance/performance-view-assessment-master',
        element: <PerformanceViewAssessmentMaster/>,
    }, 
    {
        path: '/hrms/performance/performance-assessment-view-all-submissions',
        element: <PerformanceAssessmentViewAllSubmissions/>,
    }, 
    {
        path: '/hrms/performance/performance-assign-final-recommendation',
        element: <PerformanceAssignFinalRecommendation/>,
    }, 
    {
        path: '/hrms/performance/performance-final-recommendation-view-all',
        element: <PerformanceFinalRecommendationViewAll/>,
    }, 
    {
        path: '/hrms/performance/setting/goal-category-competency-bank',
        element: <GoalCategoryCompetencyBank/>,
    }, 
    {
        path: '/hrms/performance/setting/evaluation-template',
        element: <PerformanceEvaluationTemplate/>,
    }, 
    {
        path: '/hrms/performance/setting/performance-cycle',
        element: <PerformanceCycle/>,
    }, 
    //survey
    {
        path: '/hrms/survey/general-survey',
        element: <GeneralSurvey/>,
    },
    {
        path: '/hrms/survey/general-survey-view',
        element: <GeneralSurveyView/>,
    },
    {
        path: '/hrms/survey/onboarding-survey',
        element: <OnboardingSurvey/>,
    },
    {
        path: '/hrms/survey/exit-interviews',
        element: <ExitInterviews/>,
    },
    {
        path: '/hrms/survey/question-bank-general-survey',
        element: <QuestionBankGeneralSurvey/>,
    },
    {
        path: '/hrms/survey/question-bank-onboarding-survey',
        element: <QuestionBankOnboardingSurvey/>,
    },
    {
        path: '/hrms/survey/question-bank-exit-interviews',
        element: <QuestionBankExitInterviews/>,
    },
    {
        path: '/hrms/survey/general-survey-setting',
        element: <GeneralSurveySetting/>,
    },
    {
        path: '/hrms/survey/onboarding-survey-setting',
        element: <OnboardingSurveySetting/>,
    },
    {
        path: '/hrms/survey/exit-interviews-setting',
        element: <ExitInterviewsSetting/>,
    },
    //Flexi
    {
        path: '/hrms/flexi/flexi-benefits',
        element: <FlexiBenefits/>,
    },
    {
        path: '/hrms/flexi/flexi-employee-balance',
        element: <FlexiEmployeeBalance/>,
    },
    {
        path: '/hrms/flexi/setting/general-settings-flexi',
        element: <GeneralSettingsFlexi/>,
    },
    {
        path: '/hrms/flexi/setting/flexi-benefit-categories',
        element: <FlexiBenefitCategories/>,
    },
    {
        path: '/hrms/flexi/setting/add-flexi-benefit-categories',
        element: <AddFlexiBenefitCategories/>,
    },
    {
        path: '/hrms/flexi/setting/edit-flexi-benefit-categories/:id',
        element: <EditFlexiBenefitCategory/>,
    },
    {
        path: '/hrms/flexi/flexi-benefit-supervisor-assignment',
        element: < FlexiBenefitSupervisorAssignment/>,
    },
];
export default routes;
