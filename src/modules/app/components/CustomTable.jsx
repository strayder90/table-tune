import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery
} from '@mui/material';
import PropTypes from 'prop-types';

import UserList from '@modules/users/components/UsersList.jsx';

const CustomTable = ({columns, data}) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    if (isMobile) {
        return (
            <UserList data={data}/>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{background: '#F0BB78'}}>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell align={column.align || 'left'} key={column.field}>
                                {column.headerName}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={row.id || rowIndex}>
                            {columns.map((column) => (
                                <TableCell align={column.align || 'left'} key={column.field}>
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
            headerName: PropTypes.string.isRequired,
            align: PropTypes.oneOf(['left', 'right', 'center'])
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CustomTable;
