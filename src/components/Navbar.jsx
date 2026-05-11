import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-[6vw] 
          transition-[background-color,border-color] duration-500 ease-in-out ${
          scrolled || isOpen 
            ? "bg-[#080f1c]/95 backdrop-blur-xl border-b border-white/10" 
            : "bg-transparent border-b border-transparent" 
        }`}
      >
        <a href="#inicio" className="no-underline group relative z-[110] shrink-0">
          <span className="font-logo text-xl font-extrabold text-white">
            Volt<span className="text-[#2F7FD8]">Uruguay</span>
          </span>
        </a>

        <ul className={`hidden lg:flex items-center gap-2 p-1 rounded-full border transition-colors duration-500 ${
          scrolled ? "bg-white/5 border-white/10" : "bg-black/20 border-white/5"
        }`}>
          {["Servicios", "Galería", "Proceso", "Nosotros", "Contacto"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white text-xs font-bold px-4 py-2 block no-underline transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative z-[110] shrink-0">
          <a
            href="#contacto"
            className="hidden sm:block bg-[#2F7FD8] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:brightness-110 transition-all active:scale-95 no-underline"
          >
            Solicitar Presupuesto
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 lg:hidden bg-white/5 border border-white/10 rounded-full"
          >
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div 
        className={`fixed left-0 right-0 z-[90] bg-[#080f1c]/98 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "top-[72px] opacity-100" : "top-[-100%] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-10 gap-8 list-none m-0">
          {["Servicios", "Galería", "Proceso", "Nosotros", "Contacto"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-white/70 text-xl font-bold no-underline hover:text-[#2F7FD8] transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}