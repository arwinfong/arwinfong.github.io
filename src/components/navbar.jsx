import "../index.css"

function Navbar() {
    return (
        <div className="flex p-3 justify-between">
            <div className="flex items-center">
                <img src="images/donLOGO.png" className="w-10 h-10 mr-2"/>
                <h1 className="text-3xl font-bold">This is a navbar</h1>
            </div>
            <div className="flex items-center">
                <p className="font-semibold m-2 hover:text-[#ada898]">About</p>
                <p className="font-semibold m-2 hover:text-[#ada898]">Stuff</p>
                <p className="font-semibold m-2 hover:text-[#ada898]">Coming</p>
            </div>
        </div>
    )
}

export default Navbar