"use client";

import { GraduationCap, Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";

export function AboutSection() {
    const { t, lang } = useLang();

    const cards = [
        {
            icon: GraduationCap,
            title: lang === "pt" ? "Formação" : "Degree",
            body: (
                <>
                    <span className="text-csoft">
                        {lang === "pt"
                            ? "Bacharelado em Sistemas de Informação"
                            : "Bachelor's in Information Systems"}
                    </span>
                    <br />
                    <span className="text-sm">
                        {lang === "pt"
                            ? "Universidade Estadual do Sudoeste da Bahia (UESB) · 2013 – 2017"
                            : "State University of Southwest Bahia (UESB) · 2013 – 2017"}
                    </span>
                </>
            ),
        },
        {
            icon: Briefcase,
            title: lang === "pt" ? "Experiência" : "Experience",
            body: (
                <>
                    <span className="text-csoft">
                        {lang === "pt" ? "Mais de 4 anos" : "Over 4 years"}
                    </span>{" "}
                    {lang === "pt"
                        ? "construindo sistemas web, APIs de alta performance e arquiteturas distribuídas em produção."
                        : "building web systems, high-performance APIs and distributed architectures in production."}
                </>
            ),
        },
        {
            icon: Code,
            title: lang === "pt" ? "Especialização" : "Specialization",
            body:
                lang === "pt"
                    ? "Node.js, TypeScript, React/Next.js, microsserviços, mensageria assíncrona, Docker/Kubernetes e cloud AWS."
                    : "Node.js, TypeScript, React/Next.js, microservices, async messaging, Docker/Kubernetes and AWS cloud.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-cbg-alt">
            <div className="w-full px-5 sm:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1700px] mx-auto"
                >
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-6xl mb-3">
                            <span className="text-cprimary font-mono text-xl">01.</span>{" "}
                            <span className="text-cheading">{t.about.title}</span>
                        </h2>
                        <div className="h-[2px] w-32 bg-cprimary" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl text-csoft mb-4 font-mono">
                                {"// "}{t.about.whoTitle}
                            </h3>
                            <div className="space-y-4 text-cmuted leading-relaxed">
                                <p>{t.about.whoBody}</p>
                                <p>{t.about.journeyBody1}</p>
                                <p>{t.about.journeyBody2}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            {cards.map((card) => (
                                <div
                                    key={card.title}
                                    className="p-6 bg-cbg border border-cborder rounded hover:border-cprimary transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-cborder rounded">
                                            <card.icon className="text-cprimary" size={24} />
                                        </div>
                                        <h4 className="text-xl text-cheading font-mono">
                                            {card.title}
                                        </h4>
                                    </div>
                                    <p className="text-cmuted leading-relaxed">{card.body}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
