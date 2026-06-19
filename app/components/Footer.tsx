export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#c9a96e]/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-[#c9a96e] rounded-full flex items-center justify-center">
                <span className="text-[#c9a96e] text-xs font-bold">N</span>
              </div>
              <div>
                <div
                  className="text-[#c9a96e] font-bold tracking-widest text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  NATURALS
                </div>
                <div className="text-[#f5f0ea]/30 text-[9px] tracking-[0.25em] uppercase -mt-0.5">
                  Signature Salon
                </div>
              </div>
            </div>
            <p className="text-[#f5f0ea]/40 text-sm leading-relaxed mb-6">
              India&apos;s premier salon chain. Premium beauty experiences across 500+
              locations nationwide.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-[#c9a96e]/30 rounded-full flex items-center justify-center text-[#c9a96e]/60 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors text-xs"
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#f5f0ea]/70 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Precision Haircuts",
                "Hair Coloring",
                "Balayage & Ombre",
                "Hair Spa",
                "Keratin Treatment",
                "Bridal Styling",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[#f5f0ea]/45 text-sm hover:text-[#c9a96e] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f5f0ea]/70 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Book Appointment", href: "#booking" },
                { label: "Careers", href: "#" },
                { label: "Franchise", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#f5f0ea]/45 text-sm hover:text-[#c9a96e] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f5f0ea]/70 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a96e] mt-0.5 text-sm">📞</span>
                <div>
                  <div className="text-[#f5f0ea]/70 text-sm">+91 98765 43210</div>
                  <div className="text-[#f5f0ea]/35 text-xs mt-0.5">Mon–Sun, 10AM–8PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a96e] mt-0.5 text-sm">✉️</span>
                <a
                  href="mailto:hello@naturals.in"
                  className="text-[#f5f0ea]/70 text-sm hover:text-[#c9a96e] transition-colors"
                >
                  hello@naturals.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a96e] mt-0.5 text-sm">📍</span>
                <div className="text-[#f5f0ea]/70 text-sm">
                  500+ locations across India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f5f0ea]/30 text-xs">
            © 2025 Naturals Signature Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[#f5f0ea]/30 text-xs hover:text-[#c9a96e]/70 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
