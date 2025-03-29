import React from 'react'

export default function CodeInput({ value, onChange, onPaste, refProp }) {
    return (
        <div className="relative flex">
            <input
                type="text"
                maxLength="1"
                value={value}
                onChange={onChange}
                onPaste={onPaste}
                ref={refProp}
                className="w-[3.5rem] h-[4rem] focus:ring-0 focus:border focus:border-textPrimary  rounded-md border border-border pb-2 font-thin text-[25px] flex justify-center items-center text-center"
            />
            <div className="w-[40px] bg-border h-[0.6px] absolute bottom-3 left-1/2 -translate-x-1/2"></div>
        </div>
    )
}
