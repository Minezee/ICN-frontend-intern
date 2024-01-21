'use client'
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';

interface SubMenuItem {
    text: string;
    href: string;
}

interface MenuItem {
    text: string;
    href?: string;
    subMenu?: SubMenuItem[];
}

interface NavItemProps {
    data: MenuItem;
    idx: number;
    activeMenu: number | null;
    setActiveMenu: (activeMenu: number | null) => void;
}

function NavItem({ data, idx, activeMenu, setActiveMenu }: NavItemProps){
    return (
        <React.Fragment key={idx}>
            {data.subMenu ? (
                <div className='relative'>
                    <button
                        onClick={() => (activeMenu !== idx ? setActiveMenu(idx) : setActiveMenu(null))}
                        className='flex flex-row items-center p-2 hover:text-orange-400'
                    >
                        {data.text}
                        <HiChevronDown className={`text-xl ${activeMenu === idx && 'rotate-180'}`} />
                    </button>
                    {activeMenu === idx && (
                        <div className='absolute top-full w-fit min-w-60 p-2 flex flex-col shadow-lg rounded-lg font-normal bg-white'>
                            {data.subMenu.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className='hover:text-orange-400 px-3 py-4 whitespace-nowrap hover:bg-gray-100 rounded duration-500'
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <Link className='p-2 leading-6 hover:text-orange-400' href={data.href || '/'} passHref>
                    {data.text}
                </Link>
            )}
        </React.Fragment>
    );
};

export default NavItem;