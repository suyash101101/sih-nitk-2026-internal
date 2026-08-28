import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SIH 2026 — NITK Internal Screening Round",
  description:
    "Smart India Hackathon 2026 Internal Screening Round at NITK Surathkal. ₹40,000 prize pool. Top 10 teams represent NITK at National SIH with ₹2 Cr prize pool.",
  openGraph: {
    title: "SIH 2026 — NITK Internal Screening Round",
    description:
      "Build. Innovate. Represent NITK. Join the Smart India Hackathon 2026 Internal Screening Round.",
    images: ["/posters/1-ff77ddc8-25b5-44a4-bbe9-f4f017ff7a41.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
