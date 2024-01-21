'use client'
import Breadcrumb from "../Breadcrumb"
import BtnContainer from "./BtnContainer"
import ReadTime from "./ReadTime"

export default function JumbotronMobile() {
    return (
        <div className="md:hidden flex flex-col gap-3 border-b border-gray-200 pb-6 mb-6">
            <Breadcrumb />
            <ReadTime />
            <h2>Bitcoin VS Saham, Mana Yang Lebih Untung?</h2>
            <p className="font-medium text-sm text-[#A6B0C0]">User · Rabu, 19 January 2021</p>
            <BtnContainer />
        </div>
    )
}
