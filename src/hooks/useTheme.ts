
import { useState, useEffect } from 'react';
import { ThemeMode, ThemeColors } from '../types/index';
import { LIGHT_THEME, DARK_THEME } from '../config/constants';

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const theme: ThemeColors = mode === 'dark' ? DARK_THEME : LIGHT_THEME;

  return { mode, theme, toggleTheme };
};
