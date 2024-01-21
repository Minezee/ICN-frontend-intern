'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { HiSearch, HiChevronDown } from "react-icons/hi";
import NavItem from './NavItem';

const navMenu = [
    {
        text: "Bitcoin",
        subMenu: [
            { text: "Beli Bitcoin", href: "/beli-bitcoin" },
            { text: "Trading Bitcoin", href: "/trading-bitcoin" },
            { text: "Mining Bitcoin", href: "/mining-bitcoin" },
            { text: "Bitcoin Gratis", href: "/bitcoin-gratis" },
        ]
    },
    {
        text: "Aplikasi",
        subMenu: [
            { text: "Aplikasi Beli Bitcoin Spot", href: "/aplikasi" },
            { text: "Aplikasi Futures Trading", href: "/aplikasi" },
            { text: "Desentralisasi Exchange", href: "/aplikasi" },
            { text: "Komprasi Dua Aplikasi", href: "/aplikasi" },
        ]
    },
    {
        text: "Berita",
        subMenu: [
            { text: "Berita Bitcoin", href: "berita/bitcoin" },
            { text: "Berita Blockchain", href: "berita/blockchain" },
            { text: "Berita Altcoins", href: "berita/altcoins" },
            { text: "Berita Regulasi", href: "berita/regulasi" },
            { text: "Berita Harga", href: "berita/harga" },
            { text: "Berita Mining", href: "berita/mining" },
            { text: "Berita Hack dan Scam", href: "berita/hack-dan-scam" },
            { text: "Berita NFT", href: "berita/nft" },
            { text: "Berita Exchange", href: "berita/exchange" },
            { text: "Berita Siaran Pers", href: "berita/siaran-pers" },
        ]
    },
    {
        text: "Blockchain",
        href: "/blockchain"
    },
    {
        text: "Defi",
        subMenu: [
            { text: "Defi", href: "/defi" },
            { text: "Stacking", href: "/stacking" },
        ]
    },
    {
        text: "NFT",
        subMenu: [
            { text: "NFT", href: "/nft" },
            { text: "Gaming", href: "/gaming" },
            { text: "Art", href: "/art" },
        ]
    },
    {
        text: "Acara",
        href: "/acara"
    },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = React.useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 0;

            if (scrollPosition > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className='fixed w-full md:sticky top-0 z-10'>
            <div className='hidden px-2 xl:px-[2.5rem] 2xl:px-[7.5rem] lg:flex items-center justify-between font-medium text-xs lg:text-sm 2xl:text-base bg-white py-6'>
                <Link href={'/'}>
                    <Image src={'/images/coinvestasi-logo.png'} height={42} width={182} alt='coinvestasi' className='w-32 lg:w-auto'/>
                </Link>
                <div className='flex flex-row items-center gap-0 xl:gap-4 text-black-100 font-poppins'>
                    {navMenu.map((data, idx) => (
                        <NavItem key={'nav-' + idx} data={data} idx={idx} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                    ))}
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <HiSearch className='text-lg 2xl:text-2xl' />
                    <Link href='https://coinvestasi.com/' className='px-3 2xl:px-6 py-3 2xl:py-4 text-white bg-yellow-500 rounded hover:opacity-80'>Beli Bitcoin Sekarang</Link>
                </div>
            </div>
            <div className='lg:hidden font-medium text-sm 2xl:text-base overflow-'>
                <div className={`flex items-center justify-between ${isScrolled || isOpen ? "bg-white" : "bg-transparent"} p-4 transition-all duration-300`}>
                    <Image src={'/images/coinvestasi-logo.png'} height={28} width={114} alt='coinvestasi'/>
                    <button onClick={() => setIsOpen(!isOpen)} className={`flex flex-col justify-center items-center gap-2 p-2`}>
                        <div className={`${isOpen && "absolute rotate-45"} w-5 h-0.5 bg-[#1E386B] rounded-full transition-all`}></div>
                        <div className={`${isOpen && "rotate-[-45deg]"} w-5 h-0.5 bg-[#1E386B] rounded-full transition-all`}></div>
                    </button>
                </div>
                <div className={`bg-white w-full h-[100vh] absolute overflow-y-auto ${isOpen ? 'right-0' : 'right-full'} transition-all duration-300`}>
                    <div className='flex flex-col h-fit justify-between px-6 pb-20 font-lg font font-semibold text-[#1E386B]'>
                        {navMenu.map((data, idx) => (
                            <div key={idx} className='group'>
                                {data.subMenu ? (
                                    <button
                                        onClick={() => (activeMenu !== idx ? setActiveMenu(idx) : setActiveMenu(null))}
                                        className='flex flex-row justify-between w-full group-hover:text-black py-3'
                                    >
                                        {data.text}
                                        {data.subMenu && <HiChevronDown className={`${activeMenu === idx ? 'rotate-180' : 'rotate-0'} text-lg`} />}
                                    </button>
                                ) : (
                                    <Link href={data.href || '/'} passHref>
                                        <button className='py-4 group-hover:text-orange-400'>{data.text}</button>
                                    </Link>
                                )}

                                {activeMenu === idx && data.subMenu && (
                                    <div className='p-3 flex flex-col gap-4 font-normal'>
                                        {data.subMenu.map((subItem, subIdx) => (
                                            <Link href={subItem.href} key={subIdx}>{subItem.text}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='flex w-full items-center justify-center'>
                            <Link href='https://coinvestasi.com/' className='px-3 2xl:px-6 py-3 2xl:py-4 text-white bg-yellow-500 rounded w-fit'>Beli Bitcoin Sekarang</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
