"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Shield, Star, Users, MapPin, CheckCircle } from "lucide-react";
import { useRef } from "react";

const pillars = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Every product sourced directly from authorized manufacturers. Zero counterfeits, complete warranty coverage.",
  },
  {
    icon: Star,
    title: "Premium Brands Only",
    description: "We curate only the finest — Jaquar, Racold, Sintex and more. Quality you can see, feel, and trust.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our experienced team advises on the right product for your specific project, budget, and aesthetic.",
  },
  {
    icon: MapPin,
    title: "North Bengal's Choice",
    description: "Deeply rooted in Siliguri since 1998. We know the local market and serve it with pride.",
  },
];

const highlights = [
  "Authorized distributor for 10+ premium brands",
  "Serving residential & commercial projects",
  "Wide range of stainless steel & chrome fittings",
  "Competitive pricing with quality assurance",
  "Trusted by 5000+ customers across North Bengal",
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + highlights */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&fit=crop"
                alt="Premium faucet detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4"
              >
                <div className="text-white font-display text-lg font-semibold mb-1">
                  25+ Years of Excellence
                </div>
                <div className="text-white/70 text-xs">
                  Building homes and trust across West Bengal since 1998
                </div>
              </motion.div>
            </motion.div>

            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-gold/30 rounded-br-lg hidden md:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/30 rounded-tl-lg hidden md:block" />
          </div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">
                <span className="w-8 h-px bg-gold" />
                Why RBC India
              </span>
              <h2 className="section-title mb-4">
                Quality You Can
                <br />
                <span className="gradient-text">Touch & Trust</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-10">
                We&apos;ve built our reputation one satisfied customer at a time. From individual homeowners to large commercial projects, RBC India delivers premium home hardware with genuine care.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <pillar.icon size={18} className="text-gold group-hover:text-navy-dark transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm mb-1">{pillar.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{pillar.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="border-t border-gray-100 pt-8"
            >
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
