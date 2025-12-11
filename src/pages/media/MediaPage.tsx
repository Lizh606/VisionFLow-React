
import React from 'react';
import { ThemeColors, ThemeMode, Language } from '../../types/index';
import { MediaLibrary } from '../../features/media/components/MediaLibrary';
import { translations } from '../../i18n/index';

interface MediaPageProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
}

export const MediaPage: React.FC<MediaPageProps> = ({ theme, mode, language }) => {
  const tWorkspace = translations[language].workspace;
  return (
    <MediaLibrary 
        theme={theme} 
        mode={mode} 
        language={language} 
        workspaceName={tWorkspace.title}
    />
  );
};
