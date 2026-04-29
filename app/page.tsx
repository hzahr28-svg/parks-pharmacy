export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Parks Pharmacy is an independent community pharmacy in Albion, Michigan offering refills, transfers, medication packaging, delivery, vaccines, insurance support, and clinic partnerships.",
};

const services = [
  ["Refills & Transfers", "Fast prescription support with a local team that follows through."],
  ["Medication Packaging", "Blister packaging and refill coordination to simplify daily routines."],
  ["Local Delivery", "Convenient delivery options for eligible patients in the community."],
  ["Vaccines & Injections", "Pharmacist-administered vaccines and injection support."],
  ["Insurance Support", "Prior authorization help, plan issue support, and covered-alternative coordination."],
  ["Clinic & LTC Support", "Medication coordination for clinics, facilities, and care teams."],
];

const stats = [
  ["100+", "years serving the community"],
  ["9–6", "Monday through Friday"],
  ["Local", "independent pharmacy care"],
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 16px",
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  fontSize: 16,
  boxSizing: "border-box",
  marginBottom: 12,
  background: "#fff",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "#b91c1c",
  color: "white",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
};

const secondaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "white",
  color: "#111827",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid #e5e7eb",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif", background: "#fbfaf8", color: "#111827" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(251,250,248,.86)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(17,24,39,.08)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <a href="#top" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, background: "#b91c1c", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900 }}>P</div>
              <div>
                <div style={{ fontSize: 21, fontWeight: 900, letterSpacing: "-.4px" }}>Parks Pharmacy</div>
                <div style={{ color: "#b91c1c", fontSize: 12, fontWeight: 800, letterSpacing: 1.6 }}>ALBION, MI</div>
              </div>
            </div>
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="#services" style={{ color: "#374151", textDecoration: "none", fontWeight: 700 }}>Services</a>
            <a href="#providers" style={{ color: "#374151", textDecoration: "none", fontWeight: 700 }}>Providers</a>
            <a href="#contact" style={{ color: "#374151", textDecoration: "none", fontWeight: 700 }}>Contact</a>
            <a href="tel:15176299481" style={{ ...primaryButton, padding: "11px 17px" }}>Call</a>
          </nav>
        </div>
      </header>

      <section id="top" style={{ position: "relative", overflow: "hidden", padding: "96px 22px 86px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 15%, rgba(185,28,28,.16), transparent 32%), radial-gradient(circle at 10% 20%, rgba(15,23,42,.08), transparent 28%)" }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 44, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #fee2e2", color: "#991b1b", padding: "9px 14px", borderRadius: 999, fontWeight: 850, boxShadow: "0 10px 30px rgba(15,23,42,.05)", marginBottom: 22 }}>
              Independent pharmacy care since 1920s
            </div>
            <h1 style={{ fontSize: "clamp(44px, 7vw, 78px)", lineHeight: .96, margin: 0, fontWeight: 950, letterSpacing: "-3px" }}>
              Pharmacy care that actually works for you.
            </h1>
            <p style={{ marginTop: 24, fontSize: 20, lineHeight: 1.65, color: "#4b5563", maxWidth: 650 }}>
              Refills, transfers, delivery, packaging, vaccines, and insurance support — handled by a local team that knows your name.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              <a href="#transfer" style={primaryButton}>Transfer Prescription</a>
              <a href="#refill" style={secondaryButton}>Request Refill Callback</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginTop: 36, maxWidth: 560 }}>
              {stats.map(([big, small]) => (
                <div key={big} style={{ background: "rgba(255,255,255,.72)", border: "1px solid rgba(229,231,235,.9)", borderRadius: 18, padding: 18 }}>
                  <div style={{ fontSize: 25, fontWeight: 950 }}>{big}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.35 }}>{small}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#111827", color: "white", borderRadius: 34, padding: 30, boxShadow: "0 28px 80px rgba(15,23,42,.22)", border: "1px solid rgba(255,255,255,.1)" }}>
            <div style={{ background: "linear-gradient(135deg, rgba(185,28,28,.9), rgba(127,29,29,.88))", borderRadius: 26, padding: 28, marginBottom: 18 }}>
              <div style={{ fontSize: 13, letterSpacing: 2, color: "#fecaca", fontWeight: 900 }}>PATIENT SUPPORT</div>
              <h2 style={{ fontSize: 34, lineHeight: 1.12, margin: "12px 0" }}>We handle the hard parts.</h2>
              <p style={{ color: "#fee2e2", lineHeight: 1.6, margin: 0 }}>Insurance issues, refill coordination, packaging, and follow-up — simplified.</p>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {["Prior authorization support", "Medication synchronization", "Delivery options", "Direct pharmacist access"].map((item) => (
                <div key={item} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 18, padding: 16, fontWeight: 750 }}>✓ {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: "86px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 700, marginBottom: 38 }}>
            <div style={{ color: "#b91c1c", fontWeight: 950, letterSpacing: 2, fontSize: 13 }}>SERVICES</div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.06, margin: "12px 0", letterSpacing: "-1.5px" }}>Medication support built around real life.</h2>
            <p style={{ color: "#6b7280", fontSize: 18, lineHeight: 1.7 }}>A calmer, more reliable pharmacy experience for patients, families, clinics, and facilities.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {services.map(([title, text], index) => (
              <div key={title} style={{ border: "1px solid #f1f5f9", borderRadius: 26, padding: 26, background: index === 0 ? "#fff7f7" : "#fff", boxShadow: "0 16px 44px rgba(15,23,42,.055)" }}>
                <div style={{ width: 42, height: 42, borderRadius: 16, background: index === 0 ? "#b91c1c" : "#fee2e2", color: index === 0 ? "white" : "#b91c1c", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 950, marginBottom: 18 }}>{index + 1}</div>
                <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-.4px" }}>{title}</h3>
                <p style={{ color: "#6b7280", lineHeight: 1.65, marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "82px 22px", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 26 }}>
          <div style={{ background: "#111827", color: "white", borderRadius: 32, padding: 34 }}>
            <div style={{ color: "#fca5a5", letterSpacing: 2, fontWeight: 950, fontSize: 13 }}>WHY PARKS</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0" }}>Local care with real accountability.</h2>
            <p style={{ color: "#d1d5db", fontSize: 18, lineHeight: 1.7 }}>You should not have to chase down refills, fight insurance alone, or feel like a number. We help manage the details so your medication routine is easier.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {["Speak with a real pharmacy team", "Simplify monthly refills", "Coordinate packaging and delivery", "Support clinics and care teams"].map((item) => (
              <div key={item} style={{ background: "white", border: "1px solid #f1f5f9", borderRadius: 24, padding: 24, fontWeight: 850, boxShadow: "0 12px 34px rgba(15,23,42,.045)" }}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="transfer" style={{ padding: "86px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 34 }}>
          <div>
            <div style={{ color: "#b91c1c", fontWeight: 950, letterSpacing: 2, fontSize: 13 }}>TRANSFER</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0" }}>Transfer to Parks Pharmacy.</h2>
            <p style={{ color: "#6b7280", fontSize: 18, lineHeight: 1.7 }}>Submit your contact information and our team will call you to complete the transfer securely.</p>
          </div>
          <form action="https://formspree.io/f/maqargoa" method="POST" style={{ background: "#fbfaf8", border: "1px solid #f1f5f9", borderRadius: 30, padding: 28 }}>
            <input type="hidden" name="Form Type" value="Transfer Prescription Request" />
            <input name="Name" placeholder="Full Name" required style={fieldStyle} />
            <input name="Phone" placeholder="Phone Number" required style={fieldStyle} />
            <input name="Current Pharmacy" placeholder="Current Pharmacy Name" style={fieldStyle} />
            <textarea name="Message" placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information." style={{ ...fieldStyle, minHeight: 110 }} />
            <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>Please do not submit protected health information through this form. We will contact you directly.</p>
            <button type="submit" style={primaryButton}>Submit Transfer Request</button>
          </form>
        </div>
      </section>

      <section id="refill" style={{ padding: "86px 22px", background: "#fbfaf8" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 34 }}>
          <div>
            <div style={{ color: "#b91c1c", fontWeight: 950, letterSpacing: 2, fontSize: 13 }}>REFILL CALLBACK</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0" }}>Need a refill?</h2>
            <p style={{ color: "#6b7280", fontSize: 18, lineHeight: 1.7 }}>Send a callback request and we’ll follow up. For urgent needs, call the pharmacy directly.</p>
          </div>
          <form action="https://formspree.io/f/maqargoa" method="POST" style={{ background: "white", border: "1px solid #f1f5f9", borderRadius: 30, padding: 28, boxShadow: "0 16px 44px rgba(15,23,42,.055)" }}>
            <input type="hidden" name="Form Type" value="Refill Callback Request" />
            <input name="Name" placeholder="Full Name" required style={fieldStyle} />
            <input name="Phone" placeholder="Phone Number" required style={fieldStyle} />
            <input name="Preference" placeholder="Pickup or Delivery?" style={fieldStyle} />
            <textarea name="Message" placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information." style={{ ...fieldStyle, minHeight: 110 }} />
            <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5 }}>Please do not submit protected health information through this form.</p>
            <button type="submit" style={primaryButton}>Request Refill Callback</button>
          </form>
        </div>
      </section>

      <section id="providers" style={{ padding: "86px 22px", background: "#111827", color: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 34, alignItems: "center" }}>
          <div>
            <div style={{ color: "#fca5a5", fontWeight: 950, letterSpacing: 2, fontSize: 13 }}>FOR CLINICS & FACILITIES</div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.06, margin: "12px 0" }}>Medication coordination for care teams.</h2>
            <p style={{ color: "#d1d5db", fontSize: 18, lineHeight: 1.75 }}>We support clinics, long-term care facilities, and provider offices with medication coordination, adherence packaging, delivery, and eligible long-acting injectable support.</p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {["Clinic and patient delivery coordination", "Long-acting injectable coordination", "Medication packaging and adherence support", "340B and facility partnership discussions"].map((item) => (
              <div key={item} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)", padding: 18, borderRadius: 20, fontWeight: 800 }}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "82px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30 }}>
          <div>
            <div style={{ color: "#b91c1c", fontWeight: 950, letterSpacing: 2, fontSize: 13 }}>VISIT US</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0" }}>Hours & contact.</h2>
            <p style={{ color: "#6b7280", fontSize: 18, lineHeight: 1.7 }}>Call before visiting for holiday hours, vaccine availability, or special medication requests.</p>
          </div>
          <div style={{ background: "#fbfaf8", border: "1px solid #f1f5f9", borderRadius: 30, padding: 30 }}>
            <p><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM – 1:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <hr style={{ border: 0, borderTop: "1px solid #e5e7eb", margin: "22px 0" }} />
            <p><strong>Phone:</strong> 517-629-9481</p>
            <p><strong>Fax:</strong> 517-629-8904</p>
            <p><strong>Email:</strong> parksdrugs@outlook.com</p>
            <p><strong>Address:</strong> 318 S Superior St, Albion, MI 49224</p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#020617", color: "#cbd5e1", padding: 30 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} Parks Pharmacy</span>
          <span>Independent community pharmacy serving Albion, Michigan.</span>
        </div>
      </footer>
    </main>
  );
}
