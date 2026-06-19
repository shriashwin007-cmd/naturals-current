export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="card-dark rounded-xl p-10 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#c9a96e]/30 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#c9a96e]/30 rounded-bl-xl" />

              <div
                className="text-6xl md:text-7xl font-bold gold-gradient mb-3 leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                15+
              </div>
              <div className="text-[#f5f0ea]/60 text-sm tracking-wider uppercase mb-8">
                Years Transforming Lives
              </div>

              <div className="space-y-5">
                {[
                  { label: "Branches Across India", value: "500+" },
                  { label: "Certified Expert Stylists", value: "2,000+" },
                  { label: "Happy Clients Served", value: "2M+" },
                  { label: "Premium Products Used", value: "50+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-[#c9a96e]/10 last:border-0"
                  >
                    <span className="text-[#f5f0ea]/60 text-sm">{item.label}</span>
                    <span
                      className="text-[#c9a96e] font-semibold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="floating-badge absolute -top-5 -left-5 bg-[#c9a96e] text-[#0a0a0a] rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-2xl">
              <span className="text-xs font-bold leading-tight">India&apos;s</span>
              <span className="text-xs font-bold leading-tight">#1 Salon</span>
              <span className="text-xs font-bold leading-tight">Chain</span>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
                Our Story
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#f5f0ea] leading-tight mb-7"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Born in Chennai,{" "}
              <span className="gold-gradient italic">Loved Across India</span>
            </h2>

            <div className="space-y-5 text-[#f5f0ea]/60 text-base leading-relaxed">
              <p>
                Naturals started with a single dream — to bring world-class salon
                services to every Indian. From a humble beginning in Chennai, we have
                grown into one of India&apos;s most trusted and loved salon chains.
              </p>
              <p>
                Our Signature salons represent the pinnacle of the Naturals experience:
                premium interiors, internationally trained stylists, and luxury products
                that deliver real, visible results every time.
              </p>
              <p>
                We believe beauty isn&apos;t about trends — it&apos;s about confidence.
                And we&apos;re here to help you find yours.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              {["ISO Certified", "Eco-Friendly", "Cruelty Free", "Premium Products"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="border border-[#c9a96e]/30 text-[#c9a96e]/80 text-xs px-4 py-2 rounded-full tracking-wider"
                  >
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
