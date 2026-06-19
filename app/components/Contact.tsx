export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F0FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #6B21A8 0%, #7C3AED 50%, #6B21A8 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-48 h-48 opacity-20 rounded-full"
            style={{ background: "radial-gradient(circle, #C084FC, transparent)", transform: "translate(-30%, -30%)" }}
          />
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 rounded-full"
            style={{ background: "radial-gradient(circle, #C084FC, transparent)", transform: "translate(30%, 30%)" }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-medium">Visit Us Today</span>
              <div className="h-px w-10 bg-white/40" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Your Best Look{" "}
              <span className="italic text-[#E9D5FF]">Awaits You</span>
            </h2>

            <p className="text-white/70 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Walk in, book a slot, or call us. Our expert team is ready to transform your look and elevate your confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="bg-white text-[#6B21A8] font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#F5F0FF] transition-colors hover:shadow-xl">
                Book Appointment
              </a>
              <a href="tel:+919876543210" className="border-2 border-white/60 text-white font-bold px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
