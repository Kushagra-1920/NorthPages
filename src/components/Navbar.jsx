import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/pricing';
import { FiInstagram, FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Work', to: 'work' },
  { label: 'Services', to: 'services' },
  { label: 'Process', to: 'process' },
  { label: 'Why Us', to: 'why-us' },
  { label: 'Pricing', to: 'pricing' },
  { label: 'Instagram', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={600}
          className="cursor-pointer select-none py-1"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            North<span className="text-brand-gold">Pages</span>
          </span>
        </ScrollLink>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="text-xs lg:text-sm font-medium text-brand-gray hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA: Direct Instagram Link */}
        <div className="hidden md:flex items-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs lg:text-sm py-2.5 px-5 flex items-center gap-2 group shadow-md"
          >
            <FiInstagram className="w-4 h-4" />
            <span>DM {INSTAGRAM_HANDLE}</span>
            <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:text-brand-gold hover:bg-white/5 transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[420px] opacity-100 border-b border-white/10' : 'max-h-0 opacity-0'
        } bg-brand-surface/98 backdrop-blur-xl`}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="block py-2 text-base font-medium text-brand-gray hover:text-white active:text-brand-gold transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-3 px-5 flex items-center justify-center gap-2 text-center w-full"
              onClick={() => setMenuOpen(false)}
            >
              <FiInstagram className="w-4 h-4" />
              <span>Direct Message @northpages</span>
              <FiArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
