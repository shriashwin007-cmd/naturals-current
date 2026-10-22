import Navbar            from "./components/Navbar";
import HeroCanvas        from "./components/HeroCanvas";
import MarqueeBanner     from "./components/MarqueeBanner";
import Services          from "./components/Services";
import Gallery           from "./components/Gallery";
import Booking           from "./components/Booking";
import About             from "./components/About";
import Testimonials      from "./components/Testimonials";
import Contact           from "./components/Contact";
import Footer            from "./components/Footer";
import ChatBot           from "./components/ChatBot";
import ScrollReveal      from "./components/ScrollReveal";
import MakeupBrushCursor from "./components/MakeupBrushCursor";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <MakeupBrushCursor />
      <Navbar />
      <main>
        <HeroCanvas />
        <MarqueeBanner />
        <Services />
        <Gallery />
        <Booking />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
