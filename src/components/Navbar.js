import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav-bar'
             role='navigation'>
            <Link className='pl-8' to='/'>
                Project Foster
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg 
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className='pr-8 md:block hidden'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/budash'>BU Dash</Link>
                <Link className='nav-link' to='/myteam'>My Team</Link>
            </div>
        </nav>
    )
}

export default Navbar
