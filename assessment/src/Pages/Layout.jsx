import React from 'react';
import LeftMenu from '../components/LeftMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='flex layout' style={{width: '100%', height: '100%'}}>
            <div className="left-menu-container">
                <div className='py-8 justify-content-center'>Vaishnavi K</div>
                <LeftMenu />
            </div>
            <div className='page-layout p8'>
                <Outlet />
            </div>
        </div>
    )
}
