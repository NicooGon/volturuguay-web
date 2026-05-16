export default function ContactInfoCard({ label, val, icon, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#2F7FD8]/40 hover:bg-white/[0.06] transition-all duration-500 group no-underline w-full"
    >
      <div className="text-[#2F7FD8] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#2F7FD8] font-black mb-1">
          {label}
        </p>
        <p className="text-white font-bold text-lg leading-tight tracking-tight break-words">
          {val}
        </p>
      </div>
    </a>
  );
}