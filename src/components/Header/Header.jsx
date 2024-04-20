import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className='py-3 shadow-lg bg-gray-600 absolute top-0 left-0 right-0 z-10'>
            <Container>
                <nav className='flex justify-between items-center'>
                    <div>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <div className='hidden md:flex'>
                        <ul className='flex'>
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name} className='ml-4'>
                                            <button
                                                onClick={() => navigate(item.slug)}
                                                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    )
                            )}
                            {authStatus && (
                                <li className='ml-4'>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className='block text-gray-200 focus:outline-none'
                        >
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16m-7 6h7'
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
                {mobileMenuOpen && (
                    <div className='mt-2'>
                        <ul>
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name} className='py-2'>
                                            <button
                                                onClick={() => {
                                                    setMobileMenuOpen(false);
                                                    navigate(item.slug);
                                                }}
                                                className='block px-4 py-2 text-gray-200 hover:bg-gray-700'
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    )
                            )}
                            {authStatus && (
                                <li className='py-2'>
                                    <button
                                        onClick={() => {
                                            setMobileMenuOpen(false);

                                        }}
                                        className='block px-4 py-2 text-gray-200 hover:bg-gray-700'
                                    >
                                        <LogoutBtn />
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;
