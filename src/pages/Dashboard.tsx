
import React, { useState, useRef, useEffect } from 'react';
import { ThemeColors, ThemeMode, Language, Workflow } from '../types';
import { 
  Settings, Clock, Activity, MoreVertical, Search, 
  Home, GitBranch, Server, HelpCircle, Bell, ChevronRight, Upload, Coins,
  Image as ImageIcon, Menu, X, ChevronsUpDown, Check, Briefcase, Plus, ChevronLeft, ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { MOCK_WORKFLOWS } from '../mocks';
import { translations } from '../i18n';
import { SelfHostedOverview } from '../features/self-hosted/components/SelfHostedOverview';
import { SelfHostedDevices } from '../features/self-hosted/components/SelfHostedDevices';
import { SelfHostedDeviceDetail } from '../features/self-hosted/components/SelfHostedDeviceDetail';
import { SelfHostedLicenses } from '../features/self-hosted/components/SelfHostedLicenses';
import { MediaLibrary } from '../features/media/components/MediaLibrary';

interface DashboardProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
  onNavigateToEditor: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ theme, mode, language, onNavigateToEditor }) => {
  // This component is kept for backward compatibility reference but mostly replaced by DashboardLayout.
  // The logic below is a simplified placeholder as the main app logic resides in App.tsx now.
  
  return (
    <div className="flex-1 flex overflow-hidden relative">
       <div className="flex-1 flex items-center justify-center text-center p-10 opacity-60">
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-2">Dashboard Moved</h3>
            <p>The dashboard logic has been refactored into modular components and layouts (src/layouts/DashboardLayout.tsx). Please check App.tsx for the new routing structure.</p>
          </div>
       </div>
    </div>
  );
};
