"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm mb-6">
              <Zap size={16} />
              AI + Strategy Consulting
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              MB Consulting
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help companies automate operations, implement AI systems,
              increase profits and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition">
                Book Strategy Call
                <ArrowRight size={18} />
              </button>

              <button className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition">
                View Services
              </button>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 rounded-3xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow">
                <BarChart3 className="mb-4" />
                <h3 className="font-bold text-3xl">+240%</h3>
                <p className="text-gray-500">Revenue Growth</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <Users className="mb-4" />
                <h3 className="font-bold text-3xl">120+</h3>
                <p className="text-gray-500">Clients</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <LineChart className="mb-4" />
                <h3 className="font-bold text-3xl">98%</h3>
                <p className="text-gray-500">Retention</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <ShieldCheck className="mb-4" />
                <h3 className="font-bold text-3xl">24/7</h3>
                <p className="text-gray-500">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation",
                desc: "Automate workflows and save hundreds of hours.",
              },
              {
                title: "Growth Strategy",
                desc: "Scale revenue with data-driven decisions.",
              },
              {
                title: "Analytics",
                desc: "Build dashboards and business intelligence systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white text-black p-8 rounded-3xl"
              >
                <CheckCircle2 className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Why Companies Choose Us
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            MB Consulting combines AI technologies, business analytics and
            growth consulting to help companies move faster, operate smarter
            and outperform competitors.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to scale your business?
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            Let’s build systems that grow your revenue automatically.
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl text-lg hover:scale-105 transition">
            Contact MB Consulting
          </button>
        </div>
      </section>
    </main>
  );
}