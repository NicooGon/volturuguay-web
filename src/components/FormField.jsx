export default function FormField({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">
        {label}
      </label>
      {children}
  </div>
)};