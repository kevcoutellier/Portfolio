'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { HeroGeometricAI } from '@/components/HeroGeometricAI';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { QuoteForm } from '@/components/QuoteForm';
import { ContactSection } from '@/components/ContactSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [heroVersion, setHeroVersion] = useState<'original' | 'geometric'>('geometric');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Version Toggle */}
      <div className="fixed top-20 right-4 z-40 flex flex-col gap-2 bg-background/80 backdrop-blur-sm p-3 rounded-lg border shadow-lg">
        <p className="text-xs font-medium text-muted-foreground">Hero Style:</p>
        <Button
          variant={heroVersion === 'original' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setHeroVersion('original')}
          className="text-xs"
        >
          Original
        </Button>
        <Button
          variant={heroVersion === 'geometric' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setHeroVersion('geometric')}
          className="text-xs"
        >
          Geometric
        </Button>
      </div>
      
      <main className="relative">
        {/* Conditional Hero Rendering */}
        {heroVersion === 'original' && <HeroSection />}
        {heroVersion === 'geometric' && <HeroGeometricAI />}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <QuoteForm />
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}