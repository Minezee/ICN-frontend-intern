'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from "next/router";

export default function BtnContainer() {
  const paths = usePathname();
  const share = useRouter();
  const base = "https://icn-frontend-intern.vercel.app";

  const links = base + share.asPath;
  const copylink = (e: any) => {
      navigator.clipboard.writeText(links)
      alert("Berhasil Mengcopy Link")
  }

  return (
    <div className='sm:flex sm:flex-row grid grid-cols-3 gap-2'>
      <Link target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=https://icn-frontend-intern.vercel.app/${paths}`} className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/facebook.png' alt='facebook' />
        Share
      </Link>
      <Link target='_blank' href={`https://twitter.com/intent/tweet?url=https://icn-frontend-intern.vercel.app/${paths}`} className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/twitter.png' alt='facebook' />
        Share
      </Link>
      <button onClick={copylink} className='flex flex-row items-center justify-center gap-1 text-sm 2xl:text-base font-medium rounded border border-blue-200 border-solid px-3 py-2'>
        <Image width={16} height={16} src='/images/link.png' alt='facebook' />
        Copy
      </button>
    </div>
  )
}
