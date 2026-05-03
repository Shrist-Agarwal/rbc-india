import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/brands", label: "Brand Partners" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  categories: [
    { href: "/products#faucets", label: "Faucets" },
    { href: "/products#shower-head", label: "Shower Heads" },
    { href: "/products#bathroom-shelf", label: "Bathroom Shelves" },
    { href: "/products#mirrors", label: "Mirrors" },
    { href: "/products#towel-accessories", label: "Towel Accessories" },
  ],
};

const brandNames = ["Jaquar", "Racold", "Sintex", "Prince", "EuroGuard", "Scud", "Water Tec", "Patton"];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-sm bg-gold flex items-center justify-center">
                <span className="font-display font-bold text-navy-dark text-base">R</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white leading-none">RBC India</div>
                <div className="text-[10px] text-gold tracking-[0.15em] uppercase mt-0.5">
                  Ramswarup Brothers & Co.
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              North Bengal&apos;s most trusted distributor of premium home hardware and bathroom accessories since 1998.
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-gold hover:text-navy-dark transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-0.5 bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              Our Brands
            </h4>
            <ul className="space-y-2.5">
              {brandNames.map((brand) => (
                <li key={brand}>
                  <Link
                    href="/brands"
                    className="text-white/50 hover:text-gold text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-0.5 bg-gold/0 group-hover:bg-gold transition-all duration-300" />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              Find Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/50 leading-relaxed">{contactInfo.addressFull}</span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone1.replace(/\s/g, "")}`}
                  className="flex gap-3 text-sm text-white/50 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  {contactInfo.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone2.replace(/[^0-9+]/g, "")}`}
                  className="flex gap-3 text-sm text-white/50 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  {contactInfo.phone2}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Clock size={16} className="text-gold flex-shrink-0" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="border-y border-white/10 py-4 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...brandNames, ...brandNames, ...brandNames].map((brand, i) => (
            <span key={i} className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase flex-shrink-0">
              {brand}
              <span className="mx-6 text-gold/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
        <p>© {new Date().getFullYear()} Ramswarup Brothers and Co. All rights reserved.</p>
        <p>Premium Home Hardware · Siliguri, West Bengal, India</p>
      </div>
    </footer>
  );
}
