import "../index.css"

export default function Card(props){
    const techElements = props.tech.join(', ')
    const langElements = props.lang.join(', ')
    return(
        <div className="border-2 border-[#979797] bg-black m-5 p-5 flex-col w-1/2">
            <h1 className="text-3xl font-700 space-y-[20px]">{props.name}</h1>
            <p className="font-700 text-[#bebdb8]">{props.desc}</p>
            <h3 className="font-400 text-sm text-[#918c7d]"><b>Tools:</b> {techElements}</h3>
            <h3 className="font-400 text-sm text-[#918c7d]"><b>Languages:</b> {langElements}</h3>
            {props.repo === '' ? (<></>) : (<p className="font-700 text-[#918c7d]">Github Repository: <a className="hover:text-[#4e4c43]" href={props.repo}> {props.repo} </a> </p>)}
        </div>
    )
}