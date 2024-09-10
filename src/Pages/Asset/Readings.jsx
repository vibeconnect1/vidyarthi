import React from "react";
import Table from "../../ConfigurationFile/Table";

const Readings = () => {
  const columns = [
    {
      name: "Date",
      selector: (row) => row.data,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Parameter",
      selector: (row) => row.asset_param_name,
      sortable: true,
    },
    {
      name: "Value",
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: "Submitted by",
      selector: (row) => row.user_name,
      sortable: true,
    },
  ];

  const data = [
    {
      data: "2024-09-01",
      time: "08:00 AM",
      asset_param_name: "Temperature",
      value: "22°C",
      user_name: "Alice",
    },
    {
      data: "2024-09-01",
      time: "09:00 AM",
      asset_param_name: "Humidity",
      value: "45%",
      user_name: "Bob",
    },
    // Add more rows as needed
  ];

  return (
    <div className="p-4">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Readings;
