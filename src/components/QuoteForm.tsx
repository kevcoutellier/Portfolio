'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calculator, Download, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

  const calculatePriceWithTax = () => {
    const priceHT = calculatePrice();
    const tva = Math.round(priceHT * 0.20); // TVA 20%
    return {
      priceHT,
      tva,
      priceTTC: priceHT + tva
    };
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

  const generatePDF = async (saveToFile = true) => {
    const jsPDF = (await import('jspdf')).default;
    const pdf = new jsPDF();
    const priceWithTax = calculatePriceWithTax();
    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    
    let currentPage = 1;
    const pageHeight = 297; // A4 height in mm
    const marginTop = 30;
    const marginBottom = 25;
    const marginLeft = 20;
    const marginRight = 20;
    const contentHeight = pageHeight - marginTop - marginBottom;
    
    // Fonction pour ajouter en-tête et pied de page
    const addHeaderFooter = (pageNum: number) => {
      // En-tête
      pdf.setFillColor(240, 240, 240);
      pdf.rect(0, 0, 210, marginTop - 5, 'F');
      
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(50, 50, 50);
      pdf.text('DEVIS DÉTAILLÉ', marginLeft, 15);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      pdf.text(`N° ${Date.now().toString().slice(-6)}`, 210 - marginRight, 15, { align: 'right' });
      pdf.text(`Date: ${new Date().toLocaleDateString('fr-FR')}`, 210 - marginRight, 22, { align: 'right' });
      
      // Ligne de séparation
      pdf.setDrawColor(200, 200, 200);
      pdf.line(marginLeft, marginTop - 8, 210 - marginRight, marginTop - 8);
      
      // Pied de page
      pdf.setFillColor(50, 50, 50);
      pdf.rect(0, pageHeight - marginBottom + 5, 210, marginBottom - 5, 'F');
      
      pdf.setFontSize(9);
      pdf.setTextColor(255, 255, 255);
      pdf.text('Kevin COUTELLIER', marginLeft, pageHeight - 15);
      pdf.text('Développeur Full-Stack & Scrum Master', marginLeft, pageHeight - 10);
      pdf.text('kev.coutellier@gmail.com', marginLeft, pageHeight - 5);
      
      pdf.text('07 88 44 02 32', 210 - marginRight, pageHeight - 15, { align: 'right' });
      pdf.text('Antibes, France', 210 - marginRight, pageHeight - 10, { align: 'right' });
      pdf.text(`Page ${pageNum}`, 210 - marginRight, pageHeight - 5, { align: 'right' });
      
      // Reset text color
      pdf.setTextColor(0, 0, 0);
    };
    
    // Fonction pour vérifier et ajouter une nouvelle page si nécessaire
    const checkPageBreak = (yPos: number, requiredSpace: number) => {
      if (yPos + requiredSpace > contentHeight + marginTop) {
        pdf.addPage();
        currentPage++;
        addHeaderFooter(currentPage);
        return marginTop + 10;
      }
      return yPos;
    };
    
    // PAGE 1
    addHeaderFooter(currentPage);
    let yPos = marginTop + 15;
    
    // Section Client
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 100, 200);
    pdf.text('INFORMATIONS CLIENT', marginLeft, yPos);
    
    pdf.setDrawColor(0, 100, 200);
    pdf.line(marginLeft, yPos + 2, 100, yPos + 2);
    
    yPos += 10;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    pdf.text(`Nom: ${formData.contact.name}`, marginLeft + 5, yPos);
    yPos += 6;
    
    if (formData.contact.company) {
      pdf.text(`Entreprise: ${formData.contact.company}`, marginLeft + 5, yPos);
      yPos += 6;
    }
    
    pdf.text(`Email: ${formData.contact.email}`, marginLeft + 5, yPos);
    yPos += 15;
    
    // Section Projet
    yPos = checkPageBreak(yPos, 50);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 100, 200);
    pdf.text('DÉTAILS DU PROJET', marginLeft, yPos);
    
    pdf.setDrawColor(0, 100, 200);
    pdf.line(marginLeft, yPos + 2, 110, yPos + 2);
    
    yPos += 10;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    if (selectedProject) {
      pdf.text(`Type de projet: ${selectedProject.name}`, marginLeft + 5, yPos);
      yPos += 6;
      pdf.text(`Description: ${selectedProject.description}`, marginLeft + 5, yPos);
      yPos += 6;
      pdf.text(`Prix de base: ${selectedProject.basePrice}€ HT`, marginLeft + 5, yPos);
      yPos += 10;
    }
    
    // Fonctionnalités additionnelles
    if (formData.features.length > 0) {
      yPos = checkPageBreak(yPos, 30 + formData.features.length * 6);
      
      pdf.setFont('helvetica', 'bold');
      pdf.text('Fonctionnalités additionnelles:', marginLeft + 5, yPos);
      yPos += 8;
      
      pdf.setFont('helvetica', 'normal');
      formData.features.forEach(featureId => {
        const feature = features.find(f => f.id === featureId);
        if (feature) {
          pdf.text(`• ${feature.name}`, marginLeft + 10, yPos);
          pdf.text(`+${feature.price}€ HT`, 150, yPos);
          yPos += 6;
        }
      });
      yPos += 5;
    }
    
    // Délais et urgence
    yPos = checkPageBreak(yPos, 25);
    
    const urgency = urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers];
    if (urgency) {
      pdf.setFont('helvetica', 'bold');
      pdf.text('Délais souhaités:', marginLeft + 5, yPos);
      yPos += 6;
      
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${urgency.name}`, marginLeft + 10, yPos);
      
      if (urgency.multiplier !== 1) {
        const coefficient = urgency.multiplier > 1 ? 
          `+${Math.round((urgency.multiplier - 1) * 100)}%` : 
          `-${Math.round((1 - urgency.multiplier) * 100)}%`;
        pdf.text(`(${coefficient})`, 100, yPos);
      }
      yPos += 10;
    }
    
    // Budget et contraintes
    if (formData.budget || formData.timeline) {
      yPos = checkPageBreak(yPos, 30);
      
      if (formData.budget) {
        pdf.setFont('helvetica', 'bold');
        pdf.text('Budget indicatif:', marginLeft + 5, yPos);
        yPos += 6;
        pdf.setFont('helvetica', 'normal');
        pdf.text(formData.budget, marginLeft + 10, yPos);
        yPos += 8;
      }
      
      if (formData.timeline) {
        pdf.setFont('helvetica', 'bold');
        pdf.text('Contraintes particulières:', marginLeft + 5, yPos);
        yPos += 6;
        pdf.setFont('helvetica', 'normal');
        const lines = pdf.splitTextToSize(formData.timeline, 160);
        pdf.text(lines, marginLeft + 10, yPos);
        yPos += lines.length * 5 + 10;
      }
    }
    
    // Récapitulatif financier
    yPos = checkPageBreak(yPos, 80);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(200, 50, 50);
    pdf.text('RÉCAPITULATIF FINANCIER', marginLeft, yPos);
    
    pdf.setDrawColor(200, 50, 50);
    pdf.line(marginLeft, yPos + 2, 130, yPos + 2);
    
    yPos += 15;
    
    // Tableau récapitulatif
    pdf.setFillColor(250, 250, 250);
    pdf.rect(marginLeft, yPos - 5, 170, 40, 'F');
    pdf.setDrawColor(200, 200, 200);
    pdf.rect(marginLeft, yPos - 5, 170, 40);
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    pdf.text('DÉSIGNATION', marginLeft + 5, yPos + 5);
    pdf.text('MONTANT', 150, yPos + 5);
    
    pdf.line(marginLeft, yPos + 7, marginLeft + 170, yPos + 7);
    
    yPos += 12;
    pdf.text(`Total HT`, marginLeft + 5, yPos);
    pdf.text(`${priceWithTax.priceHT}€`, 150, yPos);
    
    yPos += 6;
    pdf.text(`TVA (20%)`, marginLeft + 5, yPos);
    pdf.text(`${priceWithTax.tva}€`, 150, yPos);
    
    yPos += 6;
    pdf.line(marginLeft + 120, yPos - 2, marginLeft + 170, yPos - 2);
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text(`TOTAL TTC`, marginLeft + 5, yPos + 3);
    pdf.text(`${priceWithTax.priceTTC}€`, 150, yPos + 3);
    
    // Message additionnel si présent
    if (formData.contact.message) {
      yPos += 20;
      yPos = checkPageBreak(yPos, 30);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 100, 200);
      pdf.text('MESSAGE CLIENT', marginLeft, yPos);
      
      yPos += 8;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
      const messageLines = pdf.splitTextToSize(formData.contact.message, 170);
      pdf.text(messageLines, marginLeft + 5, yPos);
    }
    
    // Retourner le PDF ou le télécharger
    if (saveToFile) {
      pdf.save(`devis-${formData.contact.name.replace(/\s+/g, '-')}-${Date.now()}.pdf`);
    } else {
      return {
        blob: pdf.output('blob'),
        filename: `devis-${formData.contact.name.replace(/\s+/g, '-')}-${Date.now()}.pdf`
      };
    }
  };

  // Test simple sans PDF
  const testSimpleEmail = async () => {
    try {
      console.log('🧪 Test simple EmailJS sans PDF...');
      
      const serviceID = 'service_wgy3ueg';
      const templateID = 'template_sgpdgu6';
      const publicKey = 'y0xJe_AwSWPlLDLgh';
      
      emailjs.init(publicKey);
      
      const simpleParams = {
        email: 'kev.coutellier@gmail.com',
        client_name: formData.contact.name,
        message: 'Test simple sans PDF'
      };
      
      console.log('📧 Test params:', simpleParams);
      
      const response = await emailjs.send(serviceID, templateID, simpleParams);
      console.log('✅ Test réussi:', response);
      return true;
    } catch (error) {
      console.error('❌ Test échoué:', error);
      return false;
    }
  };

  // Suppression de la fonction dupliquée - utilisation de celle plus bas

  const sendEmailWithPDF = async () => {
    try {
      console.log('📧 Envoi email devis complet...');
      
      const priceWithTax = calculatePriceWithTax();
      const selectedProject = projectTypes.find(p => p.id === formData.projectType);

      // Configuration EmailJS
      const serviceID = 'service_wgy3ueg';
      const templateID = 'template_sgpdgu6';
      const publicKey = 'y0xJe_AwSWPlLDLgh';

      // Initialiser EmailJS
      emailjs.init(publicKey);
      
      // Préparer les détails du devis pour l'email
      const selectedFeatures = formData.features.map(featureId => {
        const feature = features.find(f => f.id === featureId);
        return feature ? `${feature.name} (+${feature.price}€)` : '';
      }).filter(Boolean);

      const urgencyInfo = formData.urgency !== 'standard' ? 
        `Délais ${formData.urgency} (${urgencyMultipliers[formData.urgency as keyof typeof urgencyMultipliers].name})` : '';

      // Template parameters avec toutes les infos du devis
      const templateParams = {
        email: formData.contact.email,
        client_name: formData.contact.name,
        client_company: formData.contact.company || '',
        project_type: selectedProject?.name || '',
        project_description: selectedProject?.description || '',
        base_price: selectedProject?.basePrice || 0,
        features_list: selectedFeatures.join(', ') || 'Aucune fonctionnalité supplémentaire',
        urgency_info: urgencyInfo,
        price_ht: priceWithTax.priceHT,
        tva_amount: priceWithTax.tva,
        total_price: priceWithTax.priceTTC,
        client_message: formData.contact.message || 'Aucun message spécifique',
        timeline: formData.timeline,
        budget: formData.budget
      };

      console.log('📧 Envoi email avec devis complet:', {
        to: templateParams.email,
        client: templateParams.client_name,
        project: templateParams.project_type,
        total: templateParams.total_price
      });

      const response = await emailjs.send(serviceID, templateID, templateParams);
      console.log('✅ Email devis envoyé:', response);
      
      if (response.status === 200 || response.text === 'OK') {
        return true;
      } else {
        throw new Error(`EmailJS erreur: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ Erreur envoi email:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      console.log('Début de l\'envoi automatique...');
      
      // Envoyer l'email automatiquement avec PDF en pièce jointe
      await sendEmailWithPDF();
      
      const priceWithTax = calculatePriceWithTax();
      alert(`✅ Devis envoyé avec succès !\n\n📧 Email HTML détaillé envoyé à : ${formData.contact.email}\n📋 Toutes les informations du devis sont incluses dans l'email\n\nMontant: ${priceWithTax.priceTTC}€ TTC\n\nVous pouvez également télécharger le PDF depuis le bouton "PDF seul" si nécessaire.`);
      
    } catch (error) {
      console.error('❌ Erreur détaillée lors de l\'envoi:', error);
      
      // Afficher l'erreur détaillée sans ouvrir Outlook
      let errorMessage = 'Erreur lors de l\'envoi automatique du devis.\n\n';
      
      if (error instanceof Error) {
        errorMessage += `Détails: ${error.message}\n\n`;
      }
      
      errorMessage += 'Vérifiez :\n';
      errorMessage += '• Votre connexion internet\n';
      errorMessage += '• Les clés EmailJS dans la console développeur\n';
      errorMessage += '• La configuration du template EmailJS\n\n';
      errorMessage += 'Utilisez le bouton "PDF seul" pour télécharger le devis manuellement.';
      
      alert(errorMessage);
    }
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
                    className={`flex items-center space-x-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.projectType === project.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                        : 'border-muted hover:border-blue-500'
                    }`}
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
                        className={`flex items-center justify-between p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.urgency === key
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                            : 'border-muted hover:border-blue-500'
                        }`}
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
                  Devis détaillé
                </h4>
              </div>

              <div className="space-y-3 text-sm mb-4">
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

              {/* Pricing with Tax */}
              <div className="border-t border-blue-200/30 pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total HT</span>
                    <span className="font-medium">{calculatePriceWithTax().priceHT}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span className="font-medium">{calculatePriceWithTax().tva}€</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-blue-200/30 pt-2">
                    <span>Total TTC</span>
                    <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {calculatePriceWithTax().priceTTC}€
                    </span>
                  </div>
                </div>
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
              <div className="mt-8 pt-6 border-t">
                {/* Progress Dots - Centré */}
                <div className="flex justify-center space-x-2 mb-6">
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

                {/* Boutons de Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center w-full sm:w-auto"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Précédent
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && !formData.projectType) ||
                        (currentStep === 4 && (!formData.contact.name || !formData.contact.email))
                      }
                      className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                    >
                      Suivant
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Button 
                        variant="outline" 
                        className="flex items-center w-full sm:w-auto"
                        onClick={() => generatePDF(true)}
                        disabled={!formData.contact.name || !formData.contact.email}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">PDF seul</span>
                        <span className="sm:hidden">PDF</span>
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.contact.name || !formData.contact.email}
                        className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Envoyer Devis</span>
                        <span className="sm:hidden">Envoyer</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}