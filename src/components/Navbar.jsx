import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { n: "Servicios", id: "servicios" }, { n: "Galería", id: "galeria" },{ n: "Proceso", id: "proceso" }, 
  { n: "Nosotros", id: "nosotros" },{ n: "Contacto", id: "contacto" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const manejarScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-[6vw] transition-all duration-500 ease-in-out ${
          scrolled || isOpen ? "bg-[#080f1c]/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"
        }`}>
        
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="no-underline group relative z-[110] shrink-0">
          <span className="font-logo text-xl font-extrabold text-white">
            Volt<span className="text-[#2F7FD8]">Uruguay</span>
          </span>
        </Link>

        <ul className={`hidden lg:flex items-center gap-2 p-1 rounded-full border transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/5 border-white/10" : "bg-black/20 border-white/5"
        }`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`/#${link.id}`} className="text-white/60 hover:text-white text-xs font-bold px-4 py-2 block no-underline transition-colors">
                {link.n}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative z-[110] shrink-0">
          <a href="/#contacto" className="hidden sm:block bg-[#2F7FD8] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:brightness-110 transition-all active:scale-95 no-underline">
            Solicitar Presupuesto
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 lg:hidden bg-white/5 border border-white/10 rounded-full">
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-x-0 top-0 z-[90] bg-[#080f1c]/98 backdrop-blur-2xl border-b border-white/10 transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        <ul className="flex flex-col items-center pt-[100px] pb-12 gap-6 list-none m-0">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`/#${link.id}`} onClick={() => setIsOpen(false)} className="text-white/70 text-lg font-bold no-underline hover:text-[#2F7FD8] transition-colors uppercase tracking-widest">
                {link.n}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}