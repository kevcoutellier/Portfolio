'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  children: React.ReactNode;
  hover?: boolean;
  glowEffect?: boolean;
  borderGradient?: boolean;
}

export function EnhancedCard({ 
  children, 
  className, 
  hover = true, 
  glowEffect = false,
  borderGradient = false,
  ...props 
}: EnhancedCardProps) {
  return (
    <motion.div
      whileHover={hover ? { 
        scale: 1.02, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative group",
        "bg-gradient-to-br from-background to-muted/50",
        "border border-border/50",
        "rounded-xl overflow-hidden",
        "backdrop-blur-sm",
        hover && "hover:border-primary/20 transition-colors duration-300",
        borderGradient && "before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-br before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20 before:rounded-xl before:-z-10",
        glowEffect && "after:absolute after:inset-0 after:bg-gradient-to-br after:from-blue-500/10 after:via-purple-500/10 after:to-pink-500/10 after:rounded-xl after:blur-xl after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-300 after:-z-20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function EnhancedCardHeader({ 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("p-6 pb-0", className)} 
      {...props}
    >
      {children}
    </div>
  );
}

export function EnhancedCardContent({ 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("p-6", className)} 
      {...props}
    >
      {children}
    </div>
  );
}

export function EnhancedCardTitle({ 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={cn("font-semibold leading-none tracking-tight", className)} 
      {...props}
    >
      {children}
    </h3>
  );
}

export function EnhancedCardDescription({ 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn("text-sm text-muted-foreground", className)} 
      {...props}
    >
      {children}
    </p>
  );
}