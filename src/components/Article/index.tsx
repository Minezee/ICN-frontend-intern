import React from 'react'
import Table from '../Table'
import RecommendArticle from '../RecommendArticle'
import { RiDoubleQuotesL } from 'react-icons/ri'
import Link from 'next/link'

export default function Article() {
    return (
        <article className='border-b border-gray-300 font-medium leading-[30px] tracking-[0.16px]'>
            <p>Kesadaran akan investasi utamanya bagi generasi muda semakin meningkat. Instrumen investasi yang ramai diperbincangkan selama pandemi adalah saham dan Bitcoin.</p>
            <p>Keduanya seringkali dibandingkan, terutama dari segi keuntungan. Namun manakah investasi yang terbukti memiliki profit lebih besar dalam rentang waktu Januari-Juli 2021?</p>
            <p>Kamu bisa mendapatkan jawabannya di artikel berikut ini. Sebelum kita mengetahui keuntungan mana yang lebih besar, ada baiknya kamu mengetahui bahwa meski sering disamakan, saham dan Bitcoin adalah dua investasi yang berbeda, apa saja perbedaannya? Berikut ulasannya Bitcoin vs Saham.</p>
            <p>Paling tidak ada tiga hal yang menjadi pembeda utama Bitcoin vs saham. Di antaranya adalah proses kepemilikan, pasokan dan kapasitas menghasilkan untung.</p>
            <div className=''>
                <h2 className="font-bold">Proses Kepemilikan Aset</h2>
                <ol className="list-decimal pl-6">
                    <li>
                        Dalam proses kepemilikan saham cenderung lebih rumit, karena untuk membeli saham kamu harus membuka rekening saham di perusahaan sekuritas yang terpercaya dan sudah terdaftar di OJK.
                        <ol className="pl-6">
                            <li>
                                Proses pendaftaran ini pun harus dilakukan secara langsung ke sekuritas, dengan membawa berkas-berkas yang cukup banyak seperti kartu identitas, buku tabungan, data ahli waris, dan lainnya.
                                Prosesnya pun belum tentu selesai dalam waktu sehari. Ketika kamu sudah membuka rekening saham baru bisa membeli saham.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Sedangkan kepemilikan Bitcoin lebih sederhana.
                        <ol className="pl-6">
                            <li>kamu tinggal pilih bursa jual beli Bitcoin yang sudah diawasi oleh Bappebti</li>
                            <li>kemudian daftar</li>
                            <li>verifikasi dengan kartu identitas</li>
                            <li>foto, dan lainnya</li>
                            <ol className='pl-6'>
                                <li>kemudian akan diproses paling lama 1×24 jam.</li>
                            </ol>
                        </ol>
                    </li>
                    <li>
                        <p>
                            Sesudah itu kamu tinggal deposit, dan langsung bisa beli Bitcoin. Proses ini pun bisa dilakukan di mana saja secara online tanpa harus mengunjungi kantor bursa crypto.
                        </p>
                    </li>
                </ol>
            </div>
            <div className='mt-6'>
                <h2>Pasokan</h2>
                <ul className='list-disc pl-6'>
                    <li>Bitcoin hanya berjumlah 21 juta</li>
                    <li>jika seluruh koin ini sudah didistribusikan maka tidak akan ada lagi Bitcoin yang tercipta. </li>
                    <li>Karena hal tersebut maka Bitcoin menjadi langka, karena jumlah permintaan akan lebih besar dari penawaran.</li>
                </ul>
            </div>
            <div className='border-s-4 mt-6 border-orange-500'>
                <blockquote className="p-6 ml-4 bg-gray-100 flex flex-col gap-4 italic font-medium leading-8 text-[#43464D]">
                    <RiDoubleQuotesL className='text-5xl text-gray-400' />
                    <p>Dengan mekanisme tersebut di masa depan, harga Bitcoin akan akan melambung tinggi dan bagi para investor yang memulai investasi Bitcoin sejak dini sangat dimungkinkan untuk mendapatkan keuntungan besar dari Bitcoin yang sudah mereka miliki sejak harganya belum terlalu tinggi. Bitcoin sendiri tercatat pernah menyentuh harga tertingginya pada  933 juta Rupiah pada April 2021.</p>
                    <p>— John Doe</p>
                </blockquote>
            </div>
            <RecommendArticle
                title='Mengenal Whale Bitcoin yang Bikin Market Gonjang-Ganjing'
                href='https://coinvestasi.com'
                img='/images/image.png'
            />
            <p>Berbeda dengan Bitcoin, saham tidak mengenal istilah pasokan yang terbatas, karena akan selalu ada perusahaan baru yang mendaftar di bursa saham dan melakukan <Link className='text-blue-600 hover:text-purple-600' href={"coinvestasi.com"}>penawaran saham ke publik</Link>. Ini tidak akan menjadikannya langka, karena pilihan saham sangat beragam, mau yang tinggi, menengah, hingga saham kecil atau yg biasa disebut saham gorengan.</p>
            <h2>Kapasitas untuk Menghasilkan Untung</h2>
            <p>Berinvestasi di pasar saham membutuhkan banyak kesabaran karena menghasilkan keuntungan dari investasi ini membutuhkan waktu yang tidak sebentar bahkan hingga bertahun-tahun.</p>
            <p>Sedangkan Bitcoin terkenal dengan sifatnya yang volatil dan fluktuatif, sehingga bisa mendapatkan keuntungan dengan sangat cepat karena harganya berubah dengan cepat pula.</p>
            <RecommendArticle
                title='6 Alasan Kenapa Kamu Harus Investasi Bitcoin Di 2021'
                href='https://coinvestasi.com'
                img='/images/image.png'
            />
            <p>Meski begitu perlu diingat kapasitas mendapatkan untung dengan cepat biasanya diimbangi dengan risiko yang tinggi pula, karena itu kamu perlu bijak melakukan manajemen risiko dalam melakukan investasi.</p>
            <h2>Komparasi Profit BTC vs Top 5 Saham Indonesia</h2>
            <Table />
            <p>Setelah mengetahui perbedaan saham dan Bitcoin secara umum , sekarang mari kita lihat perbandingan harga tertinggi dari Bitcoin vs saham. Pada artikel kali ini, kami menggunakan data harga tertinggi yang diperoleh Bitcoin dan saham di periode 31 Desember.</p>
            <p>Saham yang digunakan dalam perbandingan ini adalah beberapa saham yang masuk kategori top tier di Indonesia. Saham itu adalah saham BCA, Unilever, BRI, Telkom, Antam, dan Indofood.</p>
            <p>Di model ini kamu adalah investor yang membeli investasi saham sejumlah 10 lot (1000 lembar) atau Bitcoin pada 2016 dan menjualnya pada 2020.  Berikut ini adalah hasil dan keuntungan yang kamu dapatkan.</p>
            <p>Berdasarkan tabel tersebut dapat dilihat bahwa Bitcoin memiliki keuntungan yang sangat mengesankan, jika kamu membelinya pada 2016 dan menjualnya pada 2020 maka kamu sudah profit hingga 3.000 persen. Hal ini justru berbeda jika kamu investasi di saham Unilever, Telkom hingga Indofood yang malah rugi ketika disimpan selama empat tahun. Dari hasil ini menunjukan jika soal keuntungan Bitcoin jauh lebih unggul.</p>
            <p>Kemudian jika kamu baru mengenal Bitcoin tahun ini dan membelinya di awal tahun, kamu juga mendapatkan profit yang cukup lumayan. Sebab dalam Januari -Juli Bitcoin telah mengalami keuntungan hingga 41.12%. Walau tahun ini harga Bitcoin sempat mengalami penurunan hingga setengah harga dari harga tertingginya, pada kenyataannya aset ini tetap mengalami pertumbuhan yang cukup baik.</p>
            <p>Ingin tahu perkembangan harga Bitcoin dan harga aset crypto lainnya? Kamu bisa memperolehnya di situs Coinvestasi.com.</p>
        </article>
    )
}
