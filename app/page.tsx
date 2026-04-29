export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Independent community pharmacy in Albion, Michigan offering refills, transfers, medication packaging, delivery, vaccines, MTM, insurance support, and clinic partnerships.",
};

const services = [
  ["Prescription Refills", "Fast, accurate refills with real pharmacist access."],
  ["Medication Packaging", "Blister packs and med sync to simplify routines."],
  ["Local Delivery", "Convenient delivery options for eligible patients."],
  ["Vaccines & Injections", "Pharmacist-administered vaccines and injection support."],
  ["Medication Therapy Management", "Medication reviews to improve safety, adherence, and outcomes."],
  ["Insurance & PA Help", "We help with prior authorizations, plan issues, and covered alternatives."],
  ["Medication Synchronization", "Align your medications to one monthly pickup or delivery date."],
  ["Clinic & LTC Support", "Medication coordination for clinics, facilities, and care teams."],
  ["Copay Assistance", "We help apply eligible manufacturer savings programs."],
];

const why = [
  "Talk directly with a local pharmacy team",
  "Help navigating insurance and prior authorizations",
  "Medication packaging and refill coordination",
  "Delivery options for eligible local patients",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  fontSize: "16px",
  marginBottom: "12px",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  background: "#dc2626",
  color: "white",
  padding: "14px 22px",
  borderRadius: "999px",
  border: "none",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111827", background: "#ffffff" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,.95)", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 900 }}>Parks Pharmacy</div>
            <div style={{ color: "#dc2626", fontWeight: 800, fontSize: 13, letterSpacing: 1.5 }}>ALBION, MICHIGAN</div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="#transfer" style={{ color: "#111827", textDecoration: "none", fontWeight: 800, padding: "12px 16px", border: "1px solid #e5e7eb", borderRadius: 999 }}>Transfer RX</a>
            <a href="tel:15176299481" style={{ background: "#dc2626", color: "white", textDecoration: "none", fontWeight: 800, padding: "12px 18px", borderRadius: 999 }}>Call 517-629-9481</a>
          </div>
        </div>
      </header>

      <section style={{ background: "linear-gradient(135deg, #fff1f2 0%, #ffffff 55%, #f8fafc 100%)", padding: "86px 20px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 42, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "white", border: "1px solid #fecaca", color: "#b91c1c", padding: "9px 15px", borderRadius: 999, fontWeight: 800, marginBottom: 22 }}>Serving the community for over 100 years</div>
            <h1 style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.02, margin: 0, fontWeight: 950, letterSpacing: "-2px" }}>Modern pharmacy care. Local feel.</h1>
            <p style={{ marginTop: 22, fontSize: 20, lineHeight: 1.7, color: "#4b5563", maxWidth: 640 }}>Refills, transfers, delivery, blister packs, vaccines, insurance help, and clinic-level medication support — all from your neighborhood pharmacy.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
              <a href="#refill" style={{ ...buttonStyle, textDecoration: "none", display: "inline-block" }}>Request Refill</a>
              <a href="#transfer" style={{ background: "white", color: "#111827", padding: "14px 22px", borderRadius: 999, border: "1px solid #e5e7eb", fontWeight: 800, textDecoration: "none" }}>Transfer to Parks</a>
            </div>
          </div>

          <div style={{ background: "white", borderRadius: 32, boxShadow: "0 24px 70px rgba(15,23,42,.14)", overflow: "hidden" }}>
            <div style={{ background: "#dc2626", color: "white", padding: 32 }}>
              <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 2, color: "#fee2e2" }}>PARKS PHARMACY</div>
              <h2 style={{ margin: "12px 0 0", fontSize: 32, lineHeight: 1.15 }}>Fast refills. Friendly care. Real support.</h2>
              <p style={{ color: "#fee2e2", lineHeight: 1.65 }}>Talk directly with a pharmacy team that knows your name, your medications, and your community.</p>
            </div>
            <div style={{ padding: 28, display: "grid", gap: 14 }}>
              {why.map((item) => (
                <div key={item} style={{ background: "#f8fafc", padding: 16, borderRadius: 18, fontWeight: 800 }}>✓ {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1180, margin: "0 auto", padding: "82px 20px" }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ color: "#dc2626", fontWeight: 950, letterSpacing: 2 }}>WHAT WE DO</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 50px)", margin: "12px 0", lineHeight: 1.1 }}>Pharmacy services built around patients.</h2>
          <p style={{ fontSize: 19, color: "#4b5563", lineHeight: 1.7 }}>From everyday prescriptions to complex medication coordination, we make pharmacy care easier.</p>
        </div>
        <div style={{ marginTop: 38, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18 }}>
          {services.map(([title, text]) => (
            <div key={title} style={{ border: "1px solid #f1f5f9", borderRadius: 24, padding: 24, boxShadow: "0 10px 28px rgba(15,23,42,.05)", background: "white" }}>
              <div style={{ height: 40, width: 40, borderRadius: 14, background: "#fff1f2", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 950, marginBottom: 14 }}>+</div>
              <h3 style={{ margin: 0, fontSize: 21 }}>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#111827", color: "white", padding: "78px 20px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 36 }}>
          <div>
            <div style={{ color: "#fca5a5", fontWeight: 950, letterSpacing: 2 }}>WHY CHOOSE PARKS</div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 50px)", lineHeight: 1.1 }}>Local pharmacy care with real accountability.</h2>
          </div>
          <div style={{ color: "#d1d5db", fontSize: 18, lineHeight: 1.8 }}>
            <p>We help patients manage refills, understand medications, work through insurance challenges, and stay organized with practical adherence solutions.</p>
            <p>Our goal is simple: dependable pharmacy care with clear communication and personal service.</p>
          </div>
        </div>
      </section>

      <section id="transfer" style={{ background: "#f8fafc", padding: "78px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, marginBottom: 8 }}>Transfer Your Prescription</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>Submit basic information below and our team will contact you. Please do not include sensitive medical details in this form.</p>
          <form action="mailto:parksdrugs@outlook.com" method="post" encType="text/plain" style={{ marginTop: 22 }}>
            <input name="Name" style={inputStyle} placeholder="Full Name" />
            <input name="Phone" style={inputStyle} placeholder="Phone Number" />
            <input name="Current Pharmacy" style={inputStyle} placeholder="Current Pharmacy" />
            <textarea name="Note" style={{ ...inputStyle, minHeight: 110 }} placeholder="Optional note — do not include sensitive health information" />
            <button type="submit" style={buttonStyle}>Submit Transfer Request</button>
          </form>
        </div>
      </section>

      <section id="refill" style={{ padding: "78px 20px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, marginBottom: 8 }}>Request a Refill</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>For urgent refills or clinical questions, please call the pharmacy directly.</p>
          <form action="mailto:parksdrugs@outlook.com" method="post" encType="text/plain" style={{ marginTop: 22 }}>
            <input name="Name" style={inputStyle} placeholder="Full Name" />
            <input name="Phone" style={inputStyle} placeholder="Phone Number" />
            <input name="Medication" style={inputStyle} placeholder="Prescription Number or Medication Name" />
            <input name="Preference" style={inputStyle} placeholder="Pickup or Delivery?" />
            <button type="submit" style={buttonStyle}>Submit Refill Request</button>
          </form>
        </div>
      </section>

      <section style={{ background: "#111827", color: "white", padding: "82px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ color: "#fca5a5", fontWeight: 950, letterSpacing: 2 }}>CLINIC & FACILITY PARTNERSHIPS</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 50px)", lineHeight: 1.1 }}>Medication support for clinics, 340B entities, and long-term care.</h2>
          <p style={{ color: "#d1d5db", fontSize: 18, lineHeight: 1.8 }}>We coordinate medications, adherence packaging, delivery, and eligible long-acting injectable support for care teams and patients.</p>
          <div style={{ display: "grid", gap: 12, marginTop: 26 }}>
            {["Long-acting injectable coordination", "Clinic or patient delivery when available", "Medication tracking and communication", "340B and facility support discussions"].map((item) => (
              <div key={item} style={{ background: "rgba(255,255,255,.08)", padding: 17, borderRadius: 18, fontWeight: 700 }}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "78px 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>
        <div>
          <h2 style={{ fontSize: 40 }}>Hours & Contact</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.7 }}>Call before visiting for holiday hours, vaccine availability, or special medication requests.</p>
        </div>
        <div style={{ border: "1px solid #f1f5f9", borderRadius: 24, padding: 28, boxShadow: "0 10px 28px rgba(15,23,42,.06)", background: "white" }}>
          <p><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</p>
          <p><strong>Saturday:</strong> 9:00 AM – 1:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "20px 0" }} />
          <p><strong>Phone:</strong> 517-629-9481</p>
          <p><strong>Fax:</strong> 517-629-8904</p>
          <p><strong>Email:</strong> parksdrugs@outlook.com</p>
          <p><strong>Address:</strong> 318 S Superior St, Albion, MI 49224</p>
        </div>
      </section>

      <footer style={{ background: "#020617", color: "#cbd5e1", textAlign: "center", padding: 28 }}>
        © {new Date().getFullYear()} Parks Pharmacy. Independent community pharmacy serving Albion, Michigan.
      </footer>
    </main>
  );
}
