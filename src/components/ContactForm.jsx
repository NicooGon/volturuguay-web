import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ServicesData from "../data/ServicesData";
import FormField from "./FormField";

export default function ContactForm({ onSuccess }) {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      .then(
        () => {
          onSuccess();
          formRef.current.reset();
        },
        (error) => {
          alert("Error al enviar el correo, intente nuevamente.");
          console.error(error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Nombre">
          <input name="nombre" required type="text" placeholder="Tu nombre" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-[#2F7FD8]/50 focus:bg-white/[0.05] transition-all" />
        </FormField>
        <FormField label="Apellido">
          <input name="apellido" required type="text" placeholder="Tu apellido" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-[#2F7FD8]/50 focus:bg-white/[0.05] transition-all" />
        </FormField>
      </div>

        
      <FormField label="Email">
        <input name="email" required type="email" placeholder="tu@email.com" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-[#2F7FD8]/50 focus:bg-white/[0.05] transition-all" />
      </FormField>

      <FormField label="Mensaje">
        <textarea name="mensaje" required rows="3" placeholder="¿En qué podemos ayudarte?" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-sm text-white outline-none focus:border-[#2F7FD8]/50 focus:bg-white/[0.05] transition-all resize-none"></textarea>
      </FormField>

      <button 
        type="submit"
        disabled={isSending}
        className={`w-full bg-[#2F7FD8] text-white font-black py-5 rounded-2xl transition-all duration-500 shadow-xl shadow-blue-500/20 uppercase tracking-[0.2em] text-xs cursor-pointer ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
      >
        {isSending ? 'Enviando...' : 'Enviar Consulta'}
      </button>
    </form>
  );
}