export const metadata = {
  title: "Parks Pharmacy | Albion, MI",
  description:
    "Independent community pharmacy in Albion, Michigan offering refills, transfers, packaging, delivery, and clinical support.",
};

const services = [
  ["Prescription Refills", "Fast, accurate refills with real pharmacist access."],
  ["Medication Packaging", "Blister packs and med sync to simplify routines."],
  ["Local Delivery", "Convenient delivery for eligible patients."],
  ["Vaccines & Injections", "Pharmacist-administered vaccines and injections."],
  ["Medication Therapy Management", "Full medication reviews and support."],
  ["Insurance Help", "We handle prior authorizations and insurance issues."],
  ["Medication Sync", "Align all meds to one pickup date."],
  ["Clinic & LTC Support", "We partner with clinics and facilities."],
  ["Copay Assistance", "We help apply eligible copay cards."],
];

const inputStyle = {
  width: "100%",
  padding: "14px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "16px",
};

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "white" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #eee", padding: "20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ margin: 0 }}>Parks Pharmacy</h1>
            <span style={{ color: "red" }}>Albion, Michigan</span>
          </div>
          <a href="tel:15176299481" style={{ background: "red", color: "white", padding: "10px 16px", borderRadius: 20 }}>
            Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 40 }}>Modern pharmacy care. Local feel.</h2>
        <p>Refills, delivery, blister packs, and real support — all from your neighborhood pharmacy.</p>
      </section>

      {/* Services */}
      <section style={{ padding: "40px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2>Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {services.map(([title, text]) => (
            <div key={title} style={{ border: "1px solid #eee", padding: 20, borderRadius: 10 }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transfer */}
      <section style={{ background: "#f5f5f5", padding: 40 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2>Transfer Prescription</h2>
          <input style={inputStyle} placeholder="Full Name" />
          <input style={inputStyle} placeholder="Phone Number" />
          <input style={inputStyle} placeholder="Current Pharmacy" />
          <button style={{ background: "red", color: "white", padding: 14, borderRadius: 10, marginTop: 10 }}>
            Submit
          </button>
        </div>
      </section>

      {/* Refill */}
      <section style={{ padding: 40 }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2>Request Refill</h2>
          <input style={inputStyle} placeholder="Full Name" />
          <input style={inputStyle} placeholder="Medication Name" />
          <button style={{ background: "red", color: "white", padding: 14, borderRadius: 10, marginTop: 10 }}>
            Submit
          </button>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
        <h2>Hours & Contact</h2>
        <p>Mon–Fri: 9–6 | Sat: 9–1 | Sun: Closed</p>
        <p>Phone: 517-629-9481</p>
        <p>Email: parksdrugs@outlook.com</p>
        <p>318 S Superior St, Albion, MI</p>
      </section>

      <footer style={{ textAlign: "center", padding: 20 }}>
        © {new Date().getFullYear()} Parks Pharmacy
      </footer>
    </main>
  );
}
