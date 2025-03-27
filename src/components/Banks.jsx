"use client"
import { useState } from "react";
import Image from 'next/image'
import meli from "/public/images/Meli.png"
import saman from "/public/images/Saman.png"
function Banks() {
    const [selectedBank, setSelectedBank] = useState(null);

    return (
        <div className="flex gap-4">
            <div
                className={`flex items-center justify-center transition-all w-[8rem] rounded-lg h-[3.5rem] border cursor-pointer ${
                    selectedBank === "meli" ? "bankSelected" : "border-textSecondary"
                }`}
                onClick={() => setSelectedBank("meli")}
            >
                <Image src={meli} alt="Meli Bank" />
            </div>
            <div
                className={`flex items-center justify-center w-[8rem] rounded-lg h-[3.5rem] border cursor-pointer ${
                    selectedBank === "saman" ? "bankSelected"  : "border-textSecondary"
                }`}
                onClick={() => setSelectedBank("saman")}
            >
                <Image src={saman} alt="Saman Bank" width={100} />
            </div>
        </div>
    );
}

export default Banks;
