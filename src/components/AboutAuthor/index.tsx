import Image from "next/image"
import SocialMedia from "./SocialMedia"

export default function AboutAuthor() {
    return (
        <div className='mt-10 w-full bg-[#F2F5F9] p-4 lg:p-14'>
            <div className='flex flex-row gap-4 items-start rounded'>
                <Image src={'/images/profile.png'} alt='dmy-img' width={64} height={64} className='rounded-full' />
                <div>
                    <p className='italic font-medium leading-6 text-[#A6B0C0]'><span className='not-italic font-bold text-[#43464D]'>Tentang penulis — User:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}
