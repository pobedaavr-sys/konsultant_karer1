import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="hero-section relative w-full h-[100vh] min-h-[600px] flex items-center bg-bgMain overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/figma/heroy_podlogka.png")' }}
      >
        <div className="absolute inset-0 bg-heroOverlay backdrop-blur-[2px]" />
      </div>

      {/* Main Container - Standardized to 1200px center */}
      <div className="
        relative w-full h-full 
        flex flex-col min-[1000px]:flex-row min-[1000px]:items-center
        max-w-[1200px] mx-auto px-4 lg:px-6
      ">
        
        {/* 
           TEXT CONTENT (.hero-content)
           z-index: 10
        */}
        <div className="
          hero-content
          relative z-10
          flex flex-col 
          items-center text-center
          min-[1000px]:items-start min-[1000px]:text-left
          w-full 
          pt-[12vh] min-[1000px]:pt-0
          min-[1000px]:w-3/5
        ">
           <span 
             className="inline-block py-1 px-3 rounded-full bg-white/60 border border-white/50 backdrop-blur-sm text-textMuted uppercase font-medium shadow-sm tracking-wider"
             style={{ 
               fontSize: 'clamp(10px, 0.8vw, 14px)',
               marginBottom: 'clamp(20px, 3vh, 40px)'
             }}
           >
            карьерный консультант
          </span>
          
          <h1 
            className="font-bold text-textMain tracking-tight leading-[1.1]"
            style={{ 
              fontSize: 'clamp(32px, 4.5vw, 72px)', 
              marginBottom: 'clamp(24px, 4vh, 48px)' 
            }}
          >
            Помогаю выстроить карьеру,<br className="hidden min-[1000px]:block" />
            <span className="text-primary"> найти работу и выйти на новый уровень дохода</span>
          </h1>
          
          <p 
            className="text-textMuted leading-relaxed max-w-xl"
            style={{ 
              fontSize: 'clamp(16px, 1.2vw, 20px)',
              marginBottom: 'clamp(32px, 6vh, 64px)' 
            }}
          >
            От подготовки к собеседованию до плана развития на текущем месте
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center min-[1000px]:justify-start">
            <Button 
              text="ЗАПИСАТЬСЯ" 
              onDesktopClick={openModal} 
              className="!uppercase shadow-xl hero-btn-override"
            />
             <style>{`
               .hero-btn-override {
                 padding: clamp(12px, 1.5vh, 20px) clamp(32px, 3vw, 50px) !important;
                 font-size: clamp(14px, 1vw, 18px) !important;
               }
             `}</style>
          </div>
        </div>

        {/* 
           IMAGE WRAPPER (.hero-image)
           z-index: 5 
        */}
        <div className="
          hero-image
          relative 
          w-full 
          mt-auto
          flex justify-center items-end
          
          min-[1000px]:absolute 
          min-[1000px]:bottom-0 
          min-[1000px]:right-0 
          min-[1000px]:w-2/5
          min-[1000px]:h-[90vh] 
          min-[1000px]:mt-0
          min-[1000px]:z-[5]
          pointer-events-none
        ">
           <img 
            src="https://raw.githubusercontent.com/pobedaavr-sys/is-odniki_sait_viki/main/figma/dlya_heroy_Vika.png"
            alt="Виктория Мельчакова"
            className="
               object-contain drop-shadow-2xl
               h-[50vh] 
               w-auto
               min-[1000px]:h-full
               min-[1000px]:object-bottom
            "
           />
        </div>

      </div>
    </section>
  );
};

export default Hero;