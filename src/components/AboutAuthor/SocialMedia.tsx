import Link from "next/link"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

export default function SocialMedia() {
    return (
        <div className='mt-2 flex flex-row gap-3 text-white text-sm 2xl:text-base'>
            <Link href={''} className='bg-gray-400 hover:bg-gray-600 h-6 2xl:h-8 w-6 2xl:w-8 flex items-center justify-center rounded-full'>
                <FaLinkedinIn />
            </Link>
            <Link href={''} className='bg-gray-400 hover:bg-gray-600 h-6 2xl:h-8 w-6 2xl:w-8 flex items-center justify-center rounded-full'>
                <FaTwitter />
            </Link>
            <Link href={''} className='bg-gray-400 hover:bg-gray-600 h-6 2xl:h-8 w-6 2xl:w-8 flex items-center justify-center rounded-full'>
                <IoMdMail />
            </Link>
        </div>
    )
}
