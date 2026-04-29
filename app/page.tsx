export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Independent pharmacy in Albion, MI providing modern, reliable medication care including refills, delivery, packaging, and clinical support.",
};

const services = [
  ["Refills & Transfers", "Simple, fast prescription management without the hassle."],
  ["Medication Packaging", "Organized blister packs to keep therapy on track."],
  ["Delivery", "Convenient delivery for eligible local patients."],
  ["Vaccines", "Routine immunizations from a trusted pharmacist."],
  ["Medication Reviews", "Clear guidance and therapy optimization."],
  ["Insurance Support", "We handle prior authorizations and plan issues."],
];

const sectionStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "80px 20px",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #f1f5f9",
  borderRadius: "20px",
  padding: "24px",
  background: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", background: "#ffffff", color: "#111827" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #f1f5f9", padding: "18px 20px", position: "sticky", top: 0, background: "rgba(255,255,255,.9)", backdropFilter: "blur(6px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>Parks Pharmacy</div>
            <div style={{ color: "#dc2626", fontSize: 12, fontWeight: 600 }}>Albion, Michigan</div>
          </div>
          <a href="#transfer" style={{ background: "#dc2626", color: "white", padding: "10px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 600 }}>Transfer RX</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ ...sectionStyle, paddingTop: 100, paddingBottom: 100 }}>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.1 }}>
          Pharmacy care that actually works for you.
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, color: "#4b5563", maxWidth: 600 }}>
          We simplify medications, handle insurance issues, and keep your therapy on track — without the frustration of chain pharmacies.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
          <a href="#refill" style={{ background: "#dc2626", color: "white", padding: "14px 22px", borderRadius: 999, textDecoration: "none", fontWeight: 600 }}>Request Refill</a>
          <a href="#transfer" style={{ border: "1px solid #e5e7eb", padding: "14px 22px", borderRadius: 999, textDecoration: "none", color: "#111827", fontWeight: 600 }}>Transfer Prescription</a>
        </div>
      </section>

      {/* Services */}
      <section style={{ ...sectionStyle, background: "#f9fafb" }}>
        <h2 style={{ fontSize: 32, marginBottom: 30 }}>Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {services.map(([title, text]) => (
            <div key={title} style={cardStyle}>
              <h3 style={{ marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "#6b7280" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transfer */}
      <section id="transfer" style={sectionStyle}>
        <h2 style={{ fontSize: 32 }}>Transfer Prescription</h2>
        <p style={{ color: "#6b7280", marginBottom: 20 }}>Submit your info and we’ll handle the rest.</p>
        <form action="https://formspree.io/f/maqargoa" method="POST">
          <input name="Name" placeholder="Full Name" style={{ width: "100%", padding: 12, marginBottom: 10 }} required />
          <input name="Phone" placeholder="Phone" style={{ width: "100%", padding: 12, marginBottom: 10 }} required />
          <button style={{ background: "#dc2626", color: "white", padding: 14, borderRadius: 999, border: "none" }}>Submit</button>
        </form>
      </section>

      {/* Refill */}
      <section id="refill" style={{ ...sectionStyle, background: "#f9fafb" }}>
        <h2 style={{ fontSize: 32 }}>Request Refill</h2>
        <p style={{ color: "#6b7280", marginBottom: 20 }}>We’ll contact you to confirm details.</p>
        <form action="https://formspree.io/f/maqargoa" method="POST">
          <input name="Name" placeholder="Full Name" style={{ width: "100%", padding: 12, marginBottom: 10 }} required />
          <input name="Phone" placeholder="Phone" style={{ width: "100%", padding: 12, marginBottom: 10 }} required />
          <button style={{ background: "#dc2626", color: "white", padding: 14, borderRadius: 999, border: "none" }}>Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: 30, color: "#6b7280" }}>
        © {new Date().getFullYear()} Parks Pharmacy
      </footer>
    </main>
  );
}
