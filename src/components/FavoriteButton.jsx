'use client'
import Icons from './Icons'
import { useState } from 'react'

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false)
    const favoriteCickHandler = () => {
        setIsFavorite(!isFavorite)
    }

    if (!isFavorite)
        return (
            <Icons
                name="heartOutline"
                className="text-[25px] hover:scale-105 transition-all cursor-pointer"
                onClick={favoriteCickHandler}
            />
        )
    return (
        <Icons
            name="heart"
            className="text-[25px] text-error hover:scale-105 transition-all cursor-pointer"
            onClick={favoriteCickHandler}
        />
    )
}

export default FavoriteButton
