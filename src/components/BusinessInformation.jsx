'use client'
import React from 'react'
import Icons from './Icons'
import { useState } from 'react'

import Faq from './Faq'
import About from './About'

function BusinessInformation() {
    const [faq, setFaq] = useState(false)
    const [about, setAbout] = useState(true)
    return (
        <div className="flex flex-col gap-4 items-center mt-14">
            <h2
                dir="rtl"
                className="font-lalezar text-textPrimary text-center text-[25px]">
                باهم
                <br />
                بیشتر
                <br />
                آشنا بشیم
            </h2>
            <div className="flex items-center gap-4">
                <div
                    onClick={() => {
                        setFaq(false)
                        setAbout(true)
                    }}
                    className={`flex flex-row-reverse text-[18px] items-center border-textPrimary gap-2 w-[9rem] justify-center py-2 border rounded-lg cursor-pointer hover:scale-[1.05] transition-all ${about && 'bg-textPrimary text-bgPrimary'}`}>
                    <Icons name="fingersCrossed" />
                    <h2>چرا ما</h2>
                </div>
                <div
                    onClick={() => {
                        setAbout(false)
                        setFaq(true)
                    }}
                    className={`flex flex-row-reverse text-[18px] items-center border-textPrimary gap-2 w-[9rem] justify-center py-2 border rounded-lg cursor-pointer hover:scale-[1.05] transition-all ${faq && 'bg-textPrimary text-bgPrimary'}`}>
                    <Icons name="question" />
                    <h2>سوالات متداول</h2>
                </div>
            </div>
            {about ? <About /> : <Faq />}
        </div>
    )
}

export default BusinessInformation
