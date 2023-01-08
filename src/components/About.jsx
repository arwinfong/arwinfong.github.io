import "../index.css"

export default function About(){
    return(
        <div className="m-3 p-5 flex flex-col gap-y-40">
            <div>
                <h1 className="text-7xl font-400 p-1">About Me</h1>
                <p className="border-2 border-[#979797] bg-black table p-3 font-medium max-w-20">
                    Hello! I am a second year at University of Toronto in Computer Science. During my spare time, I like to code (when it works), playing videos games and listening 
                    to music. Feel free to send me a message about work or anything!
                </p>
            </div>
            <div>
                <h1 className="text-7xl font-400 p-1">Skills</h1>
                <ul className="border-2 border-[#979797] bg-black table p-3 font-medium ">
                    <li>Languages: Python, C, Java, HTML, CSS, Javascript, LaTeX</li>
                    <li>Technologies: Android Studio, React.js, Tailwind CSS, Node.js</li>
                </ul>
            </div>
        </div>
    )
}
