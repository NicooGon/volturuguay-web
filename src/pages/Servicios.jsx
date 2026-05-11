export default function Servicios() {
  return (
    <section id="servicios" className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Sección de Servicios</h2>
        <p className="text-slate-600">Esta es una hoja de prueba para ver cómo scrollea la Navbar.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div className="p-10 bg-slate-100 rounded-xl">Prueba 1</div>
          <div className="p-10 bg-slate-100 rounded-xl">Prueba 2</div>
          <div className="p-10 bg-slate-100 rounded-xl">Prueba 3</div>
        </div>
      </div>
    </section>
  );
}