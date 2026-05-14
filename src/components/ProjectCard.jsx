export default function ProjectCard({ project, onClick, variant = "grid" }) {
  return (
    <div 
      onClick={onClick}
      className={`relative group rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 bg-[#0B141E]
        ${variant === "hero" 
          ? "h-full w-full" 
          : "aspect-[4/3] w-full"} 
      `}
    >
      <img 
        src={project.img} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B141E] via-[#0B141E]/20 to-transparent transition-opacity duration-500" />

      <div className="absolute inset-0 p-3 sm:p-5 md:p-8 flex flex-col justify-end z-10">
        
        <span className="text-[#2F7FD8] text-[8px] sm:text-[10px] md:text-[0.7rem] font-black uppercase mb-1 tracking-[0.1em] md:tracking-[0.15em]">
          {project.tag}
        </span>
        
        <h3 className="text-white font-bold text-[11px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight line-clamp-2">
          {project.title}
        </h3>
        
        <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2">
          <p className="text-white text-[9px] sm:text-[11px] md:text-xs border-l border-[#2F7FD8] pl-2 md:pl-3 py-0.5 italic truncate">
            {project.loc}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border border-white/5 rounded-[1.5rem] pointer-events-none" />
    </div>
  );
}