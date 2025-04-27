import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from 'prop-types';

const CustomTable = ({columns, data}) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.field}>
                                {column.headerName}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={row.id || rowIndex}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            {columns.map((column) => (
                                <TableCell key={column.field}>
                                    {row[column.field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

CustomTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string.isRequired,
            headerName: PropTypes.string.isRequired
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CustomTable;
