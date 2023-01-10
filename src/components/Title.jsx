import "../index.css"

export default function Title(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-7xl font-700 relative z-1 animate-reveal">Welcome!</h1>
            <div className="bg-white w-80 h-1 animate-underline rounded-md z-1"></div>
            <div className="small:bg-[url('./assets/background/smallbg.gif')] big:bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-cover w-full h-20 z-0 opacity-0 animate-tempOpac"></div>
        </div>
    )
}