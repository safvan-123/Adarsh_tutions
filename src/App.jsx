import Navbar from './Navbar'
import Hero from './Hero'
// import About from './About'
import WhyUs from './WhyUs'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'
import Services from './Services'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      {/* <About /> */}
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}
