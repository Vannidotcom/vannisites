import './index.css'
import Navigation from './components/Navigation'
import SocialBar from './components/SocialBar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SocialBar />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  )
}
