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
    <div className="app">
        <Navbar />
        <Info />
        <section className='donList'>
          {taikoElements}
        </section>
    </div>
  )
}

export default App
