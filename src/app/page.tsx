import TricolorBar from "@/components/TricolorBar";
import LogoBar from "@/components/LogoBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Guidelines from "@/components/Guidelines";
import Timeline from "@/components/Timeline";
import Evaluation from "@/components/Evaluation";
import Rules from "@/components/Rules";
import QnA from "@/components/QnA";
import Submit from "@/components/Submit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TricolorBar />
      <LogoBar />
      <Navbar />
      <main>
        <Hero />
        <Guidelines />
        <Timeline />
        <Evaluation />
        <Rules />
        <QnA />
        <Submit />
      </main>
      <TricolorBar />
      <Footer />
    </>
  );
}
