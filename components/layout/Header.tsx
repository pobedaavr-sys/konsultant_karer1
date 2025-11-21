import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  openModal: () => void;
}

const navLinks = [
  { name: 'Запросы', href: '#requests' },
  { name: 'Результаты', href: '#results' },
  { name: 'Что получите', href: '#benefits' },
  { name: 'Как проходит', href: '#process' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Контакты', href: '#contacts' },
];

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col z-50">
          <a href="#" className="font-bold text-lg md:text-xl leading-tight text-primary">
            Карьерный эксперт<br/>Виктория Мельчакова
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-textMain hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button text="Записаться" onDesktopClick={openModal} className="!py-2 !px-6 text-sm" />
        </nav>

        {/* Mobile Burger */}
        <button 
          className="xl:hidden z-50 p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}>
          <nav className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-textMain hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 w-full max-w-xs">
              <Button text="Записаться" onDesktopClick={() => { closeMenu(); openModal(); }} fullWidth />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;