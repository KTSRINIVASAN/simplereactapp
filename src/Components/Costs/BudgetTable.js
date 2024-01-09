import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Alarm', minWidth: 170 },
  { id: 'code', label: 'Budget Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Cost: Current vs Budgeted ',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Current',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Forecasted',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'density1',
    label: 'Budgeted',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density, density };
}

const rows = [
  createData('Ok', 'Project A', '350 vs 500', 350, '500 $'),
  createData('Not Set', 'Project B', '250 vs 500', 250),
  createData('Ok', 'EC2CompanyA', '450 vs 500', 450),
  createData('Not Set', 'COMPANY A ', '510 vs 500', 510),
  createData('Ok', 'COST CODE 1', 37602103, 9984670),
  createData('Not Set', 'COMPANY B', 25475400, 7692024),
  createData('Ok', 'COST CODE 2', 83019200, 357578),
  createData('Not Set', 'COST CODE 2', 4857000, 70273),
  createData('Ok', 'COST CODE 3', 126577691, 1972550),
  createData('Not Set', 'JP', 126317000, 377973),
  createData('Ok', 'FR', 67022000, 640679),
  createData('Not Set', 'GB', 67545757, 242495),
  createData('Ok', 'RU', 146793744, 17098246),
  createData('Not Set', 'NG', 200962417, 923768),
  createData('Ok', 'BR', 210147125, 8515767),
];

export default function BudgetTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}