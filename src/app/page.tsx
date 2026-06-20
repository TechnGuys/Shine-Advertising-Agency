import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageStrip from "@/components/ImageStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Team from "@/components/Team";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ImageStrip />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Team />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
