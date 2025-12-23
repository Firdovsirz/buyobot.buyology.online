'use client';

import { useRef } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Workshops from "@/components/workshops/Workshops";
import IntroSection from "@/components/introSection/IntroSection";
import ReadyToStart from "@/components/readyToStart/ReadyToStart";
import WhyChooseSection from "@/components/whyChooseSection/WhyChooseSection";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const workshopsRef = useRef<HTMLDivElement>(null);
  const readyToStartRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "intro":
        introRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "whychoose":
        whyChooseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "workshops":
        workshopsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "readytostart":
        readyToStartRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <main>
        {/* Attach refs to sections */}
        <div ref={introRef}>
          <IntroSection />
        </div>

        <div ref={whyChooseRef}>
          <WhyChooseSection />
        </div>

        <div ref={workshopsRef}>
          <Workshops />
        </div>

        <div ref={readyToStartRef}>
          <ReadyToStart />
        </div>
      </main>

      <Footer />
    </>
  );
}