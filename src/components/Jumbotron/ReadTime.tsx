'use client'
import { CgTimer } from 'react-icons/cg'

export default function ReadTime() {
    return (
        <div className='flex gap-0.5 items-center p-2 lg:p-3 bg-gray-100 rounded-full text-xs md:text-sm w-fit 2xl:text-base font-semibold lg:font-medium'>
            <CgTimer className='text-base md:text-xl' />
            5 min read
        </div>
    )
}
