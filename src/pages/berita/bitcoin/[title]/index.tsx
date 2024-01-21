'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ContentLayout from '@/layout/ContentLayout';
import Aside from '@/components/Aside';
import { RiDoubleQuotesL } from 'react-icons/ri';
import RecommendArticle from '@/components/RecommendArticle';
import Table from '@/components/Table';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import JumbotronDesktop from '@/components/Jumbotron/JumbotronDesktop';
import JumbotronMobile from '@/components/Jumbotron/JumbotronMobile';
import { RelatedResponse } from '@/types/response/RelatedResponse';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PageLayout from '@/layout/PageLayout';
import Article from '@/components/Article';
import ArticleTags from '@/components/ArticleTags';
import AboutAuthor from '@/components/AboutAuthor';

export const getServerSideProps = (async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/berita?tags=281`)
    const relatedData: RelatedResponse = await res.json()
    return { props: { relatedData } }
}) satisfies GetServerSideProps<{ relatedData: RelatedResponse }>


export default function ArticlePage({
    relatedData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <PageLayout>

            <div className='text-base 2xl:text-lg'>
                <JumbotronDesktop />
                <div className='relative w-full'>
                    <img src={'/images/image-square.png'} alt='image' className='w-full block md:hidden' />
                    <div className='absolute md:static w-full top-[75%] md:top-0'>
                        <ContentLayout>
                            <div className='flex flex-col lg:flex-row lg:my-10 pl-0 2xl:pl-[72px]'>
                                <div className='w-full lg:w-3/4'>
                                    <div className='bg-white border py-6 md:py-0 px-4 my-2 md:my-6 lg:my-0 lg:border-l-0 lg:border-t-0 lg:border-b-0 border-gray-200 w-full lg:pr-8'>
                                        <JumbotronMobile />
                                        <Article />
                                        <ArticleTags />
                                    </div>
                                    <AboutAuthor />
                                </div>
                                <Aside relatedData={relatedData} />
                            </div>
                        </ContentLayout>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
