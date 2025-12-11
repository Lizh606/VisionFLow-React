
import React from 'react';
import { ThemeColors, ThemeMode, Language } from '../../types/index';
import { SelfHostedOverview } from '../../features/self-hosted/components/SelfHostedOverview';
import { SelfHostedDevices } from '../../features/self-hosted/components/SelfHostedDevices';
import { SelfHostedDeviceDetail } from '../../features/self-hosted/components/SelfHostedDeviceDetail';
import { SelfHostedLicenses } from '../../features/self-hosted/components/SelfHostedLicenses';
import { translations } from '../../i18n/index';

interface SelfHostedPageProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
  view: string;
  onNavigate: (view: string, id?: string) => void;
  selectedDeviceId?: string;
}

export const SelfHostedPage: React.FC<SelfHostedPageProps> = ({ theme, mode, language, view, onNavigate, selectedDeviceId }) => {
  const tWorkspace = translations[language].workspace;
  const workspaceName = tWorkspace.title;

  if (view === 'selfhosted-devices') {
      return <SelfHostedDevices theme={theme} mode={mode} language={language} onNavigate={onNavigate} workspaceName={workspaceName} />;
  }
  if (view === 'selfhosted-device-detail') {
      return <SelfHostedDeviceDetail theme={theme} mode={mode} language={language} onNavigate={onNavigate} workspaceName={workspaceName} deviceId={selectedDeviceId} />;
  }
  if (view === 'selfhosted-licenses') {
      return <SelfHostedLicenses theme={theme} mode={mode} language={language} onNavigate={onNavigate} workspaceName={workspaceName} />;
  }

  // Default to overview
  return <SelfHostedOverview theme={theme} mode={mode} language={language} onNavigate={onNavigate} workspaceName={workspaceName} />;
};
