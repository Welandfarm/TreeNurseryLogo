export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <svg width="44" height="44" viewBox="0 0 44 44" className="fill-current">
          <g>
            {/* Ground/Earth */}
            <path d="M8 34 C8 34, 22 38, 36 34" strokeWidth="2" stroke="#7D5A4F" fill="none" />
            <path d="M16 34 C16 34, 22 36, 28 34" fill="#8D6E63" />
            
            {/* Indigenous Tree (Taller, deep green) */}
            <path d="M22 8 L28 20 L24 20 L27 28 L17 28 L20 20 L16 20 Z" fill="#1B5E20" />
            
            {/* Ornamental Tree (Smaller with subtle curves) */}
            <path d="M14 19 Q14 15, 17 20 Q20 16, 22 21 L19 21 L20 26 L14 26 L15 21 Z" fill="#66BB6A" />
            
            {/* Fruit Tree (With subtle fruit shapes) */}
            <path d="M30 19 Q30 15, 27 20 Q24 16, 22 21 L25 21 L24 26 L30 26 L29 21 Z" fill="#43A047" />
            <circle cx="28" cy="22" r="1" fill="#FF8F00" /> {/* Fruit */}
            <circle cx="26" cy="24" r="1" fill="#FF8F00" /> {/* Fruit */}
            
            {/* Flower/Herb (Small, accent colored) */}
            <circle cx="13" cy="28" r="2" fill="#FFA726" />
            <circle cx="31" cy="28" r="2" fill="#FFCC80" />
          </g>
        </svg>
      </div>
      <div>
        <span className="font-heading font-bold text-2xl tracking-tight">
          <span className="text-accent">Little</span><span className="text-primary">Forest</span>
        </span>
        <div className="text-xs text-neutral-dark/70 font-medium -mt-1">Kenya's Premier Tree Nursery</div>
      </div>
    </div>
  );
}
