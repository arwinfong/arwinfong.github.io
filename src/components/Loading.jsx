import "../index.css"

export default function Loading(){
    return(
        <div className="w-full h-full top-0 left-0 bg-black z-50 flex items-center justify-center fixed">
            {/* TODO:
            cool loading animation */}
            <div className="bg-white w-20 h-20 animate-spin"></div>
        </div>
    )
}