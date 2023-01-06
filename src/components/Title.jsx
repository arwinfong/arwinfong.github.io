import "../index.css"

export default function Title(){
    return(
        <div className="flex flex-col justify-center items-center p-6 min-h-screen">
            <h1 className="text-7xl font-700 relative z-1 animate-reveal">Welcome</h1>
            <div className="bg-white w-80 h-1 animate-underline rounded-md z-1"></div>
            <div className="bg-[url('./assets/background/rainbowbg-repeat.gif')] w-80 h-20 z-0 opacity-0 animate-tempOpac"></div>
        </div>
    )
}