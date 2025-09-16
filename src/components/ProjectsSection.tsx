'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Zap, Brain, Eye, BarChart3, MessageSquare, Search, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projectCategories = ['Tous', 'Green IT', 'Intelligence Artificielle', 'Enterprise Software', 'Management Tools', 'Data Science'];

const projects = [
  {
    id: 1,
    title: 'Carbon Footprint Calculator - Amadeus',
    category: 'Green IT',
    description: 'Service de calcul d\'empreinte carbone pour ressources cloud développé chez Amadeus. Pipeline de données Azure analysant l\'impact environnemental des infrastructures IT.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'Azure Cloud Services', 'Carbon Analytics', 'API REST', 'Data Pipeline'],
    demo: '#',
    code: 'https://github.com/kevcoutellier',
    featured: true,
    icon: BarChart3,
    stats: { reduction: '-45%', metrics: '500K+' }
  },
  {
    id: 2,
    title: 'Green IT Monitoring Dashboard',
    category: 'Sustainability',
    description: 'Dashboard temps réel pour le monitoring de l\'impact environnemental des infrastructures IT. Visualisation des métriques de durabilité et recommandations d\'optimisation.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'TypeScript', 'D3.js', 'Azure', 'Carbon Data'],
    demo: '#',
    code: 'https://github.com/kevcoutellier',
    featured: true,
    icon: Zap,
    stats: { efficiency: '+60%', savings: '€180K' }
  },
  {
    id: 3,
    title: 'Détection d\'Anomalies IoT',
    category: 'Data Science',
    description: 'Système de monitoring industriel utilisant machine learning pour la détection précoce d\'anomalies et maintenance prédictive.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'Scikit-learn', 'InfluxDB', 'Grafana', 'Docker'],
    demo: '#',
    code: '#',
    featured: false,
    icon: Zap,
    stats: { downtime: '-60%', savings: '€180K' }
  },
  {
    id: 4,
    title: 'Scrum AI Assistant - Amadeus',
    category: 'Management Tools',
    description: 'Assistant IA pour équipes agiles développé pour optimiser les processus Scrum. Analyse des métriques d\'équipe et recommandations intelligentes en environnement SAFe.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'OpenAI', 'Scrum Metrics', 'FastAPI', 'Team Analytics'],
    demo: '#',
    code: 'https://github.com/kevcoutellier',
    featured: false,
    icon: Users,
    stats: { productivity: '+35%', satisfaction: '92%' }
  },
  {
    id: 5,
    title: 'Vision par Ordinateur',
    category: 'Intelligence Artificielle',
    description: 'Application de reconnaissance d\'objets en temps réel pour la logistique avec tracking et comptage automatique.',
    image: '/api/placeholder/600/400',
    tags: ['PyTorch', 'OpenCV', 'Flask', 'WebRTC', 'AWS'],
    demo: '#',
    code: '#',
    featured: false,
    icon: Eye,
    stats: { precision: '96%', speed: '30 FPS' }
  },
  {
    id: 6,
    title: 'Enterprise Java Platform - NETISYS',
    category: 'Enterprise Software',
    description: 'Plateforme Java enterprise développée chez NETISYS avec Google Web Toolkit. Application métier robuste avec intégration PostgreSQL et architecture orientée objet.',
    image: '/api/placeholder/600/400',
    tags: ['Java', 'Google Web Toolkit', 'PostgreSQL', 'Enterprise Architecture', 'OOP'],
    demo: '#',
    code: 'https://github.com/kevcoutellier',
    featured: false,
    icon: Code,
    stats: { performance: '+40%', reliability: '99.9%' }
  }
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                Mes
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez mes réalisations concrètes en développement web, solutions enterprise 
              et leadership d'équipes agiles pour créer des solutions innovantes à forte valeur ajoutée.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projets phares
              </span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/50">
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 h-48">
                      {/* Project Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Stats */}
                      <div className="absolute top-4 right-4 space-y-2">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <Badge key={key} variant="secondary" className="bg-white/90 dark:bg-black/90">
                            {value}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center"
                      >
                        <div className="flex space-x-4">
                          <Button size="sm" variant="secondary">
                            <Play className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Voir le projet
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {projectCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                  : ""
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/50 h-full">
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 h-40">
                      <div className="absolute top-3 left-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 flex items-center justify-center"
                      >
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary" className="h-8 px-3 text-xs">
                            <Play className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                          <Button size="sm" variant="secondary" className="h-8 px-3 text-xs">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <Badge variant="outline" className="mb-2 text-xs">
                          {project.category}
                        </Badge>
                        <h3 className="font-semibold mb-2 text-sm leading-tight">{project.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {project.description.slice(0, 100)}...
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs py-0 px-2">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs py-0 px-2">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <Button size="sm" variant="outline" className="w-full h-8 text-xs">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Voir le projet
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-blue-200/20">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Prêt à créer votre projet IA ?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discutons de votre vision et transformons-la en solution intelligente qui révolutionnera votre business.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => {
                  const element = document.querySelector('#quote');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Brain className="w-4 h-4 mr-2" />
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}