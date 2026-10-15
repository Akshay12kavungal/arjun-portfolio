import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
