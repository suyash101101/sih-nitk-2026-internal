import Image from "next/image";

const logos = [
  { src: "/logos/nitk.png", alt: "NITK", w: 80, h: 80, className: "h-10 sm:h-12 w-auto object-contain" },
  { src: "/logos/iic.png", alt: "IIC", w: 140, h: 60, className: "h-8 sm:h-10 w-auto object-contain" },
  { src: "/logos/webclub.png", alt: "Web Enthusiasts Club NITK", w: 220, h: 90, className: "h-12 sm:h-14 w-auto object-contain" },
  { src: "/logos/ieee.png", alt: "IEEE NITK", w: 160, h: 50, className: "h-8 sm:h-10 w-auto object-contain" },
  { src: "/logos/iet.png", alt: "IET NITK", w: 80, h: 80, className: "h-10 sm:h-12 w-auto object-contain" },
];

export default function LogoBar() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 py-3 bg-white border-b border-slate-100">
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={logo.w}
          height={logo.h}
          className={logo.className}
          priority={logo.src.includes("webclub")}
        />
      ))}
    </div>
  );
}
