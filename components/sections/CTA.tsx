import React from 'react';
import { Clock, Video, FileText, Headphones } from 'lucide-react';
import Button from '../ui/Button';
import { PHONE_HREF, PHONE_NUMBER } from '../../constants';

interface CTAProps {
  openModal: () => void;
}

const CTA: React.FC<CTAProps> = ({ openModal }) => {
  return (
    <section id="cta-section" className="py-20 bg-gradient-to-b from-primary to-footerBg text-white">
      <div className="max-w-[900px] mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Записаться на консультацию</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          Индивидуальная онлайн-встреча длительностью 1,5 часа, где мы разберём вашу карьерную ситуацию, составим план действий и проработаем конкретные шаги для достижения целей. После консультации вы получаете 2 недели поддержки для корректировки стратегии.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
              <Clock className="mb-2 text-accentTag" />
              <span className="text-sm font-medium">Длительность: 1,5 часа</span>
           </div>
           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
              <Video className="mb-2 text-accentTag" />
              <span className="text-sm font-medium">Формат: онлайн</span>
           </div>
           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
              <FileText className="mb-2 text-accentTag" />
              <span className="text-sm font-medium">Индивидуальный план</span>
           </div>
           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
              <Headphones className="mb-2 text-accentTag" />
              <span className="text-sm font-medium">2 недели сопровождения</span>
           </div>
        </div>

        <p className="text-gray-400 mb-4 text-sm">
            Стоимость консультации уточните при записи по телефону.
        </p>
        
        <a href={PHONE_HREF} className="block text-3xl md:text-4xl font-bold text-white mb-8 hover:text-accentTag transition-colors">
            {PHONE_NUMBER}
        </a>

        <div className="flex justify-center">
            <Button text="Хочу на консультацию" onDesktopClick={openModal} className="!text-lg px-12 shadow-none hover:shadow-lg !bg-white !text-primary hover:!bg-gray-100" />
        </div>
      </div>
    </section>
  );
};

export default CTA;