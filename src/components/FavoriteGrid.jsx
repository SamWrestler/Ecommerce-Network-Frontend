import Image from 'next/image'
import tshirt from '../../public/images/Blue.png'

export default function FavoriteGrid() {
    return (
        <div className="flex flex-col font-font">
            <div className="w-[10rem] tablet:w-[14rem] tablet:h-[14rem] place-items-center h-[10rem] grid grid-cols-2 grid-rows-2 bg-bgInput rounded-lg">
                <div className="w-full border-r-0 border-t-0  h-full border border-border flex items-center justify-center">
                    <Image
                        className=""
                        src={tshirt}
                        alt="Blue Tshirt"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="w-full h-full border-l-0 border-t-0 border border-border flex items-center justify-center">
                    <Image
                        className=""
                        src={tshirt}
                        alt="Blue Tshirt"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="w-full h-full border border-r-0 border-b-0 border-border flex items-center justify-center">
                    <Image
                        className=""
                        src={tshirt}
                        alt="Blue Tshirt"
                        width={50}
                        height={50}
                    />
                </div>

                <div className="w-full h-full border border-l-0 border-b-0 border-border flex items-center justify-center">
                    <Image
                        className=""
                        src={tshirt}
                        alt="Blue Tshirt"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <h2 className="font-medium">هدیه</h2>
        </div>
    )
}
