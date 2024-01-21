'use client'
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="px-4 lg:px-[2.5rem] 2xl:px-[7.5rem]">{children}</div>
}