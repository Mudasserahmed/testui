import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BasicModal from './Modal';

const columns = [
  { field: 'id', headerName: 'userId', width: 100 },
  { field: 'userId', headerName: 'postId', width: 100 },
  { field: 'title', headerName: 'title', width: 100 },
  { field: 'body', headerName: 'body', width: 100 },
  { field: 'name', headerName: 'name', width: 100 },
  { field: 'userName', headerName: 'userName', width: 100 },
  { field: 'email', headerName: 'email', width: 100 },
  { field: 'address', headerName: 'address', width: 100 },
  { field: 'phone', headerName: 'phone', width: 100 },
  { field: 'website', headerName: 'website', width: 100 },
  { field: 'company', headerName: 'company', width: 100 },

  {
    field: 'delete',
    headerName: 'delete',
    sortable: false,
    width: 160,
    renderCell : ()=>  <button>delete</button>
  },
  {
    field: 'edit',
    headerName: 'edit',
    sortable: false,
    width: 160,
    renderCell : ()=>  <button >edit</button>
  },
];


export default function DataTable({rows,setOpenModal,handleDelete,setSelected ,selected}) {

    
  return (
    <div style={{ height: 400,marginLeft:"1%",marginRight:"1%" }}>
      <DataGrid
        onRowClick={setOpenModal}
        rows={rows}
       onRowSelectionModelChange={
        (id) => {
            const selectedRow = rows.filter((item)=>item?.id === parseInt(id) )
            console.log(selectedRow)
            setSelected(selectedRow[0])
          }
       }
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onCellClick={(params)=>handleDelete(params)}
      />
     
    </div>
  );
}