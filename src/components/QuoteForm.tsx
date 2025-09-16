'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Calculator, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ProjectType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: string;
}

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  projectType: string;
  features: string[];
  budget: string;
  timeline: string;
  urgency: string;
  contact: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
}

const projectTypes: ProjectType[] = [
  {
    id: 'vitrine',
    name: 'Site vitrine',
    description: 'Site web élégant pour présenter votre entreprise',
    basePrice: 1200,
    icon: '🌐'
  },
  {
    id: 'webapp',
    name: 'Application web',
    description: 'Application web interactive avec fonctionnalités avancées',
    basePrice: 4500,
    icon: '💻'
  },
  {
    id: 'mobile',
    name: 'Application mobile',
    description: 'App mobile native ou hybride iOS/Android',
    basePrice: 7500,
    icon: '📱'
  },
  {
    id: 'ai',
    name: 'Projet IA',
    description: 'Solution d\'intelligence artificielle personnalisée',
    basePrice: 8000,
    icon: '🤖'
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Tableau de bord analytique et reporting',
    basePrice: 5000,
    icon: '📊'
  }
];

const features: Feature[] = [
  {
    id: 'auth',
    name: 'Authentification',
    description: 'Système de connexion utilisateur sécurisé',
    price: 800,
    category: 'Sécurité'
  },
  {
    id: 'payment',
    name: 'Paiement en ligne',
    description: 'Intégration Stripe/PayPal pour e-commerce',
    price: 1200,
    category: 'Commerce'
  },
  {
    id: 'ai-api',
    name: 'API IA',
    description: 'Intégration OpenAI, chatbots, ou ML personnalisé',
    price: 2000,
    category: 'Intelligence Artificielle'
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Suivi utilisateurs, métriques et reporting',
    price: 600,
    category: 'Analyse'
  },
  {
    id: 'multilang',
    name: 'Multilingue',
    description: 'Support de plusieurs langues',
    price: 900,
    category: 'Internationalisation'
  },
  {
    id: 'automation',
    name: 'Automatisation',
    description: 'Scripts et workflows automatisés',
    price: 1500,
    category: 'Productivité'
  },
  {
    id: 'cms',
    name: 'CMS Admin',
    description: 'Interface d\'administration pour gérer le contenu',
    price: 1000,
    category: 'Gestion'
  },
  {
    id: 'api',
    name: 'API REST',
    description: 'API backend avec documentation complète',
    price: 1300,
    category: 'Backend'
  }
];

const urgencyMultipliers = {
  'flexible': { name: 'Flexible (2-3 mois)', multiplier: 0.9 },
  'standard': { name: 'Standard (4-6 semaines)', multiplier: 1.0 },
  'urgent': { name: 'Urgent (2-3 semaines)', multiplier: 1.3 }
};

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    features: [],
    budget: '',
    timeline: '',
    urgency: 'standard',
    contact: {
      name: '',
      email: '',
      company: '',
      message: ''
    }
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const calculatePrice = () => {
    let basePrice = 0;
    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    if (selectedProject) {
      basePrice = selectedProject.basePrice;
    }

    const featuresPrice = formData.features.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    const urgencyMultiplier = urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers]?.multiplier || 1;

    return Math.round((basePrice + featuresPrice) * urgencyMultiplier);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleSubmit = () => {
    // Ici on pourrait envoyer les données à un API
    console.log('Quote submitted:', formData);
    alert(`Devis envoyé ! Prix estimé: ${calculatePrice()}€`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Type de projet</h3>
              <p className="text-muted-foreground">Quel type de projet souhaitez-vous réaliser ?</p>
            </div>

            <RadioGroup
              value={formData.projectType}
              onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
              className="space-y-4"
            >
              {projectTypes.map((project) => (
                <div key={project.id} className="relative">
                  <RadioGroupItem value={project.id} id={project.id} className="peer sr-only" />
                  <Label
                    htmlFor={project.id}
                    className="flex items-center space-x-4 p-4 border-2 border-muted rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-950/20 transition-all"
                  >
                    <div className="text-2xl">{project.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.description}</div>
                    </div>
                    <Badge variant="secondary">
                      À partir de {project.basePrice}€
                    </Badge>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Fonctionnalités</h3>
              <p className="text-muted-foreground">Quelles fonctionnalités souhaitez-vous intégrer ?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.id} className="relative">
                  <div
                    className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-all ${
                      formData.features.includes(feature.id) 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
                        : 'border-muted'
                    }`}
                    onClick={() => handleFeatureToggle(feature.id)}
                  >
                    <Checkbox
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-semibold text-sm">{feature.name}</div>
                        <Badge variant="outline" className="text-xs">
                          +{feature.price}€
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">{feature.description}</div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Budget & Délais</h3>
              <p className="text-muted-foreground">Précisez votre budget et vos contraintes de temps</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="budget" className="text-base font-medium mb-3 block">
                  Budget approximatif (optionnel)
                </Label>
                <Input
                  id="budget"
                  placeholder="ex: 5000€ - 10000€"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Délais souhaités</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                  className="space-y-3"
                >
                  {Object.entries(urgencyMultipliers).map(([key, { name, multiplier }]) => (
                    <div key={key} className="relative">
                      <RadioGroupItem value={key} id={key} className="peer sr-only" />
                      <Label
                        htmlFor={key}
                        className="flex items-center justify-between p-3 border-2 border-muted rounded-lg cursor-pointer hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-950/20 transition-all"
                      >
                        <span>{name}</span>
                        <Badge variant={multiplier > 1 ? "destructive" : multiplier < 1 ? "secondary" : "outline"}>
                          {multiplier > 1 ? `+${Math.round((multiplier - 1) * 100)}%` : 
                           multiplier < 1 ? `-${Math.round((1 - multiplier) * 100)}%` : 
                           'Prix standard'}
                        </Badge>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="timeline" className="text-base font-medium mb-3 block">
                  Contraintes particulières (optionnel)
                </Label>
                <Textarea
                  id="timeline"
                  placeholder="Date de lancement souhaitée, contraintes techniques spécifiques..."
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Récapitulatif & Contact</h3>
              <p className="text-muted-foreground">Vérifiez votre demande et laissez-nous vos coordonnées</p>
            </div>

            {/* Quote Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6 border border-blue-200/20 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Prix estimé
                </h4>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {calculatePrice()}€
                </div>
              </div>

              <div className="space-y-3 text-sm">
                {formData.projectType && (
                  <div className="flex justify-between">
                    <span>
                      {projectTypes.find(p => p.id === formData.projectType)?.name}
                    </span>
                    <span>{projectTypes.find(p => p.id === formData.projectType)?.basePrice}€</span>
                  </div>
                )}

                {formData.features.map(featureId => {
                  const feature = features.find(f => f.id === featureId);
                  return feature ? (
                    <div key={featureId} className="flex justify-between">
                      <span>+ {feature.name}</span>
                      <span>+{feature.price}€</span>
                    </div>
                  ) : null;
                })}

                {formData.urgency !== 'standard' && (
                  <div className="flex justify-between font-medium">
                    <span>Délais {formData.urgency}</span>
                    <span>
                      {urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers].multiplier > 1 ? '+' : ''}
                      {Math.round(((urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers].multiplier - 1) * 100))}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.contact.name}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, name: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    value={formData.contact.company}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contact: { ...prev.contact, company: e.target.value }
                    }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.contact.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contact: { ...prev.contact, email: e.target.value }
                  }))}
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet plus en détail..."
                  value={formData.contact.message}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    contact: { ...prev.contact, message: e.target.value }
                  }))}
                />
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="quote" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                Devis
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Interactif
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Obtenez un devis personnalisé en quelques clics. Prix calculé automatiquement selon vos besoins.
            </p>
          </motion.div>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/50">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-lg">
                  Étape {currentStep} sur {totalSteps}
                </CardTitle>
                <Badge variant="outline">
                  {Math.round(progress)}% terminé
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>

            <CardContent className="pb-8">
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Précédent
                </Button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i + 1 === currentStep
                          ? 'bg-blue-600'
                          : i + 1 < currentStep
                          ? 'bg-green-600'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.projectType) ||
                      (currentStep === 4 && (!formData.contact.name || !formData.contact.email))
                    }
                    className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.contact.name || !formData.contact.email}
                      className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}