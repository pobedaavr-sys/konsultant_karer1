import React from 'react';
import { PHONE_HREF, PHONE_NUMBER } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacts" className="bg-footerBg text-gray-300 py-12 md:py-16 text-sm">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Карьерный эксперт<br/>Виктория Мельчакова</h3>
            <p className="text-gray-400">Индивидуальные карьерные консультации и менторинг.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wide text-xs">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#requests" onClick={(e) => scrollToSection(e, '#requests')} className="hover:text-white transition-colors">Запросы</a></li>
              <li><a href="#results" onClick={(e) => scrollToSection(e, '#results')} className="hover:text-white transition-colors">Результаты</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#cta-section" onClick={(e) => scrollToSection(e, '#cta-section')} className="hover:text-white transition-colors">Консультация</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wide text-xs">Контакты</h4>
            <a href={PHONE_HREF} className="block text-xl text-white font-bold mb-6 hover:text-accentTag transition-colors">
              {PHONE_NUMBER}
            </a>
            
            <div className="flex flex-col gap-2">
              <a 
                href="https://disk.yandex.ru/i/q0YqPEJms5wOqA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a 
                href="https://disk.yandex.ru/i/gDOwFwSRA4i4Fw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-white transition-colors"
              >
                Публичная оферта
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          © {currentYear} Виктория Мельчакова. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;