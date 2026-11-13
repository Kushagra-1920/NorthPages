import React from 'react';

const brands = [
  { name: 'Shopify Brands', icon: '🛍️' },
  { name: 'D2C Products', icon: '📦' },
  { name: 'Local Services', icon: '🏢' },
  { name: 'Clinics & Care', icon: '✨' },
  { name: 'Coaches & Studios', icon: '🎯' },
];

const TrustBar = () => {
  return (
    <div className="border-y border-neutral-800 bg-brand-surface/50 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center sm:text-left">
          <p className="text-brand-gray text-[11px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
            Engineered For
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-base sm:text-lg">{brand.icon}</span>
                <span className="text-brand-gray text-xs sm:text-sm font-medium">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
