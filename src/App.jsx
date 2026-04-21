import './styles/global.css'

import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Research from './sections/Research'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
