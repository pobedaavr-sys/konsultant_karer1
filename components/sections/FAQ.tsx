import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '../../constants';

const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-bgMain">
      <div className="max-w-[800px] mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-12 text-center uppercase">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div 
                key={item.id} 
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-primary bg-bgSectionAlt' : 'border-gray-200 bg-white'}`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold ${isOpen ? 'text-primary' : 'text-textMain'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-textMuted leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;