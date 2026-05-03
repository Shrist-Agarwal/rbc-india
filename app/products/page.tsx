"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Search } from "lucide-react";
import { productCategories } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

const placeholderProducts = [
  { id: 1, name: "Premium Series", finish: "Chrome", price: "₹899" },
  { id: 2, name: "Classic Edition", finish: "Brushed Nickel", price: "₹1,299" },
  { id: 3, name: "Luxury Collection", finish: "Gold", price: "₹2,499" },
  { id: 4, name: "Standard Range", finish: "Matte Black", price: "₹699" },
  { id: 5, name: "Designer Pro", finish: "Rose Gold", price: "₹3,199" },
  { id: 6, name: "Essential Pack", finish: "White", price: "₹549" },
];

function CategoryModal({
  category,
  onClose,
}: {
  category: typeof productCategories[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-t-2xl sm:rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="relative h-48 md:h-64">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent rounded-t-xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-5">
            <h3 className="font-display text-2xl font-bold text-white">{category.name}</h3>
            <p className="text-white/60 text-sm">{category.count}</p>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-5">
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{category.description}</p>

          <div className="mb-4 flex items-center gap-2 text-xs text-gold font-semibold tracking-wider uppercase">
            <span className="w-4 h-px bg-gold" />
            Sample Products
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {placeholderProducts.map((p) => (
              <div
                key={p.id}
                className="border border-gray-100 rounded-lg p-3.5 hover:border-gold/40 hover:shadow-card transition-all duration-300"
              >
                <div className="w-full h-24 bg-navy-50 rounded-md mb-3 flex items-center justify-center text-navy/20">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <div className="font-semibold text-navy text-xs mb-0.5">{p.name}</div>
                <div className="text-gray-400 text-xs">{p.finish}</div>
                <div className="text-gold font-bold text-sm mt-1">{p.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href="https://wa.me/919382545616"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-sm py-3"
            >
              Enquire on WhatsApp
            </a>
            <a href="tel:+919382545616" className="btn-navy py-3 px-5">
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [selected, setSelected] = useState<typeof productCategories[0] | null>(null);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filtered = productCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1620626011761-996317702519?q=80&w=1920&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="section-tag justify-center text-gold">
            <span className="w-8 h-px bg-gold" />
            Our Catalogue
            <span className="w-8 h-px bg-gold" />
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
            Product Categories
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Browse all 16 categories of premium home hardware and bathroom accessories
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-sm pl-10 pr-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-16 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No categories match &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {filtered.map((category, i) => (
                <motion.div
                  key={category.id}
                  id={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                >
                  <button
                    onClick={() => setSelected(category)}
                    className="w-full group relative overflow-hidden rounded-lg bg-navy-dark block text-left"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/30 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <div className="font-display text-white font-semibold text-sm md:text-base leading-tight mb-0.5 group-hover:text-gold transition-colors">
                          {category.name}
                        </div>
                        <div className="text-white/40 text-xs">{category.count}</div>
                      </div>

                      {/* Hover CTA */}
                      <div className="absolute inset-x-4 bottom-14 md:bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="flex items-center gap-1.5 text-gold text-xs font-semibold">
                          View Products <ArrowRight size={12} />
                        </span>
                      </div>

                      {/* Border reveal */}
                      <div className="absolute inset-0 rounded-lg border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />

      <AnimatePresence>
        {selected && (
          <CategoryModal category={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
