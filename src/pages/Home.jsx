import Navbar from '../components/Navbar'
import Hero from './Hero'
import Services from './Services'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}