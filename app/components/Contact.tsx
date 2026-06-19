export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, #141414 0%, #1a1710 50%, #141414 100%)",
            border: "1px solid rgba(201, 169, 110, 0.2)",
          }}
        >
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-40 h-40 opacity-10"
            style={{ background: "radial-gradient(circle at top left, #c9a96e, transparent)" }}
          />
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10"
            style={{ background: "radial-gradient(circle at bottom right, #c9a96e, transparent)" }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
                Visit Us Today
              </span>
              <div className="h-px w-10 bg-[#c9a96e]" />
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold text-[#f5f0ea] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Best Look{" "}
              <span className="shimmer-text italic">Awaits You</span>
            </h2>

            <p className="text-[#f5f0ea]/55 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Walk in, book a slot, or call us. Our expert team is ready to transform
              your look and elevate your confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#booking" className="btn-gold px-10 py-4 rounded-sm text-sm">
                Book Appointment
              </a>
              <a href="tel:+919876543210" className="btn-outline-gold px-10 py-4 rounded-sm text-sm">
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
