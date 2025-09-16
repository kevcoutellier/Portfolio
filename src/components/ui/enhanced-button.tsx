'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glowEffect?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent shadow-lg',
  secondary: 'bg-muted hover:bg-muted/80 text-muted-foreground border-border',
  outline: 'bg-transparent hover:bg-accent text-foreground border-border',
  ghost: 'bg-transparent hover:bg-accent text-foreground border-transparent',
};

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function EnhancedButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  glowEffect = false,
  className,
  children,
  disabled,
  ...props
}: EnhancedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      disabled={loading || disabled}
      className={cn(
        'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 border overflow-hidden group',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        variants[variant],
        sizes[size],
        glowEffect && variant === 'primary' && 'shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {/* Glow effect for primary variant */}
      {glowEffect && variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10" />
      )}
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 opacity-0 group-hover:animate-[shimmer_1s_ease-out] -z-10" />
      
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      <span className="relative z-10">{children}</span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  );
}