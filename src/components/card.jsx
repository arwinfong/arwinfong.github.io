import "../index.css"

export default function Card(props){
    const techElements = props.tech.map(tech => {return <h3 className="font-bold text-sm text-[#918c7d]">{tech}</h3>})
    const langElements = props.lang.map(lang => {return <h3 className="font-bold text-sm text-[#918c7d]">{lang}</h3>})
    return(
        <div className="bg-[#181D31] rounded-lg m-5 p-3 flex-col shrink-0 w-[300px]">
            <h1 className="text-3xl font-semibold m-3">{props.name}</h1>
            <p className="font-bold text-[#bfb9a6]">{props.desc}</p>
            <div className="flex justify-around">
                {techElements}
            </div>
            <div className="flex justify-around">
                {langElements}
            </div>
        </div>
    )
}