import "../index.css"

export default function About(){
    return(
        <div className="m-3 p-5 animate-textIn" id="about">
            <h1 className="text-7xl font-400 p-1">About</h1>
            <p className="border-2 border-[#979797] bg-black table p-3 font-medium ">
                This website is made possible with wonderful technologies such as <a href="https://reactjs.org/" className="hover:text-[#ada898] underline">React</a>, <a href="https://vitejs.dev/" className="hover:text-[#ada898] underline">Vite</a>, and <a href="https://tailwindcss.com/" className="hover:text-[#ada898] underline">Tailwind CSS</a> 
            </p>
        </div>
    )
}
