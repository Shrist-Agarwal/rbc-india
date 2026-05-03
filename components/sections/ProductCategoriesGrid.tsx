"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { productCategories } from "@/lib/data";

const featured = productCategories.slice(0, 8);

export default function ProductCategoriesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-tag">
            <span className="w-8 h-px bg-gold" />
            Our Range
          </span>
          <h2 className="section-title mb-4">
            Everything Your Home
            <br />
            <span className="gradient-text">Deserves</span>
          </h2>
          <p className="section-subtitle">
            From premium faucets to elegant bathroom accessories — browse our complete range of home hardware solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {featured.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <Link
                href={`/products#${category.id}`}
                className="group relative overflow-hidden rounded-lg aspect-square block bg-navy-dark"
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="font-display text-white font-semibold text-sm md:text-base leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                    {category.name}
                  </div>
                  <div className="text-white/40 text-xs">{category.count}</div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <div className="w-7 h-7 rounded-full bg-gold/90 flex items-center justify-center">
                    <ArrowRight size={12} className="text-navy-dark" />
                  </div>
                </div>

                {/* Gold border reveal on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/products" className="btn-navy">
            View All 16 Categories <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
