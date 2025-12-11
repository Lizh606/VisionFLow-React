
import { useState } from 'react';
import { Language } from '../types/index';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return { language, toggleLanguage };
};
