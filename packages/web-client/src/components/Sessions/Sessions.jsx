import React from 'react';
import SessionsTable from '../SessionsTable/SessionsTable.jsx'
import { useState } from 'react';

const Sessions = () => {
    const [userID, setUserID] = useState('')

    return (
        <div className="sessions-page">
            <SessionsTable />
        </div>
    )
}

export default Sessions