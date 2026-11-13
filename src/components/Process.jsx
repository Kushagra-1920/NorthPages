import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    description: 'I find where visitors drop off before a single pixel is designed.',
    icon: '🔍',
    detail: 'Heuristic teardown of heatmaps, ad hooks & bounce friction',
  },
  {
    number: '02',
    title: 'Design Concept',
    description: 'Every layout choice is made to guide attention, build trust, and reduce friction.',
    icon: '✏️',
    detail: 'High-conversion wireframes & persuasive visual hierarchy',
  },
  {
    number: '03',
    title: 'Build & Review',
    description: 'Pixel-perfect, fast-loading, mobile-first — because a slow or clunky page kills conversions.',
    icon: '⚙️',
    detail: 'Lightweight static code with zero plugin dependencies',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Live doesn’t mean done. I track what’s working and refine from there.',
    icon: '🚀',
    detail: 'Conversion monitoring and 14-day post-launch warranty',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-brand-surface/20 relative overflow-hidden">
      {/* Background ambient gold aura */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <p className="section-label">04 / HOW IT WORKS</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
            A Process Built Around Conversion,{' '}
            <span className="text-brand-gold italic">Not Just Design</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-brand-gray text-lg mb-20 max-w-xl">
            Structured for maximum velocity and high-impact conversion gains — from heuristic teardown to continuous optimization.
          </p>
        </AnimatedSection>

        {/* Desktop: Horizontal Timeline with Animated Self-Drawing Line */}
        <div className="hidden lg:block relative mb-12">
          {/* SVG Animated Connecting Line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-4 pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Background Guide Line */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Animated Gold Drawing Line on Scroll / In View */}
              <motion.line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#C9A227"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={0.15 * (i + 1)}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Glowing Node Circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-brand-gold/40 bg-brand-surface flex items-center justify-center group-hover:border-brand-gold group-hover:shadow-xl group-hover:shadow-brand-gold/25 transition-all duration-300">
                      <span className="text-3xl filter drop-shadow">{step.icon}</span>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-bg border border-brand-gold text-brand-gold text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-widest">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm font-medium leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-brand-gray text-xs leading-relaxed max-w-xs">
                    {step.detail}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline with Animated Connector */}
        <div className="lg:hidden relative">
          {/* Vertical connector line */}
          <div className="absolute top-6 bottom-6 left-7 w-0.5 bg-gradient-to-b from-brand-gold via-brand-gold/40 to-transparent" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={0.1 * (i + 1)}>
                <div className="flex gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-full border-2 border-brand-gold/50 bg-brand-surface flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-gold/10">
                    <span className="text-xl">{step.icon}</span>
                  </div>

                  <div className="pb-4">
                    <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                      STEP {step.number}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white text-sm font-medium leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-brand-gray text-xs leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
