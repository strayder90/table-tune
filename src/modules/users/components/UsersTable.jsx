import React from 'react';

import CustomTable from '@appComponents/CustomTable.jsx';
import Rows from '@modules/users/components/Table/Rows.jsx';
import Columns from '@modules/users/components/Table/Columns.jsx';

const UsersTable = () => {
    return (
        <CustomTable columns={Columns} data={Rows}  />
    );
};

export default UsersTable;
