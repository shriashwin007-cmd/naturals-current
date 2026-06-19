export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Chennai",
      text: "The balayage they did on my hair is absolutely stunning. I've been to many salons but Naturals Signature is on a completely different level. The attention to detail is incredible.",
      service: "Balayage",
      rating: 5,
    },
    {
      name: "Meera Krishnan",
      location: "Bangalore",
      text: "I came in for a bridal package and left feeling like a queen. The team made sure every single detail was perfect. My wedding day hair was everything I dreamed of.",
      service: "Bridal Styling",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      location: "Hyderabad",
      text: "The keratin treatment transformed my frizzy hair completely. Three months later and my hair is still silky smooth. Worth every rupee — this is my go-to salon now.",
      service: "Keratin Treatment",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
              Client Stories
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0ea] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients{" "}
            <span className="gold-gradient italic">Are Saying</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-dark rounded-xl p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#c9a96e] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#f5f0ea]/65 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#f5f0ea] font-semibold text-sm">{r.name}</div>
                  <div className="text-[#f5f0ea]/40 text-xs mt-0.5">{r.location}</div>
                </div>
                <span className="text-[9px] tracking-widest uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-2 py-1 rounded-full">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-[#c9a96e]/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "⭐", value: "4.9/5", label: "Google Rating" },
            { icon: "💅", value: "50K+", label: "Monthly Appointments" },
            { icon: "🏆", value: "20+", label: "Awards Won" },
            { icon: "🌟", value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl font-bold text-[#c9a96e] mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="text-[#f5f0ea]/40 text-xs tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
