export default function ReviewCard({ name, location, review, rating = 5 }) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div 
      className="group bg-white p-10 rounded-[2rem] border border-slate-100 flex flex-col justify-between h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(11,31,58,0.1)] hover:border-[#2F7FD8]/20 cursor-default"
    >
      <div>
        <div className="flex gap-1.5 mb-8 transition-transform duration-500 group-hover:scale-105 origin-left">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-slate-600 text-[16px] leading-relaxed italic mb-10">
          "{review}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-sm font-bold transition-colors duration-500 group-hover:bg-[#2F7FD8]">
          {initials}
        </div>
        <div>
          <h4 className="text-[#0B1F3A] font-extrabold text-base transition-colors duration-500 group-hover:text-[#2F7FD8]">
            {name}
          </h4>
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}