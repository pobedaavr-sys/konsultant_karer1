import React from 'react';
import { trustItems } from '../../constants';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-16 md:py-24 bg-bgSectionAlt">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase">
          Почему мне стоит доверять
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-accentTag rounded-2xl flex items-center justify-center mb-6 text-primary rotate-3">
                <item.icon size={28} strokeWidth={1.5} className="transform -rotate-3" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-4 uppercase leading-tight min-h-[44px] flex items-end">
                {item.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;