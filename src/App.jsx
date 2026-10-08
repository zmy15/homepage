import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { Projects } from './components/Projects.jsx'
import { Stack } from './components/Stack.jsx'
import { About, Contact, Footer } from './components/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}