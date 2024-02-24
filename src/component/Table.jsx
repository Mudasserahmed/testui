import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import BasicModal from './Modal';
// import DeleteIcon from '@mui/icons-material/Delete';
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


export default function DataTable({rows,setOpenModal,handleDelete}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onRowClick={setOpenModal(true)}
        rows={rows}
        onCellClick={handleDelete}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
     
    </div>
  );
}