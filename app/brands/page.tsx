"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { brands } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight, Globe, Package } from "lucide-react";

const brandColors: Record<string, { bg: string; text: string }> = {
  Jaquar: { bg: "#1a2744", text: "#c8a96e" },
  "Essco Jaquar": { bg: "#243252", text: "#c8a96e" },
  Prince: { bg: "#1a5f3a", text: "#7dba9a" },
  Sintex: { bg: "#1a4a8a", text: "#8ab4e4" },
  EuroGuard: { bg: "#2d5a27", text: "#9fcf9a" },
  Scud: { bg: "#5a2020", text: "#e49a9a" },
  Racold: { bg: "#8b1a1a", text: "#f4a0a0" },
  "Water Tec": { bg: "#1a4a6a", text: "#7abae4" },
  Patton: { bg: "#4a3728", text: "#c4a07a" },
  Mirrors: { bg: "#3a3a4a", text: "#b0b0c8" },
};

const heroImages = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1631049552240-59c37f38802b?q=80&w=400&h=300&fit=crop",
];

export default function BrandsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 opacity-10">
          {heroImages.map((src, i) => (
            <div key={i} className="relative">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="section-tag text-gold">
            <span className="w-8 h-px bg-gold" />
            Our Partners
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 max-w-2xl">
            Authorized Dealer for
            <br />
            <span className="gradient-text">India&apos;s Finest Brands</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mb-8 leading-relaxed">
            We carry only genuine, warranty-backed products from 10 of India&apos;s most trusted home hardware manufacturers.
          </p>

          <div className="flex flex-wrap gap-4">
            {brands.map((brand) => (
              <span
                key={brand.id}
                className="px-4 py-2 text-xs font-bold tracking-wider border border-white/15 text-white/50 rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
              >
                {brand.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => {
              const colors = brandColors[brand.name] || { bg: "#1a2744", text: "#c8a96e" };
              return (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group card-premium rounded-xl overflow-hidden border border-gray-100"
                >
                  {/* Brand color header */}
                  <div
                    className="h-28 relative flex items-center px-6"
                    style={{ backgroundColor: colors.bg }}
                  >
                    {/* Brand initial */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center font-display font-bold text-2xl border-2"
                        style={{
                          borderColor: colors.text,
                          color: colors.text,
                        }}
                      >
                        {brand.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-display font-bold text-xl">{brand.name}</div>
                        <div className="text-xs font-medium mt-0.5" style={{ color: colors.text }}>
                          {brand.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner element */}
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 rounded-tl-full opacity-20"
                      style={{ backgroundColor: colors.text }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{brand.description}</p>

                    <div className="flex items-start gap-4 text-xs text-gray-400 mb-5">
                      <div className="flex items-center gap-1.5">
                        <Globe size={12} className="text-gold" />
                        <span>{brand.origin}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Package size={12} className="text-gold" />
                        <span>{brand.speciality}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gold font-semibold tracking-wider uppercase">
                        Authorized Dealer
                      </span>
                      <a
                        href="https://wa.me/919382545616"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-navy hover:text-gold transition-colors font-medium"
                      >
                        Enquire <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-50 border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm mb-6 tracking-wider uppercase font-semibold">
            Why Our Products Are Trustworthy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "Genuine Products" },
              { value: "Full", label: "Manufacturer Warranty" },
              { value: "10+", label: "Brand Partnerships" },
              { value: "25+", label: "Years as Dealer" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-2xl font-bold text-gold">{item.value}</div>
                <div className="text-navy text-xs mt-1 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
