"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill={i < count ? "#c8a96e" : "none"}
          stroke="#c8a96e"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden" ref={ref}>
      {/* BG texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(200,169,110,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Large quote icon */}
      <div className="absolute top-10 right-12 opacity-5">
        <Quote size={200} className="text-gold" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag justify-center">
            <span className="w-8 h-px bg-gold" />
            Testimonials
            <span className="w-8 h-px bg-gold" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                <StarRating count={testimonials[active].rating} />
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].review}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="font-bold text-gold text-sm">{testimonials[active].avatar}</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">{testimonials[active].name}</div>
                  <div className="text-white/40 text-xs">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Grid of other testimonials — subtle */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`text-left p-4 rounded-lg border transition-all duration-300 ${
                i === active
                  ? "border-gold/50 bg-gold/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <StarRating count={t.rating} />
              <p className="text-white/50 text-xs mt-2 line-clamp-2 leading-relaxed">{t.review}</p>
              <p className="text-white/40 text-xs mt-2 font-medium">{t.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
