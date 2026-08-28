import Image from "next/image";

export default function LogoBar() {
  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-8 py-3 bg-white border-b border-slate-100">
      <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-end">
        <Image src="/logos/nitk.png" alt="NITK" width={80} height={80} className="h-10 sm:h-12 w-auto object-contain" />
        <Image src="/logos/iic.png" alt="IIC" width={140} height={60} className="h-8 sm:h-10 w-auto object-contain" />
      </div>

      <div className="flex items-center justify-center px-3 sm:px-6 shrink-0">
        <Image
          src="/logos/webclub.png"
          alt="Web Enthusiasts Club NITK"
          width={220}
          height={90}
          className="h-12 sm:h-14 w-auto object-contain"
          priority
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-5 flex-1 justify-start">
        <Image src="/logos/ieee.png" alt="IEEE NITK" width={160} height={50} className="h-8 sm:h-10 w-auto object-contain" />
        <Image src="/logos/iet.png" alt="IET NITK" width={80} height={80} className="h-10 sm:h-12 w-auto object-contain" />
      </div>
    </div>
  );
}
