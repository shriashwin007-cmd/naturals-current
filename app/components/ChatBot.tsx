"use client";

import { useState, useRef, useEffect } from "react";
import { priceSummary } from "../lib/services";
import { SITE } from "../lib/site";

type Msg = { role: "bot" | "user"; text: string };

const RESPONSES: Record<string, string> = {
  book:       `Of course! 📅 You can book directly using the form on this page, or scroll up to 'Reserve Your Experience'. We're open daily from ${SITE.hours}. What service interests you?`,
  appointment:`Let's get you booked! 🗓️ Just scroll up to the 'Reserve Your Experience' section and fill in your details. Want me to tell you about our services first?`,
  service:    `We offer a wide range of premium services:\n\n${priceSummary()}\n\nWhich one interests you?`,
  price:      `Quick pricing overview:\n\n${priceSummary()}\n\nFinal pricing depends on hair length and the stylist you choose. Shall I help you book?`,
  timing:     `We're open every day from ${SITE.hours} 🕙\n\nLast appointment slot is at 7:00 PM. Walk-ins welcome, but booking guarantees your slot!`,
  location:   `We have branches across Chennai — Anna Nagar, T. Nagar and Nungambakkam! 📍 Each branch offers our full premium service range.`,
  bridal:     "Our Bridal Package is our most loved service! 👑 Starting at ₹5,999, it includes:\n\n• Pre-bridal skin prep\n• Complete bridal makeup\n• Hairstyling & draping\n• Touch-up kit\n\nBrides book months in advance — shall I help you reserve your date?",
  keratin:    "Keratin treatment gives you smooth, frizz-free hair for 3–5 months! ✨\n\nStarting at ₹2,499. Sessions take around 2 hours. Completely worth it. Want to book a consultation?",
  facial:     "Our Skin Care Facial starts at ₹899 🧖 and includes a skin analysis, deep cleanse, exfoliation and a hydrating mask. Around 60 minutes. Shall I book you in?",
  threading:  "Threading & Waxing starts at ₹199 🌸 — quick, hygienic and done with skin-friendly products. Want to add it to a booking?",
  nail:       "Nail Art & Care starts at ₹399 💅 — manicures, pedicures and intricate art with long-wear formulas. Ready to book?",
  salon:      "Naturals has been Chennai's most loved salon for over 15 years 🌸 Premium products, certified artists and a space designed to feel calm. What would you like to book?",
  hello:      "Hello! 🌸 So lovely to have you here. How can Aura assist you today?",
  hi:         "Hi there! ✨ Welcome to Naturals. How can I help you today?",
  thanks:     "You're so welcome! 💜 Is there anything else I can help you with?",
  default:    `That's a great question! Our team would love to assist you personally. You can call us on ${SITE.phoneDisplay} or book an appointment and our stylists will address all queries during your visit. 🌸`,
};

function getResponse(msg: string): string {
  const lower = msg.toLowerCase();
  for (const key in RESPONSES) {
    if (lower.includes(key)) return RESPONSES[key];
  }
  return RESPONSES.default;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const [pending, setPending] = useState<{ id: number; text: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const reqId = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* Greeting — fires once, the first time the panel is opened. */
  useEffect(() => {
    if (!initialized) return;
    const timer = setTimeout(() => {
      setMessages([
        {
          role: "bot",
          text: "Hi there! ✨ I'm Aura, your personal Naturals assistant. I can help you book appointments, explore our services, or answer any questions!",
        },
      ]);
    }, 400);
    return () => clearTimeout(timer);
  }, [initialized]);

  /* Reply — a short, deterministic "typing" delay keyed off the message length. */
  useEffect(() => {
    if (!pending) return;
    const { id, text } = pending;
    const delay = 900 + (text.length % 5) * 90;
    const timer = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: getResponse(text) }]);
      setPending((p) => (p && p.id === id ? null : p));
    }, delay);
    return () => clearTimeout(timer);
  }, [pending]);

  function toggleChat() {
    setOpen((o) => !o);
    setInitialized(true);
  }

  function sendMsg(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
    setShowQuick(false);
    setTyping(true);
    setPending({ id: ++reqId.current, text });
  }

  function handleSend() {
    if (!input.trim()) return;
    sendMsg(input.trim());
    setInput("");
  }

  return (
    <>
      {/* Chat window */}
      <div style={{
        position: "fixed", bottom: "108px", right: "32px", zIndex: 499,
        width: "360px",
        background: "rgba(20,3,48,0.97)",
        border: "1px solid rgba(168,85,247,0.25)",
        borderRadius: "12px",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: "0 20px 60px rgba(59,7,100,0.8)",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, var(--purple-mid), var(--purple-deep))",
          padding: "18px 20px",
          display: "flex", alignItems: "center", gap: "12px",
          borderBottom: "1px solid rgba(168,85,247,0.2)",
        }}>
          <div style={{
            width: "38px", height: "38px",
            background: "var(--purple-glow)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.1rem", flexShrink: 0,
          }}>✨</div>
          <div>
            <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>Aura — Naturals AI</div>
            <div style={{ fontSize: "0.65rem", color: "#6EE7B7", marginTop: "2px" }}>● Online now</div>
          </div>
          <button
            onClick={toggleChat}
            style={{ marginLeft: "auto", background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "1rem", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
          >✕</button>
        </div>

        {/* Messages */}
        <div style={{ height: "300px", overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              maxWidth: "82%",
              padding: "10px 14px",
              borderRadius: m.role === "bot" ? "8px 8px 8px 2px" : "8px 8px 2px 8px",
              fontSize: "0.82rem", lineHeight: 1.5,
              alignSelf: m.role === "bot" ? "flex-start" : "flex-end",
              background: m.role === "bot"
                ? "rgba(107,33,168,0.25)"
                : "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
              border: m.role === "bot" ? "1px solid rgba(168,85,247,0.15)" : "none",
              whiteSpace: "pre-wrap",
              animation: "msgPop 0.3s ease forwards",
            }}>
              {m.text}
            </div>
          ))}

          {typing && (
            <div style={{
              display: "flex", gap: "4px", alignItems: "center",
              padding: "10px 14px",
              background: "rgba(107,33,168,0.2)",
              borderRadius: "8px 8px 8px 2px",
              width: "fit-content",
            }}>
              {[0, 0.2, 0.4].map((delay, i) => (
                <span key={i} style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "var(--purple-glow)",
                  display: "inline-block",
                  animation: `dotBounce 1.2s ${delay}s infinite`,
                }} />
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {showQuick && initialized && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "0 20px 12px" }}>
            {[
              { label: "📅 Book",     text: "Book an appointment" },
              { label: "💆 Services", text: "What are your services?" },
              { label: "🕙 Timings",  text: "What are your timings?" },
              { label: "💰 Pricing",  text: "Pricing" },
            ].map((q) => (
              <button key={q.label} onClick={() => sendMsg(q.text)} style={{
                background: "rgba(107,33,168,0.2)",
                border: "1px solid rgba(168,85,247,0.25)",
                color: "var(--purple-glow)",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "0.72rem",
                cursor: "pointer",
                transition: "background 0.2s",
                fontFamily: "var(--font-jost)",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(107,33,168,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(107,33,168,0.2)"; }}
              >
                {q.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(168,85,247,0.12)", display: "flex", gap: "10px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask Aura anything..."
            style={{
              flex: 1,
              background: "rgba(59,7,100,0.5)",
              border: "1px solid rgba(168,85,247,0.2)",
              color: "white",
              padding: "10px 14px",
              borderRadius: "6px",
              fontFamily: "var(--font-jost)",
              fontSize: "0.82rem",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--purple-light)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(168,85,247,0.2)"; }}
          />
          <button
            onClick={handleSend}
            style={{
              background: "var(--purple-mid)",
              border: "none", color: "white",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--purple-light)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--purple-mid)"; }}
          >
            ➤
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={toggleChat}
        title="Chat with Aura"
        style={{
          position: "fixed", bottom: "32px", right: "32px", zIndex: 500,
          width: "60px", height: "60px",
          background: "linear-gradient(135deg, var(--purple-mid), var(--purple-light))",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 30px rgba(107,33,168,0.5)",
          transition: "transform 0.3s, box-shadow 0.3s",
          fontSize: "1.4rem", border: "none",
          animation: open ? "none" : "chatPulse 3s ease-in-out infinite",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(107,33,168,0.7)";
          (e.currentTarget as HTMLElement).style.animation = "none";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(107,33,168,0.5)";
          if (!open) (e.currentTarget as HTMLElement).style.animation = "chatPulse 3s ease-in-out infinite";
        }}
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
