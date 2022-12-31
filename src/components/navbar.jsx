import "../index.css"

export default function Navbar() {
    return (
        <div className="flex p-3 justify-between">
            <div className="flex items-center">
                <img src="images/donLOGO.png" className="w-10 h-10 mr-2"/>
                <h1 className="text-3xl font-bold"></h1>
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
    )
}
