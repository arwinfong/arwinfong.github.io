import "../index.css"

export default function About(){
    return(
        <div className="m-40 p-5 animate-textIn" id="about">
            <h1 className="text-7xl font-bold p-1">About</h1>
            <p className="bg-[#181D31] table p-3 rounded-lg font-semibold">
                This website is made possible with wonderful technologies such as <a href="https://reactjs.org/" className="hover:text-[#ada898]">React</a>, <a href="https://vitejs.dev/" className="hover:text-[#ada898]">Vite</a>, and <a href="https://tailwindcss.com/" className="hover:text-[#ada898]">Tailwind CSS</a> 
            </p>
        </div>
    )
}
