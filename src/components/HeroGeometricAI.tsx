"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu, ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { TypingAnimation } from "@/components/TypingAnimation";

function AIShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-blue-500/[0.15]",
  icon: IconComponent,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  icon?: React.ElementType;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
        scale: 1,
      }}
      transition={{
        duration: 2.4,
        delay,
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-blue-500/[0.2] dark:border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(59,130,246,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"
          )}
        />
        {/* AI Icon dans la forme */}
        {IconComponent && (
          <div className="absolute inset-0 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-blue-400/60" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function HeroGeometricAI() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:bg-gradient-to-br dark:from-[#030303] dark:via-[#030303] dark:to-[#0a0a0a] pt-16">
            {/* Gradient overlay adaptatif */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] dark:from-blue-500/[0.05] dark:via-transparent dark:to-purple-500/[0.05] blur-3xl" />

            {/* Formes IA flottantes */}
            <div className="absolute inset-0 overflow-hidden">
                <AIShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-blue-500/[0.15]"
                    icon={Brain}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <AIShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-purple-500/[0.15]"
                    icon={Cpu}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <AIShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    icon={Sparkles}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <AIShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-cyan-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <AIShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-pink-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge AI */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Sparkles className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                            Développeur Full-Stack & Scrum Master
                        </span>
                    </motion.div>

                    {/* Titre principal */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                                Créateur de
                            </span>
                            <br />
                            <TypingAnimation
                                text="Solutions Innovantes"
                                startDelay={1500}
                                speed={65}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                            />
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.9 }}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            Je transforme vos idées en applications web performantes, optimise vos processus agiles 
                            et développe des solutions durables pour votre entreprise.
                        </p>
                    </motion.div>

                    {/* Boutons d'action */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <EnhancedButton
                            variant="primary"
                            size="lg"
                            onClick={() => scrollToSection('#projects')}
                            glowEffect={true}
                            icon={<ArrowRight className="w-4 h-4" />}
                            iconPosition="right"
                            className="min-w-[200px]"
                        >
                            Voir mes projets
                        </EnhancedButton>

                        <EnhancedButton
                            variant="outline"
                            size="lg"
                            onClick={() => scrollToSection('#quote')}
                            icon={<Download className="w-4 h-4" />}
                            iconPosition="left"
                            className="min-w-[200px]"
                        >
                            Demander un devis
                        </EnhancedButton>
                    </motion.div>
                </div>
            </div>

            {/* Gradient overlay de fin */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometricAI }