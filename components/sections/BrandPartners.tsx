"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { brands } from "@/lib/data";

const brandColors: Record<string, string> = {
  Jaquar: "#1a2744",
  "Essco Jaquar": "#243252",
  Prince: "#c8a96e",
  Sintex: "#1a6b9a",
  EuroGuard: "#2d5a27",
  Scud: "#8b1a1a",
  Racold: "#c0392b",
  "Water Tec": "#1a5f7a",
  Patton: "#4a3728",
  Mirrors: "#6b6b6b",
};

export default function BrandPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const allBrands = [...brands, ...brands];

  return (
    <section className="py-20 md:py-28 bg-navy-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="section-tag">
              <span className="w-8 h-px bg-gold" />
              Brand Partners
            </span>
            <h2 className="section-title">
              Authorized Dealer For
              <br />
              <span className="gradient-text">10+ Premium Brands</span>
            </h2>
          </div>
          <p className="section-subtitle md:max-w-xs text-base">
            We carry only genuine products from India&apos;s most trusted manufacturers.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-50 to-transparent z-10" />

        <div className="marquee-container gap-4">
          {/* Track 1 */}
          <div className="marquee-track gap-4">
            {allBrands.map((brand, i) => (
              <BrandCard key={`a-${i}`} brand={brand} />
            ))}
          </div>
          {/* Track 2 (clone for seamless loop) */}
          <div className="marquee-track gap-4" aria-hidden>
            {allBrands.map((brand, i) => (
              <BrandCard key={`b-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      {/* View all brands CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/brands" className="btn-primary">
            Meet All Our Brands <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 bg-white rounded-lg border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-5 cursor-default mx-2">
      {/* Brand initial / logo placeholder */}
      <div
        className="w-12 h-12 rounded-sm flex items-center justify-center mb-3 font-display font-bold text-xl text-white"
        style={{ backgroundColor: brandColors[brand.name] || "#1a2744" }}
      >
        {brand.name.charAt(0)}
      </div>
      <div className="font-semibold text-navy text-sm mb-0.5">{brand.name}</div>
      <div className="text-gold text-xs font-medium">{brand.tagline}</div>
      <div className="text-gray-400 text-xs mt-1.5 leading-snug line-clamp-2">{brand.speciality}</div>
    </div>
  );
}
