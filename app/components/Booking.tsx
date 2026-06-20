"use client";

import { useState } from "react";

const SERVICES = [
  "Hair Styling — From ₹499",
  "Hair Colouring — From ₹1,299",
  "Hair Spa — From ₹799",
  "Keratin Treatment — From ₹2,499",
  "Bridal Package — From ₹5,999",
  "Nail Art & Care — From ₹399",
  "Skin Care Facial",
  "Threading & Waxing",
];

const TIMES = ["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(59,7,100,0.5)",
  border: "1px solid rgba(168,85,247,0.2)",
  color: "var(--white)",
  padding: "14px 18px",
  fontFamily: "var(--font-jost)",
  fontSize: "0.88rem",
  fontWeight: 300,
  outline: "none",
  borderRadius: "2px",
  transition: "border-color 0.3s, box-shadow 0.3s",
  appearance: "none" as const,
};

export default function Booking() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", time: "" });

  function today() { return new Date().toISOString().split("T")[0]; }

  function submit() {
    const { name, phone, service, date, time } = form;
    if (!name || !phone || !service || !date || !time) {
      setErr(true);
      setTimeout(() => setErr(false), 2500);
      return;
    }
    setDone(true);
  }

  function reset() {
    setDone(false);
    setForm({ name: "", phone: "", email: "", service: "", date: "", time: "" });
  }

  return (
    <section id="booking" style={{ padding: "120px 60px", background: "var(--purple-deep)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

        {/* Left */}
        <div>
          <span className="section-label reveal">Reservations</span>
          <h2 className="font-display reveal" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px" }}>
            Book Your<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>Experience</em>
          </h2>
          <p className="reveal" style={{ color: "rgba(253,251,255,0.6)", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "32px", maxWidth: "400px" }}>
            Reserve your personal session with our expert stylists. We&apos;ll make sure every detail is perfect before you arrive.
          </p>
          <ul className="reveal" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              "Complimentary consultation with every booking",
              "Flexible rescheduling up to 4 hours before",
              "Priority queue for members",
              "Reminder sent 24 hours prior",
              "Hygienic, sanitised stations guaranteed",
            ].map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.82rem", color: "rgba(253,251,255,0.7)", letterSpacing: "0.04em" }}>
                <span style={{ width: "6px", height: "6px", background: "var(--purple-glow)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Form */}
        <div style={{
          background: "rgba(107,33,168,0.1)",
          border: "1px solid rgba(168,85,247,0.2)",
          padding: "48px",
          borderRadius: "4px",
          backdropFilter: "blur(10px)",
        }}>
          {!done ? (
            <>
              <div className="font-display" style={{ fontSize: "1.6rem", fontWeight: 400, marginBottom: "32px" }}>
                Reserve a Slot
              </div>

              <FGroup label="Full Name">
                <input style={inputStyle} type="text" placeholder="Your name"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                />
              </FGroup>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <FGroup label="Phone">
                  <input style={inputStyle} type="tel" placeholder="+91 00000 00000"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                </FGroup>
                <FGroup label="Email">
                  <input style={inputStyle} type="email" placeholder="you@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                </FGroup>
              </div>

              <FGroup label="Service">
                <select style={{ ...inputStyle, cursor: "pointer" }}
                  value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; }}
                >
                  <option value="" disabled>Choose a service</option>
                  {SERVICES.map((s) => <option key={s} style={{ background: "#3B0764" }}>{s}</option>)}
                </select>
              </FGroup>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <FGroup label="Date">
                  <input style={inputStyle} type="date" min={today()}
                    value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; }}
                  />
                </FGroup>
                <FGroup label="Preferred Time">
                  <select style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; }}
                  >
                    <option value="" disabled>Select time</option>
                    {TIMES.map((t) => <option key={t} style={{ background: "#3B0764" }}>{t}</option>)}
                  </select>
                </FGroup>
              </div>

              <button
                onClick={submit}
                style={{
                  width: "100%",
                  background: err
                    ? "linear-gradient(135deg,#9c2020,#c0392b)"
                    : "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
                  color: "var(--white)",
                  padding: "18px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                  marginTop: "8px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 35px rgba(107,33,168,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {err ? "Please fill all required fields!" : "Confirm Appointment →"}
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "20px" }}>🌸</span>
              <div className="font-display" style={{ fontSize: "2rem", marginBottom: "12px", color: "var(--purple-glow)" }}>
                You&apos;re Booked!
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "28px" }}>
                Your appointment has been confirmed. We&apos;ll send a reminder to your phone and email.
                We look forward to welcoming you.
              </p>
              <button
                onClick={reset}
                style={{
                  background: "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
                  color: "var(--white)",
                  padding: "14px 32px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-jost)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  borderRadius: "2px",
                }}
              >
                Book Another →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{
        display: "block",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(253,251,255,0.5)",
        marginBottom: "8px",
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}
