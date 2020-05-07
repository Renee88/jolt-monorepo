import React from 'react';
import SessionsTable from '../SessionsTable/SessionsTable.jsx'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Sessions = () => {


    return (
        <div className="sessions-page">
            <SessionsTable />
        </div>
    )
}

export default Sessions