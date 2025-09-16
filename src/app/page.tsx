'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { HeroGeometricAI } from '@/components/HeroGeometricAI';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { QuoteForm } from '@/components/QuoteForm';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="relative">
        <HeroGeometricAI />
        
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