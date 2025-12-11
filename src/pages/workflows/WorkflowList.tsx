
import React, { useState } from 'react';
import { ThemeColors, ThemeMode, Language, Workflow } from '../../types/index';
import { 
  Activity, Clock, GitBranch, MoreVertical, Plus, Search, 
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { MOCK_WORKFLOWS } from '../../mocks';
import { translations } from '../../i18n/index';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

interface WorkflowListProps {
  theme: ThemeColors;
  mode: ThemeMode;
  language: Language;
  onNavigateToEditor: (id: string) => void;
}

const GENERATED_WORKFLOWS: Workflow[] = Array.from({ length: 24 }).map((_, i) => {
    const base = MOCK_WORKFLOWS[i % MOCK_WORKFLOWS.length];
    return {
        ...base,
        id: `flow-${i}`,
        name: `${base.name} ${Math.floor(i / 4) + 1}`,
    };
});

const ITEMS_PER_PAGE = 8;

export const WorkflowList: React.FC<WorkflowListProps> = ({ theme, mode, language, onNavigateToEditor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const t = translations[language].dashboard;
  const tSidebar = translations[language].sidebar;
  const tWorkspace = translations[language].workspace;

  const totalPages = Math.ceil(GENERATED_WORKFLOWS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentWorkflows = GENERATED_WORKFLOWS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const StatCard = ({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) => (
     <div 
       className="p-5 rounded-2xl border flex flex-col justify-between h-32 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
       style={{ background: theme.surface, borderColor: theme.stroke }}
     >
       <div className={`absolute top-0 right-0 p-24 opacity-5 rounded-full -mr-8 -mt-8`} style={{ background: color }} />
       <div className="flex justify-between items-start z-10">
          <div className="p-2.5 rounded-lg" style={{ background: `${color}15`, color: color }}>
             <Icon size={20} />
          </div>
       </div>
       <div className="z-10">
          <div className="text-3xl font-bold mb-1" style={{ color: theme.text }}>{value}</div>
          <div className="text-xs font-semibold uppercase tracking-wider opacity-60" style={{ color: theme.textSecondary }}>{label}</div>
       </div>
     </div>
  );

  return (
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-full">
            <div className="flex items-center gap-2 text-xs font-medium mb-6 opacity-60" style={{ color: theme.textSecondary }}>
                <span>{tWorkspace.title}</span>
                <ChevronRight size={12} />
                <span style={{ color: theme.text }}>{t.menu.workflows}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 shrink-0">
               <StatCard label={t.stats.totalFlows} value="24" icon={GitBranch} color={theme.node.blue} />
               <StatCard label={t.stats.activeNodes} value="86" icon={Activity} color={theme.node.green} />
               <StatCard label={t.stats.uptime} value="99.9%" icon={Clock} color={theme.node.purple} />
            </div>

            <div className="flex items-center justify-between mb-8 shrink-0">
               <h1 className="text-2xl font-bold tracking-tight" style={{ color: theme.text }}>{t.headers.myWorkflows}</h1>
               
               <div className="flex items-center gap-4">
                  <div className="w-64 hidden sm:block">
                     <Input 
                        theme={theme} 
                        placeholder={tSidebar.search} 
                        icon={Search} 
                     />
                  </div>
                  <Button 
                    theme={theme}
                    onClick={() => onNavigateToEditor('new')}
                    icon={Plus}
                    variant="primary"
                  >
                     {t.headers.createNew}
                  </Button>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
               {currentWorkflows.map((flow) => (
                  <div 
                     key={flow.id}
                     onClick={() => onNavigateToEditor(flow.id)}
                     className="group relative rounded-2xl border overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                     style={{ background: theme.surface, borderColor: theme.stroke }}
                  >
                     <div className="h-36 w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500 to-purple-500`} />
                        <div className="absolute top-4 left-4 w-12 h-8 rounded border-2 border-blue-500/30 bg-blue-500/10 backdrop-blur-sm" />
                        <div className="absolute bottom-6 right-12 w-10 h-10 rounded-full border-2 border-purple-500/30 bg-purple-500/10 backdrop-blur-sm" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-400/20" />
                        
                        <div className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/40 text-white shadow-sm border border-white/10">
                           {flow.status}
                        </div>
                     </div>

                     <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="font-bold text-base truncate pr-2 group-hover:text-blue-500 transition-colors" style={{ color: theme.text }}>
                              {flow.name}
                           </h3>
                           <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                              <MoreVertical size={16} />
                           </button>
                        </div>
                        <p className="text-xs mb-4 line-clamp-2 min-h-[2.5em] leading-relaxed" style={{ color: theme.textSecondary }}>
                           {flow.description}
                        </p>

                        <div className="flex items-center justify-between text-xs font-medium pt-4 border-t" style={{ borderColor: theme.stroke, color: theme.textSecondary }}>
                           <div className="flex items-center gap-1.5">
                              <Activity size={14} className="text-blue-500" />
                              <span>{flow.nodesCount} {t.card.nodes}</span>
                           </div>
                           <div className="opacity-70">{flow.updatedAt}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-auto border-t pt-6 pb-2 flex items-center justify-between" style={{ borderColor: theme.stroke }}>
                <div className="text-xs font-medium opacity-60" style={{ color: theme.textSecondary }}>
                   {t.pagination.showing} <span style={{ color: theme.text }}>{startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, GENERATED_WORKFLOWS.length)}</span> {t.pagination.of} <span style={{ color: theme.text }}>{GENERATED_WORKFLOWS.length}</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        style={{ borderColor: theme.stroke, color: theme.text }}
                    >
                        <ChevronLeft size={16} />
                    </button>
                    
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                                    currentPage === i + 1 
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                                style={{ color: currentPage === i + 1 ? '#fff' : theme.text }}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        style={{ borderColor: theme.stroke, color: theme.text }}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
  );
};
