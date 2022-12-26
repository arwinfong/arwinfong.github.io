import "../index.css"

function Card(props){
    return(
        <div className="card">
            <img src={'/images/'+props.img} className="card--img"/>
            <div className="card--desc">
                <h1>Sample header</h1>
                <p>This is sample text for some stuff.</p>
            </div>
        </div>
    )
}

export default Card