'use client'
import React from 'react'
import Icons from './Icons'

export default function SearchHistory({ histories, className }) {
    console.log(className)
    if (!histories || histories.length === 0) {
        return null
    }

    return (
        <div
            id="searchHistory"
            className={`w-full justify-center items-end gap-2 font-font ${className}`}>
            <div className="flex items-center justify-end gap-2">
                <h2>جستجوهای اخیر</h2>
                <Icons name="history" />
            </div>
            <div
                id="historySearch"
                className="flex gap-4 flex-nowrap scrolling-touch scrollbar-hidden overflow-x-auto  w-full px-2 py-5">
                {histories.map(history => (
                    <SearchHistoryItem
                        key={history.id}
                        history={history.text}
                    />
                ))}
            </div>
        </div>
    )
}

export function SearchHistoryItem({ history }) {
    return (
        <div className="flex py-1 px-3 border-[1px] rounded-full min-w-max ">
            <p>{history}</p>
        </div>
    )
}
