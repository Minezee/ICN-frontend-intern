import React from 'react'

export default function ArticleTags() {
  return (
    <div className='text-sm 2xl:text-base px-2 py-6 font-medium lg:border-b lg:border-gray-300'>
    <h5 className='text-gray-500'>Tags</h5>
    <div className='grid grid-cols-4 sm:flex gap-[10px] sm:flex-wrap mt-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data, idx) => (
            <div key={'tags-' + idx} className='bg-gray-100 p-2 rounded-full flex items-center justify-center'>#Bitcoin</div>
        ))}
    </div>
</div>
  )
}
