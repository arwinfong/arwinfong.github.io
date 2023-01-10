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
  const [end, setEnd] = useState(true)
  const [loading, setLoading] = useState(true)

  // Loading screen src: https://betterprogramming.pub/a-quick-and-easy-react-js-loading-screen-with-hooks-940feccd553f
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])

  useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
  })

  function handleScroll() {
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
    {loading === false ? (<div className={end ? "text-white font-display h-full w-full small:bg-[url('./assets/background/smallbg.gif')] big:bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-top bg-fixed bg-cover overflow-hidden" : "text-white font-display h-full w-full small:bg-[url('./assets/background/smallbg.gif')] big:bg-[url('./assets/background/rainbowbg.gif')] bg-no-repeat bg-[center_bottom_11rem] bg-contain"}>
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
