export const metadata = {
  title: "Provider & Clinic Partnerships | Parks Pharmacy",
  description:
    "Parks Pharmacy partners with clinics, provider offices, long-term care facilities, and care teams for medication coordination, delivery, packaging, and adherence support.",
};

const supportItems = [
  ["Clinic Medication Coordination", "We help coordinate prescriptions, refills, delivery timing, and communication between patients and care teams."],
  ["Long-Acting Injectable Support", "Support for eligible long-acting injectable workflows, including coordination, communication, and patient follow-up."],
  ["Medication Packaging", "Blister packaging and adherence support for patients who need a simpler medication routine."],
  ["Delivery Coordination", "Delivery options for eligible patients, clinics, facilities, and care settings."],
  ["Prior Authorization Support", "We help with insurance issues, prior authorizations, and covered-alternative coordination."],
  ["LTC & Facility Support", "Medication coordination for long-term care, assisted living, and care teams that need reliable follow-through."],
];

const idealPartners = [
  "Psychiatry and behavioral health clinics",
  "Primary care offices",
  "Specialty clinics",
  "Long-term care and assisted living facilities",
  "340B-covered entities and eligible care teams",
  "Surgery centers and outpatient practices",
];

const process = [
  ["1", "Connect", "We learn your clinic workflow, patient needs, and preferred communication process."],
  ["2", "Coordinate", "Our team supports prescriptions, refills, delivery, packaging, and insurance follow-up."],
  ["3", "Follow Through", "We keep communication clear so patients and providers are not left chasing updates."],
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 16px",
  border: "1px solid #dbe4ec",
  borderRadius: 14,
  fontSize: 16,
  boxSizing: "border-box",
  marginBottom: 12,
  background: "white",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "#0ea5e9",
  color: "white",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 12px 26px rgba(14,165,233,.24)",
};

const secondaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "white",
  color: "#0f172a",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid #dbe4ec",
};

export default function ProvidersPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "linear-gradient(to bottom, #eef6ff, #ffffff)",
        color: "#0f172a",
      }}
    >
      <header
        style={{
          background: "rgba(255,255,255,.9)",
          borderBottom: "1px solid #e2e8f0",
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "16px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: 26, fontWeight: 900 }}>Parks Pharmacy</div>
            <div style={{ color: "#0ea5e9", fontWeight: 800, fontSize: 13 }}>
              Provider Partnerships
            </div>
          </a>
          <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#334155", textDecoration: "none", fontWeight: 700 }}>Home</a>
            <a href="#contact" style={primaryButton}>Partner With Us</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "96px 22px 80px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 44,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "white",
                color: "#0284c7",
                border: "1px solid #bae6fd",
                padding: "9px 15px",
                borderRadius: 999,
                fontWeight: 900,
                marginBottom: 22,
              }}
            >
              For clinics, facilities, and care teams
            </div>
            <h1
              style={{
                fontSize: "clamp(44px, 7vw, 76px)",
                fontWeight: 900,
                margin: 0,
                lineHeight: 0.98,
                letterSpacing: "-2.5px",
              }}
            >
              Medication coordination your office can count on.
            </h1>
            <p
              style={{
                fontSize: 20,
                color: "#475569",
                maxWidth: 660,
                lineHeight: 1.65,
                marginTop: 22,
              }}
            >
              Parks Pharmacy helps care teams reduce medication friction with refills,
              adherence packaging, delivery coordination, prior authorization support,
              and eligible long-acting injectable workflows.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              <a href="#contact" style={primaryButton}>Start a Partnership</a>
              <a href="tel:15176299481" style={secondaryButton}>Call 517-629-9481</a>
            </div>
          </div>

          <div
            style={{
              background: "#0f172a",
              color: "white",
              borderRadius: 34,
              padding: 30,
              boxShadow: "0 24px 70px rgba(15,23,42,.18)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg,#0ea5e9,#14b8a6)",
                borderRadius: 26,
                padding: 30,
                marginBottom: 18,
              }}
            >
              <div style={{ fontWeight: 900, letterSpacing: 2, fontSize: 13 }}>
                CLINIC SUPPORT
              </div>
              <h2 style={{ fontSize: 34, lineHeight: 1.12, margin: "12px 0 0" }}>
                Fewer callbacks. Better follow-through.
              </h2>
            </div>
            {[
              "Medication delivery coordination",
              "Adherence packaging support",
              "Prior authorization follow-up",
              "Long-acting injectable coordination",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 18,
                  padding: 16,
                  fontWeight: 800,
                  marginBottom: 12,
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "80px 22px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 790, margin: "0 auto 42px" }}>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              HOW WE HELP
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0" }}>
              Pharmacy support built for real-world clinic workflows.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              We help bridge the gap between prescriptions, patients, insurance, and follow-up.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))", gap: 20 }}>
            {supportItems.map(([title, text]) => (
              <div
                key={title}
                style={{
                  padding: 26,
                  borderRadius: 24,
                  background: "white",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 16,
                    background: "#e0f2fe",
                    color: "#0284c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 950,
                    fontSize: 22,
                    marginBottom: 18,
                  }}
                >
                  +
                </div>
                <h3 style={{ margin: 0, fontSize: 22 }}>{title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "82px 22px", background: "#f8fafc" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 34,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              IDEAL PARTNERS
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0", lineHeight: 1.08 }}>
              Designed for offices that need reliable medication follow-through.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              If medication access, adherence, delivery, or insurance coordination slows down your workflow, Parks Pharmacy can help.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {idealPartners.map((item) => (
              <div
                key={item}
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: 20,
                  padding: 18,
                  fontWeight: 850,
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", color: "white", padding: "82px 22px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ color: "#7dd3fc", fontWeight: 950, letterSpacing: 2 }}>
            SIMPLE PROCESS
          </div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0 36px" }}>
            A partnership process that is easy to start.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {process.map(([number, title, text]) => (
              <div
                key={number}
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 24,
                  padding: 26,
                }}
              >
                <div style={{ color: "#7dd3fc", fontSize: 34, fontWeight: 950 }}>{number}</div>
                <h3 style={{ fontSize: 24, margin: "12px 0" }}>{title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "82px 22px", background: "white" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 34,
          }}
        >
          <div>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              PARTNER WITH PARKS
            </div>
            <h2 style={{ fontSize: 42, margin: "12px 0" }}>
              Start the conversation.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              Send your clinic or facility information and our team will follow up to discuss workflow, delivery, packaging, and coordination needs.
            </p>
            <p style={{ color: "#334155", fontWeight: 800, marginTop: 24 }}>
              Phone: 517-629-9481<br />Fax: 517-629-8904<br />Email: parksdrugs@outlook.com
            </p>
          </div>

          <form
            action="https://formspree.io/f/maqargoa"
            method="POST"
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 30,
              padding: 28,
            }}
          >
            <input type="hidden" name="Form Type" value="Provider Partnership Inquiry" />
            <input name="Name" placeholder="Your Name" required style={inputStyle} />
            <input name="Clinic or Facility" placeholder="Clinic / Facility Name" required style={inputStyle} />
            <input name="Phone" placeholder="Phone Number" required style={inputStyle} />
            <input name="Email" placeholder="Email Address" style={inputStyle} />
            <textarea
              name="Message"
              placeholder="Tell us what support you are looking for — please do not include patient-specific health information."
              style={{ ...inputStyle, minHeight: 130 }}
            />
            <p style={{ color: "#64748b", fontSize: 13 }}>
              Please do not submit patient-specific protected health information through this form.
            </p>
            <button type="submit" style={primaryButton}>
              Submit Partnership Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer style={{ background: "#020617", color: "#cbd5e1", padding: 30 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} Parks Pharmacy</span>
          <span>Clinic and facility pharmacy support in Albion, Michigan.</span>
        </div>
      </footer>
    </main>
  );
}
