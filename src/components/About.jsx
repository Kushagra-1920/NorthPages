import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { siteImages } from '../data/images';
import { FiCheck } from 'react-icons/fi';

const whoCards = [
  {
    tag: 'SHOPIFY & D2C BRANDS',
    title: 'Shopify & D2C Brands',
    image: siteImages.whoIHelp.shopify.url,
    alt: siteImages.whoIHelp.shopify.alt,
    calloutTop: {
      icon: '📈',
      badge: 'ROAS 3.8×',
      sub: 'Purchases +214 (↑ 43%)',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    calloutBottom: {
      icon: '🛍️',
      badge: 'Shopify Storefront',
      sub: 'Meta Ad Optimized',
    },
    description:
      'Your ads are working. Your page isn’t. I rebuild product pages around buying psychology — layout, copy flow, and visual hierarchy — so the traffic you’re already paying for actually converts.',
    points: [
      'Buying psychology & copy flow',
      'Frictionless checkout paths',
      'Native Shopify themes & sections',
      'Optimized for mobile ad traffic',
    ],
  },
  {
    tag: 'LOCAL & SERVICE BUSINESSES',
    title: 'Service Businesses',
    image: siteImages.whoIHelp.service.url,
    alt: siteImages.whoIHelp.service.alt,
    calloutTop: {
      icon: '⭐',
      badge: '5,000+ Happy Clients',
      sub: '5.0 Rating',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    calloutBottom: {
      icon: '📍',
      badge: 'Serving [City] & Nearby',
      sub: 'Live Booking 24/7',
    },
    description:
      'A visitor decides in seconds whether to trust you. I design lead pages that build credibility instantly and guide visitors straight to the call, the booking, or the form — no friction, no guesswork.',
    points: [
      'Instant trust & social proof placement',
      'Zero-friction booking & inquiry flows',
      'High-intent headline & hook structure',
      'Local & service-specific conversion paths',
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="section-label">01 / WHO I HELP</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-12 sm:mb-16 max-w-3xl">
            Great design means nothing if it{' '}
            <span className="text-brand-gold italic">doesn’t convert</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {whoCards.map((card, i) => (
            <AnimatedSection
              key={card.title}
              delay={0.15 * (i + 1)}
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="card-dark group h-full flex flex-col justify-between overflow-hidden p-0 border border-neutral-800 hover:border-brand-gold/40 hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-300 bg-brand-surface"
              >
                {/* Mockup Image Container */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden border-b border-neutral-800 bg-[#111116] flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width="800"
                    height="500"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Floating Callout 1: Top Right */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-3.5 py-2 rounded-xl shadow-xl shadow-black/15 flex items-center gap-2 pointer-events-none"
                  >
                    <span className="text-sm">{card.calloutTop.icon}</span>
                    <div className="leading-tight text-left">
                      <p className="text-xs font-bold text-gray-950 flex items-center gap-1.5">
                        {card.calloutTop.badge}
                        {card.calloutTop.color && (
                          <span className={`text-[10px] font-semibold ${card.calloutTop.color} ${card.calloutTop.bg} px-1.5 py-0.2 rounded`}>
                            Active
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] font-medium text-gray-500">{card.calloutTop.sub}</p>
                    </div>
                  </motion.div>

                  {/* Floating Callout 2: Bottom Left */}
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.5 }}
                    className="absolute bottom-3.5 left-3.5 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-3.5 py-2 rounded-xl shadow-xl shadow-black/15 flex items-center gap-2 pointer-events-none"
                  >
                    <span className="text-sm">{card.calloutBottom.icon}</span>
                    <div className="leading-tight text-left">
                      <p className="text-xs font-bold text-gray-950">{card.calloutBottom.badge}</p>
                      <p className="text-[10px] font-medium text-gray-500">{card.calloutBottom.sub}</p>
                    </div>
                  </motion.div>

                  {/* Top Left Tag */}
                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-brand-gold border border-brand-gold/30 shadow-md">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-brand-gray text-sm sm:text-base leading-relaxed mb-8">
                      {card.description}
                    </p>
                  </div>

                  <div className="border-t border-neutral-800 pt-6 mt-auto">
                    <ul className="space-y-3">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-xs sm:text-sm text-brand-gray">
                          <span className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold">
                            <FiCheck className="w-3 h-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default About;
