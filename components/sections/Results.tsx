import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { clientCases } from '../../constants';

const Results: React.FC = () => {
    const getVisibleItems = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1200) return 3;
        if (window.innerWidth >= 768) return 2;
      }
      return 1;
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(getVisibleItems);
  
    useEffect(() => {
      const handleResize = () => {
        setVisibleItems(getVisibleItems());
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, clientCases.length - visibleItems);

    // Reset index if it goes out of bounds after resize
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [visibleItems, maxIndex, currentIndex]);

    const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section id="results" className="py-16 md:py-24 bg-bgSectionAlt">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 uppercase">
            Результаты клиентов,<br className="hidden md:block"/> которыми горжусь
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            Цифры ниже — пример того, каких изменений удаётся добиться за счёт настройки стратегии, резюме и переговоров.
          </p>
        </div>

        {/* Carousel/Grid logic */}
        <div className="relative">
             <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out pb-8"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {clientCases.map((item) => (
                        <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 pt-10">
                            <div className="bg-bgCard rounded-[24px] p-8 shadow-soft relative h-full flex flex-col mt-4 border border-gray-100">
                                {/* Initial Badge */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primarySoft to-primary flex items-center justify-center text-white text-2xl font-bold shadow-md ring-4 ring-bgSectionAlt">
                                    {item.initial}
                                </div>

                                <div className="mt-8 mb-6 text-center">
                                    <h3 className="font-bold text-lg text-primary leading-tight">{item.name}</h3>
                                </div>

                                <div className="space-y-4 mb-6 text-sm md:text-base flex-grow">
                                    <p>
                                        <span className="font-bold text-textMain">До: </span>
                                        <span className="text-textMuted">{item.before}</span>
                                    </p>
                                    <p>
                                        <span className="font-bold text-textMain">После: </span>
                                        <span className="text-textMuted">{item.after}</span>
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                                    <span className="inline-block bg-accentTag rounded-full px-3 py-1 text-xs font-semibold text-primary">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
             {/* Controls (only if scalable) */}
             <div className="flex justify-center gap-4 mt-4 md:hidden">
                <button onClick={prevSlide} disabled={currentIndex === 0} className="p-2 rounded-full bg-white shadow text-primary disabled:opacity-50"><ArrowLeft size={20}/></button>
                <button onClick={nextSlide} disabled={currentIndex === maxIndex} className="p-2 rounded-full bg-white shadow text-primary disabled:opacity-50"><ArrowRight size={20}/></button>
             </div>
             {/* Desktop arrows */}
             <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 z-10 hidden lg:flex disabled:opacity-0 transition-opacity"
            >
                <ArrowLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-gray-50 z-10 hidden lg:flex disabled:opacity-0 transition-opacity"
            >
                <ArrowRight size={24} />
            </button>

        </div>
      </div>
    </section>
  );
};

export default Results;