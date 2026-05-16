const particles = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 1.5 + 0.5,
  dur: `${Math.random() * 3 + 2}s`,
  delay: `${Math.random() * 5}s`,
}));

export default function Particles() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2F7FD8" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="#2F7FD8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          {particles.map((p) => (
            <circle key={p.id} cx={p.x} cy={p.y} r={p.size} fill="#2F7FD8" opacity="0">
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>
    </>
  );
}