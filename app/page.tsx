export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Parks Pharmacy is an independent community pharmacy in Albion, Michigan offering prescription refills, transfers, delivery, packaging, immunizations, adherence support, and clinic partnerships.",
};

const services = [
  ["Free Local Delivery", "Convenient delivery options for eligible patients in the Albion community."],
  ["Immunizations", "Routine vaccines and prevention support from your local pharmacy team."],
  ["Medication Packaging", "Blister packs and adherence packaging to keep medications organized."],
  ["Long Term Care", "Medication coordination and support for facilities, clinics, and care teams."],
  ["Refill On-The-Go", "Request refill callbacks and prescription support quickly online."],
  ["Insurance Help", "Prior authorization support, plan issue help, and covered-alternative coordination."],
];

const trustItems = [
  ["100+ Years", "Serving the Albion community"],
  ["Local Team", "Real people who know your name"],
  ["Fast Support", "Refills, transfers, packaging, and delivery"],
];

const switchReasons = [
  "Talk directly with a local pharmacy team",
  "We help with prior authorizations",
  "Medication packaging to simplify routines",
  "Delivery options for eligible patients",
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

const navLink: React.CSSProperties = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
};

export default function Home() {
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
          background: "rgba(255,255,255,.88)",
          borderBottom: "1px solid #e2e8f0",
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 16,
                  background: "linear-gradient(135deg,#0ea5e9,#14b8a6)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 23,
                  fontWeight: 950,
                  boxShadow: "0 12px 24px rgba(14,165,233,.22)",
                }}
              >
                P
              </div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 950, letterSpacing: "-.8px" }}>
                  Parks Pharmacy
                </div>
                <div style={{ color: "#0ea5e9", fontWeight: 850, fontSize: 13 }}>
                  Albion, Michigan
                </div>
              </div>
            </div>
          </a>

          <nav
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a href="#services" style={navLink}>Services</a>
            <a href="/providers" style={navLink}>Providers</a>
            <a href="#contact" style={navLink}>Contact</a>
            <a
              href="#transfer"
              style={{
                ...secondaryButton,
                padding: "11px 17px",
                fontSize: 14,
                boxShadow: "0 8px 20px rgba(15,23,42,.04)",
              }}
            >
              Transfer RX
            </a>
            <a
              href="tel:15176299481"
              style={{
                ...primaryButton,
                padding: "11px 17px",
                fontSize: 14,
              }}
            >
              Call
            </a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "95px 22px 80px" }}>
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
              Independent care. Modern convenience.
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
              Pharmacy care, redefined.
            </h1>

            <p
              style={{
                fontSize: 20,
                color: "#475569",
                maxWidth: 620,
                lineHeight: 1.65,
                marginTop: 22,
              }}
            >
              Personalized service, fast delivery, medication packaging, and real pharmacist
              access — everything you wish your pharmacy actually did.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              <a href="#transfer" style={primaryButton}>
                Transfer Your Prescriptions in 60 Seconds
              </a>
              <a href="#refill" style={secondaryButton}>
                Request a Refill Now
              </a>
            </div>

            <p style={{ marginTop: 28, color: "#334155", fontWeight: 800 }}>
              318 S Superior St, Albion, MI • 517-629-9481
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: 34,
              padding: 30,
              boxShadow: "0 24px 70px rgba(15,23,42,.12)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg,#0ea5e9,#14b8a6)",
                color: "white",
                borderRadius: 26,
                padding: 30,
                marginBottom: 18,
              }}
            >
              <div style={{ fontWeight: 900, letterSpacing: 2, fontSize: 13 }}>
                PATIENT SUPPORT
              </div>
              <h2 style={{ fontSize: 34, lineHeight: 1.12, margin: "12px 0 0" }}>
                We handle the hard parts.
              </h2>
            </div>

            {[
              "Prior authorization support",
              "Medication synchronization",
              "Delivery options",
              "Direct pharmacist access",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
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

      <section style={{ padding: "28px 22px 70px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {trustItems.map(([big, small]) => (
            <div
              key={big}
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 950, color: "#0f172a" }}>{big}</div>
              <div style={{ color: "#64748b", marginTop: 6 }}>{small}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "white", padding: "78px 22px" }}>
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
              WHY SWITCH TO PARKS
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0", lineHeight: 1.08 }}>
              A pharmacy experience built around follow-through.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              We combine the convenience patients expect with the personal accountability only a local pharmacy can provide.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {switchReasons.map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
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

      <section id="services" style={{ background: "white", padding: "80px 22px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 42px" }}>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              PHARMACY SERVICES
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0" }}>
              Everything you expect from a pharmacy — with better follow-through.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              A cleaner, easier pharmacy experience for patients, families, clinics, and care teams.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
              gap: 20,
            }}
          >
            {services.map(([title, text]) => (
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

      <section id="transfer" style={{ padding: "80px 22px" }}>
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
              NEW PATIENT
            </div>
            <h2 style={{ fontSize: 42, margin: "12px 0" }}>Transfer to Parks Pharmacy.</h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              Send us your contact information and our team will call you to complete the transfer securely.
            </p>
          </div>

          <form
            action="https://formspree.io/f/maqargoa"
            method="POST"
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 30,
              padding: 28,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <input type="hidden" name="Form Type" value="Transfer Prescription Request" />
            <input name="Name" placeholder="Full Name" required style={inputStyle} />
            <input name="Phone" placeholder="Phone Number" required style={inputStyle} />
            <input name="Current Pharmacy" placeholder="Current Pharmacy Name" style={inputStyle} />
            <textarea
              name="Message"
              placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information."
              style={{ ...inputStyle, minHeight: 110 }}
            />
            <p style={{ color: "#64748b", fontSize: 13 }}>
              Please do not submit protected health information through this form.
            </p>
            <button type="submit" style={primaryButton}>
              Submit Transfer Request
            </button>
          </form>
        </div>
      </section>

      <section id="refill" style={{ padding: "80px 22px", background: "white" }}>
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
              REFILL CALLBACK
            </div>
            <h2 style={{ fontSize: 42, margin: "12px 0" }}>Need a refill?</h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              Request a callback and we’ll follow up. For urgent needs, call the pharmacy directly.
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
            <input type="hidden" name="Form Type" value="Refill Callback Request" />
            <input name="Name" placeholder="Full Name" required style={inputStyle} />
            <input name="Phone" placeholder="Phone Number" required style={inputStyle} />
            <input name="Preference" placeholder="Pickup or Delivery?" style={inputStyle} />
            <textarea
              name="Message"
              placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information."
              style={{ ...inputStyle, minHeight: 110 }}
            />
            <p style={{ color: "#64748b", fontSize: 13 }}>
              Please do not submit protected health information through this form.
            </p>
            <button type="submit" style={primaryButton}>
              Request Refill Callback
            </button>
          </form>
        </div>
      </section>

      <section id="providers" style={{ padding: "82px 22px", background: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ color: "#7dd3fc", fontWeight: 950, letterSpacing: 2 }}>
            CLINICS & FACILITIES
          </div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0" }}>
            Medication coordination for care teams.
          </h2>
          <p style={{ color: "#cbd5e1", fontSize: 18, lineHeight: 1.75, maxWidth: 820 }}>
            We support clinics, long-term care facilities, and provider offices with adherence packaging,
            delivery coordination, and eligible long-acting injectable support.
          </p>
          <div style={{ marginTop: 28 }}>
            <a href="/providers" style={primaryButton}>
              View Provider Partnership Page
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 22px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              PATIENT TRUST
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "12px 0" }}>
              A pharmacy patients can actually rely on.
            </h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              Parks Pharmacy is built around personal service, clear communication, and follow-through.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              ["“They actually answer the phone.”", "Fast support from a local team that knows the community."],
              ["“They help with insurance issues.”", "Prior authorization and plan support without leaving patients on their own."],
              ["“Way easier than the big chains.”", "Refills, packaging, delivery, and pharmacist access in one place."],
            ].map(([quote, text]) => (
              <div key={quote} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 26, padding: 28, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <div style={{ color: "#f59e0b", fontSize: 22, marginBottom: 12 }}>★★★★★</div>
                <h3 style={{ margin: 0, fontSize: 22 }}>{quote}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 34 }}>
          <div>
            <div style={{ color: "#0ea5e9", fontWeight: 950, letterSpacing: 2 }}>
              VISIT US
            </div>
            <h2 style={{ fontSize: 42, margin: "12px 0" }}>Hours & Contact</h2>
            <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7 }}>
              Call before visiting for holiday hours, vaccine availability, or special medication requests.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a href="https://www.instagram.com/parksdrugs/" target="_blank" rel="noopener noreferrer" style={secondaryButton}>
                Follow on Instagram
              </a>
              <a href="https://www.facebook.com/ParksPharmacyAlbion/" target="_blank" rel="noopener noreferrer" style={secondaryButton}>
                Follow on Facebook
              </a>
            </div>
          </div>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 30, padding: 30 }}>
            <p><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM – 1:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <hr style={{ border: 0, borderTop: "1px solid #e2e8f0", margin: "22px 0" }} />
            <p><strong>Phone:</strong> 517-629-9481</p>
            <p><strong>Fax:</strong> 517-629-8904</p>
            <p><strong>Email:</strong> parksdrugs@outlook.com</p>
            <p><strong>Address:</strong> 318 S Superior St, Albion, MI 49224</p>
            <iframe
              src="https://www.google.com/maps?q=318+S+Superior+St+Albion+MI+49224&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 18, marginTop: 18 }}
              loading="lazy"
            />
            <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5, marginTop: 18 }}>
              Local SEO: Albion pharmacy, pharmacy in Albion MI, prescription delivery Albion MI, medication packaging Albion Michigan.
            </p>
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
