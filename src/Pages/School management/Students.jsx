import React, { useState } from "react";
import InstituteDetails from "./InstituteDetails";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { LuPanelLeftClose } from "react-icons/lu";
import Table from "../../ConfigurationFile/Table";

function Students() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state to control column visibility
  const [visibleColumns, setVisibleColumns] = useState({
    View: true,
    "Roll No": true,
    Name: true,
    Surname: true,
    "Father Name": true,
    "Mother Name": true,
    "Admission Form No": true,
    "Student Registration No": true,
    Class: true,
    Division: true,
    House: true,
    "Date of Birth": true,
    Age: true,
    "Place of Birth": true,
    "State of Birth": true,
    Gender: true,
    Nationality: true,
    Religion: true,
    Community: true,
    Caste: true,
    "Mother Tongue": true,
    "Blood Group": true,
    "Aadhar Card No": true,
    "Landline": true,
    "Mobile No": true,
    "Emergency Contact Name": true,
    "Emergency Contact Mob No": true,
    "Email id": true,
    State: true,
    Country: true,
    Board: true,
    "From Class": true,
    "To Class": true,
    "Month & Year of Passing": true,
    "Father Aadhar Card No.": true,
    "Father PAN Card No.": true,
    "Father Personal Email.": true,
    "Father Qualification.": true,
    "Father Mobile No.": true,
    "Father Landline No.": true,
    "Father Occupation.": true,
    "Father Annual Income.": true,
    "Father Organization.": true,
    "Father Designation.": true,
    "Father is Government Employee.": true,
    "Father Office Landline": true,
    "Father Office Email.": true,
    "Mother Aadhar Card No.": true,
    "Mother PAN Card No.": true,
    "Mother Personal Email.": true,
    "Mother Qualification.": true,
    "Mother Mobile No.": true,
    "Mother Landline No.": true,
    "Mother Occupation.": true,
    "Mother Annual Income.": true,
    "Mother Organization.": true,
    "Mother Designation.": true,
    "Mother is Government Employee.": true,
    "Mother Office Landline.": true,
    "Mother Office Email.": true,
    "Guardian Aadhar Card No.": true,
    "Guardian PAN Card No.": true,
    "Guardian Personal Email.": true,
    "Guardian Qualification.": true,
    "Guardian Mobile No.": true,
    "Guardian Landline No.": true,
    "Guardian Occupation.": true,
    "Guardian Annual Income.": true,
    "Guardian Organization.": true,
    "Guardian Designation.": true,
    "Guardian is Government Employee.": true,
    "Guardian Office Landline No.": true,
    "Guardian Office Email.": true,
    "Sibling Name": true,
    Relation: true,
    "Sibling Date of Birth": true,
    "Class": true,
    Board: true,
    State: true,
    Country: true,
    "From Class": true,
    "To Class": true,
    "Month & Year Of Passing": true,
    Action: true,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleColumnToggle = (columnName) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnName]: !prev[columnName],
    }));
  };

  const columns = [
    {
      name: "View",
      selector: (row) => row.view,
    },
    {
      name: "Roll No",
      selector: (row) => row.rollNo,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Surname",
      selector: (row) => row.surname,
    },
    {
      name: "Father Name",
      selector: (row) => row.fatherName,
    },
    {
      name: "Mother Name",
      selector: (row) => row.motherName,
    },
    {
      name: "Admission Form No",
      selector: (row) => row.admissionFormNo,
    },
    {
      name: "Student Registration No",
      selector: (row) => row.studentRegistrationNo,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Division",
      selector: (row) => row.division,
    },
    {
      name: "House",
      selector: (row) => row.house,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Place of Birth",
      selector: (row) => row.placeOfBirth,
    },
    {
      name: "State of Birth",
      selector: (row) => row.stateOfBirth,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
    },
    {
      name: "Religion",
      selector: (row) => row.religion,
    },
    {
      name: "Community",
      selector: (row) => row.community,
    },
    {
      name: "Caste",
      selector: (row) => row.caste,
    },
    {
      name: "Mother Tongue",
      selector: (row) => row.motherTongue,
    },
    {
      name: "Blood Group",
      selector: (row) => row.bloodGroup,
    },
    {
      name: "Aadhar Card No",
      selector: (row) => row.aadharCardNo,
    },
    {
      name: "Landing No",
      selector: (row) => row.landingNo,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mobileNo,
    },
    {
      name: "Emergency Contact Name",
      selector: (row) => row.emergencyContactName,
    },
    {
      name: "Emergency Contact Mob No",
      selector: (row) => row.emergencyContactMobNo,
    },
    {
      name: "Email id",
      selector: (row) => row.emailId,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Board",
      selector: (row) => row.board,
    },
    {
      name: "From Class",
      selector: (row) => row.fromClass,
    },
    {
      name: "To Class",
      selector: (row) => row.toClass,
    },
    {
      name: "Month & Year of Passing",
      selector: (row) => row.monthYearOfPassing,
    },
    {
      name: "Father Aadhar Card No.",
      selector: (row) => row.fatherAadharCardNo,
    },
    {
      name: "Father PAN Card No.",
      selector: (row) => row.fatherPanCardNo,
    },
    {
      name: "Father Personal Email.",
      selector: (row) => row.fatherPersonalEmail,
    },
    {
      name: "Father Qualification.",
      selector: (row) => row.fatherQualification,
    },
    {
      name: "Father Mobile No.",
      selector: (row) => row.fatherMobileNo,
    },
    {
      name: "Father Landing No.",
      selector: (row) => row.fatherLandingNo,
    },
    {
      name: "Father Occupation.",
      selector: (row) => row.fatherOccupation,
    },
    {
      name: "Father Annual Income.",
      selector: (row) => row.fatherAnnualIncome,
    },
    {
      name: "Father Organization.",
      selector: (row) => row.fatherOrganization,
    },
    {
      name: "Father Designation.",
      selector: (row) => row.fatherDesignation,
    },
    {
      name: "Father is Government Employee.",
      selector: (row) => row.fatherIsGovernmentEmployee,
    },
    {
      name: "Father Office Landing No.",
      selector: (row) => row.fatherOfficeLandingNo,
    },
    {
      name: "Father Office Email.",
      selector: (row) => row.fatherOfficeEmail,
    },
    {
      name: "Mother Aadhar Card No.",
      selector: (row) => row.motherAadharCardNo,
    },
    {
      name: "Mother PAN Card No.",
      selector: (row) => row.motherPanCardNo,
    },
    {
      name: "Mother Personal Email.",
      selector: (row) => row.motherPersonalEmail,
    },
    {
      name: "Mother Qualification.",
      selector: (row) => row.motherQualification,
    },
    {
      name: "Mother Mobile No.",
      selector: (row) => row.motherMobileNo,
    },
    {
      name: "Mother Landing No.",
      selector: (row) => row.motherLandingNo,
    },
    {
      name: "Mother Occupation.",
      selector: (row) => row.motherOccupation,
    },
    {
      name: "Mother Annual Income.",
      selector: (row) => row.motherAnnualIncome,
    },
    {
      name: "Mother Organization.",
      selector: (row) => row.motherOrganization,
    },
    {
      name: "Mother Designation.",
      selector: (row) => row.motherDesignation,
    },
    {
      name: "Mother is Government Employee.",
      selector: (row) => row.motherIsGovernmentEmployee,
    },
    {
      name: "Mother Office Landing No.",
      selector: (row) => row.motherOfficeLandingNo,
    },
    {
      name: "Mother Office Email.",
      selector: (row) => row.motherOfficeEmail,
    },
    {
      name: "Guardian Name.",
      selector: (row) => row.guardianName,
    },
    {
      name: "Guardian Surname.",
      selector: (row) => row.guardianSurname,
    },
    {
      name: "Guardian Aadhar Card No.",
      selector: (row) => row.guardianAadharCardNo,
    },
    {
      name: "Guardian PAN Card No.",
      selector: (row) => row.guardianPanCardNo,
    },
    {
      name: "Guardian Personal Email.",
      selector: (row) => row.guardianPersonalEmail,
    },
    {
      name: "Guardian Qualification.",
      selector: (row) => row.guardianQualification,
    },
    {
      name: "Guardian Mobile No.",
      selector: (row) => row.guardianMobileNo,
    },
    {
      name: "Guardian Landing No.",
      selector: (row) => row.guardianLandingNo,
    },
    {
      name: "Guardian Occupation.",
      selector: (row) => row.guardianOccupation,
    },
    {
      name: "Guardian Annual Income.",
      selector: (row) => row.guardianAnnualIncome,
    },
    {
      name: "Guardian Organization.",
      selector: (row) => row.guardianOrganization,
    },
    {
      name: "Guardian Designation.",
      selector: (row) => row.guardianDesignation,
    },
    {
      name: "Guardian is Government Employee.",
      selector: (row) => row.guardianIsGovernmentEmployee,
    },
    {
      name: "Guardian Office Landing No.",
      selector: (row) => row.guardianOfficeLandingNo,
    },
    {
      name: "Guardian Office Email.",
      selector: (row) => row.guardianOfficeEmail,
    },
    {
      name: "Sibling Name",
      selector: (row) => row.siblingName,
    },
    {
      name: "Relation",
      selector: (row) => row.relation,
    },
    {
      name: "Sibling Date of Birth",
      selector: (row) => row.siblingDateOfBirth,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Board",
      selector: (row) => row.board,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "From Class",
      selector: (row) => row.fromClass,
    },
    {
      name: "To Class",
      selector: (row) => row.toClass,
    },
    {
      name: "Month & Year Of Passing",
      selector: (row) => row.monthYearOfPassing,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const filteredColumns = columns.filter(column => visibleColumns[column.name]);
  const data = [
    {
      view: "View Details",
      rollNo: "101",
      name: "Rakesh",
      surname: "Sharma",
      fatherName: "Rajesh Sharma",
      motherName: "Gita Sharma",
      admissionFormNo: "AF-1001",
      studentRegistrationNo: "SR-1001",
      class: "10th Grade",
      division: "A",
      house: "Red",
      dateOfBirth: "2005-06-21",
      age: "19",
      placeOfBirth: "Mumbai",
      stateOfBirth: "Maharashtra",
      gender: "Male",
      nationality: "Indian",
      religion: "Hindu",
      community: "OBC",
      caste: "General",
      motherTongue: "Hindi",
      bloodGroup: "B+",
      aadharCardNo: "1234-5678-9123",
      landingNo: "022-12345678",
      mobileNo: "9876543210",
      emergencyContactName: "Rajesh Sharma",
      emergencyContactMobNo: "9876543210",
      emailId: "rakesh.sharma@example.com",
      state: "Maharashtra",
      country: "India",
      board: "CBSE",
      fromClass: "9th Grade",
      toClass: "10th Grade",
      monthYearOfPassing: "March 2021",
      fatherAadharCardNo: "1234-5678-9123",
      fatherPanCardNo: "ABCDE1234F",
      fatherPersonalEmail: "rajesh.sharma@example.com",
      fatherQualification: "M.Sc.",
      fatherMobileNo: "9876543210",
      fatherLandingNo: "022-12345678",
      fatherOccupation: "Engineer",
      fatherAnnualIncome: "10,00,000",
      fatherOrganization: "ABC Ltd.",
      fatherDesignation: "Manager",
      fatherIsGovernmentEmployee: "No",
      fatherOfficeLandingNo: "022-12345678",
      fatherOfficeEmail: "rajesh.office@example.com",
      motherAadharCardNo: "1234-5678-9123",
      motherPanCardNo: "ABCDE1234G",
      motherPersonalEmail: "gita.sharma@example.com",
      motherQualification: "B.Sc.",
      motherMobileNo: "9876543210",
      motherLandingNo: "022-12345678",
      motherOccupation: "Teacher",
      motherAnnualIncome: "5,00,000",
      motherOrganization: "XYZ School",
      motherDesignation: "Lecturer",
      motherIsGovernmentEmployee: "No",
      motherOfficeLandingNo: "022-12345678",
      motherOfficeEmail: "gita.office@example.com",
      guardianName: "Vinay",
      guardianSurname: "Singh",
      guardianAadharCardNo: "5678-1234-9123",
      guardianPanCardNo: "ABC3E1234G",
      guardianPersonalEmail: "mukesh.sharma@example.com",
      guardianQualification: "MBA",
      guardianMobileNo: "9876543210",
      guardianLandingNo: "022-87654321",
      guardianOccupation: "Businessman",
      guardianAnnualIncome: "12,00,000",
      guardianOrganization: "Sharma Enterprises",
      guardianDesignation: "Owner",
      guardianIsGovernmentEmployee: "No",
      guardianOfficeLandingNo: "022-87654321",
      guardianOfficeEmail: "mukesh.office@example.com",
      siblingName: "Ritika Sharma",
      relation: "Sister",
      siblingDateOfBirth: "2007-08-15",
      class: "8th Grade",
      board: "CBSE",
      state: "Maharashtra",
      country: "India",
      fromClass: "7th Grade",
      toClass: "8th Grade",
      monthYearOfPassing: "March 2021",
      action: "Edit",
    },
  ];
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between my-5">
            <h2 className="text-2xl font-semibold">Students</h2>
            <div className="flex gap-5">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
                />
                <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <Link
                to={`/school-management/school-students-form`}
                className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
              >
                <IoAddCircleOutline size={20} /> Add
              </Link>
              <button
                className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"
                onClick={toggleDropdown}
              >
                <LuPanelLeftClose size={20} /> Hide Columns
              </button>
            </div>
          </div>

          {/* Checkbox Dropdown */}
          {isOpen && (
            <div className="absolute top-24 right-6 bg-white border rounded-md shadow-lg p-4 z-20 overflow-y-auto h-60">
              <h3 className="text-lg font-semibold mb-2">Select Columns</h3>
              {columns.map((column) => (
                <div key={column.name} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={column.name}
                    name={column.name}
                    checked={visibleColumns[column.name]}
                    onChange={() => handleColumnToggle(column.name)}
                    className="mr-2"
                  />
                  <label htmlFor={column.name} className="text-sm">{column.name}</label>
                </div>
              ))}
            </div>
          )}

          <Table columns={filteredColumns} data={data} pagination />
        </div>
      </div>
    </section>
  );
}

export default Students;
