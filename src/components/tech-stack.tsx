type TechProps = {
  label: string;
  level: number;
  logo: React.ReactNode;
};

export const TechStack = ({ label, level, logo }: TechProps) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Contenant */}
      <div className="relative w-32 h-32 rounded-2xl border-4 overflow-hidden bg-white">
        {/* Couche eau */}
        <div
          className="absolute bottom-0 left-0 w-full bg-purple-600 animate-wave"
          style={{ height: `${level}%` }}
        />

        {/* Masque wave */}
        <svg className="absolute w-0 h-0">
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              d="
              M0,0.6 
              C0.25,0.55 0.75,0.65 1,0.6 
              L1,1 L0,1 Z
              "
            />
          </clipPath>
        </svg>

        {/* Logo centré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 text-blue-900">{logo}</div>
        </div>
      </div>

      {/* Label */}
      <span className="text-center font-semibold text-lg">{label}</span>
    </div>
  );
};
