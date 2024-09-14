import React from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Passes from "./Passes";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import Table from "../../ConfigurationFile/Table";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import image from "/profile.png";

const Staff = () => {
  const columns = [
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Link to={`/school-management/staff-details/${row.id}`}>
            <BsEye size={15} />
          </Link>
          <Link to={`/school-management/edit-staff/${row.id}`}>
            <BiEdit size={15} />
          </Link>
        </div>
      ),
    },
    {
      name: "Profile",
      selector: (row) => (
        <div>
          <img src={image} className="w-10 h-10"></img>
        </div>
      ),
      sortable: true,
    },
    {
      name: "ID",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },

    {
      name: "Work Type",
      selector: (row) => row.work_type,
      sortable: true,
    },

    {
      name: "Vendor name",
      selector: (row) => row.v_name,
      sortable: true,
    },
    {
      name: "Valid From",
      selector: (row) => row.from,
      sortable: true,
    },
    {
      name: "Valid Till",
      selector: (row) => row.till,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      Id: "STF001",
      name: "Ravi Singh",
      unit: "Operations",
      email: "john.doe@example.com",
      mobile: "123-456-7890",
      work_type: "Full-time",
      v_name: "Vendor 1",
      from: "2024-01-01",
      till: "2024-12-31",
      status: "Active",
    },
    {
      id: 2,
      Id: "STF002",
      name: "Nitin",
      unit: "Marketing",
      email: "jane.smith@example.com",
      mobile: "987-654-3210",
      work_type: "Part-time",
      v_name: "Vendor 2",
      from: "2024-03-15",
      till: "2024-09-30",
      status: "Inactive",
    },
    {
      id: 3,
      Id: "STF003",
      name: "Gautam Kumar",
      unit: "Development",
      email: "robert.johnson@example.com",
      mobile: "555-123-4567",
      work_type: "Contract",
      v_name: "Vendor 3",
      from: "2024-02-10",
      till: "2024-08-15",
      status: "Active",
    },
  ];

  return (
    <div className="visitors-page">
      <section className="flex">
        <InstituteDetails />
        <div className=" w-full flex mx-3  flex-col overflow-hidden">
          <Passes />
          <div className="w-full">
            <div className="flex justify-between items-center my-3">
              <div className="flex-1 mr-4">
                <input
                  type="text"
                  className="border border-black p-2 rounded-md placeholder:text-sm w-full"
                  placeholder="Search using Visitor name, Host, vehicle number"
                />
              </div>
              <div>
                <Link
                  to={"/school-management/add-staff"}
                  className="font-semibold border border-gray-500 hover:text-black duration-150 transition-all p-2 rounded-md text-black cursor-pointer text-center flex items-center gap-2 justify-center"
                >
                  <PiPlusCircle size={20} />
                  Add
                </Link>
              </div>
            </div>

            <Table columns={columns} data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
