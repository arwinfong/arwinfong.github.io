import "../index.css"

function Card(props){
    return(
        <div className="bg-[#181D31] rounded-lg m-5 flex flex-shrink-0 flex-grow-0 flex-col">
            <img src={'/images/'+props.img} className="p-3"/>
            <div className="p-3">
                <h1 className="text-3xl font-semibold">Sample header</h1>
                <p>This is sample text for some stuff.</p>
            </div>
        </div>
    )
}

export default Card