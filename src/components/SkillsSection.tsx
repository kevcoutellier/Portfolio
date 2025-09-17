'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-blue-600 to-cyan-600',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Vue.js', level: 80 }
    ]
  },
  {
    category: 'Backend & Enterprise',
    color: 'from-green-600 to-emerald-600',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'Google Web Toolkit', level: 85 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Azure Cloud Services', level: 88 }
    ]
  },
  {
    category: 'Technologies Modernes',
    color: 'from-purple-600 to-pink-600',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'Socket.io', level: 87 },
      { name: 'Ruby on Rails', level: 85 },
      { name: 'Blockchain', level: 80 }
    ]
  },
  {
    category: 'Green IT & Management',
    color: 'from-emerald-600 to-teal-600',
    skills: [
      { name: 'Carbon Analytics', level: 92 },
      { name: 'Sustainability Metrics', level: 88 },
      { name: 'Scrum Master', level: 95 },
      { name: 'SAFe Framework', level: 90 },
      { name: 'Team Leadership', level: 95 },
      { name: 'Data Processing Pipeline', level: 87 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    color: 'from-orange-600 to-red-600',
    skills: [
      { name: 'Azure Cloud', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 88 },
      { name: 'API REST', level: 92 },
      { name: 'CI/CD', level: 78 }
    ]
  }
];

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'Java', 
  'Azure Cloud', 'Scrum', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 
  'SAFe', 'Tailwind CSS', 'Framer Motion', 'Ruby on Rails', 'Carbon Analytics', 
  'Express.js', 'Vue.js', 'Git', 'Linux', 'Nginx'
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
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
                Mes
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une expertise technique solide couvrant toute la chaîne de développement, 
              du management agile aux solutions durables et performantes.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-6 border shadow-lg"
              >
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies maîtrisées
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 200 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200/50 dark:border-blue-800/50 hover:shadow-md transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mon Parcours professionnel
              </span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30" />
              
              <div className="space-y-12">
                {[
                  {
                    year: '2024 à maintenant',
                    title: 'Scrum Master & Développeur - Amadeus',
                    description: 'Leadership d\'équipes agiles et développement de solutions Carbon Analytics avec pipelines Azure.'
                  },
                  {
                    year: '2023-2024',
                    title: 'Développeur Java Enterprise - NETISYS',
                    description: 'Développement d\'applications enterprise Java avec Google Web Toolkit et architecture orientée objet.'
                  },
                  {
                    year: '2015-2019',
                    title: 'Management International',
                    description: 'Expérience multiculturelle en Australie, Suisse et Thaïlande. Transition vers le développement logiciel.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-gradient-to-br from-background to-muted/50 rounded-lg p-6 border shadow-lg">
                        <div className={`text-sm font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                          {item.year}
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-background shadow-lg z-10" />
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}