export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#6B21A8]" />
              <span className="text-[#6B21A8] text-xs tracking-[0.3em] uppercase font-semibold">Reservations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0a2e] leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Book Your{" "}
              <span className="purple-gradient italic">Experience</span>
            </h2>
            <p className="text-[#6b5a7e] text-sm leading-relaxed mb-10">
              Reserve your slot with our expert stylists. We will confirm your appointment within 30 minutes.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Full Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm placeholder-[#6b5a7e]/40 focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm placeholder-[#6b5a7e]/40 focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Service</label>
                <select className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all appearance-none">
                  <option value="">Select a service</option>
                  <option>Precision Haircut</option>
                  <option>Hair Coloring</option>
                  <option>Balayage / Ombre</option>
                  <option>Hair Spa</option>
                  <option>Hair Extensions</option>
                  <option>Bridal Styling</option>
                  <option>Keratin Treatment</option>
                  <option>Beauty Services</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Preferred Date</label>
                  <input type="date"
                    className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Preferred Time</label>
                  <select className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all appearance-none">
                    <option value="">Select time</option>
                    {["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#6b5a7e] text-xs tracking-widest uppercase mb-2 font-medium">Special Requests (Optional)</label>
                <textarea rows={3} placeholder="Any preferences or notes for your stylist..."
                  className="w-full bg-[#F5F0FF] border border-[#6B21A8]/15 text-[#1a0a2e] px-4 py-3 rounded-xl text-sm placeholder-[#6b5a7e]/40 focus:outline-none focus:border-[#6B21A8]/50 focus:ring-2 focus:ring-[#6B21A8]/10 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-purple w-full py-4 rounded-full text-sm">
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="space-y-6 lg:pt-24">
            <div className="card-white rounded-2xl p-7">
              <h3 className="text-[#1a0a2e] font-semibold text-lg mb-5" style={{ fontFamily: "var(--font-playfair)" }}>Quick Actions</h3>
              <div className="space-y-4">
                {[
                  { icon: "📞", label: "Call Us Directly", sub: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: "💬", label: "WhatsApp Booking", sub: "Chat for instant confirmation", href: "https://wa.me/919876543210" },
                  { icon: "📍", label: "Get Directions", sub: "Find us on Google Maps", href: "https://maps.google.com" },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#F5F0FF] rounded-xl border border-[#6B21A8]/10 hover:border-[#6B21A8]/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 border border-[#6B21A8]/25 rounded-full flex items-center justify-center bg-white group-hover:bg-[#6B21A8]/10 group-hover:border-[#6B21A8] transition-all">
                      <span>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[#1a0a2e] text-sm font-semibold">{item.label}</div>
                      <div className="text-[#6b5a7e] text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-white rounded-2xl p-7">
              <h3 className="text-[#1a0a2e] font-semibold text-lg mb-5" style={{ fontFamily: "var(--font-playfair)" }}>Salon Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday — Friday", hours: "10:00 AM — 8:00 PM" },
                  { day: "Saturday", hours: "9:00 AM — 9:00 PM" },
                  { day: "Sunday", hours: "10:00 AM — 7:00 PM" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-[#6B21A8]/10 last:border-0">
                    <span className="text-[#6b5a7e] text-sm">{h.day}</span>
                    <span className="text-[#6B21A8] text-sm font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
