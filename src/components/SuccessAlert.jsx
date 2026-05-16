export default function SuccessAlert({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
      <div 
        className="bg-[#0A1124] border border-white/10 p-10 rounded-[3rem] shadow-2xl max-w-sm w-full text-center"
        data-aos="zoom-in" 
        data-aos-duration="300"
      >
        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          ¡Consulta Recibida!
        </h3>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
          Tu mensaje se envió correctamente. Nos pondremos en contacto contigo lo antes posible.
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-slate-200 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}