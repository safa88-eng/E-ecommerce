import React from 'react'
import freshLogo from'../../assets/images/freshCart1.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return <nav className='bg-emerald-400'>
    <div className='flex items-center justify-between p-3 mx-auto container'>
        <div className="flex items-center gap-3">
        <Link>
            <img src={freshLogo} alt="Fresh cart"  className='h-12 w-full'/>
        </Link>
        <ul className='flex items-center space-x-4'>
            <li>
                <NavLink to='/Product'>Product</NavLink>
            </li><li>
                <NavLink to='/'>Categories</NavLink>
            </li><li>
                <NavLink to='/'>Cart</NavLink>
            </li>
        </ul>
    </div>
    <div className="flex items-center gap-3">
        <ul className='flex items-center space-x-4'>
            <li><i className='fa-brands cursor-pointer fa-facebook-f'></i></li>
            <li><i className='fa-brands cursor-pointer fa-twitter'></i></li>
            <li><i className='fa-brands cursor-pointer fa-behance'></i></li>
            <li><i className='fa-brands cursor-pointer fa-linkedin'></i></li>
        </ul>
        <ul className='flex items-center space-x-4'>
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
             <li>
                <NavLink to='/Login'>Login</NavLink>
            </li>
             <li>
                <span>Logout</span>
            </li>
        </ul>
    </div>
    </div>
  </nav>
}
