import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Truck, ShieldCheck, HeartPulse, Pill, Syringe, PackageCheck, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Pill, title: "Prescription Refills", text: "Fast, accurate refills with real pharmacist access." },
  { icon: PackageCheck, title: "Medication Packaging", text: "Blister packs + med sync for better adherence." },
  { icon: Truck, title: "Delivery", text: "Local delivery for patients, clinics, and LTC." },
  { icon: Syringe, title: "Vaccines & Injections", text: "Vaccines + long-acting injectable support." },
  { icon: HeartPulse, title: "MTM Services", text: "Full medication reviews and therapy optimization." },
  { icon: ShieldCheck, title: "Insurance & PA Help", text: "We handle prior auths and insurance headaches." },
  { icon: PackageCheck, title: "Medication Sync", text: "All meds aligned to one pickup date." },
  { icon: Truck, title: "Clinic & LTC Support", text: "We partner with clinics and facilities." },
  { icon: ShieldCheck, title: "Copay Assistance", text: "We apply copay cards when eligible." }
];

export default function ParksPharmacyWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-red-600 rounded-xl flex items-center justify-center text-white"><Pill /></div>
            <div>
              <p className="font-bold text-lg">Parks Pharmacy</p>
              <p className="text-xs text-red-600">Albion, Michigan</p>
            </div>
          </div>
          <Button className="bg-red-600 text-white">Call 517-629-9481</Button>
        </div>
      </header>

      <main>
        <section className="px-5 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-5xl font-bold">Modern pharmacy care. Local feel.</h1>
            <p className="mt-5 text-lg text-slate-600">Refills, delivery, blister packs, insurance help, and clinic-level support — all from your neighborhood pharmacy.</p>
            <div className="mt-6 flex gap-4">
              <Button className="bg-red-600">Refill</Button>
              <Button variant="outline">Transfer RX</Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <p className="font-bold text-xl mb-4">Quick Contact</p>
              <p>📞 517-629-9481</p>
              <p>📠 517-629-8904</p>
              <p>✉️ parksdrugs@outlook.com</p>
              <p>📍 318 S Superior St, Albion MI</p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-7xl mx-auto px-5 py-16">
          <h2 className="text-3xl font-bold mb-10">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title}>
                <CardContent className="p-5">
                  <s.icon className="text-red-600 mb-3" />
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 py-16 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Transfer Your Prescription</h2>
            <div className="grid gap-3">
              <input className="p-3 border" placeholder="Full Name" />
              <input className="p-3 border" placeholder="Phone Number" />
              <input className="p-3 border" placeholder="Current Pharmacy" />
              <Button className="bg-red-600">Submit Transfer</Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Request a Refill</h2>
          <div className="grid gap-3">
            <input className="p-3 border" placeholder="Full Name" />
            <input className="p-3 border" placeholder="Medication Name" />
            <input className="p-3 border" placeholder="Pickup or Delivery?" />
            <Button className="bg-red-600">Submit Refill</Button>
          </div>
        </section>

        <section className="bg-slate-950 text-white py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold">Clinic & 340B Partnerships</h2>
            <p className="mt-4 text-slate-300">We work with clinics, psychiatry offices, and long-term care facilities to coordinate medications, including long-acting injectables, specialty therapies, and adherence programs.</p>
            <ul className="mt-6 space-y-2">
              <li>• LAI support (Sublocade, Brixadi, antipsychotics)</li>
              <li>• Delivery to clinic or patient</li>
              <li>• Medication tracking & coordination</li>
              <li>• 340B support</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white text-center py-6">
        Parks Pharmacy © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
