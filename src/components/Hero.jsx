import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { siteImages } from '../data/images';
import { INSTAGRAM_URL } from '../data/pricing';
import { FiTrendingUp, FiZap, FiCheckCircle, FiInstagram, FiArrowUpRight, FiLock } from 'react-icons/fi';

const headlineWords = [
  'Websites',
  'Don’t',
  'Just',
  'Need',
  'to',
  'Look',
  'Good.',
  'They',
  'Need',
  'to',
  'Sell.',
];

const Hero = () => {
  const containerRef = useRef(null);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgTranslateX = useTransform(smoothX, [-300, 300], [-15, 15]);
  const bgTranslateY = useTransform(smoothY, [-300, 300], [-15, 15]);

  const mockupRotateX = useTransform(smoothY, [-300, 300], [3, -3]);
  const mockupRotateY = useTransform(smoothX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-bg pt-28 pb-20 select-none"
    >
      {/* Cinematic Background Image with Gradient Overlay & Parallax */}
      <motion.div
        style={{ x: bgTranslateX, y: bgTranslateY }}
        className="absolute inset-0 pointer-events-none scale-105"
      >
        <img
          src={siteImages.hero.bg}
          alt={siteImages.hero.alt}
          width="1920"
          height="1080"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-[0.7] contrast-125"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/85 to-brand-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12)_0,transparent_65%)]" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Pre-label Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
            CRO-First Web &amp; Landing Page Studio
          </span>
        </motion.div>

        {/* Staggered Word-by-Word Animated Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-6 sm:mb-8">
          {headlineWords.map((word, i) => {
            const isGold = word === 'They' || word === 'Need' || word === 'to' || word === 'Sell.';
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-2.5 sm:mr-4 ${
                  isGold ? 'text-brand-gold italic font-semibold' : ''
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* Subheadline Fade In */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-gray text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12"
        >
          I design and build premium landing pages engineered around conversion — so small and growing brands look, feel, and perform like market leaders.
        </motion.p>

        {/* Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto mb-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm sm:text-base lg:text-lg px-8 sm:px-9 py-3.5 sm:py-4 w-full sm:w-auto text-center justify-center relative group overflow-hidden shadow-xl shadow-brand-gold/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get a Free Conversion Audit</span>
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <ScrollLink
            to="work"
            smooth={true}
            duration={700}
            offset={-80}
            className="text-brand-gray hover:text-white text-sm sm:text-base font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 group py-3 px-6 rounded-full hover:bg-white/5 border border-transparent hover:border-neutral-700 w-full sm:w-auto"
          >
            <span>See the Work</span>
            <span className="group-hover:translate-y-1 transition-transform duration-200">↓</span>
          </ScrollLink>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-brand-gray mb-14"
        >
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-brand-gold w-4 h-4" /> Zero-Fluff CRO Teardown
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-brand-gold w-4 h-4" /> 5–7 Day Turnaround
          </span>
          <span className="flex items-center gap-1.5">
            <FiCheckCircle className="text-brand-gold w-4 h-4" /> 100% Static / Fast Hosting
          </span>
        </motion.div>

        {/* Cohesive Device Mockup Stage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX: mockupRotateX, rotateY: mockupRotateY }}
          className="relative max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-black/80"
        >
          {/* Ambient golden underglow behind canvas */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/15 via-brand-gold/5 to-transparent rounded-[36px] blur-2xl opacity-60 pointer-events-none" />

          {/* Laptop Shell Frame */}
          <div className="relative bg-[#111116] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
            {/* Top Browser Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e26] border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 bg-[#0d0d12] border border-neutral-800 rounded-full px-4 py-1 text-xs text-brand-gray/80 w-1/2 max-w-xs justify-center shadow-inner">
                <FiLock className="w-3 h-3 text-brand-gold" />
                <span className="truncate">northpages.dev/preview</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-brand-gray hidden sm:inline-block">High Conversion Mode</span>
              </div>
            </div>

            {/* Simulated High-Converting Landing Page Screen */}
            <div className="relative h-60 sm:h-80 md:h-96 w-full bg-[#0A0A0A] p-6 sm:p-10 flex flex-col justify-between text-left overflow-hidden">
              {/* Background abstract gradient within screen */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-3">
                  CASE STUDY PREVIEW
                </span>
                <h4 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-lg mb-3">
                  Engineered to Convert Cold Ad Traffic Into <span className="text-brand-gold italic">Customers</span>
                </h4>
                <p className="text-brand-gray text-xs sm:text-sm max-w-md hidden sm:block">
                  High-intent visual hierarchy, strategic friction removal, and sub-second load times.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                <div className="btn-gold text-[11px] sm:text-xs py-2 px-4 shadow">
                  Explore Live Demo →
                </div>
                <div className="text-[11px] text-brand-gray">
                  Tested on 10,000+ Visitors
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Callout 1: Top Right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 sm:top-8 right-2 sm:right-8 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-2 sm:gap-2.5 pointer-events-none z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <FiTrendingUp className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[11px] sm:text-xs font-bold text-gray-950 flex items-center gap-1">
                Conversion Rate +42.6%
                <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">↑ 3.2×</span>
              </p>
              <p className="text-[9px] sm:text-[10px] font-medium text-gray-500">Above Industry Benchmark</p>
            </div>
          </motion.div>

          {/* Floating UI Callout 2: Bottom Left */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 sm:bottom-8 left-2 sm:left-8 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-2 sm:gap-2.5 pointer-events-none z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
              <FiZap className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[11px] sm:text-xs font-bold text-gray-950">Page Speed 99/100</p>
              <p className="text-[9px] sm:text-[10px] font-medium text-gray-500">Google Core Web Vitals Pass</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-2 cursor-pointer"
      >
        <div className="w-5 h-9 rounded-full border-2 border-brand-gold/40 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
