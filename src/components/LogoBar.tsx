import Image from "next/image";
import { sideLogos } from "@/data/content";

export default function LogoBar() {
  const left = sideLogos.slice(0, 2);
  const right = sideLogos.slice(2);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="flex items-center gap-3 sm:gap-5">
        {left.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={48}
            className="h-8 sm:h-10 w-auto object-contain opacity-90"
          />
        ))}
      </div>

      <div className="mx-2 sm:mx-4 px-3 sm:px-5 py-1.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
        <Image
          src="/logos/webclub.png"
          alt="Web Enthusiasts Club NITK"
          width={200}
          height={64}
          className="h-10 sm:h-14 w-auto object-contain"
          priority
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        {right.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={48}
            className="h-8 sm:h-10 w-auto object-contain opacity-90"
          />
        ))}
      </div>
    </div>
  );
}
