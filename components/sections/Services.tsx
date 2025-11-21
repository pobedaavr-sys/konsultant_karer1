import React from 'react';
import { services } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-bgMain">
       <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase">
          Другие услуги, которые будут вам интересны
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-100 bg-white p-8 rounded-2xl hover:border-primarySoft/30 transition-colors duration-300">
               <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-primary">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-primary mb-3 text-base uppercase">
                {service.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;