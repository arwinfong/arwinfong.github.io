import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Card from "./components/Card.jsx"
import Title from "./components/Title.jsx"
import Footer from "./components/Footer.jsx"
import Loading from "./components/Loading.jsx"
import Data from "./data.js"
import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  const [end, setEnd] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
      const currentY = window.pageYOffset
      const end = 1600 > currentY

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
      <div className={end ? "text-white font-display h-full w-full bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-top bg-fixed overflow-hidden" : "text-white font-display h-full w-full bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-bottom overflow-hidden" }>
        <section className={loading ? "opacity-100" : "opacity-0"}>
          <Loading />
        </section>
        <Navbar />
        <Title/>
        <section className="min-h-screen" id="about">
          <About />
        </section>
        <section className="flex justify-center items-center flex-wrap basis-[600px] min-h-screen" id="projects">
          {projectElements}
        </section>
        <Footer />
      </div>
  )
}
