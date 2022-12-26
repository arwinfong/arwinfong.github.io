import './App.css'
import Navbar from "./components/navbar.jsx"
import Info from "./components/info.jsx"
import Card from "./components/card.jsx"
import taikoData from "./data.js"

function App() {
  const taikoElements = taikoData.map(taiko => {
    return <Card img={taiko.img} />
  })
  return (
    <div className=" text-[#F0E9D2] bg-[#678983] font-sans min-h-screen">
        <Navbar />
        <Info />
        <section className="overflow-x-auto flex flex-nowrap">
          {taikoElements}
        </section>
    </div>
  )
}

export default App
