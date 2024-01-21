'use client'
import Image from "next/image"
import Link from "next/link"

interface RecommendArticleProps {
    title: string,
    href: string,
    img: string,
}

export default function RecommendArticle({title, href, img}: RecommendArticleProps) {
    return (
        <Link href={href} className='bg-white hover:bg-gray-100 w-full border rounded-sm border-gray-200 my-4 flex flex-col-reverse sm:flex-row justify-between h-fit'>
            <div className='p-4 sm:p-6'>
                <h4 className='text-blue-900 font-semibold leading-6 text-sm sm:text-base'>{title}</h4>
                <span className='text-xs sm:text-sm font-medium leading-4 text-[#9CADD3]'>{href}</span>
            </div>
            <Image src={img} alt='image' width={172} height={96} className="w-full sm:w-auto"/>
        </Link>
    )
}
