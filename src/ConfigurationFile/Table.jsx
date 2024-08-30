import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({columns, data}) => {
    const customStyles = {
        header: {
            style: {
                fontSize: '22px',
                fontWeight: 'bold',
                backgroundColor: '#f0f0f0',
            },
        },
        rows: {
            style: {
                minHeight: '72px',
                '&:not(:last-of-type)': {
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1px',
                    borderBottomColor: '#e0e0e0',
                },
            },
        },
        headCells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
            },
        },
        cells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
            },
        },
    };
    return (
        <DataTable
            // title={title}
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
        />
    );
};

export default Table