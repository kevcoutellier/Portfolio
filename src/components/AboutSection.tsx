'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Trophy } from 'lucide-react';
import { EnhancedCard, EnhancedCardContent } from '@/components/ui/enhanced-card';
import { GlowBadge } from '@/components/ui/glow-badge';

const features = [
  {
    icon: Code,
    title: 'Développement Full-Stack',
    description: 'Maîtrise complète des technologies web modernes, de React à Node.js en passant par Python et les bases de données.'
  },
  {
    icon: Zap,
    title: 'Green IT & Durabilité',
    description: 'Développement de solutions pour mesurer et réduire l\'impact environnemental des infrastructures IT avec Azure Cloud Services.'
  },
  {
    icon: Users,
    title: 'Méthodologie Agile',
    description: 'Approche collaborative et itérative, avec une communication transparente et des livrables réguliers.'
  },
  {
    icon: Trophy,
    title: 'Solutions Sur-Mesure',
    description: 'Chaque projet est unique. Je développe des solutions personnalisées adaptées à vos besoins spécifiques.'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                À propos de
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                mon approche
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Développeur passionné avec plus de 5 ans d&apos;expérience, je me spécialise dans la création 
              d&apos;applications performantes et durables qui transforment les défis business en opportunités.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ma philosophie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Je crois que la technologie doit servir l&apos;humain, pas l&apos;inverse. C&apos;est pourquoi 
                  je privilégie toujours l&apos;expérience utilisateur et l&apos;efficacité business dans mes développements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mon expérience en Scrum Master et développement Green IT me permet de créer des solutions 
                  agiles et durables, offrant une valeur ajoutée considérable à vos projets.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Processus de travail</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium">Analyse & Découverte</h4>
                      <p className="text-sm text-muted-foreground">Compréhension approfondie de vos besoins et objectifs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium">Conception & Prototypage</h4>
                      <p className="text-sm text-muted-foreground">Design des interfaces et architecture technique</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium">Développement Itératif</h4>
                      <p className="text-sm text-muted-foreground">Livraisons fréquentes avec retours continus</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium">Test & Optimisation</h4>
                      <p className="text-sm text-muted-foreground">Validation complète et optimisation des performances</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats & Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200/20">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-center mb-8">Mes domaines d&apos;expertise</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-lg">MGMT</span>
                      </div>
                      <p className="text-sm font-medium">Scrum Master</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-lg">WEB</span>
                      </div>
                      <p className="text-sm font-medium">Développement Web</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-lg">GREEN</span>
                      </div>
                      <p className="text-sm font-medium">Green IT</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-lg">API</span>
                      </div>
                      <p className="text-sm font-medium">APIs & Backend</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <EnhancedCard
                key={index}
                hover={true}
                glowEffect={true}
                borderGradient={true}
                className="shadow-lg"
              >
                <EnhancedCardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <GlowBadge variant="info" animate={true}>
                    Expertise avancée
                  </GlowBadge>
                </EnhancedCardContent>
              </EnhancedCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}