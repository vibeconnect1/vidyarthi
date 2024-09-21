import React from "react";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import AttendanceDetailsList from "./AttendanceDetailsList";
import Table from "../../ConfigurationFile/Table";
const AttendanceTemplate = () => {
  const columns = [
    {
      name: "Template Name",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "No. Of Active Employees Covered",
      selector: (row) => row.Label,
      sortable: true,
    },
    {
      name: "Employee TimeClock",
      selector: (row) => row.City,
      sortable: true,
    },
    {
      name: "Late/Early Mark",
      selector: (row) => row.State,
      sortable: true,
    },
 
   
  ];

  const data = [
    {
      Label: "17",
      Location: "Attendance Policy",
      City:<input type="checkbox"/>,
      State:<input type="checkbox"/>
    },
    {
      Label: "15",
      Location: "WORK FROM HOME",
      City:<input type="checkbox"/>,
      State:<input type="checkbox"/>
    },
    {
      Label: "15",
      Location: "TEMPLATE FOR DRIVER",
      City:<input type="checkbox"/>,
      State:<input type="checkbox"/>
    },

  ];

  return (
    <section className="flex ml-20">
     {/* <OrganisationSetting/> */}
     {/* <AdminHRMS/> */}
     <AttendanceDetailsList/>
      <div className=" w-full flex m-3 flex-col overflow-hidden">
     
        <div className=" flex justify-end my-5">
        
          <Link
            to={"/hrms/alerts/setup-issues/att-add-template"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </Link>
        </div>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default AttendanceTemplate