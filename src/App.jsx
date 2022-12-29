import Navbar from "./components/Navbar.jsx"
import Info from "./components/Info.jsx"
import Card from "./components/Card.jsx"
import Title from "./components/Title.jsx"
import taikoData from "./data.js"

function App() {
  const taikoElements = taikoData.map(taiko => {
    return <Card img={taiko.img} />
  })
  return (
    <div className=" text-[#F0E9D2] font-sans min-h-screen bg-[#678983] ">
        <Navbar />
        <Title/>
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <section className="flex overflow-y-auto">
          {taikoElements}
        </section>
    </div>
  )
}

export default App
