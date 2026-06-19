export default function Footer() {
  return (
    <footer className="bg-[#1a0a2e] border-t border-[#6B21A8]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#6B21A8] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-playfair)" }}>N</span>
              </div>
              <div>
                <div className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: "var(--font-playfair)" }}>NATURALS</div>
                <div className="text-white/30 text-[9px] tracking-[0.25em] uppercase -mt-0.5">Signature Salon</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              India&apos;s premier salon chain. Premium beauty experiences across 500+ locations nationwide.
            </p>
            <div className="flex gap-3">
              {["I", "F", "Y"].map((s, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 border border-[#6B21A8]/50 rounded-full flex items-center justify-center text-[#C084FC] hover:bg-[#6B21A8] hover:text-white hover:border-[#6B21A8] transition-all text-xs font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">Services</h4>
            <ul className="space-y-3">
              {["Precision Haircuts","Hair Coloring","Balayage & Ombre","Hair Spa","Keratin Treatment","Bridal Styling"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/40 text-sm hover:text-[#C084FC] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Book Appointment", href: "#booking" },
                { label: "Careers", href: "#" },
                { label: "Franchise", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/40 text-sm hover:text-[#C084FC] transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#C084FC] mt-0.5 text-sm">📞</span>
                <div>
                  <div className="text-white/70 text-sm">+91 98765 43210</div>
                  <div className="text-white/30 text-xs mt-0.5">Mon–Sun, 10AM–8PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C084FC] mt-0.5 text-sm">✉️</span>
                <a href="mailto:hello@naturals.in" className="text-white/70 text-sm hover:text-[#C084FC] transition-colors">
                  hello@naturals.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C084FC] mt-0.5 text-sm">📍</span>
                <div className="text-white/70 text-sm">500+ locations across India</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">© 2025 Naturals Signature Salon. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-white/25 text-xs hover:text-[#C084FC]/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
