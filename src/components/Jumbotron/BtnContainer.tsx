'use client'
import React from 'react'
import Image from 'next/image'

export default function BtnContainer() {
  return (
    <div className='sm:flex sm:flex-row grid grid-cols-3 gap-2'>
      <button className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/facebook.png' alt='facebook' />
        Share
      </button>
      <button className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/twitter.png' alt='facebook' />
        Share
      </button>
      <button className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/link.png' alt='facebook' />
        Copy
      </button>
    </div>
  )
}
