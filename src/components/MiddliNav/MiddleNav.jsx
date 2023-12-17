import React from 'react';
import { Outlet } from 'react-router-dom';

const MiddleNav = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MiddleNav;