import React, { useState } from "react";
import Select from "react-select";
import Table from "../../ConfigurationFile/Table";
import InstituteDetails from "../School management/InstituteDetails";

const ChecklistAssociate = () => {
  const column = [
    {
      name: "Asset Name",
      selector: (row) => row.asset_name,
      sortable: true,
    },
    {
      name: "Assigned To",
      selector: (row) => row.user_name,
      sortable: true,
    },
  ];

 
  const data = [
    {
      id: 1,
      asset_name: "Laptop Dell XPS 15",
      user_name: "John Doe",
    },
    {
      id: 2,
      asset_name: "HP LaserJet Printer",
      user_name: "Jane Smith",
    },
    {
      id: 3,
      asset_name: "MacBook Pro 13",
      user_name: "David Johnson",
    },
    {
      id: 4,
      asset_name: "Samsung Monitor 27",
      user_name: "Sarah Williams",
    },
    {
      id: 5,
      asset_name: "Cisco Router",
      user_name: "Michael Brown",
    },
  ];

  
  const assets = [
    { value: "laptop_dell_xps_15", label: "Laptop Dell XPS 15" },
    { value: "hp_laserjet_printer", label: "HP LaserJet Printer" },
    { value: "macbook_pro_13", label: "MacBook Pro 13" },
    { value: "samsung_monitor_27", label: "Samsung Monitor 27" },
    { value: "cisco_router", label: "Cisco Router" },
  ];

  
  const assignedTo = [
    { value: "john_doe", label: "John Doe" },
    { value: "jane_smith", label: "Jane Smith" },
    { value: "david_johnson", label: "David Johnson" },
    { value: "sarah_williams", label: "Sarah Williams" },
    { value: "michael_brown", label: "Michael Brown" },
  ];

  
  const [association, setAssociation] = useState(data);

  return (
    <section className="flex">
      <InstituteDetails/>
      <div className="hidden md:block"></div>
      <div className="p-4 overflow-hidden w-full my-2 flex mx-3 flex-col">
        <h2 className="text-lg font-medium border-b-2 border-gray-400 mb-2">
          Associate Checklist
        </h2>
        <div className="grid md:grid-cols-3 items-center gap-4">
          <div className="w-full z-20">
            <Select
              isMulti
              options={assets}
              placeholder="Select Assets"
            />
          </div>
          <div className="w-full z-20">
            <Select
              isMulti
              options={assignedTo}
              placeholder="Select Users"
            />
          </div>
          <div>
            <button className="border-2 border-black p-1 px-4 rounded-md">
              Create Activity
            </button>
          </div>
        </div>
        <div className="my-4">
          <Table columns={column} data={association} />
        </div>
      </div>
    </section>
  );
};

export default ChecklistAssociate;
