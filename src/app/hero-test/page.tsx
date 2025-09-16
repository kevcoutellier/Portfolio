'use client';

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroGeometricAI } from "@/components/HeroGeometricAI";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HeroTestPage() {
  const [currentHero, setCurrentHero] = useState<'original' | 'ai'>('ai');

  return (
    <div className="relative">
      {/* Navigation entre les versions */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full border">
        <Button
          variant={currentHero === 'original' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentHero('original')}
        >
          Original
        </Button>
        <Button
          variant={currentHero === 'ai' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setCurrentHero('ai')}
        >
          Version IA
        </Button>
      </div>

      {/* Affichage conditionnel des composants */}
      {currentHero === 'original' && (
        <HeroGeometric 
          badge="Portfolio IA"
          title1="Elevate Your"
          title2="Digital Vision"
        />
      )}
      
      {currentHero === 'ai' && (
        <HeroGeometricAI />
      )}
    </div>
  );
}