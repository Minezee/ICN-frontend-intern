'use client'
import { PropsWithChildren } from 'react'
import Header from '@/components/Header'

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
