import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '../data/testimonials';
import { FiStar } from 'react-icons/fi';

const Stars = ({ count = 5 }) => (
  <div className="flex gap-1.5 mb-5">
    {Array.from({ length: count }).map((_, i) => (
      <FiStar
        key={i}
        className="w-4 h-4 text-brand-gold fill-brand-gold"
        style={{ fill: '#C9A227' }}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="section-label">06 / WHAT CLIENTS SAY</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12 sm:mb-16 max-w-xl">
            Results That{' '}
            <span className="text-brand-gold italic">Speak</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="card-dark h-full flex flex-col justify-between group hover:border-brand-gold/40 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Quotation watermark */}
                <span className="absolute -top-2 right-4 text-7xl font-display text-white/[0.04] select-none pointer-events-none group-hover:text-brand-gold/[0.08] transition-colors">
                  &ldquo;
                </span>

                <div>
                  <Stars />
                  <blockquote className="text-white text-base sm:text-lg font-light leading-relaxed mb-8 font-display italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="border-t border-white/10 pt-5 flex items-center gap-4">
                  {/* Photo Avatar with gold ring border */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/40 group-hover:border-brand-gold flex-shrink-0 transition-colors shadow-md">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={`${t.name} photo`}
                        width="48"
                        height="48"
                        loading="lazy"
                        className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm">
                        {t.name[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-brand-gold transition-colors">
                      {t.name}
                    </p>
                    <p className="text-brand-gray text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
