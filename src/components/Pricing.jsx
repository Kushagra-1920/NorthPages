import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { pricingTiers, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/pricing';
import { FiCheck, FiInstagram, FiArrowUpRight } from 'react-icons/fi';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 sm:py-28 bg-brand-surface/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="section-label">07 / PRICING</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Simple, <span className="text-brand-gold italic">Transparent</span> Pricing
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-brand-gray text-base sm:text-lg mb-14 max-w-xl">
            No retainers or hidden fees. Every package is ordered and coordinated directly via Instagram DM.
          </p>
        </AnimatedSection>

        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingTiers.map((tier, i) => (
            <AnimatedSection key={tier.id} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-brand-gold/10 border-2 border-brand-gold shadow-2xl shadow-brand-gold/15'
                    : 'bg-brand-surface border border-white/5 hover:border-brand-gold/30'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gold text-brand-bg text-[11px] font-black px-3.5 py-1 rounded-full tracking-wider uppercase shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-brand-gray text-xs sm:text-sm leading-relaxed min-h-[40px]">{tier.description}</p>
                  </div>

                  <div className="mb-6 pt-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">{tier.price}</span>
                    <span className="text-brand-gray text-xs ml-2 uppercase font-medium tracking-wider">USD</span>
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-white/10 pt-5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <FiCheck className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        <span className="text-brand-gray leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-center text-sm font-semibold py-3.5 px-5 rounded-full transition-all duration-300 active:scale-95 ${
                    tier.highlighted
                      ? 'bg-brand-gold text-brand-bg hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/25'
                      : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-bg'
                  }`}
                >
                  <FiInstagram className="w-4 h-4" />
                  <span>{tier.cta}</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center bg-brand-surface/40 border border-white/5 rounded-2xl p-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-white text-sm font-semibold">Have custom requirements?</p>
              <p className="text-brand-gray text-xs">DM me on Instagram to get a tailored quote in minutes.</p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-2.5 px-5 flex items-center gap-2 flex-shrink-0"
            >
              <FiInstagram className="w-3.5 h-3.5" />
              <span>DM {INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
