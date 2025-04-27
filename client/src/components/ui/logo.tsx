export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
          <g>
            <circle cx="20" cy="30" r="10" fill="#8D6E63" />
            {/* Small trees */}
            <path d="M15 15 L20 5 L25 15 Z" fill="#66BB6A" />
            <path d="M10 20 L15 10 L20 20 Z" fill="#2E7D32" />
            <path d="M20 20 L25 10 L30 20 Z" fill="#66BB6A" />
            <path d="M17 24 L20 18 L23 24 Z" fill="#2E7D32" />
            <path d="M24 24 L27 18 L30 24 Z" fill="#66BB6A" />
          </g>
        </svg>
      </div>
      <div>
        <span className="font-heading font-bold text-2xl">
          <span className="text-accent">Little</span><span className="text-primary">Forest</span>
        </span>
      </div>
    </div>
  );
}
