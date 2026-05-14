import React from "react";

export default function AboutCard({ title, desc, icon, index }) {
  return (
    <div 
      className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#2F7FD8]/30 transition-all duration-500 shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#2F7FD8]/10 flex items-center justify-center text-[#2F7FD8] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(47,127,216,0.3)] transition-all duration-500">
        {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
      </div>
      
      <h4 className="text-white font-bold text-xl mb-3 tracking-tight group-hover:text-[#2F7FD8] transition-colors">
        {title}
      </h4>
      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
        {desc}
      </p>
    </div>
  );
}