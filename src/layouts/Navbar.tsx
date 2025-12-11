
import React, { useState } from 'react';
import { ThemeColors, ThemeMode, Language, ViewMode } from '../types/index';
import { Sun, Moon, Play, Save, TestTube2, UploadCloud, Globe, ChevronLeft, Layers, MoreVertical } from 'lucide-react';
import { translations } from '../i18n/index';
import { Button } from '../components/ui/Button';

interface NavbarProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
  viewMode: ViewMode;
  onBackToDashboard: () => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  theme, 
  mode, 
  language,
  viewMode,
  onBackToDashboard,
  toggleTheme,
  toggleLanguage
}) => {
  const t = translations[language].navbar;
  const tWorkspace = translations[language].workspace;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="h-14 border-b flex items-center justify-between px-4 z-30 relative shadow-sm flex-shrink-0"
      style={{ 
        background: theme.surface, 
        borderColor: theme.stroke 
      }}
    >
      <div className="flex items-center gap-4">
        {/* Logo Area */}
        {viewMode === 'dashboard' ? (
           <div className="flex items-center gap-3">
             <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 rounded-lg">
               <Layers className="text-white" size={18} />
             </div>
             <span className="font-bold text-lg tracking-tight" style={{ color: theme.text }}>
               Vision<span className="text-blue-500">Flow</span>
             </span>
           </div>
        ) : (
          /* Editor Back Button & Title */
          <div className="flex items-center gap-3">
             <button 
                onClick={onBackToDashboard}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                title={t.backToDash}
                style={{ color: theme.text }}>
                <ChevronLeft size={20} />
             </button>
             <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700" />
             <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                 <span className="font-bold text-sm tracking-tight" style={{ color: theme.text }}>
                    {t.project}
                 </span>
                 <span className="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {tWorkspace.title}
                 </span>
             </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Editor Actions Toolbar (Only visible in Editor Mode) */}
        {viewMode === 'editor' && (
          <>
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-2">
              <Button theme={theme} variant="ghost" size="sm" icon={Save}>{t.save}</Button>
              <Button theme={theme} variant="ghost" size="sm" icon={TestTube2}>{t.test}</Button>
              <Button theme={theme} variant="ghost" size="sm" icon={UploadCloud}>{t.publish}</Button>
              <div className="h-5 w-[1px] mx-1" style={{ background: theme.stroke }} />
              <Button theme={theme} variant="primary" size="sm" icon={Play} iconPosition="left">
                {t.deploy}
              </Button>
            </div>

            {/* Mobile View - Dropdown */}
            <div className="md:hidden relative">
                <Button 
                   theme={theme} 
                   variant="ghost" 
                   size="icon" 
                   icon={MoreVertical} 
                   onClick={() => setIsMenuOpen(!isMenuOpen)} 
                   className="relative z-50"
                />
                
                {isMenuOpen && (
                   <>
                       <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)} />
                       <div 
                           className="absolute right-0 top-full mt-2 w-48 rounded-xl border shadow-xl z-50 flex flex-col p-1 animate-in fade-in zoom-in-95 duration-200"
                           style={{ background: theme.surface, borderColor: theme.stroke }}
                       >
                           <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-colors text-left" style={{color: theme.text}}>
                               <Save size={16} className="opacity-70" /> {t.save}
                           </button>
                           <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-colors text-left" style={{color: theme.text}}>
                               <TestTube2 size={16} className="opacity-70" /> {t.test}
                           </button>
                           <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-colors text-left" style={{color: theme.text}}>
                               <UploadCloud size={16} className="opacity-70" /> {t.publish}
                           </button>
                           <div className="h-px bg-gray-500/10 my-1" />
                           <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-bold transition-colors text-left shadow-sm">
                               <Play size={16} fill="currentColor" /> {t.deploy}
                           </button>
                       </div>
                   </>
                )}
            </div>

            {/* Separator */}
            <div className="h-5 w-[1px] mx-1 hidden md:block" style={{ background: theme.stroke }} />
          </>
        )}

        {/* Global Toggles */}
        <div className="flex items-center gap-2">
           <button 
            onClick={toggleLanguage}
            className={`px-2 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${mode === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            style={{ color: theme.textSecondary }}
            title="Switch Language"
          >
             <Globe size={16} />
             <span className="text-xs font-bold">{language === 'en' ? 'EN' : '中'}</span>
          </button>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${mode === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            style={{ color: theme.textSecondary }}
            title="Toggle Theme"
          >
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};
