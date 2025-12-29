"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@nextui-org/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    return (
        <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="relative min-h-[90vh] flex flex-col items-center justify-center gap-8 py-20"
        >
            {/* Background gradient is now handled by GradientBackground component */}

            {/* Main content */}
            <motion.div variants={fadeInUp} className="text-center space-y-6 max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-display font-bold">
                    <span className="gradient-text">Marcos Vinícius</span>
                </h1>

                <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                    Desenvolvedor Fullstack
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    5+ anos de experiência criando aplicações web modernas e escaláveis com{" "}
                    <span className="text-primary font-semibold">React</span>,{" "}
                    <span className="text-secondary font-semibold">Next.js</span>,{" "}
                    <span className="text-accent font-semibold">Node.js</span> e{" "}
                    <span className="text-primary font-semibold">PHP/Laravel</span>
                </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8"
                    as="a"
                    href="#projects"
                >
                    Ver Projetos
                </Button>
                <Button
                    size="lg"
                    variant="bordered"
                    className="border-primary text-primary font-semibold px-8"
                    as="a"
                    href="#contact"
                >
                    Entre em Contato
                </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                variants={fadeInUp}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-muted-foreground"
                >
                    <span className="text-sm">Role para baixo</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
