'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Brain, Search, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const projectCategories = ['Tous', 'Applications Web', 'Intelligence Artificielle', 'Finance & Trading'];

const projects = [
  {
    id: 1,
    title: 'Trading Chart Analyzer',
    category: 'Finance & Trading',
    description: 'Analyseur de graphiques de trading avancé avec intelligence artificielle pour l\'analyse technique et la prédiction des tendances de marché.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'AI/ML', 'Trading', 'Chart Analysis', 'Technical Analysis'],
    demo: 'https://github.com/kevcoutellier/Trading-chart-analyzer',
    code: 'https://github.com/kevcoutellier/Trading-chart-analyzer',
    featured: true,
    icon: Search,
    stats: { ai: 'AI Analysis', markets: 'Multi-Market' }
  },
  {
    id: 2,
    title: 'Parcoursup V2',
    category: 'Applications Web',
    description: 'Application moderne de gestion Parcoursup développée en TypeScript avec une interface utilisateur avancée.',
    image: '/api/placeholder/600/400',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://github.com/kevcoutellier/Parcoursup-V2',
    code: 'https://github.com/kevcoutellier/Parcoursup-V2',
    featured: true,
    icon: Code,
    stats: { components: '15+', features: 'Advanced UI' }
  },
  {
    id: 3,
    title: 'Real Estate MCP',
    category: 'Intelligence Artificielle',
    description: 'Serveur MCP pour l\'analyse immobilière française avec Claude Desktop. Traitement intelligent des données immobilières.',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'MCP', 'Claude Desktop', 'Real Estate Analysis'],
    demo: 'https://github.com/kevcoutellier/real-estate-mcp',
    code: 'https://github.com/kevcoutellier/real-estate-mcp',
    featured: false,
    icon: Brain,
    stats: { ai: 'Claude Integration', data: 'French Market' }
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
              et leadership d&apos;équipes agiles pour créer des solutions innovantes à forte valeur ajoutée.
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
                      {/* Background Pattern */}
                      <div className="absolute inset-0">
                        {project.id === 1 && (
                          // Trading Chart Pattern
                          <svg className="w-full h-full opacity-10" viewBox="0 0 400 200">
                            <path d="M0,150 Q100,100 200,120 T400,80" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M0,180 Q150,130 300,140 T400,100" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            <circle cx="100" cy="110" r="3" fill="currentColor" />
                            <circle cx="200" cy="120" r="3" fill="currentColor" />
                            <circle cx="300" cy="90" r="3" fill="currentColor" />
                          </svg>
                        )}
                        {project.id === 2 && (
                          // Code/UI Pattern
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-16 h-2 bg-current rounded"></div>
                            <div className="absolute top-8 left-4 w-12 h-2 bg-current rounded"></div>
                            <div className="absolute top-12 left-8 w-20 h-2 bg-current rounded"></div>
                            <div className="absolute top-16 left-8 w-8 h-2 bg-current rounded"></div>
                            <div className="absolute bottom-8 right-4 w-6 h-6 border-2 border-current rounded"></div>
                            <div className="absolute bottom-16 right-12 w-4 h-4 border-2 border-current rounded"></div>
                          </div>
                        )}
                        {project.id === 3 && (
                          // AI/Data Pattern
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-8 h-8 border-2 border-current rounded-full"></div>
                              <div className="absolute top-2 left-12 w-6 h-6 border-2 border-current rounded-full"></div>
                              <div className="absolute -top-4 left-6 w-4 h-4 border-2 border-current rounded-full"></div>
                              <div className="absolute top-6 -left-8 w-5 h-5 border-2 border-current rounded-full"></div>
                              <div className="absolute -top-2 -left-4 w-0.5 h-6 bg-current"></div>
                              <div className="absolute top-4 left-2 w-6 h-0.5 bg-current"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
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
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <div className="text-center">
                          <div className="mb-4">
                            <project.icon className="w-12 h-12 text-white mx-auto mb-2" />
                            <p className="text-white text-sm font-medium">{project.title}</p>
                          </div>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            asChild
                            className="bg-white/90 hover:bg-white text-gray-900"
                          >
                            <a href={project.code} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Voir le code
                            </a>
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
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Voir le code
                          </a>
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
                          <Button size="sm" variant="secondary" className="h-8 px-3 text-xs" asChild>
                            <a href={project.code} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
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
                      
                      <Button size="sm" variant="outline" className="w-full h-8 text-xs" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          Voir le code
                        </a>
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