import { Check, ShieldCheck, Zap, Award, Clock, Star } from "lucide-react";
import AboutCard from "../components/AboutCard";

const BENEFITS = [
  { title: "Presupuesto Ágil", desc: "Evaluación técnica sin costo y respuesta en menos de 48hs.", icon: <Clock /> },
  { title: "Garantía Volt", desc: "Respaldo total por 12 meses en materiales y mano de obra.", icon: <ShieldCheck /> },
  { title: "Normativa UTE", desc: "Técnicos habilitados Categoría A para firmas y trámites.", icon: <Award /> },
  { title: "Soporte Técnico", desc: "Asistencia profesional enfocada en soluciones industriales y residenciales.", icon: <Zap /> }
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#0B141E] py-28 px-[6vw] relative overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2F7FD8 1px, transparent 1px), linear-gradient(90deg, #2F7FD8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2F7FD8]/10 blur-[100px] md:blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#2F7FD8]/5 blur-[80px] md:blur-[120px] rounded-full z-0" />

      <div className="container mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 mb-20">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#2F7FD8] mb-4">
              <span className="w-6 h-[2px] bg-[#2F7FD8] rounded-full" />
              Sobre Nosotros
            </div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] ">
              El Estándar <br />
              <span className="text-[#2F7FD8]">de Confianza.</span>
            </h2>
          </div>
          
          <div className="lg:text-right lg:justify-self-end" data-aos="fade-left" data-aos-delay="200">
            <p className="text-base md:text-[1rem] text-white/40 leading-relaxed lg:max-w-[45ch]">
              Operando en Uruguay desde 2007. Combinamos rigor técnico con innovación 
              para proyectos residenciales de alta gama e infraestructura industrial en 
              Maldonado y la Costa de Oro.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {BENEFITS.map((item, i) => (
              <AboutCard key={i} index={i} {...item} />
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div 
              className="flex-1 p-10 rounded-[2.5rem] bg-gradient-to-b from-[#2F7FD8]/20 to-transparent border border-white/5 flex flex-col justify-between group overflow-hidden relative"
              data-aos="fade-left"
            >
                <div className="relative z-10">
                  <h3 className="text-white font-black text-xl mb-8 tracking-tight">Habilitaciones Oficiales</h3>
                  <ul className="space-y-5">
                    {[
                      "Uruguay Transmisión (UTE) Cat. A",
                      "Ministerio de Transporte (MTOP)",
                      "Certificaciones UNIT e IEC",
                      "Técnicos Registrados"
                    ].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60 text-sm font-bold group-hover:text-white transition-colors">
                        <Check size={14} className="text-[#2F7FD8]" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <div className="text-[10px] text-[#2F7FD8] font-black uppercase tracking-[0.3em] mb-2">Desde</div>
                    <div className="text-6xl font-black text-white italic tracking-tighter">2007</div>
                </div>

                <Star className="absolute bottom-[-40px] right-[-40px] text-white/5 w-40 h-40 -rotate-12" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5" data-aos="fade-up">
           {[
             { n: "500+", t: "Proyectos Realizados" },
             { n: "19", t: "Años de Trayectoria" },
             { n: "100%", t: "Normativa Cumplida" },
             { n: "12 Meses", t: "Garantía Técnica" }
           ].map((s, i) => (
             <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-black text-white italic">{s.n}</div>
                <div className="text-[9px] text-white/30 uppercase font-black tracking-widest">{s.t}</div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}