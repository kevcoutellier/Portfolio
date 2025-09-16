'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
  animate?: boolean;
}

const variants = {
  default: 'from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-700 dark:text-blue-300',
  success: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-700 dark:text-green-300',
  warning: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-700 dark:text-yellow-300',
  error: 'from-red-500/20 to-pink-500/20 border-red-500/30 text-red-700 dark:text-red-300',
  info: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-700 dark:text-cyan-300',
};

export function GlowBadge({ 
  children, 
  variant = 'default', 
  className,
  animate = true 
}: GlowBadgeProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      {...(animate && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
      })}
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        'bg-gradient-to-r backdrop-blur-sm border',
        'shadow-sm hover:shadow-md transition-all duration-200',
        'relative overflow-hidden',
        variants[variant],
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
    </Component>
  );
}