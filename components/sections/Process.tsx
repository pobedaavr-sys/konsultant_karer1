import React from 'react';
import { processSteps } from '../../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-bgSectionAlt">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 uppercase">
            Как проходит консультация
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.id} className="bg-bgCard rounded-2xl p-6 shadow-soft flex flex-col items-center text-center relative border border-transparent hover:border-accentTag transition-colors">
              <div className="w-16 h-16 bg-accentTag rounded-full flex items-center justify-center mb-4 text-iconColor">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-primary mb-3 text-sm md:text-base uppercase min-h-[40px] flex items-center">
                {step.title}
              </h3>
              <p className="text-textMuted text-sm mb-8 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-auto absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 text-textMuted font-bold flex items-center justify-center shadow-sm text-sm">
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-10 shadow-soft text-center max-w-3xl mx-auto border border-accentTag/50">
          <h3 className="text-xl font-bold text-primary mb-4 uppercase">Поддержка после консультации</h3>
          <p className="text-textMain text-lg">
            В течение двух недель вы можете задать уточняющие вопросы в чате и скорректировать действия по результатам первых шагов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;