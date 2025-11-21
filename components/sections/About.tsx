import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-bgMain">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        
        {/* Header moved out to be centered across full width */}
        <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="w-3 h-3 bg-primary transform rotate-45"></div>
              <span className="text-textMuted uppercase tracking-widest text-sm font-semibold">Карьерный эксперт</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">Обо мне</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Stats & Text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left lg:items-center lg:text-center">
            <div className="grid grid-cols-3 gap-4 mb-8 w-full justify-items-center">
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-bold text-primarySoft mb-2">12+</span>
                <span className="text-xs md:text-sm text-textMuted leading-tight block">лет в HR и консультировании</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-bold text-primarySoft mb-2">10+</span>
                <span className="text-xs md:text-sm text-textMuted leading-tight block">лет управленческого опыта</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl lg:text-5xl font-bold text-primarySoft mb-2">20+</span>
                <span className="text-xs md:text-sm text-textMuted leading-tight block">проектов по построению команд</span>
              </div>
            </div>

            <p className="text-lg text-textMain leading-relaxed max-w-xl mx-auto">
              Работала в крупных банках и управляла командами, поэтому хорошо понимаю задачи бизнеса и логику работодателя.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px] md:max-w-full rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/figma/O_bomne.png" 
                 alt="Виктория Мельчакова" 
                 className="w-full h-auto object-cover"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;