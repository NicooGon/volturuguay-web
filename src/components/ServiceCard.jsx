import React, { useState } from "react";
import { MoveRight } from "lucide-react";

export default function ServiceCard({ num, icon: Icon, title, desc }) {
  return (
    <div className="group relative p-10 rounded-2xl bg-white border-[1.5px] border-[#DDE5EF] hover:border-[#2F7FD8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,31,58,0.1)] cursor-default overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2F7FD8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350" />

      <div className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#DDE5EF] mb-5">
        {num}
      </div>

      <div className="w-[50px] h-[50px] rounded-xl bg-[#E8F3FF] group-hover:bg-[#2F7FD8]/10 border-[1.5px] border-[#DDE5EF] group-hover:border-[#2F7FD8]/20 flex items-center justify-center mb-5 text-[#2F7FD8] transition-all duration-300">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <h3 className="text-[1.05rem] font-bold text-[#0B1F3A] mb-[0.65rem] tracking-tight">
        {title}
      </h3>

      <p className="text-[0.85rem] text-[#6B7E96] leading-[1.75]">
        {desc}
      </p>

      <a
        href="#contacto"
        className="inline-flex items-center gap-2 text-[0.78rem] font-bold text-[#2F7FD8] no-underline mt-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      >
        Consultar <MoveRight size={14} />
      </a>
    </div>
  );
}