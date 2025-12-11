import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ThemeColors } from '../../types/index';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  theme: ThemeColors;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  theme,
  fullWidth = false,
  className = '',
  style,
  ...props
}) => {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      {Icon && (
        <Icon 
          className="absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200" 
          size={16} 
          style={{ color: theme.textSecondary, opacity: 0.5 }}
        />
      )}
      <input
        className={`rounded-xl border outline-none text-sm font-medium transition-all focus:ring-2 focus:ring-blue-500/20 placeholder:opacity-40 ${fullWidth ? 'w-full' : ''}`}
        style={{ 
          background: theme.surface, 
          borderColor: theme.stroke, 
          color: theme.text,
          paddingLeft: Icon ? '2.25rem' : '1rem',
          paddingRight: '1rem',
          paddingTop: '0.625rem',
          paddingBottom: '0.625rem',
          ...style
        }}
        {...props}
      />
    </div>
  );
};