import React from "react";
import Table from "../../ConfigurationFile/Table";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BiEdit} from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
function AssetAmc() {
    const column = [
        {
          name: "Action",
          cell: (row) => (
            <div className="flex items-center gap-4">
              <Link to={`/school-management/asset-amc-details/${row.id}`}>
                <BsEye size={15} />
              </Link>
              <Link to={`/school-management/edit-asset-amc/${row.id}`}>
                <BiEdit size={15} />
              </Link>
              
            </div>
          ),
        },
        { name: "Asset Name", selector: (row) => row.asset_name },
    
        { name: "Vendor", selector: (row) => row.vendor_name },
    
        { name: "Start Date", selector: (row) => row.start_date },
        { name: "End Date", selector: (row) => row.end_date },
        { name: "Frequency", selector: (row) => row.frequency },
        
        { name: "First Service", selector: (row) => row.first_service },
        { name: "Status", selector: (row) => row.status },
        { name: "Created On", selector: (row) => row.created_on },
      ];

      const data = [
        {
          id: 1,
          asset_name: "AC Unit", 
          vendor_name: "AC Solutions Ltd.", 
          start_date: "2024-01-12", 
          end_date: "2029-01-12", 
          frequency: "Quarterly", 
          first_service: "2024-04-12", 
          status: "", 
          created_on: "2024-01-12", 
        },
        {
          id: 2,
          asset_name: "Backup Generator", 
          vendor_name: "PowerTech Ltd.", 
          start_date: "2023-12-05", 
          end_date: "2025-12-05", 
          frequency: "Annual", 
          first_service: "2024-12-05", 
          status: "", 
          created_on: "2023-12-05", 
        },
      ];
      

  return (
    <div>
      <div className="flex flex-col overflow-hidden w-full">
        <div>
        </div>
        <div className="flex justify-between mx-5 my-5">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border bg-white rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-500 rounded-md px-4 p-2 flex gap-2 justify-center items-center text-gray-800 text-base"
            >
              Import
            </button>
          </div>
        </div>
        <div className="mx-5 bg-white rounded-md px-5">
          <Table columns={column} data={data} pagination />
        </div>
      </div>
    </div>
  );
}

export default AssetAmc