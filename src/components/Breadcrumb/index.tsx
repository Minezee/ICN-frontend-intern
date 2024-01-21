'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ContentLayout from '@/layout/ContentLayout'
import { MdArrowRight } from "react-icons/md";

const Breadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths?.split('/').filter(path => path)

    return (
        <ul className="md:pl-[2.5rem] 2xl:pl-[7.5rem] flex flex-row items-center md:py-9">
            <li className={'text-[#2B64CE] text-xs 2xl:text-base font-semibold hover:text-black-100'}><Link href={'/'}>Home</Link></li>
            {pathNames?.length > 0 && <span><MdArrowRight className='text-gray-300 text-2xl' /></span>}
            {
                pathNames?.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${'text-[#2B64CE] text-xs md:text-sm 2xl:text-base font-semibold hover:text-black-100'} ${'text-gray-300 line-clamp-1 hover:text-black-100'}` : 'text-[#2B64CE] text-xs 2xl:text-base font-semibold hover:text-black-100'
                    let itemLink = link.split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames?.length !== index + 1 && <span><MdArrowRight className='text-gray-300 text-2xl' /></span>}
                        </React.Fragment>
                    )
                })
            }
        </ul>
    )
}

export default Breadcrumb