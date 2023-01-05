import { useEffect, useState } from "react"
import "../index.css"

export default function Navbar() {
    // Hide navbar src: https://codesandbox.io/s/vm96x615my
    const [show, setShow] = useState(true)
    const [yOffset, setYOffset] = useState(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    function handleScroll() {
        const currentYOffset = window.pageYOffset
        const show = yOffset > currentYOffset

        setYOffset(currentYOffset)
        setShow(show)
    }
    return (
        <div className={show ? "bg-black border-b-2 border-[#979797] fixed m-auto top-0 left-0 w-full translate-y-0 duration-500 ease-in-out z-10" : "bg-black border-b-2 border-[#979797] fixed m-auto top-0 left-0 w-full -translate-y-full duration-500 ease-in-out z-10"}>
            <div className="flex p-3 justify-between items">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold">Arwin Fong</h1>
                </div>
                <ul className="flex items-center">
                    <a href="#about">
                        <li className="font-semibold text-xl m-2 hover:text-[#ada898]">About</li>   
                    </a>
                    <a>
                        <li className="font-semibold text-xl m-2 hover:text-[#ada898]">Stuff</li>   
                    </a>
                    <a>
                        <li className="font-semibold text-xl m-2 hover:text-[#ada898]">Words</li>   
                    </a>
                </ul>
            </div>
        </div>
    )
}
