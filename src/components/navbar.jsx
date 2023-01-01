import "../index.css"

export default function Navbar() {
    return (
        <div className="fixed m-auto top-0 left-0 w-full">
            <div className="flex p-3 justify-between items shadow-xl">
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
