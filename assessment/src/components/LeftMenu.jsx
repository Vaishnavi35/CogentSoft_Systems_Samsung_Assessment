import React from 'react';
import left_menu from '../constant/LeftMenu';
import { Link } from 'react-router-dom';

export default function LeftMenu() {
  return (
    <div>
        <ul style={{listStyleType: 'none'}}>
            {
                left_menu.map((menu) => {
                    return(
                        <li key={`menu-${menu.name}`} className='py-8' >
                            <Link to = {menu.path} style={{color: '#fff'}}>{menu.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
