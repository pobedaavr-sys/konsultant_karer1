import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { popularRequests } from '../../constants';
import Button from '../ui/Button';

interface RequestsProps {
  openModal: () => void;
}

const Requests: React.FC<RequestsProps> = ({ openModal }) => {
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(getVisibleItems); 

  React.useEffect(() => {
    const handleResize = () => setVisibleItems(getVisibleItems());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleItems >= popularRequests.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? popularRequests.length - visibleItems : prev - 1
    );
  };

  const handleScrollToCTA = () => {
    const element = document.getElementById('cta-section');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="requests" className="py-16 md:py-24 bg-bgSectionAlt overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
            САМЫЕ ПОПУЛЯРНЫЕ ЗАПРОСЫ
          </h2>
          <p className="text-lg text-textMuted">на карьерную консультацию</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {popularRequests.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-bgCard rounded-2xl p-6 h-full flex flex-col shadow-soft border border-gray-100 relative group hover:border-accentTag transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs text-textMuted uppercase tracking-wider">{item.number}</span>
                      <div className="w-10 h-10 rounded-full bg-accentTag flex items-center justify-center">
                         <item.icon size={20} className="text-iconColor" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-textMain mb-3 min-h-[56px]">{item.title}</h3>
                    <p className="text-textMuted text-sm mb-4 flex-grow leading-relaxed">{item.description}</p>
                    
                    <div className="mt-auto">
                      <span className="inline-block bg-accentTag/50 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {item.tag}
                      </span>
                      <div 
                        onClick={openModal}
                        className="text-primary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        {item.cta}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 z-10 hidden md:block"
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 z-10 hidden md:block"
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="mt-12 text-center">
          <Button 
            text="ЗАПИСАТЬСЯ" 
            href="#cta-section" 
            onClick={handleScrollToCTA}
            className="!uppercase px-16" 
          />
        </div>
      </div>
    </section>
  );
};

export default Requests;