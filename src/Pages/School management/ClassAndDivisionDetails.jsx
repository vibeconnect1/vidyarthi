import React from "react";
import InstituteDetails from "./InstituteDetails";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

function ClassAndDivisionDetails() {
  const columns = [
    {
      name: "Action",

      cell: (row) => (
        <Link to={``}>
          <BsEye />
        </Link>
      ),
    },
    {
      name: "Classes",
      selector: (row) => row.classes,
    },
    {
        name: "Division",
        selector: (row) => row.division,
    },
    {
        name: "Student",
        selector: (row) => row.student,
    },
  ];
  const data = [
    {
      classes: "10th",
      division:"A",
      student: "40",
    },
    {
        classes: "10th",
        division:"B",
        student: "30",
    },
  ];
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex mx-3 flex-col overflow-hidden">
        <h2 className="text-center text-2xl font-medium p-2 mx-10 my-3 bg-white rounded-md text-black">
          Class Details
        </h2>
        <div className="flex flex-col my-2  p-4 gap-4 rounded-md mx-10 bg-white">
          <div>
            <Table columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassAndDivisionDetails;
