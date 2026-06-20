import Navbar       from "./components/Navbar";
import Hero          from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import Services      from "./components/Services";
import Gallery       from "./components/Gallery";
import Booking       from "./components/Booking";
import About         from "./components/About";
import Testimonials  from "./components/Testimonials";
import Footer        from "./components/Footer";
import ChatBot       from "./components/ChatBot";
import ScrollReveal  from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <Services />
        <Gallery />
        <Booking />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
