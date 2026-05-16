import image1 from "../images/img1.jpeg";

export default function Hero() {

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image1})` }}
        data-aos="zoom-out"
        data-aos-duration="1800"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.55) 50%, rgba(11,31,58,0.2) 100%)",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1000px] mx-auto flex flex-col items-center px-[6vw] pt-20">

        <h1
          className="font-sans font-extrabold leading-[0.97] tracking-[-0.04em] text-white mb-7 w-full"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
          data-aos="fade-up"
        >
          Soluciones <span className="text-[#F5C518]">eléctricas</span> profesionales.
        </h1>

        <div 
          className="flex flex-wrap gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="#contacto"
            className="bg-[#2F7FD8] text-white font-bold text-[0.95rem] px-8 py-4 rounded-[9px] shadow-[0_4px_24px_rgba(47,127,216,0.45)] transition-all hover:-translate-y-1 no-underline"
          >
            Solicitá presupuesto
          </a>
          <a
            href="#servicios"
            className="bg-white/10 border border-white/25 text-white font-semibold text-[0.95rem] px-8 py-4 rounded-[9px] hover:bg-white/20 transition-all no-underline"
          >
            Ver servicios →
          </a>
        </div>

        <div 
          className="flex w-full max-w-[700px] border-t border-white/[0.12] pt-12 mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex-1 border-r border-white/[0.12]">
            <span className="block text-[2.5rem] font-extrabold leading-none text-white tracking-tighter"> 
              500<span className="text-[#F5C518]">+</span>
            </span>
            <span className="text-[0.7rem] font-bold text-white/40 uppercase tracking-widest mt-2 block">Proyectos</span>
          </div>

          <div className="flex-1 border-r border-white/[0.12]">
            <span className="block text-[2.5rem] font-extrabold leading-none text-white tracking-tighter">19</span>
            <span className="text-[0.7rem] font-bold text-white/40 uppercase tracking-widest mt-2 block">Años</span>
          </div>

          <div className="flex-1">
            <span className="block text-[2.5rem] font-extrabold leading-none text-white tracking-tighter">2007</span>
            <span className="text-[0.7rem] font-bold text-white/40 uppercase tracking-widest mt-2 block">Fundación</span>
          </div>
        </div>

      </div>
    </section>
  );
}