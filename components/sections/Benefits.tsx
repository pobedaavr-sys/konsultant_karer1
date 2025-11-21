
import React from 'react';
import { benefits } from '../../constants';

const Benefits: React.FC = () => {
  return (
    <section 
      id="benefits" 
      className="relative w-full bg-bgMain overflow-visible"
      style={{
        paddingTop: 'clamp(100px, 12vh, 140px)',
        paddingBottom: 'clamp(64px, 8vh, 96px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center uppercase mb-20 md:mb-28"
        >
          Что вы получите на консультации
        </h2>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8"
        >
          {benefits.map((item) => (
            <div 
              key={item.id} 
              className="relative flex flex-col h-full group"
            >
               {/* 
                 Круглое фото, выступающее сверху
                 - Убрана белая рамка (p-1, bg-white)
                 - Добавлен shadow-2xl для объема
                 - Добавлен overflow-hidden на родителя
               */}
               <div 
                  className="absolute left-1/2 -translate-x-1/2 z-20 rounded-full shadow-2xl overflow-hidden"
                  style={{
                    top: '-70px',
                    width: '140px',
                    height: '140px',
                  }}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover relative z-0"
                  />
                  
                  {/* Градиентная заливка поверх фото (интеграция с фиолетовым стилем) */}
                  <div 
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(91, 42, 134, 0.1) 0%, rgba(52, 45, 89, 0.7) 100%)'
                    }}
                  />

                  {/* Легкое размытие по краю (Inner Shadow/Glow) */}
                  <div className="absolute inset-0 z-20 rounded-full shadow-[inset_0_0_20px_5px_rgba(91,42,134,0.6)] pointer-events-none" />
               </div>

               {/* 
                 Основной контейнер карточки с разделением на цвета
               */}
               <div className="flex flex-col h-full rounded-[30px] shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* 
                    Верхняя часть: Фиолетовый блок с заголовком
                  */}
                  <div 
                    className="relative bg-primary rounded-t-[30px] pt-20 pb-9 px-4 text-center"
                    style={{
                       background: 'linear-gradient(180deg, #5B2A86 0%, #342D59 100%)'
                    }}
                  >
                    {/* min-h для выравнивания заголовков и линии раздела */}
                    <h3 className="text-lg font-bold text-white uppercase leading-tight tracking-wide min-h-[3.5rem] flex items-center justify-center">
                      {item.title}
                    </h3>

                    {/* Номер на границе блоков */}
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-md z-10"
                      style={{ bottom: '-28px' }}
                    >
                      {item.number}
                    </div>
                  </div>

                  {/* 
                    Нижняя часть: Серый блок с текстом
                  */}
                  <div className="bg-[#F5F5F5] rounded-b-[30px] pt-12 pb-8 px-6 text-center flex-grow flex flex-col justify-start">
                    <p className="text-textMain leading-relaxed font-medium text-[15px]">
                      {item.description}
                    </p>
                  </div>

               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
