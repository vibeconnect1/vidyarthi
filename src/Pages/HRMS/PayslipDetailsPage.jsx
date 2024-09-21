import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import PayslipDetailsList from "./PayslipDetailsList";
import { FaFileAlt, FaCheck, FaDownload } from 'react-icons/fa';
import Table from "../../ConfigurationFile/Table";
const PayslipDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const columns = [
  
    {
      name: "Employee Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Payslip",
      selector: (row) => row.Payslip,
      sortable: true,
    },
    {
      name: "Tax-Payslip",
      selector: (row) => row.tax,
      sortable: true,
    },
    {
      name: "Detailed Payslip",
      selector: (row) => row.Detailed,
      sortable: true,
    },
    {
        name: "FNF Payslip",
        selector: (row) => row.FNF,
        sortable: true,
      },
      {
        name: "YTD Payslip",
        selector: (row) => row.YTD,
        sortable: true,
      },
   
  ];

  const data = [
    {
      Name: "Mittu Panda",
      Payslip: <div className="flex gap-2">
         <Link
            to={`/hrms/alerts/payslip-details1`}
          > <BsEye size={15}/></Link>
       
       <FaDownload size={15}/></div>,
      tax:<div className="flex gap-2"> <Link
      to={`/hrms/alerts/payslip-details2`}
    > <BsEye size={15}/></Link>  <FaDownload size={15}/></div>,
      Detailed:<div className="flex gap-2"> <Link
      to={`/hrms/alerts/payslip-details3`}
    > <BsEye size={15}/></Link> <FaDownload size={15}/></div>,
      FNF:"--",
      YTD:<div className="flex gap-2"> <Link
      to={`/hrms/alerts/payslip-details4`}
    > <BsEye size={15}/></Link>  <FaDownload size={15}/></div>,
    },
  ];

  return (
    <section className="flex ml-20">
      {/* <OrganisationSetting/> */}
      <PayslipDetailsList />
      <div className=" w-full flex m-3 flex-col overflow-hidden">
     
        <div className=" flex justify-between my-5">
         
          {/* <Link
            to={"/templates/leave-templates"}
            className="border-2 font-semibold hover:bg-black hover:text-white duration-150 transition-all border-black p-2 rounded-md text-black cursor-pointer text-center flex items-center  gap-2 justify-center"
          >
            <PiPlusCircle size={20} />
            Add
          </Link> */}
    
  
        </div>
        <p className="font-bold mb-4">View Payslips for June - 2024</p>
        <Table columns={columns} data={data} isPagination={true} />
      </div>
    </section>
  );
};

export default PayslipDetailsPage