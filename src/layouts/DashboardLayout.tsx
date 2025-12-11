
import React, { useState, useRef, useEffect } from 'react';
import { ThemeColors, ThemeMode, Language } from '../types/index';
import { 
  Settings, Home, GitBranch, Server, HelpCircle, Bell, 
  ChevronRight, ChevronDown, Search, Briefcase, Check, Plus, Menu, X, ChevronsUpDown,
  Image as ImageIcon, Upload, Coins
} from 'lucide-react';
import { translations } from '../i18n/index';

interface DashboardLayoutProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
  currentView: string;
  onNavigate: (view: string) => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  theme, mode, language, currentView, onNavigate, children 
}) => {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [workspaceSearch, setWorkspaceSearch] = useState('');
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'selfHosted': currentView.startsWith('selfhosted')
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const workspaceRef = useRef<HTMLDivElement>(null);
  const t = translations[language].dashboard;
  const tWorkspace = translations[language].workspace;

  const WORKSPACES = [
      { id: '1', name: tWorkspace.title, type: 'team', plan: 'Pro', members: 8, current: true, initials: 'VF', color: theme.primary },
      { id: '2', name: tWorkspace.personal, type: 'personal', plan: 'Free', members: 1, current: false, initials: 'ME', color: theme.textSecondary },
      { id: '3', name: 'R&D Department', type: 'team', plan: 'Enterprise', members: 24, current: false, initials: 'RD', color: '#8B5CF6' },
  ];

  const filteredWorkspaces = WORKSPACES.filter(ws => ws.name.toLowerCase().includes(workspaceSearch.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workspaceRef.current && !workspaceRef.current.contains(event.target as Node)) {
        setIsWorkspaceOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (key: string) => {
    setExpandedMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavClick = (view: string) => {
      onNavigate(view);
      setIsMobileMenuOpen(false);
  };

  const MenuItem = ({ icon: Icon, label, active = false, onClick, hasSubmenu = false, isExpanded = false }: any) => (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm group relative z-10 ${active ? '' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
      style={{
        color: active ? (mode === 'dark' ? theme.primary : '#2563EB') : theme.textSecondary,
        background: active ? (mode === 'dark' ? `${theme.primary}15` : '#EFF6FF') : 'transparent'
      }}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className={active ? '' : 'opacity-80 group-hover:opacity-100'} strokeWidth={active ? 2.5 : 2} />
        <span>{label}</span>
      </div>
      {hasSubmenu && (
          <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} opacity-50`} />
      )}
    </button>
  );

  const SubMenuItem = ({ label, active = false, onClick }: { label: string, active?: boolean, onClick?: () => void }) => (
      <button 
        onClick={onClick}
        className={`w-full flex items-center gap-3 pl-11 pr-3 py-2 rounded-lg transition-all duration-200 font-medium text-xs group ${active ? '' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
        style={{
            color: active ? (mode === 'dark' ? theme.primary : '#2563EB') : theme.textSecondary,
            background: active ? (mode === 'dark' ? `${theme.primary}10` : '#EFF6FF') : 'transparent'
        }}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-current' : 'bg-transparent border border-current opacity-50'}`} />
        <span>{label}</span>
      </button>
  );

  return (
    <div className="flex-1 flex overflow-hidden relative" style={{ background: theme.background }}>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
      )}

      {/* Sidebar */}
      <div 
        className={`
          w-64 border-r flex flex-col flex-shrink-0 z-40
          bg-surface border-stroke
          fixed inset-y-0 left-0 transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex
          ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}
        style={{ background: theme.surface, borderColor: theme.stroke }}
      >
        <div className="p-4 pb-2 relative z-50" ref={workspaceRef}>
            <div className="flex items-center justify-between mb-2 md:hidden">
                <span className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: theme.textSecondary }}>Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5" style={{ color: theme.text }}>
                    <X size={18} />
                </button>
            </div>

            <button 
                onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
                className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all border group hover:shadow-md ${isWorkspaceOpen ? 'bg-black/5 dark:bg-white/5' : ''}`}
                style={{ 
                    borderColor: isWorkspaceOpen ? theme.primary : (mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'),
                    background: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'white',
                    color: theme.text
                }}
            >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                    <span className="font-bold font-mono text-sm tracking-tight">VF</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                    <div className="text-sm font-bold truncate leading-tight" style={{ color: theme.text }}>{tWorkspace.title}</div>
                    <div className="text-[10px] font-medium opacity-60 truncate">Pro Plan • 8 {tWorkspace.members}</div>
                </div>
                <ChevronsUpDown size={14} className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
            </button>

            {isWorkspaceOpen && (
              <div 
                className="absolute left-4 right-4 top-20 rounded-xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-[100]"
                style={{ 
                    background: theme.surface, 
                    borderColor: theme.stroke, 
                    color: theme.text,
                    boxShadow: mode === 'dark' ? `0 0 0 1px ${theme.stroke}, 0 20px 50px -10px rgba(0,0,0,0.8)` : '0 10px 40px -10px rgba(0,0,0,0.1)'
                }}
              >
                <div className="p-2 border-b" style={{ borderColor: theme.stroke }}>
                   <div 
                     className="flex items-center gap-2 px-2 py-1.5 rounded-lg border transition-colors focus-within:ring-2 focus-within:ring-blue-500/20"
                     style={{ background: theme.background, borderColor: theme.stroke }}
                   >
                      <Search size={14} className="opacity-50" />
                      <input 
                        autoFocus
                        type="text" 
                        placeholder={tWorkspace.searchPlaceholder}
                        value={workspaceSearch}
                        onChange={(e) => setWorkspaceSearch(e.target.value)}
                        className="bg-transparent border-none outline-none text-xs w-full placeholder-opacity-50"
                        style={{ color: theme.text }}
                      />
                   </div>
                </div>

                <div className="p-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
                   <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider opacity-50 flex items-center gap-2" style={{ color: theme.textSecondary }}>
                     <Briefcase size={10} />
                     {tWorkspace.listTitle}
                   </div>
                   
                   {filteredWorkspaces.map(ws => (
                       <button 
                         key={ws.id}
                         className={`w-full flex items-center justify-between p-2 rounded-lg border transition-all group`}
                         style={{
                             borderColor: ws.current ? `${theme.primary}20` : 'transparent',
                             background: ws.current ? `${theme.primary}10` : 'transparent',
                             color: ws.current ? theme.primary : theme.text
                         }}
                       >
                          <div className="flex items-center gap-3 min-w-0">
                             <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-sm"
                                style={{ background: ws.current ? theme.primary : theme.stroke, color: ws.current ? '#fff' : theme.textSecondary }}
                             >
                                 {ws.initials}
                             </div>
                             <div className="text-left min-w-0">
                                <div className="text-sm font-bold leading-none mb-0.5 truncate" style={{ color: ws.current ? theme.primary : theme.text }}>
                                    {ws.name}
                                </div>
                                <div className="text-[10px] opacity-70 flex items-center gap-1.5" style={{ color: ws.current ? theme.primary : theme.textSecondary }}>
                                    <span>{ws.plan}</span>
                                    <span className="w-0.5 h-0.5 rounded-full bg-current opacity-50" />
                                    <span>{ws.members} {tWorkspace.members}</span>
                                </div>
                             </div>
                          </div>
                          {ws.current && <Check size={16} />}
                       </button>
                   ))}

                   <div className="h-px my-1 mx-2" style={{ background: theme.stroke }} />
                   
                   <button 
                     className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors opacity-70 hover:opacity-100"
                     style={{ color: theme.text }}
                   >
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg border border-dashed border-current flex items-center justify-center shrink-0 opacity-50">
                            <Plus size={14} />
                         </div>
                         <span className="text-sm font-medium">{tWorkspace.addTeam}</span>
                      </div>
                   </button>
                </div>
              </div>
            )}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar relative z-10">
           <MenuItem icon={Home} label={t.menu.home} />
           <MenuItem icon={GitBranch} label={t.menu.workflows} active={currentView === 'workflows-list'} onClick={() => handleNavClick('workflows-list')} />
           <MenuItem icon={ImageIcon} label={t.menu.media} active={currentView === 'media'} onClick={() => handleNavClick('media')} />
           
           <MenuItem 
              icon={Server} 
              label={t.menu.selfHosted} 
              active={currentView.startsWith('selfhosted')} 
              hasSubmenu 
              isExpanded={expandedMenus['selfHosted']}
              onClick={() => toggleMenu('selfHosted')}
           />
           <div 
              className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                 expandedMenus['selfHosted'] ? 'max-h-40 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
              }`}
           >
              <SubMenuItem label={t.menu.shOverview} active={currentView === 'selfhosted-overview'} onClick={() => handleNavClick('selfhosted-overview')} />
              <SubMenuItem label={t.menu.shDevices} active={currentView === 'selfhosted-devices' || currentView === 'selfhosted-device-detail'} onClick={() => handleNavClick('selfhosted-devices')} />
              <SubMenuItem label={t.menu.shLicenses} active={currentView === 'selfhosted-licenses'} onClick={() => handleNavClick('selfhosted-licenses')} />
           </div>

           <MenuItem icon={Settings} label={t.menu.settings} />
        </div>

        <div className="p-4 space-y-1 mt-auto relative z-10">
           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium" style={{color: theme.textSecondary}}>
              <HelpCircle size={18} />
              <span>{t.menu.help}</span>
              <ChevronRight size={14} className="ml-auto opacity-40" />
           </button>
           <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium" style={{color: theme.textSecondary}}>
              <Bell size={18} />
              <span>{t.menu.notifications}</span>
           </button>

           <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors mb-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold border-2 border-white dark:border-gray-800 shadow-sm relative shrink-0">
                 <span>ZL</span>
              </div>
              <span className="text-sm font-medium opacity-90 truncate" style={{ color: theme.text }}>zehang li</span>
              <ChevronRight size={14} className="ml-auto opacity-40" />
           </div>

           <div className="rounded-xl overflow-hidden relative group mt-1">
              <div 
                className="p-4 relative z-10 flex flex-col gap-3"
                style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
              >
                  <div className="flex items-center gap-2 text-white/90">
                    <Coins size={16} />
                    <span className="text-xs font-bold">{t.usage.used}</span>
                  </div>
                  
                  <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-blue-400 w-[2%]" />
                  </div>
                  
                  <div className="text-[10px] text-white/60 font-medium tracking-wide">
                     {t.usage.reset}
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-2 rounded-lg text-xs font-bold shadow-lg transition-all">
                    <Upload size={12} />
                    {t.usage.upgrade}
                  </button>
              </div>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
         <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ 
               backgroundImage: `linear-gradient(${theme.text} 1px, transparent 1px), linear-gradient(90deg, ${theme.text} 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
            }}
         />
         
         {/* Mobile Menu Toggle */}
         <div className="md:hidden flex items-center gap-3 mb-6">
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors border"
                style={{ color: theme.text, borderColor: theme.stroke }}
            >
                <Menu size={20} />
            </button>
            <div className="font-bold text-lg" style={{ color: theme.text }}>
                {tWorkspace.title}
            </div>
         </div>
         
         {children}
      </div>
    </div>
  );
};
