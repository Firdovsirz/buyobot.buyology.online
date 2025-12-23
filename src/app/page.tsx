import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Workshops from "@/components/workshops/Workshops";
import IntroSection from "@/components/introSection/IntroSection";
import ReadyToStart from "@/components/readyToStart/ReadyToStart";
import WhyChooseSection from "@/components/whyChooseSection/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <WhyChooseSection />
        <Workshops />
        <ReadyToStart />
      </main>
      <Footer />
    </>
  );
}
