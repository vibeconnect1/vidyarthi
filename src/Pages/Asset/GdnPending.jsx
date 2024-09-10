import React from 'react'
import Table from '../../ConfigurationFile/Table';

const GdnPending = () => {
  const column = [
    { name: "View", selector: (row) => row.View, sortable: true },
    { name: "GDN ID", selector: (row) => row.GDNID, sortable: true },
    { name: "Site Name", selector: (row) => row.SiteName, sortable: true },
    { name: "Level", selector: (row) => row.Level, sortable: true },
  ];
  const data = [
    {
      id: 1,
      View: "1",
      GDNID: "1",
      SiteName : "abc",
      Level : "3",
    },
  ];
  return (
    <section>
      <div className="w-full flex flex-col overflow-hidden">
        
        <div className='my-5'>
          <Table
            columns={column}
            data={data}
            isPagination={true}
          />
        </div>
      </div>
    </section>
  )
}

export default GdnPending