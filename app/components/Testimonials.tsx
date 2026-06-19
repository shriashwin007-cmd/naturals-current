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
    <section className="py-24 md:py-32 bg-[#F5F0FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#6B21A8]" />
            <span className="text-[#6B21A8] text-xs tracking-[0.3em] uppercase font-semibold">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a0a2e] leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            What Our Clients{" "}
            <span className="purple-gradient italic">Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-white rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#9333EA] text-sm">★</span>
                ))}
              </div>
              <blockquote className="text-[#6b5a7e] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#1a0a2e] font-semibold text-sm">{r.name}</div>
                  <div className="text-[#6b5a7e]/60 text-xs mt-0.5">{r.location}</div>
                </div>
                <span className="text-[9px] tracking-widest uppercase text-[#6B21A8] bg-[#F5F0FF] border border-[#6B21A8]/25 px-2 py-1 rounded-full font-semibold">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-[#6B21A8]/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "⭐", value: "4.9/5", label: "Google Rating" },
            { icon: "💅", value: "50K+", label: "Monthly Appointments" },
            { icon: "🏆", value: "20+", label: "Awards Won" },
            { icon: "🌟", value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#6B21A8] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{stat.value}</div>
              <div className="text-[#6b5a7e] text-xs tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
