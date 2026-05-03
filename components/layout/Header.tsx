"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !isScrolled && !mobileOpen;

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-navy-dark text-white/70 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>North Bengal&apos;s Premier Home Hardware Distributor</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+919382545616"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone size={11} />
              +91 93825 45616
            </a>
            <a
              href={`https://wa.me/919382545616`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHome ? "md:top-[33px]" : "md:top-[33px]"
        } ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-navy border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm bg-gold flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-navy-dark text-base leading-none">R</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-lg leading-none tracking-wide transition-colors ${
                  isTransparent ? "text-white" : "text-navy"
                }`}
              >
                RBC India
              </span>
              <span
                className={`text-[10px] tracking-[0.15em] uppercase leading-none mt-0.5 transition-colors ${
                  isTransparent ? "text-white/60" : "text-gold"
                }`}
              >
                Ramswarup Brothers & Co.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-gold"
                      : "text-gold"
                    : isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-navy hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold transition-transform duration-300 ${
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919382545616"
              className={`hidden lg:flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-300 ${
                isTransparent
                  ? "border border-white/40 text-white hover:bg-white hover:text-navy"
                  : "bg-navy text-white hover:bg-gold hover:text-navy-dark"
              }`}
            >
              <Phone size={14} />
              Call Now
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-sm transition-colors ${
                isTransparent ? "text-white" : "text-navy"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy pt-16 flex flex-col"
          >
            <nav className="flex flex-col p-8 gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-4 text-2xl font-display font-semibold border-b border-white/10 transition-colors ${
                      pathname === link.href ? "text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-8 mt-auto border-t border-white/10">
              <p className="text-white/50 text-xs mb-4 tracking-wider uppercase">Reach Us</p>
              <a
                href="tel:+919382545616"
                className="flex items-center gap-3 text-white hover:text-gold transition-colors mb-3"
              >
                <Phone size={16} />
                +91 93825 45616
              </a>
              <a
                href={`https://wa.me/919382545616`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
