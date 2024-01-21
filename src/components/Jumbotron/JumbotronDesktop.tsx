'use client'
import React from 'react'
import Image from 'next/image'
import Breadcrumb from '../Breadcrumb'
import { CgTimer } from 'react-icons/cg'
import ReadTime from './ReadTime'
import BtnContainer from './BtnContainer'

export default function JumbotronDesktop() {
    return (
        <div className='pr-[2.5rem] 2xl:pr-[7.5rem] hidden md:block'>
            <div className='flex flex-row justify-between items-center'>
                <Breadcrumb />
                <ReadTime />
            </div>
            <div className='w-full relative flex flex-row items-center'>
                <div className='box-gradient w-3/5 aspect-[1.65/1] flex items-center justify-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[318px] flex flex-col gap-2'>
                            <p className='font-semibold text-sm 2xl:text-base text-[#2792DF]'>BITCOIN</p>
                            <h1>Bitcoin VS Saham, Mana Yang Lebih Untung?</h1>
                            <p className='font-medium text-sm 2xl:text-base text-[#A6B0C0]'>User · Rabu, 19 January 2021</p>
                        </div>
                        <BtnContainer />
                    </div>
                </div>
                <img src="/images/image.png" alt='dummy image' className='absolute right-0 w-[45%] aspect-video' />
            </div>
        </div>
    )
}
