import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { siteImages } from '../data/images';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/pricing';
import { FiInstagram, FiArrowUpRight, FiCheck, FiCopy, FiMessageCircle, FiZap } from 'react-icons/fi';

const directInquiries = [
  { label: 'Free Conversion Audit', prompt: 'Hey, I want to get a free conversion audit for my landing page.' },
  { label: 'Single Landing Page ($250)', prompt: 'Hey, I need a Single Landing Page built.' },
  { label: 'Professional Page ($500)', prompt: 'Hey, I want to build a Professional Landing Page.' },
  { label: 'Multi-Page Website ($800–$1200)', prompt: 'Hey, I want to discuss a full multi-page business website.' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText('northpages');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'northpages';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Subtle Texture with Dark Gradient Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src={siteImages.finalCta.texture}
          alt="Abstract dark gold ambient texture"
          width="1600"
          height="900"
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/85 to-brand-bg" />
      </div>

      {/* Animated Glowing Radial Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-gradient-to-r from-brand-gold/30 via-brand-gold-light/20 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <AnimatedSection>
            <p className="section-label">08 / CONTACT VIA INSTAGRAM</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Your Page Should Be{' '}
              <span className="text-brand-gold italic">Your Best Salesperson.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-brand-gray text-base sm:text-lg max-w-xl mx-auto">
              Ready to turn visitors into buyers? I coordinate all projects and audits exclusively on Instagram for immediate, direct communication.
            </p>
          </AnimatedSection>
        </div>

        {/* Direct Instagram Portal Card */}
        <AnimatedSection delay={0.25}>
          <div className="max-w-2xl mx-auto bg-brand-surface/80 border border-brand-gold/30 backdrop-blur-xl rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-center">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            {/* Instagram Verified Avatar Badge */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-1 shadow-xl shadow-brand-gold/10">
                <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center">
                  <FiInstagram className="w-9 h-9 sm:w-11 sm:h-11 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-gold text-brand-bg p-1.5 rounded-full shadow">
                <FiZap className="w-3.5 h-3.5 fill-brand-bg" />
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 px-3.5 py-1 rounded-full mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase">Accepting New Projects</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {INSTAGRAM_HANDLE}
              </h3>
              <p className="text-brand-gray text-xs sm:text-sm mt-1">Direct inquiries &amp; free page teardowns</p>
            </div>

            {/* Fast Topic Selection Pills */}
            <div className="mb-8 text-left">
              <p className="text-center text-xs font-semibold text-brand-gray uppercase tracking-widest mb-3">
                Tap what you need to chat directly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {directInquiries.map((item) => (
                  <a
                    key={item.label}
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-brand-bg/60 border border-white/5 hover:border-brand-gold/40 hover:bg-brand-surface text-xs font-medium text-white transition-all duration-200 group active:scale-95"
                  >
                    <span className="truncate">{item.label}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-brand-gold/20"
              >
                <FiMessageCircle className="w-5 h-5" />
                <span>Open Instagram DM</span>
                <FiArrowUpRight className="w-4 h-4" />
              </motion.a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-white/10 hover:border-brand-gold text-xs sm:text-sm text-brand-gray hover:text-white transition-all flex items-center justify-center gap-2 bg-white/5"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">Handle Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy @northpages</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-brand-gray/60 text-xs mt-8">
              Clicking directly redirects you to Instagram DMs with <span className="text-brand-gold font-medium">@northpages</span>.
              Fastest response time is within a few hours.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
