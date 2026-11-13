import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { INSTAGRAM_URL } from '../data/pricing';
import { FiLayout, FiShoppingBag, FiBarChart2, FiArrowUpRight, FiInstagram } from 'react-icons/fi';

const services = [
  {
    icon: FiLayout,
    badge: 'Design & UX',
    title: 'Conversion-Focused Page Design',
    description:
      'Every section is built on CRO principles: hierarchy, friction removal, and psychological triggers that move visitors toward a decision.',
    price: 'Starting at $899',
    graphicAccent: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    features: [
      'Conversion architecture & wireframing',
      'Buyer psychology & visual hierarchy',
      'High-contrast, action-driving CTAs',
      'Mobile-first responsive design',
    ],
  },
  {
    icon: FiShoppingBag,
    badge: 'Shopify Engineering',
    title: 'UX-Led Shopify Development',
    description:
      'I don’t just theme a store. I re-architect the user journey so browsing turns into buying.',
    price: 'Starting at $1,199',
    graphicAccent: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0',
    features: [
      'Native Liquid sections (zero plugin bloat)',
      'Frictionless add-to-cart & checkout paths',
      'Blazing-fast load times for paid traffic',
      'Fully editable in Shopify Theme Editor',
    ],
  },
  {
    icon: FiBarChart2,
    badge: 'Analysis & Roadmap',
    title: 'CRO Audits & Teardowns',
    description:
      'A specific, prioritized breakdown of what’s costing you sales — and exactly what to fix first.',
    price: 'Free (then quoted)',
    graphicAccent: 'M18 20V10M12 20V4M6 20v-6',
    features: [
      'Heuristic UX & friction teardown',
      'Copy, hook, and offer analysis',
      'Quick-win roadmap vs. structural fixes',
      'Clear, actionable implementation steps',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-surface/30 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <p className="section-label">02 / SERVICES</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Not Just Pages.{' '}
            <span className="text-brand-gold italic">Conversion Systems.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-brand-gray text-lg mb-16 max-w-xl">
            Reframed around outcomes, not deliverables. Engineered to turn cold ad traffic and casual visitors into paying customers.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={0.1 * (i + 1)}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="card-dark relative flex flex-col h-full group overflow-hidden border border-white/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10"
                >
                  {/* Subtle Abstract Duotone Watermark SVG */}
                  <svg
                    className="absolute -right-6 -bottom-6 w-36 h-36 text-white/[0.02] group-hover:text-brand-gold/[0.05] transition-colors duration-500 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.graphicAccent} />
                  </svg>

                  {/* Header: Duotone Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/30 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold transition-all duration-300">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold/5 border border-brand-gold/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-brand-gray group-hover:text-gray-300 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/5 pt-5 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand-gray">Investment</p>
                      <span className="text-brand-gold text-base font-bold">{service.price}</span>
                    </div>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-gold transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 group-hover:border-brand-gold/30 active:scale-95"
                    >
                      <FiInstagram className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                      <FiArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
