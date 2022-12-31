import "../index.css"

export default function Title(){
    return(
        <div className="flex flex-col justify-center items-center p-6 min-h-screen">
            <h1 className="text-7xl font-bold">Welcome</h1>
            <div className="bg-[#181D31] w-80 h-1 animate-underline rounded-md"></div>
            <div className="bg-[#678983] w-80 h-20 animate-hide"></div>
        </div>
    )
}