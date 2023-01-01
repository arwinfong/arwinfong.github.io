import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Card from "./components/Card.jsx"
import Title from "./components/Title.jsx"
import Footer from "./components/Footer.jsx"
import Data from "./data.js"

export default function App() {
  const projectElements = Data.map(project => {
    return <Card 
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              lang={project.lang}
           />
  })
  return (
    <div className="text-[#F0E9D2] font-sans min-h-screen bg-[#678983] overflow-hidden">
        <Navbar />
        <Title/>
        <section className="min-h-screen">
          <About />
        </section>
        <section className="flex overflow-y-auto">
          {projectElements}
        </section>
        <Footer />
    </div>
  )
}
