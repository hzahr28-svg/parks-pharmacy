export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Parks Pharmacy is an independent community pharmacy in Albion, Michigan offering prescription refills, transfers, delivery, medication packaging, immunizations, adherence support, and clinic partnerships.",
};

const services = [
  ["Free Local Delivery", "Convenient delivery options for eligible patients in the Albion community."],
  ["Immunizations", "Routine vaccines and prevention support from your local pharmacy team."],
  ["Medication Packaging", "Blister packs and adherence packaging to keep medications organized."],
  ["Long Term Care", "Medication coordination and support for facilities, clinics, and care teams."],
  ["Refill On-The-Go", "Request refill callbacks and prescription support quickly online."],
  ["Insurance Help", "Prior authorization support, plan issue help, and covered-alternative coordination."],
];

const specialties = ["Medication Adherence", "Vaccinations", "Psychiatric Injection Coordination", "Clinic & LTC Support"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 16px",
  border: "1px solid #dbe4ec",
  borderRadius: 12,
  fontSize: 16,
  boxSizing: "border-box",
  marginBottom: 12,
  background: "white",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  background: "#0f8f8f",
  color: "white",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 12px 26px rgba(15,143,143,.24)",
};

const redButton: React.CSSProperties = {
  display: "inline-block",
  background: "#d71920",
  color: "white",
  padding: "14px 22px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
  boxShadow: "0 12px 26px rgba(215,25,32,.18)",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "#f6fbfc", color: "#16323a" }}>
      <header style={{ background: "white", borderBottom: "1px solid #dceff1", position: "sticky", top: 0, zIndex: 20 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: "linear-gradient(135deg,#0f8f8f,#55b7a5)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22 }}>P</div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#16323a", lineHeight: 1 }}>Parks Pharmacy</div>
              <div style={{ color: "#d71920", fontWeight: 800, fontSize: 13, marginTop: 4 }}>Your Local Albion Pharmacy</div>
            </div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "flex-end", fontSize: 14 }}>
            <a href="#services" style={{ color: "#2b5962", textDecoration: "none", fontWeight: 800 }}>Services</a>
            <a href="#about" style={{ color: "#2b5962", textDecoration: "none", fontWeight: 800 }}>Our Pharmacy</a>
            <a href="#providers" style={{ color: "#2b5962", textDecoration: "none", fontWeight: 800 }}>Providers</a>
            <a href="#contact" style={{ color: "#2b5962", textDecoration: "none", fontWeight: 800 }}>Contact</a>
            <a href="tel:15176299481" style={{ ...redButton, padding: "11px 17px" }}>Call</a>
          </nav>
        </div>
      </header>

      <section style={{ background: "linear-gradient(135deg,#e8f8f8 0%,#f6fbfc 46%,#fff 100%)", padding: "86px 22px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -120, top: -120, width: 360, height: 360, borderRadius: 999, background: "rgba(15,143,143,.12)" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 44, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-block", background: "white", color: "#0f8f8f", border: "1px solid #bfe7e6", padding: "9px 15px", borderRadius: 999, fontWeight: 900, marginBottom: 22 }}>Healthier care. Lower stress.</div>
            <h1 style={{ fontSize: "clamp(42px,7vw,76px)", lineHeight: .98, letterSpacing: "-2.5px", margin: 0, color: "#12343b", fontWeight: 950 }}>Local pharmacy care, made easier.</h1>
            <p style={{ marginTop: 22, color: "#4f6f76", fontSize: 20, lineHeight: 1.65, maxWidth: 640 }}>Parks Pharmacy helps patients manage refills, delivery, packaging, vaccines, and insurance issues with a team that actually knows your name.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
              <a href="#transfer" style={primaryButton}>Become a Patient</a>
              <a href="#refill" style={{ ...redButton, background: "white", color: "#d71920", border: "1px solid #ffd5d7", boxShadow: "none" }}>Refill On-The-Go</a>
            </div>
            <div style={{ marginTop: 28, color: "#2b5962", fontWeight: 800 }}>318 S Superior St, Albion, MI • 517-629-9481</div>
          </div>

          <div style={{ background: "white", borderRadius: 34, boxShadow: "0 24px 70px rgba(15,52,59,.14)", overflow: "hidden", border: "1px solid #dceff1" }}>
            <div style={{ background: "linear-gradient(135deg,#0f8f8f,#55b7a5)", padding: 32, color: "white" }}>
              <div style={{ fontWeight: 900, letterSpacing: 2, fontSize: 13, color: "#dff7f6" }}>FEATURED SERVICES</div>
              <h2 style={{ fontSize: 34, lineHeight: 1.12, margin: "12px 0 0" }}>We bring pharmacy care closer to you.</h2>
            </div>
            <div style={{ padding: 28, display: "grid", gap: 13 }}>
              {["Home delivery options", "Medication adherence packaging", "Immunizations", "Clinic and LTC coordination"].map((item) => (
                <div key={item} style={{ background: "#f4fbfb", border: "1px solid #dceff1", borderRadius: 18, padding: 16, fontWeight: 850, color: "#214d55" }}>✓ {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "white", padding: "78px 22px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 42px" }}>
            <div style={{ color: "#0f8f8f", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>PHARMACY SERVICES</div>
            <h2 style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.08, margin: "12px 0", color: "#12343b" }}>Everything you expect from a pharmacy — with better follow-through.</h2>
            <p style={{ color: "#607982", fontSize: 18, lineHeight: 1.7 }}>Inspired by the clean local-pharmacy structure used on modern independent pharmacy sites: services first, pharmacist trust, mobile/refill access, and clear contact information.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))", gap: 18 }}>
            {services.map(([title, text]) => (
              <div key={title} style={{ background: "#f8fcfc", border: "1px solid #dceff1", borderRadius: 26, padding: 28, boxShadow: "0 14px 40px rgba(15,52,59,.055)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 18, background: "#e0f4f4", color: "#0f8f8f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 950, fontSize: 22, marginBottom: 18 }}>+</div>
                <h3 style={{ margin: 0, fontSize: 22, color: "#12343b" }}>{title}</h3>
                <p style={{ color: "#607982", lineHeight: 1.65, marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "78px 22px", background: "#f6fbfc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 34, alignItems: "center" }}>
          <div style={{ background: "linear-gradient(135deg,#12343b,#1f5c63)", color: "white", borderRadius: 34, padding: 36, boxShadow: "0 24px 70px rgba(15,52,59,.16)" }}>
            <div style={{ color: "#9fe3df", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>MEET YOUR PHARMACY</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0" }}>Personalized care from a local team.</h2>
            <p style={{ color: "#d9eeee", fontSize: 18, lineHeight: 1.75 }}>We focus on practical medication support: organizing therapy, simplifying refills, helping with insurance issues, and communicating clearly with patients and care teams.</p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {specialties.map((item) => (
              <div key={item} style={{ background: "white", border: "1px solid #dceff1", borderRadius: 22, padding: 22, fontWeight: 900, color: "#214d55", boxShadow: "0 12px 34px rgba(15,52,59,.045)" }}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="transfer" style={{ padding: "78px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 34 }}>
          <div>
            <div style={{ color: "#0f8f8f", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>NEW PATIENT</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0", color: "#12343b" }}>Transfer to Parks Pharmacy.</h2>
            <p style={{ color: "#607982", fontSize: 18, lineHeight: 1.7 }}>Send us your contact information and our team will call you to complete the transfer securely.</p>
          </div>
          <form action="https://formspree.io/f/maqargoa" method="POST" style={{ background: "#f6fbfc", border: "1px solid #dceff1", borderRadius: 30, padding: 28 }}>
            <input type="hidden" name="Form Type" value="Transfer Prescription Request" />
            <input name="Name" placeholder="Full Name" required style={inputStyle} />
            <input name="Phone" placeholder="Phone Number" required style={inputStyle} />
            <input name="Current Pharmacy" placeholder="Current Pharmacy Name" style={inputStyle} />
            <textarea name="Message" placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information." style={{ ...inputStyle, minHeight: 110 }} />
            <p style={{ color: "#607982", fontSize: 13, lineHeight: 1.5 }}>Please do not submit protected health information through this form. We will contact you directly.</p>
            <button type="submit" style={primaryButton}>Submit Transfer Request</button>
          </form>
        </div>
      </section>

      <section id="refill" style={{ padding: "78px 22px", background: "#f6fbfc" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 34 }}>
          <div>
            <div style={{ color: "#0f8f8f", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>REFILL ON-THE-GO</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0", color: "#12343b" }}>Need a refill callback?</h2>
            <p style={{ color: "#607982", fontSize: 18, lineHeight: 1.7 }}>Request a callback and we’ll follow up. For urgent needs, call the pharmacy directly.</p>
          </div>
          <form action="https://formspree.io/f/maqargoa" method="POST" style={{ background: "white", border: "1px solid #dceff1", borderRadius: 30, padding: 28, boxShadow: "0 14px 40px rgba(15,52,59,.055)" }}>
            <input type="hidden" name="Form Type" value="Refill Callback Request" />
            <input name="Name" placeholder="Full Name" required style={inputStyle} />
            <input name="Phone" placeholder="Phone Number" required style={inputStyle} />
            <input name="Preference" placeholder="Pickup or Delivery?" style={inputStyle} />
            <textarea name="Message" placeholder="Optional note — do not include medication names, DOB, Rx numbers, diagnosis, or sensitive health information." style={{ ...inputStyle, minHeight: 110 }} />
            <p style={{ color: "#607982", fontSize: 13, lineHeight: 1.5 }}>Please do not submit protected health information through this form.</p>
            <button type="submit" style={redButton}>Request Refill Callback</button>
          </form>
        </div>
      </section>

      <section id="providers" style={{ padding: "82px 22px", background: "#12343b", color: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 34, alignItems: "center" }}>
          <div>
            <div style={{ color: "#9fe3df", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>CLINICS & FACILITIES</div>
            <h2 style={{ fontSize: "clamp(34px,4vw,52px)", lineHeight: 1.08, margin: "12px 0" }}>Medication coordination for care teams.</h2>
            <p style={{ color: "#d9eeee", fontSize: 18, lineHeight: 1.75 }}>We support clinics, long-term care facilities, and provider offices with adherence packaging, delivery coordination, and eligible long-acting injectable support.</p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {["Clinic and patient delivery coordination", "Long-acting injectable coordination", "Medication packaging and adherence support", "340B and facility partnership discussions"].map((item) => (
              <div key={item} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", padding: 18, borderRadius: 20, fontWeight: 850 }}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "78px 22px", background: "white" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 30 }}>
          <div>
            <div style={{ color: "#0f8f8f", fontSize: 13, fontWeight: 950, letterSpacing: 2 }}>OUR LOCATION</div>
            <h2 style={{ fontSize: 42, lineHeight: 1.08, margin: "12px 0", color: "#12343b" }}>Visit Parks Pharmacy.</h2>
            <p style={{ color: "#607982", fontSize: 18, lineHeight: 1.7 }}>Call before visiting for holiday hours, vaccine availability, or special medication requests.</p>
          </div>
          <div style={{ background: "#f6fbfc", border: "1px solid #dceff1", borderRadius: 30, padding: 30 }}>
            <p><strong>Monday – Friday:</strong> 9:00 AM – 6:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM – 1:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
            <hr style={{ border: 0, borderTop: "1px solid #dceff1", margin: "22px 0" }} />
            <p><strong>Phone:</strong> 517-629-9481</p>
            <p><strong>Fax:</strong> 517-629-8904</p>
            <p><strong>Email:</strong> parksdrugs@outlook.com</p>
            <p><strong>Address:</strong> 318 S Superior St, Albion, MI 49224</p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0b252b", color: "#d9eeee", padding: 30 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <span>© {new Date().getFullYear()} Parks Pharmacy</span>
          <span>Independent community pharmacy serving Albion, Michigan.</span>
        </div>
      </footer>
    </main>
  );
}
