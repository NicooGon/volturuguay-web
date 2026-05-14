import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import Gallery from './Gallery'
import Hero from './Hero'
import Services from './Services'

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); 

  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
    </div>
  )
}