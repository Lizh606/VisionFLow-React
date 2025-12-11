
import React, { useState } from 'react';
import { Navbar } from './layouts/Navbar';
import { DashboardLayout } from './layouts/DashboardLayout';
import { WorkflowList } from './pages/workflows/WorkflowList';
import { WorkflowEditor } from './pages/workflows/WorkflowEditor';
import { SelfHostedPage } from './pages/self-hosted/SelfHostedPage';
import { MediaPage } from './pages/media/MediaPage';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { theme, mode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  
  // High level routing state
  const [currentRoute, setCurrentRoute] = useState<string>('workflows-list');
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | null>(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | undefined>(undefined);

  const handleNavigate = (view: string, id?: string) => {
    setCurrentRoute(view);
    if (view === 'selfhosted-device-detail' && id) {
        setSelectedDeviceId(id);
    } else {
        setSelectedDeviceId(undefined);
    }
  };

  const handleNavigateToEditor = (id: string) => {
    setSelectedWorkflowId(id);
    setCurrentRoute('workflows-editor');
  };

  const handleBackToDashboard = () => {
    setSelectedWorkflowId(null);
    setCurrentRoute('workflows-list');
  };

  const isEditor = currentRoute === 'workflows-editor';

  return (
    <div 
      className="w-full h-screen flex flex-col overflow-hidden text-sm"
      style={{ background: theme.background, color: theme.text }}
    >
      <Navbar 
        theme={theme} 
        mode={mode} 
        language={language}
        viewMode={isEditor ? 'editor' : 'dashboard'}
        onBackToDashboard={handleBackToDashboard}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
      
      {isEditor ? (
        <WorkflowEditor 
          theme={theme}
          mode={mode}
          language={language}
        />
      ) : (
        <DashboardLayout 
           theme={theme} 
           mode={mode} 
           language={language}
           currentView={currentRoute}
           onNavigate={handleNavigate}
        >
            {currentRoute === 'workflows-list' && (
                <WorkflowList 
                    theme={theme} 
                    mode={mode} 
                    language={language} 
                    onNavigateToEditor={handleNavigateToEditor} 
                />
            )}
            
            {currentRoute === 'media' && (
                <MediaPage theme={theme} mode={mode} language={language} />
            )}

            {currentRoute.startsWith('selfhosted') && (
                <SelfHostedPage 
                    theme={theme} 
                    mode={mode} 
                    language={language} 
                    view={currentRoute}
                    onNavigate={handleNavigate}
                    selectedDeviceId={selectedDeviceId}
                />
            )}
        </DashboardLayout>
      )}
    </div>
  );
}

export default App;
