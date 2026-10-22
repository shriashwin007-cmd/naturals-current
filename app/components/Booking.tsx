"use client";

import { useState, type FormEvent } from "react";
import { SERVICES, bookingOption } from "../lib/services";
import { SITE } from "../lib/site";

const TIMES = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

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

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(253,251,255,0.5)",
  marginBottom: "8px",
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
};

const EMPTY: FormState = { name: "", phone: "", email: "", service: "", date: "", time: "" };

export default function Booking() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY);

  const today = () => new Date().toISOString().split("T")[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, phone, service, date, time } = form;

    if (!name.trim()) return fail("Please tell us your name");
    if (!/^[0-9+\-\s()]{8,15}$/.test(phone.trim())) return fail("Enter a valid phone number");
    if (!service) return fail("Choose a service");
    if (!date) return fail("Pick a date");
    if (!time) return fail("Pick a time slot");

    setErr(null);
    setDone(true);
  }

  function fail(message: string) {
    setErr(message);
    setTimeout(() => setErr(null), 3200);
  }

  function reset() {
    setDone(false);
    setForm(EMPTY);
  }

  const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--purple-light)";
    e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)";
  };
  const blurOn = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(168,85,247,0.2)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section id="booking" className="section-pad" style={{ background: "var(--purple-deep)" }}>
      <div
        className="grid-2"
        style={{ maxWidth: "1100px", margin: "0 auto", alignItems: "start" }}
      >
        {/* Left */}
        <div>
          <span className="section-label reveal">Reservations</span>
          <h2
            className="font-display reveal"
            style={{
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Reserve Your<br />
            <em style={{ fontStyle: "italic", color: "var(--purple-glow)" }}>
              Experience
            </em>
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(253,251,255,0.6)",
              lineHeight: 1.8,
              fontSize: "0.92rem",
              marginBottom: "32px",
              maxWidth: "400px",
            }}
          >
            Reserve your personal session with our expert stylists. We&apos;ll make
            sure every detail is perfect before you arrive.
          </p>
          <ul
            className="reveal"
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {[
              "Complimentary consultation with every booking",
              "Flexible rescheduling up to 4 hours before",
              "Priority queue for members",
              "Reminder sent 24 hours prior",
              "Hygienic, sanitised stations guaranteed",
            ].map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "0.82rem",
                  color: "rgba(253,251,255,0.7)",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "var(--purple-glow)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {p}
              </li>
            ))}
          </ul>

          <p
            className="reveal"
            style={{
              marginTop: "34px",
              fontSize: "0.78rem",
              color: "rgba(253,251,255,0.45)",
            }}
          >
            Prefer to talk? Call{" "}
            <a href={SITE.phoneHref} style={{ color: "var(--purple-glow)" }}>
              {SITE.phoneDisplay}
            </a>{" "}
            — we&apos;re open {SITE.hours.toLowerCase()}.
          </p>
        </div>

        {/* Right — Form */}
        <div
          style={{
            background: "rgba(107,33,168,0.1)",
            border: "1px solid rgba(168,85,247,0.2)",
            padding: "48px",
            borderRadius: "4px",
            backdropFilter: "blur(10px)",
          }}
        >
          {!done ? (
            <form onSubmit={submit} noValidate>
              <div
                className="font-display"
                style={{ fontSize: "1.6rem", fontWeight: 400, marginBottom: "32px" }}
              >
                Reserve a Slot
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="bk-name" style={labelStyle}>Full Name</label>
                <input
                  id="bk-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  onFocus={focusOn}
                  onBlur={blurOn}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="bk-phone" style={labelStyle}>Phone</label>
                  <input
                    id="bk-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    required
                    style={inputStyle}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    onFocus={focusOn}
                    onBlur={blurOn}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="bk-email" style={labelStyle}>Email</label>
                  <input
                    id="bk-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    onFocus={focusOn}
                    onBlur={blurOn}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="bk-service" style={labelStyle}>Service</label>
                <select
                  id="bk-service"
                  name="service"
                  style={{ ...inputStyle, cursor: "pointer" }}
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  onFocus={focusOn}
                  onBlur={blurOn}
                  required
                >
                  <option value="" disabled>Choose a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={bookingOption(s)} style={{ background: "#3B0764" }}>
                      {bookingOption(s)}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="bk-date" style={labelStyle}>Date</label>
                  <input
                    id="bk-date"
                    name="date"
                    type="date"
                    min={today()}
                    style={inputStyle}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    onFocus={focusOn}
                    onBlur={blurOn}
                    required
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="bk-time" style={labelStyle}>Preferred Time</label>
                  <select
                    id="bk-time"
                    name="time"
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    onFocus={focusOn}
                    onBlur={blurOn}
                    required
                  >
                    <option value="" disabled>Select time</option>
                    {TIMES.map((t) => (
                      <option key={t} value={t} style={{ background: "#3B0764" }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                aria-live="polite"
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
                  transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
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
                {err ?? "Confirm Appointment →"}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "20px" }}>
                🌸
              </span>
              <div
                className="font-display"
                style={{ fontSize: "2rem", marginBottom: "12px", color: "var(--purple-glow)" }}
              >
                You&apos;re Booked!
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                Your appointment has been confirmed. We&apos;ll send a reminder to your
                phone and email. We look forward to welcoming you.
              </p>
              <button
                type="button"
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
