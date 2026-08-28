import Image from "next/image";
import { logos } from "@/data/content";

export default function LogoBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center bg-white ${
        compact ? "gap-3 sm:gap-5 py-2 px-3" : "gap-4 sm:gap-8 py-3 sm:py-4 px-4"
      }`}
    >
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={160}
          height={64}
          className={`${logo.h} w-auto object-contain`}
        />
      ))}
    </div>
  );
}
