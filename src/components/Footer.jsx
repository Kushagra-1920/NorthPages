import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/pricing';
import { FiInstagram, FiArrowUpRight } from 'react-icons/fi';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {

  return (
    <footer className="bg-brand-surface border-t border-white/5 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand */}
          <div>
            <ScrollLink to="hero" smooth={true} duration={600} className="cursor-pointer inline-block mb-4">
              <span className="font-display text-2xl font-bold text-white">
                North<span className="text-brand-gold">Pages</span>
              </span>
            </ScrollLink>
            <p className="text-brand-gray text-xs sm:text-sm leading-relaxed max-w-xs">
              Premium landing pages engineered around conversion for Shopify brands and service businesses.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase text-brand-gold">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Work', to: 'work' },
                { label: 'Services', to: 'services' },
                { label: 'Process', to: 'process' },
                { label: 'Why Us', to: 'why-us' },
                { label: 'Pricing', to: 'pricing' },
                { label: 'Contact', to: 'contact' },
              ].map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="text-brand-gray hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact exclusively via Instagram */}
          <div>
            <p className="text-white text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase text-brand-gold">
              Inquiries
            </p>
            <p className="text-brand-gray text-xs sm:text-sm mb-4 leading-relaxed">
              Available exclusively via Instagram Direct Message for new page audits and bookings.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-bg text-xs sm:text-sm font-semibold transition-all group"
            >
              <FiInstagram className="w-4 h-4" />
              <span>DM {INSTAGRAM_HANDLE}</span>
              <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-brand-gray/50 text-xs">
            © {CURRENT_YEAR} NorthPages. All rights reserved.
          </p>
          <p className="text-brand-gray/30 text-xs">
            Designed &amp; built by NorthPages • Frontend Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
