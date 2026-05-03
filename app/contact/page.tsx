"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?q=80&w=1920&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="section-tag text-gold">
            <span className="w-8 h-px bg-gold" />
            Reach Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Let&apos;s Talk About
            <br />
            <span className="gradient-text">Your Project</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Visit our Siliguri showroom or reach out via phone or WhatsApp. We&apos;re happy to guide you through our complete product range.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact info — left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info cards */}
              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-display text-xl font-bold mb-5">Contact Details</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-sm bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1 uppercase tracking-wider">Address</div>
                      <div className="text-white text-sm leading-relaxed">{contactInfo.addressFull}</div>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-sm bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1 uppercase tracking-wider">Phone</div>
                      <a href={`tel:${contactInfo.phone1.replace(/\s/g, "")}`} className="block text-white text-sm hover:text-gold transition-colors">
                        {contactInfo.phone1}
                      </a>
                      <a href={`tel:${contactInfo.phone2.replace(/[^0-9+]/g, "")}`} className="block text-white text-sm hover:text-gold transition-colors mt-0.5">
                        {contactInfo.phone2}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-9 h-9 rounded-sm bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1 uppercase tracking-wider">Hours</div>
                      <div className="text-white text-sm">{contactInfo.hours}</div>
                      <div className="text-white/40 text-xs mt-0.5">Sunday: Closed</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-xl p-5 hover:bg-[#20bc5c] transition-colors group"
              >
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base">Chat on WhatsApp</div>
                  <div className="text-white/70 text-xs">Typically replies within 30 minutes</div>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-100 aspect-[4/3] relative bg-navy-50">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&fit=crop"
                  alt="Siliguri, West Bengal"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mx-auto mb-2">
                      <MapPin size={20} className="text-navy-dark" />
                    </div>
                    <div className="font-semibold text-navy text-sm">Sevoke Road, Siliguri</div>
                    <div className="text-gray-500 text-xs mt-0.5">West Bengal 734001</div>
                    <a
                      href={contactInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-gold hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry form — right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-100 rounded-xl shadow-card p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Send an Enquiry</h3>
                <p className="text-gray-500 text-sm mb-7">
                  Fill in your details and we&apos;ll get back to you within a few hours.
                </p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-navy mb-2">Message Sent!</h4>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. We&apos;ll contact you within a few hours. Or reach us directly on WhatsApp for faster response.
                    </p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 btn-primary"
                    >
                      Also message on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Rajesh Kumar"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rajesh@example.com"
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        What are you looking for?
                      </label>
                      <select className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-gray-700">
                        <option value="">Select a category...</option>
                        <option>Bathroom Fittings</option>
                        <option>Faucets & Shower Heads</option>
                        <option>Mirrors</option>
                        <option>Kitchen Accessories</option>
                        <option>Towel & Soap Accessories</option>
                        <option>Water Heaters (Racold)</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your project or enquiry..."
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-gray-300 resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send size={15} />
                      Send Enquiry
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Or reach us directly at{" "}
                      <a href={`tel:${contactInfo.phone1}`} className="text-gold hover:underline">
                        {contactInfo.phone1}
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
