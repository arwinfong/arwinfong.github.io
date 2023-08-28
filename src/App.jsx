import Navbar from "./src/components/Navbar.jsx"
import About from "./src/sections/About.jsx"
import Card from "./src/components/Card.jsx"
import Title from "./src/components/Title.jsx"
import Footer from "./src/sections/Footer.jsx"
import Loading from "./src/components/Loading.jsx"
import Data from "./data.js"
import { useEffect, useState } from "react"
import "./index.css"

export default function App() {
  const [end, setEnd] = useState(true)
  const [loading, setLoading] = useState(true)

  // Loading screen src: https://betterprogramming.pub/a-quick-and-easy-react-js-loading-screen-with-hooks-940feccd553f
  useEffect(() => {
    document.body.style.overflow = "hidden"
    setTimeout(() => setLoading(false), 1200)
    setTimeout(() => document.body.style.overflow = "auto", 3000)
  }, [])

  useEffect(() => {
      window.addEventListener("scroll", handleBg)
      return () => window.removeEventListener("scroll", handleBg)
  })

  function handleBg() {
      const currentY = window.pageYOffset
      const end = (document.documentElement.scrollHeight - document.documentElement.clientHeight - ((screen.width - 1024) / 5 + 370)) > currentY

      setEnd(end)
  }

  const projectElements = Data.map(project => {
    return <Card 
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              lang={project.lang}
              repo={project.repo}
           />
  })

  return (    
    <>
    {loading === false ? (<div className={end ? "text-white font-display h-full w-full small:bg-[url('./assets/background/smallbg.gif')] big:bg-[url('./assets/background/rainbowbg.gif')] small:bg-y-repeat big:bg-no-repeat bg-top bg-fixed big:bg-cover small:bg-contain overflow-hidden" : "text-white font-display h-full w-full small:bg-[url('./assets/background/smallbg.gif')] big:bg-[url('./assets/background/rainbowbg.gif')] small:bg-y-repeat big:bg-no-repeat bg-[center_bottom_11rem] bg-contain"}>
        <Navbar />
        <Title/>
        <section className="min-h-screen" id="about">
          <About />
        </section>
        <section className="flex justify-center items-center flex-col min-h-screen m-3 p-5" id="projects">
          <h1 className="text-7xl font-400 p-1">Projects</h1>
          {projectElements}
        </section>
        <Footer />
      </div>
    ) : (
      <Loading />
    )}
    </>
  )
}
