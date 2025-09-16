'use client';

import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function TestSimplePage() {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '2rem', padding: '20px' }}>
        Test Page - Si tu vois ça, le routing fonctionne !
      </h1>
      
      <div style={{ height: '100vh' }}>
        <HeroGeometric 
          badge="Test Portfolio"
          title1="Test Integration"
          title2="Hero Component"
        />
      </div>
    </div>
  );
}