import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ThemeColors } from '../../types/index';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  theme: ThemeColors;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading,
  theme,
  children,
  className = '',
  style,
  disabled,
  ...props
}) => {
  const baseStyles = "rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2 aspect-square",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: theme.primary,
          color: '#fff',
          boxShadow: `0 4px 12px -2px ${theme.primary}40`,
        };
      case 'secondary':
        return {
          background: `${theme.primary}15`,
          color: theme.primary,
        };
      case 'danger':
        return {
          background: theme.node.red,
          color: '#fff',
          boxShadow: `0 4px 12px -2px ${theme.node.red}40`,
        };
      case 'outline':
        return {
          background: 'transparent',
          border: `1px solid ${theme.stroke}`,
          color: theme.text,
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: theme.text,
        };
      default:
        return {};
    }
  };

  const variantStyle = getVariantStyles();

  // Hover effects handled via className for simple background opacity, 
  // but complex theme-based hovers might need mouse events or CSS vars.
  // Using simplified tailwind classes for hover based on variant.
  const hoverClasses = variant === 'ghost' || variant === 'outline' 
    ? 'hover:bg-black/5 dark:hover:bg-white/5' 
    : 'hover:opacity-90';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${hoverClasses} ${className}`}
      style={{ ...variantStyle, ...style }}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
      {!isLoading && Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 18} strokeWidth={2.5} />}
      {children}
      {!isLoading && Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : 18} strokeWidth={2.5} />}
    </button>
  );
};