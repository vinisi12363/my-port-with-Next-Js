"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLang } from "@/i18n/LanguageProvider";
import { tx } from "@/i18n/config";

interface TimelineItem {
    title: string;
    subtitle: string;
    period: string;
    bullets: string[];
    tags: string[];
    current?: boolean;
    isEducation?: boolean;
}

export function ExperienceSection() {
    const { t, lang } = useLang();

    const items: TimelineItem[] = [
        ...experiences.map((exp) => ({
            title: tx(exp.position, lang),
            subtitle: exp.company,
            period: exp.period.trim(),
            bullets: exp.achievements ? tx(exp.achievements, lang) : [],
            tags: exp.technologies,
            current: exp.current,
        })),
        {
            title:
                lang === "pt"
                    ? "Bacharelado em Sistemas de Informação"
                    : "Bachelor's in Information Systems",
            subtitle:
                lang === "pt"
                    ? "Universidade Estadual do Sudoeste da Bahia (UESB)"
                    : "State University of Southwest Bahia (UESB)",
            period: "2013 - 2017",
            bullets: [],
            tags: [],
            isEducation: true,
        },
    ];

    return (
        <section id="experience" className="py-20 bg-cbg">
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
                            <span className="text-cprimary font-mono text-xl">04.</span>{" "}
                            <span className="text-cheading">
                                {lang === "pt"
                                    ? "Experiência & Formação"
                                    : "Experience & Education"}
                            </span>
                        </h2>
                        <div className="h-[2px] w-32 bg-cprimary" />
                    </div>

                    <h3 className="text-2xl text-csoft mb-8 font-mono flex items-center gap-3">
                        <Briefcase className="text-cprimary" size={28} />
                        {"// "}{t.experience.title}
                    </h3>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-cborder" />

                        <div className="space-y-8">
                            {items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 md:pl-20"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-7px] md:left-[23px] top-2 w-[22px] h-[22px] bg-cbg rounded-full border-2 border-cprimary flex items-center justify-center">
                                        {item.isEducation ? (
                                            <GraduationCap className="text-cprimary" size={12} />
                                        ) : (
                                            <span className="w-2 h-2 bg-cprimary rounded-full" />
                                        )}
                                    </div>

                                    <div className="p-6 bg-cbg-alt border border-cborder rounded hover:border-cprimary transition-all group">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div>
                                                <h4 className="text-xl text-cheading group-hover:text-cprimary transition-colors font-mono">
                                                    {item.title}
                                                </h4>
                                                <p className="text-cmuted">{item.subtitle}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {item.current && (
                                                    <span className="text-xs text-cbg font-mono bg-cprimary px-2 py-1 rounded">
                                                        {t.experience.current}
                                                    </span>
                                                )}
                                                <span className="text-sm text-cdim font-mono bg-cborder px-3 py-1 rounded">
                                                    {item.period}
                                                </span>
                                            </div>
                                        </div>

                                        {item.bullets.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {item.bullets.map((bullet, i) => (
                                                    <li key={i} className="text-cmuted flex gap-2">
                                                        <span className="text-cprimary">▹</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {item.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-cborder text-csoft rounded text-xs font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
