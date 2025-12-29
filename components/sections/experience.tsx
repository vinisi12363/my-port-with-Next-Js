"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";
import { experiences } from "@/data/experience";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    variants={fadeInUp}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Experiência Profissional</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Minha trajetória como desenvolvedor fullstack
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    className="relative space-y-8"
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                    {experiences.map((exp, index) => (
                        <motion.div key={exp.id} variants={staggerItem}>
                            <Card className="glass card-hover relative md:ml-20">
                                {/* Timeline dot */}
                                <div className="absolute -left-12 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:flex items-center justify-center">
                                    <Briefcase className="w-4 h-4 text-white" />
                                </div>

                                <CardBody className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {exp.position}
                                            </h3>
                                            <p className="text-lg text-primary font-semibold">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{exp.period}</span>
                                            {exp.current && (
                                                <Chip size="sm" color="success" variant="flat">
                                                    Atual
                                                </Chip>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-sm text-foreground mb-2">
                                                Principais Conquistas:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Chip key={tech} size="sm" variant="flat" color="secondary">
                                                {tech}
                                            </Chip>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
