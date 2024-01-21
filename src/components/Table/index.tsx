import React from 'react'
import Image from 'next/image';
import { convertToRupiah } from '@/utils/convertToRupiah';

const data = [
    { img: '/images/bitcoin.png', buyPrice: 12974831, sellPrice: 410410296, profit: 397435465 },
    { img: '/images/BCA.png', buyPrice: 16200000, sellPrice: 34000000, profit: 17800000 },
    { img: '/images/bitcoin.png', buyPrice: 12974831, sellPrice: 410410296, profit: 397435465 },
    { img: '/images/BCA.png', buyPrice: 16200000, sellPrice: 34000000, profit: 17800000 },
    { img: '/images/bitcoin.png', buyPrice: 12974831, sellPrice: 410410296, profit: 397435465 },
];

export default function Table(){
    return (
        <div className='w-full overflow-x-auto'>
            <table className="text-center text-sm 2xl:text-base mb-4 w-full">
                <thead>
                    <tr className="bg-[#2792DF] text-white">
                        <th className="py-2 min-w-[162px]">Aset</th>
                        <th className="py-2 min-w-[162px]">Harga Beli (2016)</th>
                        <th className="py-2 min-w-[162px]">Harga Jual (2020)</th>
                        <th className="py-2 min-w-[162px]">Profit (Rp)</th>
                        <th className="py-2 min-w-[162px]">Profit (%)</th>
                    </tr>
                </thead>
                <tbody className="[&>*:nth-child(even)]:bg-gray-100 text-center">
                    {data.map((data, index) => (
                        <tr key={index}>
                            <td className='p-2 flex items-center justify-center'>
                                <Image src={data.img} alt='logo' width={74} height={20}/>
                            </td>
                            <td className='p-2'>{convertToRupiah(data.buyPrice)}</td>
                            <td className='p-2'>{convertToRupiah(data.sellPrice)}</td>
                            <td className='p-2'>{convertToRupiah(data.profit)}</td>
                            <td className='p-2 text-green-700'>
                                {(data.profit / data.buyPrice * 100).toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
