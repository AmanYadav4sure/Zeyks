import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Services from './sections/Services'
import Companies from './sections/Companies'
import Process from './sections/Process'
import Work from './sections/Work'
import WhyZeyks from './sections/WhyZeyks'
import Faq from './sections/Faq'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Companies />
        <Process />
        <Work />
        <WhyZeyks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
