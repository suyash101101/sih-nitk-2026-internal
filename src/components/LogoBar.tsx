function NITKLogo() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[72px]">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#1b3a6b" strokeWidth="2" />
        <path d="M24 10 L24 38 M14 18 L34 18 M16 28 L32 28" stroke="#1b3a6b" strokeWidth="1.5" />
        <path d="M18 32 Q24 36 30 32" fill="none" stroke="#1b3a6b" strokeWidth="1.5" />
      </svg>
      <span className="text-[9px] font-bold text-sih-navy text-center leading-tight">
        NITK
        <br />
        Surathkal
      </span>
    </div>
  );
}

function IICLogo() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[72px]">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="#e8751a" opacity="0.15" />
        <path d="M24 8 L32 20 L28 20 L32 32 L24 24 L16 32 L20 20 L16 20 Z" fill="#e8751a" />
        <circle cx="24" cy="24" r="4" fill="#1b3a6b" />
      </svg>
      <span className="text-[9px] font-semibold text-sih-navy text-center leading-tight">
        IIC
        <br />
        NITK
      </span>
    </div>
  );
}

function IEEELogo() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="8" y="28" width="32" height="8" rx="2" fill="#2563eb" opacity="0.3" />
        <path d="M24 8 L24 28" stroke="#2563eb" strokeWidth="3" />
        <path d="M16 16 L24 8 L32 16" fill="none" stroke="#2563eb" strokeWidth="2.5" />
        <circle cx="24" cy="32" r="3" fill="#2563eb" />
      </svg>
      <span className="text-[8px] font-semibold text-sih-blue text-center leading-tight">
        IEEE
        <br />
        NITK SB
      </span>
    </div>
  );
}

function IETLogo() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[60px]">
      <span className="text-2xl font-black text-sih-purple tracking-tight">IET</span>
      <span className="text-[9px] font-bold text-sih-purple">NITK</span>
    </div>
  );
}

function WebClubLogo() {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[80px]">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <ellipse cx="24" cy="28" rx="14" ry="10" fill="none" stroke="#009639" strokeWidth="2" />
        <circle cx="18" cy="26" r="2" fill="#009639" />
        <circle cx="30" cy="26" r="2" fill="#009639" />
        <path d="M20 32 Q24 36 28 32" fill="none" stroke="#009639" strokeWidth="1.5" />
        <path d="M16 18 L20 22 M32 18 L28 22 M24 14 L24 18" stroke="#009639" strokeWidth="1.5" />
        <circle cx="24" cy="12" r="2" fill="#009639" />
      </svg>
      <span className="text-[8px] font-semibold text-sih-green text-center leading-tight">
        Web Enthusiasts&apos;
        <br />
        Club NITK
      </span>
    </div>
  );
}

export default function LogoBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-4 px-4 bg-white border-b border-gray-100">
      <NITKLogo />
      <IICLogo />
      <IEEELogo />
      <IETLogo />
      <WebClubLogo />
    </div>
  );
}
