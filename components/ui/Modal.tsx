import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center z-10 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-xl font-bold text-primary mb-4">
          Запись на консультацию
        </h3>
        
        <p className="text-textMain mb-6 text-lg">
          Позвоните нам по телефону
          <br />
          <a href={PHONE_HREF} className="font-bold text-primary hover:text-primarySoft transition-colors block my-2 text-2xl">
            {PHONE_NUMBER}
          </a>
          и мы договоримся о консультации
        </p>

        <p className="text-sm text-textMuted border-t border-gray-100 pt-4">
          Если не получается дозвониться — попробуйте позже или напишите нам.
        </p>
        
        <button
          onClick={onClose}
          className="mt-6 bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;