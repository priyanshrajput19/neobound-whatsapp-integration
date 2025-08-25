import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from "@mui/material";
import { tableStyles } from "./TableComponent.styles";

// Make the component accept props for dynamic configuration
const TableComponent = ({
  columns, // Array of column definitions
  data, // Array of data objects
  onRowClick, // Optional row click handler
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Paper sx={tableStyles.paper}>
      <TableContainer sx={tableStyles.tableContainer}>
        <Table stickyHeader aria-label="sticky table" sx={tableStyles.table}>
          <TableHead>
            <TableRow>
              {columns.map((column, colIndex) => (
                <TableCell key={column.id} align={column.align || "left"} style={{ minWidth: column.minWidth }} sx={tableStyles.headerCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" aria-checked={false} tabIndex={-1} key={row.id || index} selected={false} onClick={() => onRowClick && onRowClick(row)} sx={onRowClick ? tableStyles.tableRow : tableStyles.defaultRow}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={column.id} align={column.align || "left"} sx={tableStyles.bodyCell}>
                      {column.render ? column.render(row[column.id], row) : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={data.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} sx={tableStyles.pagination} />
    </Paper>
  );
};

export default TableComponent;
