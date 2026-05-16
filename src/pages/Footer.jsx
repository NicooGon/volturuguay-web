import NavLinks from "../data/NavLinks";
import ServicesData from "../data/ServicesData";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050A18] pt-24 pb-12 px-[6vw] border-t border-white/5 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath fill='none' stroke='%232F7FD8' stroke-width='1.5' d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100'/%3E%3C/svg%3E")`,
          backgroundSize: '45px 80px'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050A18] via-transparent to-transparent z-0 opacity-80" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold font-logo text-white mb-8 tracking-tighter">
              Volt<span className="text-[#2F7FD8]">Uruguay</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Expertos en soluciones eléctricas de alta complejidad. Habilitados por UTE Categoría A para brindarte total seguridad.
            </p>
            <div className="flex gap-4 relative z-50">
              <a 
                href="https://wa.me/59893966957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#2F7FD8] hover:border-[#2F7FD8] transition-all bg-white/5 cursor-pointer"
              >
                <MessageCircle size={18} />
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=volturuguay@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#2F7FD8] hover:border-[#2F7FD8] transition-all bg-white/5 cursor-pointer"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Servicios</h4>
            <ul className="space-y-4 p-0 list-none">
              {ServicesData.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicios" 
                    className="group flex items-center gap-3 text-slate-500 hover:text-[#2F7FD8] no-underline transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F7FD8] opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    <span className="text-sm font-medium">{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-8 text-[10px] uppercase tracking-[0.2em]">Ubicación</h4>
            <div className="flex items-start gap-4 group">
              <MapPin size={18} className="mt-1 text-[#2F7FD8] opacity-50 group-hover:opacity-100 transition-opacity" />
              <div>
                <p className="text-white text-sm font-bold mb-1 tracking-tight">Zona de Cobertura</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Punta del Este, Maldonado, San Carlos, José Ignacio y zonas aledañas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[9px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Volt Uruguay — Potenciando tus ideas.
          </p>
          <p className="text-slate-600 text-[9px] uppercase font-bold tracking-[0.2em]">
            Maldonado, Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}