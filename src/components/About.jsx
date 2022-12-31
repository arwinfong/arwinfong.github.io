import "../index.css"

export default function About(){
    return(
        <div className="m-5 p-3 animate-textIn" id="about">
            <h1 className="text-7xl font-bold p-1">About</h1>
            {/* <div className="p-3 bg-[#181D31] rounded-lg font-semibold">
            </div> */}
            <p className="bg-[#181D31] table p-3 rounded-lg font-semibold">This website is made possible with wonderful technologies such as <a href="https://reactjs.org/" className="hover:text-[#ada898]">React</a>, <a href="https://vitejs.dev/" className="hover:text-[#ada898]">Vite</a>, and <a href="https://tailwindcss.com/" className="hover:text-[#ada898]">Tailwind CSS</a> </p>
        </div>
    )
}
