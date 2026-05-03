"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Shield, Award, Heart, Handshake, ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";

const timeline = [
  { year: "1970", title: "The Beginning", desc: "Founded by the late Sri Ramswarup Agarwal on the foundations of hard work, integrity, and an unwavering commitment to excellence. His exceptional ability to build personal relationships laid the groundwork for everything we have become." },
  { year: "1990s", title: "Building the Network", desc: "Expanded our distribution reach steadily across North Bengal and Sikkim, establishing a reputation for precision, reliability, and dealer partnerships built on mutual trust." },
  { year: "2000s", title: "Superbrand Partnerships", desc: "Became authorized distributors for India's most respected Superbrands — Prince Pipes, Sintex Tanks, Jaquar Bath Fittings, and Racold Geysers — a testament to the trust earned over generations." },
  { year: "2015", title: "The RBC Brand", desc: "Launched our own brand, RBC — a curated range of premium bathroom accessories and designer mirrors, crafted to bring elegance and functionality to modern living spaces." },
  { year: "Today", title: "Five Decades Strong", desc: "One of North Bengal and Sikkim's most trusted distribution companies, with a growing dealer network, a dedicated team, and a continued commitment to enriching lives across the region." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Founded on honesty and transparency, we hold ourselves to the highest standards — in every product we distribute and every promise we make." },
  { icon: Award, title: "Excellence", desc: "A relentless pursuit of quality defines our team. Precision and dedication are not just words — they are the way we work, every single day." },
  { icon: Handshake, title: "Partners as Family", desc: "Our dealer network is the heart of our business. We work closely with every partner to understand their needs and deliver tailored, reliable service." },
  { icon: Heart, title: "Social Responsibility", desc: "We actively contribute to the communities that have supported us through the years — because true success means giving back." },
];

export default function AboutPage() {
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);

  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1920&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="section-tag text-gold">
            <span className="w-8 h-px bg-gold" />
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 max-w-2xl leading-tight">
            Building Homes,
            <br />
            <span className="gradient-text">Building Trust</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Founded in 1970 by the late Sri Ramswarup Agarwal, RBC India has grown over five decades into one of North Bengal and Sikkim&apos;s most trusted distribution companies.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=800&fit=crop"
                  alt="Premium bathroom accessories"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-navy text-white rounded-xl p-5 shadow-navy-lg"
              >
                <div className="font-display text-4xl font-bold text-gold">1970</div>
                <div className="text-white/60 text-xs mt-1">Founded by Sri Ramswarup Agarwal</div>
              </motion.div>

              {/* Gold corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="section-tag">
                <span className="w-8 h-px bg-gold" />
                Who We Are
              </span>
              <h2 className="section-title mb-5">
                Ramswarup Brothers
                <br />
                <span className="gradient-text">and Co.</span>
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Founded in 1970 by the late Sri Ramswarup Agarwal, RBC India was built on the foundations of hard work, integrity, and an unwavering commitment to excellence. In an era defined by manual effort and personal relationships, our founder&apos;s exceptional ability to build lasting networks laid the groundwork for everything we have become today.
                </p>
                <p>
                  Over five decades, we have grown into one of North Bengal and Sikkim&apos;s most trusted distribution companies — navigating challenges, celebrating milestones, and steadily expanding our reach. Our strength has always been our people: a team known for precision, dedication, and a relentless pursuit of quality.
                </p>
                <p>
                  Today, we are proud authorized distributors for some of India&apos;s most respected Superbrands — Prince Pipes, Sintex Tanks, Jaquar Bath Fittings, and Racold Geysers. In recent years, we also launched our own brand, RBC — a curated range of premium bathroom accessories and designer mirrors, crafted to bring elegance and functionality to modern living spaces.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary">
                  Our Products <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-navy">
                  Visit Showroom
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center">
              <span className="w-8 h-px bg-gold" />
              Our Values
              <span className="w-8 h-px bg-gold" />
            </span>
            <h2 className="section-title">What Guides Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <v.icon size={22} className="text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white" ref={timelineRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="section-tag justify-center">
              <span className="w-8 h-px bg-gold" />
              Our Journey
              <span className="w-8 h-px bg-gold" />
            </span>
            <h2 className="section-title">50+ Years of Growth</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`flex gap-6 md:gap-10 items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} ml-10 md:ml-0`}>
                    <div className="bg-white border border-gray-100 shadow-card rounded-xl p-5 hover:shadow-card-hover transition-all duration-300">
                      <div className="text-gold font-bold text-sm mb-1">{item.year}</div>
                      <div className="font-display font-bold text-navy text-lg mb-2">{item.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow" style={{ top: `${i * 160 + 24}px` }} />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
