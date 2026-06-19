export default function Booking() {
  return (
    <section
      id="booking"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #141414 50%, #0d0d0d 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #c9a96e, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #c9a96e, transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c9a96e]" />
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
                Reservations
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#f5f0ea] leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Book Your{" "}
              <span className="gold-gradient italic">Experience</span>
            </h2>
            <p className="text-[#f5f0ea]/55 text-sm leading-relaxed mb-10">
              Reserve your slot with our expert stylists. We will confirm your
              appointment within 30 minutes.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea] px-4 py-3 rounded-sm text-sm placeholder-[#f5f0ea]/25 focus:outline-none focus:border-[#c9a96e]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea] px-4 py-3 rounded-sm text-sm placeholder-[#f5f0ea]/25 focus:outline-none focus:border-[#c9a96e]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                  Service
                </label>
                <select className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea]/80 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors appearance-none">
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
                  <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea]/80 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea]/80 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#c9a96e]/60 transition-colors appearance-none">
                    <option value="">Select time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#f5f0ea]/50 text-xs tracking-widest uppercase mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any preferences or notes for your stylist..."
                  className="w-full bg-[#141414] border border-[#c9a96e]/20 text-[#f5f0ea] px-4 py-3 rounded-sm text-sm placeholder-[#f5f0ea]/25 focus:outline-none focus:border-[#c9a96e]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 rounded-sm text-sm"
              >
                Confirm Booking
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="space-y-6 lg:pt-24">
            {/* Quick actions */}
            <div className="card-dark rounded-xl p-7">
              <h3
                className="text-[#f5f0ea] font-semibold text-lg mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quick Actions
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 transition-colors group"
                >
                  <div className="w-10 h-10 border border-[#c9a96e]/30 rounded-full flex items-center justify-center group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-all">
                    <span className="text-[#c9a96e]">📞</span>
                  </div>
                  <div>
                    <div className="text-[#f5f0ea] text-sm font-medium">Call Us Directly</div>
                    <div className="text-[#f5f0ea]/40 text-xs mt-0.5">+91 98765 43210</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 transition-colors group"
                >
                  <div className="w-10 h-10 border border-[#c9a96e]/30 rounded-full flex items-center justify-center group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-all">
                    <span className="text-[#c9a96e]">💬</span>
                  </div>
                  <div>
                    <div className="text-[#f5f0ea] text-sm font-medium">WhatsApp Booking</div>
                    <div className="text-[#f5f0ea]/40 text-xs mt-0.5">Chat for instant confirmation</div>
                  </div>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#c9a96e]/10 hover:border-[#c9a96e]/40 transition-colors group"
                >
                  <div className="w-10 h-10 border border-[#c9a96e]/30 rounded-full flex items-center justify-center group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10 transition-all">
                    <span className="text-[#c9a96e]">📍</span>
                  </div>
                  <div>
                    <div className="text-[#f5f0ea] text-sm font-medium">Get Directions</div>
                    <div className="text-[#f5f0ea]/40 text-xs mt-0.5">Find us on Google Maps</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="card-dark rounded-xl p-7">
              <h3
                className="text-[#f5f0ea] font-semibold text-lg mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Salon Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday — Friday", hours: "10:00 AM — 8:00 PM" },
                  { day: "Saturday", hours: "9:00 AM — 9:00 PM" },
                  { day: "Sunday", hours: "10:00 AM — 7:00 PM" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-[#c9a96e]/10 last:border-0"
                  >
                    <span className="text-[#f5f0ea]/55 text-sm">{h.day}</span>
                    <span className="text-[#c9a96e] text-sm">{h.hours}</span>
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
