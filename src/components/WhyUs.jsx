import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { FiTrendingUp, FiZap, FiAward } from 'react-icons/fi';

const pillars = [
  {
    icon: FiTrendingUp,
    badge: 'Outcome Driven',
    title: 'CRO-First Thinking',
    description:
      'Every design decision is backed by conversion principles, not just aesthetics.',
    subtext: 'Visual hierarchy, psychological triggers, and strategic friction removal ensure every visitor is guided toward buying or booking.',
  },
  {
    icon: FiZap,
    badge: 'Zero Friction',
    title: 'Elevated User Experience',
    description:
      'Fast, intuitive, frictionless — visitors should never have to think about how to take the next step.',
    subtext: 'Sub-second load times, thumb-friendly mobile layouts, and crystal-clear call-to-actions eliminate drop-offs.',
  },
  {
    icon: FiAward,
    badge: 'Authority & Trust',
    title: 'Brand-Level Polish',
    description:
      'Your business doesn’t need a big budget to look like a market leader. It needs the right page.',
    subtext: 'Boutique-level design and intentional typography that builds instant credibility and justifies premium pricing.',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-brand-gold/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <AnimatedSection>
            <p className="section-label">05 / WHY NORTHPAGES</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Design That Looks Premium.{' '}
              <span className="text-brand-gold italic">Built to Convert.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-brand-gray text-lg leading-relaxed">
              Most designers care only about aesthetics. Most developers care only about code. NorthPages bridges the gap with UX engineering and conversion psychology.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={0.1 * (i + 1)}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="card-dark h-full flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-bg transition-all duration-300">
                        <Icon className="w-6 h-6 text-brand-gold group-hover:text-brand-bg transition-colors" />
                      </div>
                      <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold/5 border border-brand-gold/15">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-white text-base font-medium leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-4">
                    <p className="text-brand-gray text-xs leading-relaxed">
                      {pillar.subtext}
                    </p>
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

export default WhyUs;
