export default function ProcessCard({ number, title, description, tag }) {
  return (
    <div className="group relative p-10 transition-all duration-500 flex flex-col justify-between h-full bg-white hover:bg-[#0B1F3A] border-r border-slate-100 last:border-0">
      <div>
        <span className="text-7xl font-black text-[#0B1F3A] opacity-[0.07] group-hover:opacity-10 group-hover:text-white block mb-6 transition-all duration-500">
          {number}
        </span>
        
        <span className="inline-block px-3 py-1 rounded border border-[#2F7FD8] text-[#2F7FD8] text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors duration-500">
          {tag}
        </span>
        
        <h3 className="text-xl font-extrabold text-[#0B1F3A] mb-4 leading-tight group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-500 group-hover:text-white/70 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}