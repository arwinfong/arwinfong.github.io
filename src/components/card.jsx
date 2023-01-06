import "../index.css"

export default function Card(props){
    const techElements = props.tech.map(tech => {return <h3 className="font-400 text-sm text-[#918c7d]">{tech}</h3>})
    const langElements = props.lang.map(lang => {return <h3 className="font-400 text-sm text-[#918c7d]">{lang}</h3>})
    return(
        <div className="border-2 border-[#979797] bg-black m-5 p-3 flex-col shrink-0 w-[300px] h-[250px]">
            <h1 className="text-3xl font-700 m-3">{props.name}</h1>
            <p className="font-700 text-[#bfb9a6]">{props.desc}</p>
            <div className="flex justify-around">
                {techElements}
            </div>
            <div className="flex justify-around">
                {langElements}
            </div>
        </div>
    )
}