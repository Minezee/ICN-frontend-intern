import { RelatedResponse } from '@/types/response/RelatedResponse';
import { formattedDate } from '@/utils/formattedDate';
import Link from 'next/link';

export default function Aside({
    relatedData
}: {
    relatedData: RelatedResponse
}) {
    return (
        <aside className='flex-1 mt-5 lg:mt-0 lg:ml-6'>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <h4 className='font-bold text-base'>This is A Heading Example Of the Leads Sticky</h4>
                <p className='text-sm 2xl:text-base font-medium leading-5 text-gray-400 mt-1 mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                <button className='bg-[#1E386B] text-white w-full py-4 text-sm 2xl:text-base font-semibold rounded'>Lorem ipsum dolor</button>
            </div>
            <div className="mt-6">
                <h3>Related</h3>
                {relatedData?.map((data, idx) => (
                    <Link href={'https://coinvestasi.com/'} key={idx} className='group py-4 font-medium text-xs 2xl:text-sm flex flex-col gap-2 border-b-2 border-[#F2F5F9]'>
                        <div className='px-2 py-1 rounded-full bg-gray-100 w-fit'>Technology</div>
                        <h4 className='text-sm 2xl:text-base font-bold group-hover:text-orange-500'>{data.title.rendered}</h4>
                        <p className='text-gray-400'>Jane Doe · {formattedDate(data.date)}</p>
                    </Link>
                ))}
            </div>
            <div className='mt-6'>
                <h3>Topik Lainnya</h3>
                <div className='flex flex-row flex-wrap gap-2 mt-4'>
                    {[1, 2, 3, 4, 5, 6].map(data => (
                        <Link href="https://coinvestasi.com/" key={'another-' + data} className='hover:bg-gray-300 text-xs 2xl:text-sm font-medium leading-4 p-2 rounded-full bg-gray-200'>Topics{data}</Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}
