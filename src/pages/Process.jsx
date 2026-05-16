import ProcessCard from "../components/ProcessCard";

const STEPS = [
  { number: "01", tag: "Contacto", title: "Contacto Inicial", description: "El cliente se comunica por WhatsApp, teléfono o formulario. No se requieren conocimientos técnicos previos." },
  { number: "02", tag: "Visita", title: "Visita Técnica", description: "Realizamos una visita al lugar, evaluamos el alcance del trabajo y entregamos un presupuesto detallado y cerrado, sin compromiso."},
  { number: "03", tag: "Ejecución", title: "Ejecución", description: "Ejecutamos el trabajo con materiales de primera calidad, de manera prolija y respetando los plazos acordados." },
  { number: "04", tag: "Entrega", title: "Entrega y Garantía", description: "Verificamos el trabajo en conjunto con el cliente y firmamos la garantía escrita de 12 meses." },
];

export default function ProcessSection() {

  return (
    <section id="proceso" className="py-20 px-[6vw] bg-white">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-xl" data-aos="fade-right">
            <span className="text-[#2F7FD8] text-[0.7rem] font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#2F7FD8]" /> Proceso de trabajo
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-[1.1]">
              Cuatro pasos, <br /> sin complicaciones.
            </h2>
          </div>
          <p 
            className="text-[#6B7E96] max-w-sm text-base lg:text-right" 
            data-aos="fade-left"
          >
            Desde el primer contacto hasta la entrega final, cada etapa está pensada para brindar claridad, transparencia y tranquilidad al cliente.
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-[2rem] border border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-sm"
          data-aos="fade-up"
        >
          {STEPS.map((step, i) => (
            <div key={step.number} data-aos="fade-right" data-aos-delay={i * 150}>
              <ProcessCard 
                number={step.number}
                tag={step.tag}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}