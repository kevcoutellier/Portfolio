'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Zap, Brain, Sparkles } from 'lucide-react';

const floatingElements = [
  { icon: Code, x: '10%', y: '20%', delay: 0 },
  { icon: Database, x: '85%', y: '15%', delay: 1 },
  { icon: Cpu, x: '15%', y: '70%', delay: 2 },
  { icon: Zap, x: '80%', y: '75%', delay: 3 },
  { icon: Brain, x: '90%', y: '45%', delay: 4 },
  { icon: Sparkles, x: '5%', y: '45%', delay: 5 },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        
        return (
          <motion.div
            key={index}
            className="absolute w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center"
            style={{
              left: element.x,
              top: element.y,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <IconComponent className="w-6 h-6 text-blue-500/60" />
          </motion.div>
        );
      })}
    </div>
  );
}