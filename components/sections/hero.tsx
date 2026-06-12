"use client";

import { motion } from "framer-motion";
import { ChevronDown, Database, Code2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const techs = [
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL",
];

export function HeroSection() {
    const { t, lang } = useLang();

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative bg-cbg pt-24">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="w-full px-5 sm:px-8 lg:px-16 py-20 relative z-10">
                <div className="max-w-[1700px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                                <Code2 className="text-cprimary" size={24} />
                            </motion.div>
                            <span className="font-mono text-sm text-cmuted">
                                {"// "}{t.hero.role}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl mb-6 leading-tight"
                    >
                        <span className="text-cmuted">
                            {lang === "pt" ? "Olá, eu sou" : "Hello, I'm"}
                        </span>
                        <br />
                        <span className="text-cheading font-semibold">Vinícius Vieira</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl text-cprimary mb-4 font-mono">
                            {t.hero.role}
                        </h2>
                        <p className="text-lg text-cmuted max-w-2xl leading-relaxed">
                            {t.hero.bio}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-cprimary text-cbg rounded font-mono hover:bg-cprimary2 transition-colors flex items-center gap-2"
                        >
                            <Database size={20} />
                            {t.hero.ctaProjects}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-cprimary text-cprimary rounded font-mono hover:bg-cprimary/10 transition-colors"
                        >
                            {t.hero.ctaContact}
                        </motion.a>
                    </motion.div>

                    {/* Tech Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-3 text-sm font-mono"
                    >
                        {techs.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="px-3 py-1 bg-cborder text-csoft rounded border border-cborder2 hover:border-cprimary transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cdim hover:text-cprimary transition-colors"
                aria-label={t.hero.scroll}
            >
                <ChevronDown size={32} />
            </motion.button>
        </section>
    );
}
