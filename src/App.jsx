import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Card from "./components/Card.jsx"
import Title from "./components/Title.jsx"
import Footer from "./components/Footer.jsx"
import Data from "./data.js"
import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  const [end, setEnd] = useState(true)

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
      const currentY = window.pageYOffset
      const end = 1100 > currentY

      console.log(currentY)
      setEnd(end)
  }
  const projectElements = Data.map(project => {
    return <Card 
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              lang={project.lang}
           />
  })
  return (    
    <div className={end ? "text-white font-display h-full w-full bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-top bg-fixed" : "text-white font-display h-full w-full bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-bottom" }>
        <Navbar />
        <Title/>
        <section className="min-h-screen">
          <About />
        </section>
        <section className="flex justify-center flex-wrap basis-[600px]">
          {projectElements}
        </section>
        <Footer />
    </div>
  )
}
