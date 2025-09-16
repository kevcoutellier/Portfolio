'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    content: 'kev.coutellier@gmail.com',
    href: 'mailto:kev.coutellier@gmail.com',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Github,
    title: 'GitHub',
    content: '@kevcoutellier',
    href: 'https://github.com/kevcoutellier',
    color: 'from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: 'Kevin Coutellier',
    href: 'https://www.linkedin.com/in/kevin-coutellier-1b900b7b/',
    color: 'from-blue-600 to-blue-800'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '07 88 44 02 32',
    href: 'tel:+33788440232',
    color: 'from-green-600 to-emerald-600'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Ici on pourrait intégrer un service d'email comme EmailJS
    console.log('Contact form submitted:', formData);
    alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
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
                Restons en
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une idée de projet ? Une question ? N&apos;hésitez pas à me contacter, 
              je serai ravi d&apos;échanger avec vous sur vos besoins en développement et IA.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Parlons de votre projet
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Que ce soit pour un site vitrine, une application web complexe, ou un projet d&apos;IA innovant, 
                  je suis là pour vous accompagner de l&apos;idée à la réalisation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-muted-foreground">Disponible pour nouveaux projets</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-muted-foreground">Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-muted-foreground">Consultation gratuite</span>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="block"
                  >
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm">{method.title}</h4>
                            <p className="text-sm text-muted-foreground truncate">{method.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 border border-blue-200/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Localisation</h4>
                    <p className="text-sm text-muted-foreground">Antibes, France • Remote friendly</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Basé à Antibes, je travaille avec des clients du monde entier. 
                  Disponible pour des missions en remote ou sur site selon vos besoins.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Envoyez-moi un message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium">
                          Nom *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Sujet
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 min-h-[120px] resize-none"
                        placeholder="Décrivez votre projet ou posez votre question..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </div>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-muted">
                    <p className="text-xs text-muted-foreground text-center">
                      En envoyant ce message, vous acceptez d&apos;être recontacté dans le cadre de votre demande.
                      Vos données sont traitées conformément au RGPD.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-16 border-t border-muted"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Prêt à donner vie à votre projet ?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Chaque grand projet commence par une simple conversation. 
                Commençons la nôtre dès aujourd&apos;hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#quote');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Obtenir un devis gratuit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('mailto:kev.coutellier@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email direct
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}