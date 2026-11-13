import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { projects } from '../data/projects';
import { FiExternalLink, FiLock, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
      {/* Light/Neutral Canvas Mockup Stage */}
      <AnimatedSection
        direction={isEven ? 'left' : 'right'}
        delay={0.1}
        className="lg:col-span-7"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative group"
        >
          {/* Laptop Body Frame with Sleek Dark Finish */}
          <div className="relative bg-[#111116] rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
            {/* Top Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e26] border-b border-neutral-800">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>

              {/* URL Address Bar */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open live site"
                className="flex items-center gap-2 bg-[#0d0d12] hover:bg-[#15151e] border border-neutral-800 hover:border-brand-gold/40 rounded-full px-4 py-1 text-xs text-brand-gray hover:text-white w-1/2 max-w-xs justify-center shadow-inner transition-colors"
              >
                <FiLock className="w-3 h-3 text-brand-gold" />
                <span className="truncate">{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              </a>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-brand-gray hidden sm:inline-block">Live Interactive</span>
              </div>
            </div>

            {/* Viewport Live Website Container */}
            <div className="relative overflow-hidden w-full h-[360px] sm:h-[460px] lg:h-[490px] bg-[#0A0A0A]">
              {/* Live Interactive Website Embed */}
              <iframe
                src={project.liveUrl}
                title={`${project.title} live preview`}
                className="w-full h-full border-0 bg-[#0A0A0A]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
              {/* Subtle top glare gradient */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating UI Callout 1: Top Right */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-5 right-5 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-4 py-2.5 rounded-2xl shadow-2xl shadow-black/25 flex items-center gap-2.5 pointer-events-none z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <FiTrendingUp className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-bold text-gray-950 flex items-center gap-1.5">
                +40% Time on Page
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">High Intent</span>
              </p>
              <p className="text-[10px] font-medium text-gray-500">Avg. Session 2m 45s</p>
            </div>
          </motion.div>

          {/* Floating UI Callout 2: Bottom Left */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md border border-black/10 text-gray-900 px-4 py-2.5 rounded-2xl shadow-2xl shadow-black/25 flex items-center gap-2.5 pointer-events-none z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
              <FiCheckCircle className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <p className="text-xs font-bold text-gray-950">Delivered in 2 Days</p>
              <p className="text-[10px] font-medium text-gray-500">Rapid Client Acquisition</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tags bar below mockup */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full border border-brand-gold/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* Case Study Copy & Outcomes */}
      <AnimatedSection
        direction={isEven ? 'right' : 'left'}
        delay={0.2}
        className="lg:col-span-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <p className="text-brand-gold text-xs font-bold tracking-widest uppercase">
            {project.category}
          </p>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
          {project.title}
        </h3>

        {/* Results Highlight Box */}
        <div className="bg-brand-surface border border-brand-gold/25 rounded-2xl p-6 mb-8 relative overflow-hidden group hover:border-brand-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
          <p className="text-xs text-brand-gold uppercase tracking-widest font-bold mb-2 flex items-center gap-1.5">
            <FiCheckCircle className="w-3.5 h-3.5 text-brand-gold" /> Key Commercial Result
          </p>
          <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
            {project.result}
          </p>
        </div>

        <div className="space-y-5 mb-8">
          <div>
            <p className="text-xs text-brand-gray uppercase tracking-widest font-semibold mb-1.5">The Brief</p>
            <p className="text-brand-gray text-sm leading-relaxed">{project.brief}</p>
          </div>
          <div>
            <p className="text-xs text-brand-gray uppercase tracking-widest font-semibold mb-1.5">CRO &amp; UX Strategy</p>
            <p className="text-brand-gray text-sm leading-relaxed">{project.approach}</p>
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2 text-sm px-7 py-3.5 group"
        >
          <span>View Live Site</span>
          <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </AnimatedSection>
    </div>
  );
};

const FeaturedWork = () => {
  return (
    <section id="work" className="py-20 sm:py-28 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="section-label">03 / FEATURED WORK</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Premium Doesn’t Mean Expensive.{' '}
            <span className="text-brand-gold italic">It Means Intentional.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-brand-gray text-lg mb-20 max-w-2xl leading-relaxed">
            This is what a small-scale brand looks like when every pixel is working toward a goal — not just looking nice.
          </p>
        </AnimatedSection>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
