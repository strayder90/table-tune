import React from 'react';

import CustomTable from '@appComponents/CustomTable.jsx';
import Rows from '@modules/team/components/Table/Rows.jsx';
import Columns from '@modules/team/components/Table/Columns.jsx';

const TeamTable = () => {
    return (
        <CustomTable columns={Columns} data={Rows}  />
    );
};

export default TeamTable;
