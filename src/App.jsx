import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Card from "./components/Card.jsx"
import Title from "./components/Title.jsx"
import Footer from "./components/Footer.jsx"
import Data from "./data.js"

export default function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
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
    <div className="text-white font-display min-h-screen  bg-[url('images/rainbowbg-repeat.gif')] bg-repeat-y bg-center bg-contain">
    <div className="bg-[url('images/rainbowbg.gif')] bg-no-repeat bg-bottom bg-contain">
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
    </div>
  )
}
